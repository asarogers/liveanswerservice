import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { getStripe, getCryptoProvider } from '@/lib/stripe';
import { notifyOwner } from '@/lib/notify';
import type { D1Database } from '@/lib/rate-limit';
import type Stripe from 'stripe';

/**
 * POST /api/stripe/webhook — ported from archived/assurgit (identical
 * Workers stack). Verifies the signature, persists the raw event for
 * audit/replay, then applies the side-effect to D1 (reusing the DEMO_DB
 * binding — see migrations/0003_billing.sql). Idempotent: replaying the same
 * Stripe event_id is a no-op.
 *
 * Register this endpoint in the Stripe dashboard (Webhooks → Add endpoint)
 * pointed at https://liveanswerservice.com/api/stripe/webhook, subscribed to
 * checkout.session.completed, customer.subscription.*, invoice.*.
 */

function getDb(): D1Database | undefined {
  try {
    const { env } = getCloudflareContext();
    return (env as Record<string, unknown>).DEMO_DB as D1Database | undefined;
  } catch {
    return undefined;
  }
}

export async function POST(request: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const db = getDb();

  if (!secretKey || !webhookSecret || !db) {
    console.error('[stripe-webhook] missing STRIPE_SECRET_KEY / STRIPE_WEBHOOK_SECRET / DEMO_DB');
    return new NextResponse('Server misconfigured', { status: 500 });
  }

  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return new NextResponse('Missing stripe-signature', { status: 400 });
  }
  const rawBody = await request.text();

  const stripe = getStripe(secretKey);
  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(
      rawBody,
      signature,
      webhookSecret,
      undefined,
      getCryptoProvider(),
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : 'unknown';
    console.error('[stripe-webhook] signature verification failed:', message);
    return new NextResponse(`Invalid signature: ${message}`, { status: 400 });
  }

  // Idempotency: if we've seen this event_id before, ack and skip.
  const existing = await db
    .prepare('SELECT id, processed_at FROM billing_events WHERE stripe_event_id = ?')
    .bind(event.id)
    .first<{ id: number; processed_at: number | null }>();

  if (existing?.processed_at) {
    return NextResponse.json({ received: true, deduped: true });
  }

  if (!existing) {
    await db
      .prepare(
        'INSERT INTO billing_events (stripe_event_id, event_type, payload_json, received_at) VALUES (?, ?, ?, ?)',
      )
      .bind(event.id, event.type, JSON.stringify(event), Date.now())
      .run();
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(stripe, db, event.data.object as Stripe.Checkout.Session);
        break;
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        await upsertSubscription(stripe, db, event.data.object as Stripe.Subscription);
        break;
      case 'customer.subscription.deleted':
        await markSubscriptionCanceled(db, event.data.object as Stripe.Subscription);
        break;
      case 'invoice.paid':
        await notifyOwnerOfPayment(stripe, event.data.object as Stripe.Invoice);
        break;
      case 'invoice.payment_failed':
        // Subscription.updated (status → past_due) follows and reflects this.
        break;
      default:
        // Many event types arrive that we don't care about. Silently ack.
        break;
    }

    await db
      .prepare('UPDATE billing_events SET processed_at = ? WHERE stripe_event_id = ?')
      .bind(Date.now(), event.id)
      .run();
  } catch (err) {
    console.error(`[stripe-webhook] handler failed for ${event.type}:`, err);
    const message = err instanceof Error ? err.message : String(err);
    await db
      .prepare('UPDATE billing_events SET error = ? WHERE stripe_event_id = ?')
      .bind(message.slice(0, 500), event.id)
      .run();
    // Return 500 so Stripe retries — handler is idempotent.
    return new NextResponse(`Handler error: ${message}`, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

// ─── handlers ─────────────────────────────────────────────────────────

async function handleCheckoutCompleted(
  stripe: Stripe,
  db: D1Database,
  session: Stripe.Checkout.Session,
) {
  const stripeCustomerId =
    typeof session.customer === 'string' ? session.customer : session.customer?.id;
  if (!stripeCustomerId) return;

  await upsertCustomer(stripe, db, stripeCustomerId);

  // The subscription may not be attached on the session object yet for
  // newly-created subs; fetch it explicitly so we land its real status.
  if (typeof session.subscription === 'string') {
    const sub = await stripe.subscriptions.retrieve(session.subscription);
    await upsertSubscription(stripe, db, sub);
  } else if (session.subscription) {
    await upsertSubscription(stripe, db, session.subscription as Stripe.Subscription);
  }

  const amount = session.amount_total != null ? (session.amount_total / 100).toFixed(2) : 'unknown';
  await notifyOwner(
    `New LAS subscription — $${amount}`,
    `<p>Checkout completed.</p>
     <p><strong>Email:</strong> ${session.customer_details?.email ?? 'unknown'}</p>
     <p><strong>Amount:</strong> $${amount}</p>
     <p><strong>Billing period:</strong> ${session.metadata?.billing_period ?? 'unknown'}</p>`,
  );
}

async function notifyOwnerOfPayment(stripe: Stripe, invoice: Stripe.Invoice) {
  const amount = invoice.amount_paid != null ? (invoice.amount_paid / 100).toFixed(2) : 'unknown';
  await notifyOwner(
    `LAS payment received — $${amount}`,
    `<p>Invoice paid.</p>
     <p><strong>Customer:</strong> ${invoice.customer_email ?? invoice.customer ?? 'unknown'}</p>
     <p><strong>Amount:</strong> $${amount}</p>`,
  );
}

async function upsertCustomer(stripe: Stripe, db: D1Database, stripeCustomerId: string) {
  const cus = await stripe.customers.retrieve(stripeCustomerId);
  if (cus.deleted) return;

  const now = Date.now();
  await db
    .prepare(
      `INSERT INTO customers (stripe_customer_id, email, name, business_name, phone, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(stripe_customer_id) DO UPDATE SET
         email = excluded.email,
         name  = excluded.name,
         business_name = excluded.business_name,
         phone = excluded.phone,
         updated_at = excluded.updated_at`,
    )
    .bind(
      stripeCustomerId,
      cus.email ?? '',
      cus.name ?? null,
      (cus.metadata?.business_name as string | undefined) ?? null,
      cus.phone ?? null,
      now,
      now,
    )
    .run();
}

async function upsertSubscription(stripe: Stripe, db: D1Database, sub: Stripe.Subscription) {
  const stripeCustomerId = typeof sub.customer === 'string' ? sub.customer : sub.customer.id;
  await upsertCustomer(stripe, db, stripeCustomerId);

  const customer = await db
    .prepare('SELECT id FROM customers WHERE stripe_customer_id = ?')
    .bind(stripeCustomerId)
    .first<{ id: number }>();
  if (!customer) throw new Error('customer row not found after upsert — race?');

  const billingPeriod = (sub.metadata?.billing_period as 'monthly' | 'yearly' | undefined) ?? 'monthly';
  const depositPaid = await detectDepositPaid(stripe, sub);

  const now = Date.now();
  await db
    .prepare(
      `INSERT INTO subscriptions (
         customer_id, stripe_subscription_id, billing_period,
         status, cancel_at_period_end, current_period_start, current_period_end,
         trial_end, deposit_paid, created_at, updated_at
       )
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(stripe_subscription_id) DO UPDATE SET
         billing_period = excluded.billing_period,
         status = excluded.status,
         cancel_at_period_end = excluded.cancel_at_period_end,
         current_period_start = excluded.current_period_start,
         current_period_end = excluded.current_period_end,
         trial_end = excluded.trial_end,
         deposit_paid = excluded.deposit_paid,
         updated_at = excluded.updated_at`,
    )
    .bind(
      customer.id,
      sub.id,
      billingPeriod,
      sub.status,
      sub.cancel_at_period_end ? 1 : 0,
      sub.current_period_start ? sub.current_period_start * 1000 : null,
      sub.current_period_end ? sub.current_period_end * 1000 : null,
      sub.trial_end ? sub.trial_end * 1000 : null,
      depositPaid ? 1 : 0,
      now,
      now,
    )
    .run();
}

async function detectDepositPaid(stripe: Stripe, sub: Stripe.Subscription): Promise<boolean> {
  if (!sub.latest_invoice) return false;
  const invoiceId = typeof sub.latest_invoice === 'string' ? sub.latest_invoice : sub.latest_invoice.id;
  if (!invoiceId) return false;
  try {
    const invoice = await stripe.invoices.retrieve(invoiceId, { expand: ['lines.data.price'] });
    if (invoice.status !== 'paid') return false;
    return invoice.lines.data.some((line) => {
      const price = (line as unknown as { price?: { type?: string } }).price;
      const subItem = (line as unknown as { subscription_item?: string; subscription?: string });
      return price?.type === 'one_time' || (line.amount > 0 && !subItem.subscription_item && !subItem.subscription);
    });
  } catch {
    return false;
  }
}

async function markSubscriptionCanceled(db: D1Database, sub: Stripe.Subscription) {
  await db
    .prepare(
      'UPDATE subscriptions SET status = ?, cancel_at_period_end = 0, updated_at = ? WHERE stripe_subscription_id = ?',
    )
    .bind(sub.status, Date.now(), sub.id)
    .run();
}
