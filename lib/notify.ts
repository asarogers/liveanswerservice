/**
 * Shared owner-notification helper (Resend). Centralizes the from/to defaults
 * and the "no key configured yet" no-op so every call site (contact form,
 * demo-call route, retell webhook, Stripe webhook) behaves identically.
 *
 * Never throws — a failed notification must not fail the request that
 * triggered it (form submit, webhook ack, etc).
 */

const DEV = process.env.NODE_ENV !== 'production';

export function ownerEmailFrom(): string {
  return process.env.RESEND_FROM_EMAIL || 'Live Answer <onboarding@resend.dev>';
}

export function ownerEmailTo(): string {
  return process.env.CONTACT_FORM_TO_EMAIL || 'jselah@gmail.com';
}

/** Send a plain owner-notification email. Returns false (and logs) on any failure. */
export async function notifyOwner(subject: string, html: string, replyTo?: string): Promise<boolean> {
  if (!process.env.RESEND_API_KEY) {
    if (DEV) console.log('[notify] RESEND_API_KEY not set — skipping owner email:', subject);
    return false;
  }
  try {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: ownerEmailFrom(),
      to: ownerEmailTo(),
      ...(replyTo ? { replyTo } : {}),
      subject,
      html,
    });
    if (error) {
      console.error('[notify] owner email failed:', error);
      return false;
    }
    if (DEV) console.log('[notify] owner email sent:', subject);
    return true;
  } catch (err) {
    console.error('[notify] owner email threw', err);
    return false;
  }
}
