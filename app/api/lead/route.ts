import { NextRequest, NextResponse } from 'next/server';
import { persistLead } from '@/lib/leads';
import { normalizeE164 } from '@/lib/phone';
import { notifyOwner } from '@/lib/notify';

/**
 * POST /api/lead — the transitional-CTA capture endpoint (StoryBrand Ch.8).
 *
 * Backs <LeadCaptureForm> and the gated-download flow: the lowest-commitment
 * way for a visitor to raise their hand. Persists to the always-on Hetzner
 * lead store (same as the demo-call path) and emails the owner so he can
 * follow up. Best-effort by design — a capture must never hard-fail on the
 * visitor; we return success once the lead is recorded even if email lags.
 *
 * Body (JSON): { name?, email?, phone?, message?, source? }
 * At least one of email or phone is required.
 */

const DEV = process.env.NODE_ENV !== 'production';

function clientIp(request: NextRequest): string | undefined {
  return (
    request.headers.get('CF-Connecting-IP') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    undefined
  );
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request.' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const rawPhone = typeof body.phone === 'string' ? body.phone : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const source = typeof body.source === 'string' && body.source ? body.source : 'lead_form';
  const visitorId = typeof body.visitorId === 'string' ? body.visitorId : undefined;
  const sessionId = typeof body.sessionId === 'string' ? body.sessionId : undefined;

  const phone = normalizeE164(rawPhone) || undefined;

  // Need at least one way to reach them.
  if (!email && !phone) {
    return NextResponse.json(
      { success: false, error: 'Please leave an email or phone number so we can reach you.' },
      { status: 400 },
    );
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { success: false, error: 'Please enter a valid email address.' },
      { status: 400 },
    );
  }

  const leadId = crypto.randomUUID();
  const ip = clientIp(request);

  // 1. Persist (best-effort — never throws).
  await persistLead({
    leadId,
    phoneE164: phone,
    source,
    status: 'submitted',
    ip,
    name: name || undefined,
    email: email || undefined,
    message: message || undefined,
    visitorId,
    sessionId,
  });

  // 2. Notify the owner (best-effort). Reply-to the submitter's email if given.
  const lines = [
    `<p>New lead via <strong>${source}</strong>.</p>`,
    name ? `<p><strong>Name:</strong> ${name}</p>` : '',
    email ? `<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>` : '',
    phone ? `<p><strong>Phone:</strong> ${phone}</p>` : '',
    message ? `<p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>` : '',
  ]
    .filter(Boolean)
    .join('\n');
  await notifyOwner(`New lead — ${name || email || phone}`, lines, email || undefined);

  if (DEV) console.log('[lead] captured', { source, hasEmail: !!email, hasPhone: !!phone });

  return NextResponse.json({
    success: true,
    message: "Got it — we'll be in touch shortly.",
  });
}
