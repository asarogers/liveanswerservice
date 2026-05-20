import { NextRequest, NextResponse } from 'next/server';

/**
 * STUB. Accepts a phone number from the homepage live-demo bar and
 * (eventually) triggers an outbound call from our AI receptionist.
 *
 * TODO wire up:
 *   - Retell AI outbound call trigger (or Bland AI / Vapi as fallback)
 *   - Rate-limit by phone number: max 3 demo calls / 24h
 *   - CCPA-compliant consent line on the call open
 *   - Stripe payment link SMS on the post-call follow-up
 */
export async function POST(request: NextRequest) {
  let phone: string | undefined;

  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    const body = await request.json().catch(() => ({}));
    phone = body.phone;
  } else {
    const form = await request.formData();
    const value = form.get('phone');
    phone = typeof value === 'string' ? value : undefined;
  }

  if (!phone || phone.replace(/\D/g, '').length < 10) {
    return NextResponse.json(
      { success: false, error: 'Please enter a valid phone number.' },
      { status: 400 }
    );
  }

  // Until the Retell/Twilio integration is live, just log + email Justine
  // so we capture demo intent without dropping leads.
  console.log('[demo-call] requested for', phone);

  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);
      const from = process.env.RESEND_FROM_EMAIL || 'Live Answer <onboarding@resend.dev>';
      const to = process.env.CONTACT_FORM_TO_EMAIL || 'jselah@gmail.com';
      await resend.emails.send({
        from,
        to,
        subject: `Demo call requested — ${phone}`,
        html: `<p>Someone requested a live AI demo call.</p><p><strong>Phone:</strong> ${phone}</p><p>Trigger the call manually until the outbound automation is wired up.</p>`,
      });
    } catch (err) {
      console.error('[demo-call] resend failed', err);
    }
  }

  return NextResponse.json({
    success: true,
    message: "Got it. Our AI agent will call you in the next minute.",
  });
}
