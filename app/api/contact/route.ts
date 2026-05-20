import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not set — skipping email');
      return NextResponse.json({ success: true });
    }

    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    const from = process.env.RESEND_FROM_EMAIL || 'Live Answer <onboarding@resend.dev>';
    const to = process.env.CONTACT_FORM_TO_EMAIL || 'jselah@gmail.com';
    const firstName = name.split(' ')[0];

    // ── 1. Notification to Justine (critical) ──────────────────
    const { error: notifyError } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New message from ${name} — Live Answer`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
          <h2 style="color: #2C2C2C;">New Contact Form Submission</h2>
          <table style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:8px 0; color:#5A5A5A; width:80px;"><strong>Name</strong></td><td style="padding:8px 0;">${name}</td></tr>
            <tr><td style="padding:8px 0; color:#5A5A5A;"><strong>Email</strong></td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0; color:#5A5A5A;"><strong>Phone</strong></td><td style="padding:8px 0;">${phone || 'Not provided'}</td></tr>
          </table>
          <div style="margin-top:16px; padding:16px; background:#FAF9F5; border-left:4px solid #1A1A17; border-radius:4px;">
            <p style="margin:0; color:#2C2C2C; white-space:pre-wrap;">${message}</p>
          </div>
          <p style="color:#888; font-size:12px; margin-top:24px;">Reply to this email to respond directly to ${firstName}.</p>
        </div>
      `,
    });

    if (notifyError) {
      console.error('Notification email failed:', notifyError);
      return NextResponse.json({ success: false, error: notifyError.message }, { status: 500 });
    }

    console.log('Notification sent to', to);

    // ── 2. Confirmation to submitter (best-effort) ──────────────
    // NOTE: Requires liveanswerservice.com to be verified in Resend dashboard.
    // Until then this will fail silently — the form still succeeds.
    const { error: confirmError } = await resend.emails.send({
      from,
      to: email,
      subject: `Got it, ${firstName} — we'll be in touch soon`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #2C2C2C;">
          <div style="background: #1A1A17; padding: 28px 40px;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-family: Georgia, serif;">Live Answer</h1>
          </div>
          <div style="padding: 40px; background: #FAF9F5;">
            <h2 style="font-size: 20px; margin-top: 0; font-family: Georgia, serif;">Hi ${firstName}, we received your message!</h2>
            <p style="font-size: 16px; line-height: 1.7; color: #5A5A5A; font-family: sans-serif;">
              Thanks for reaching out. We'll get back to you within 24 hours.
            </p>
            <p style="font-size: 16px; line-height: 1.7; color: #5A5A5A; font-family: sans-serif;">
              If you'd like to skip the wait and book a time directly:
            </p>
            <div style="text-align: center; margin: 32px 0;">
              <a href="https://liveanswerservice.com/book"
                 style="background: #C4622D; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-size: 16px; font-weight: bold; font-family: sans-serif; display: inline-block;">
                Book Your Free 30-min Setup Consult
              </a>
            </div>
            <p style="font-size: 14px; color: #5A5A5A; font-family: sans-serif;">
              Or call us at <a href="tel:+16693656533" style="color: #1A1A17;">(669) 365-6533</a>.
            </p>
            <hr style="border: none; border-top: 1px solid #E0D8CF; margin: 32px 0;" />
            <p style="font-size: 13px; color: #888; margin: 0; font-family: sans-serif;">
              — Asa Rogers<br />
              Live Answer · Bay Area, CA<br />
              <a href="https://liveanswerservice.com" style="color: #1A1A17;">liveanswerservice.com</a>
            </p>
          </div>
        </div>
      `,
    });

    if (confirmError) {
      // Non-critical — log but don't fail the request
      console.warn('Confirmation email failed (domain likely not yet verified):', confirmError.message);
    } else {
      console.log('Confirmation sent to', email);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ success: false, error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
