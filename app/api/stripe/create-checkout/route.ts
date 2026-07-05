import { NextRequest, NextResponse } from 'next/server';
import { getStripe, resolvePriceIds, type BillingPeriod } from '@/lib/stripe';

/**
 * POST /api/stripe/create-checkout — hosted Checkout for the "Subscribe" /
 * "Start a Free Trial (card)" CTAs (CTA-IMPLEMENTATION-HANDOFF.md §4/§5).
 *
 * Body: { billing_period: 'monthly' | 'yearly', email?: string }
 *
 * LAS has one plan, so there's no tier selection (unlike the ported
 * archived/assurgit flow). The $199 one-time setup fee is charged alongside
 * the recurring price on the monthly flow and skipped on yearly (annual
 * prepay waives it — CTA-IMPLEMENTATION-HANDOFF.md §4). Every checkout gets
 * the 7-day free trial before the recurring price starts billing.
 */
export async function POST(request: NextRequest) {
  let body: { billing_period?: string; email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const billingPeriod = (body.billing_period ?? 'monthly') as BillingPeriod;
  if (!['monthly', 'yearly'].includes(billingPeriod)) {
    return NextResponse.json(
      { error: `Invalid billing_period: ${billingPeriod}` },
      { status: 400 },
    );
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://liveanswerservice.com';
  if (!secretKey) {
    return NextResponse.json(
      { error: 'Stripe is not configured (missing STRIPE_SECRET_KEY)' },
      { status: 500 },
    );
  }

  const stripe = getStripe(secretKey);
  const skipDeposit = billingPeriod === 'yearly';
  const prefilledEmail = body.email?.trim() || undefined;

  try {
    const { recurring, deposit } = await resolvePriceIds(stripe, billingPeriod);

    const lineItems: Array<{ price: string; quantity: number }> = [{ price: recurring, quantity: 1 }];
    if (deposit && !skipDeposit) lineItems.push({ price: deposit, quantity: 1 });

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: lineItems,
      ...(prefilledEmail ? { customer_email: prefilledEmail } : {}),
      billing_address_collection: 'required',
      phone_number_collection: { enabled: true },
      success_url: `${appUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/checkout/cancel`,
      metadata: { billing_period: billingPeriod, deposit_skipped: skipDeposit ? 'true' : 'false' },
      subscription_data: {
        trial_period_days: 7,
        metadata: { billing_period: billingPeriod, deposit_skipped: skipDeposit ? 'true' : 'false' },
      },
      allow_promotion_codes: true,
      consent_collection: { terms_of_service: 'required' },
      custom_text: {
        terms_of_service_acceptance: {
          message:
            'I agree to the [Live Answer Terms of Service](https://liveanswerservice.com/terms) and the [Privacy Policy](https://liveanswerservice.com/privacy), including the 7-day free trial before recurring billing begins' +
            (skipDeposit ? '.' : ', and the $199 one-time setup fee.'),
        },
      },
    });

    return NextResponse.json({ url: session.url, id: session.id });
  } catch (err) {
    console.error('[stripe] create-checkout failed:', err);
    const message = err instanceof Error ? err.message : 'Stripe error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
