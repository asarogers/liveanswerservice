import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';

/**
 * POST /api/stripe/portal — Stripe-hosted Customer Portal for the "Make a
 * Payment" / "manage billing" CTA (CTA-IMPLEMENTATION-HANDOFF.md §4). Ported
 * from archived/assurgit. No site-side login: identity is the customer's
 * email plus Stripe's own portal flow (magic link if Stripe needs to verify).
 *
 * Body: { email: string }
 */
export async function POST(request: NextRequest) {
  let body: { email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const email = (body.email ?? '').trim().toLowerCase();
  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://liveanswerservice.com';
  if (!secretKey) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
  }

  const stripe = getStripe(secretKey);
  try {
    const customers = await stripe.customers.list({ email, limit: 1 });
    if (customers.data.length === 0) {
      return NextResponse.json(
        { error: 'No subscription found for this email. Check your inbox for an account link from Stripe.' },
        { status: 404 },
      );
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: customers.data[0].id,
      return_url: `${appUrl}/`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('[stripe] portal session failed:', err);
    const message = err instanceof Error ? err.message : 'Stripe error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
