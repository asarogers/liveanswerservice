import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { normalizeE164 } from '@/lib/phone';
import { createPhoneCall } from '@/lib/retell';
import { persistLead } from '@/lib/leads';
import { verifyRecaptcha } from '@/lib/recaptcha';
import {
  checkRateLimit,
  recordAttempt,
  DEFAULT_RATE_LIMITS,
  type RateLimitConfig,
  type D1Database,
} from '@/lib/rate-limit';

/**
 * POST /api/demo-call — "type your number → get a call" (Phase 1, outbound AI).
 *
 * Flow (DEMO-CALL-FLOW.md §3.1, OPEN-ITEMS #6):
 *   1. validate + normalize to E.164
 *   2. rate-limit (per-number / per-IP / global) via D1  — cost/abuse guard
 *   3. persist the lead to the always-on Hetzner store    — best-effort
 *   4. fire Retell create-phone-call from +1 (669) 316-1742, metadata.lead_id
 *   5. notify the owner (Resend) so he can personally follow up to close
 *
 * Safety: the live calling path is gated by DEMO_CALL_LIVE. Until that is "true"
 * (and D1 + Retell secrets are provisioned) the endpoint captures the lead and
 * emails the owner WITHOUT placing a call — identical to the prior stub. If
 * DEMO_CALL_LIVE is on but the rate-limit store/secrets are missing, we fail
 * CLOSED (never place uncapped paid calls) and fall back to capture + notify.
 */

const DEV = process.env.NODE_ENV !== 'production';

function clientIp(request: NextRequest): string | null {
  return (
    request.headers.get('CF-Connecting-IP') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    null
  );
}

function getDemoDb(): D1Database | undefined {
  try {
    const { env } = getCloudflareContext();
    return (env as Record<string, unknown>).DEMO_DB as D1Database | undefined;
  } catch {
    return undefined;
  }
}

function limitsFromEnv(): RateLimitConfig {
  const num = (v: string | undefined, d: number) => {
    const n = Number(v);
    return Number.isFinite(n) && n > 0 ? n : d;
  };
  return {
    perNumberPer24h: num(process.env.DEMO_CALL_NUMBER_LIMIT, DEFAULT_RATE_LIMITS.perNumberPer24h),
    perIpPer24h: num(process.env.DEMO_CALL_IP_LIMIT, DEFAULT_RATE_LIMITS.perIpPer24h),
    globalPer24h: num(process.env.DEMO_CALL_GLOBAL_DAILY_CAP, DEFAULT_RATE_LIMITS.globalPer24h),
  };
}

/** Best-effort owner notification (kept from the original stub). Never throws. */
async function notifyOwner(phone: string, note: string): Promise<void> {
  if (!process.env.RESEND_API_KEY) return;
  try {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    const from = process.env.RESEND_FROM_EMAIL || 'Live Answer <onboarding@resend.dev>';
    const to = process.env.CONTACT_FORM_TO_EMAIL || 'jselah@gmail.com';
    await resend.emails.send({
      from,
      to,
      subject: `Demo call requested — ${phone}`,
      html: `<p>Someone requested a live AI demo call.</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p>${note}</p>`,
    });
  } catch (err) {
    console.error('[demo-call] resend failed', err);
  }
}

async function readBody(
  request: NextRequest,
): Promise<{ phone?: string; recaptchaToken?: string; isJson: boolean }> {
  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
    return {
      phone: typeof body.phone === 'string' ? body.phone : undefined,
      recaptchaToken: typeof body.recaptchaToken === 'string' ? body.recaptchaToken : undefined,
      isJson: true,
    };
  }
  const form = await request.formData();
  const value = form.get('phone');
  return { phone: typeof value === 'string' ? value : undefined, isJson: false };
}

export async function POST(request: NextRequest) {
  const { phone: rawPhone, recaptchaToken, isJson } = await readBody(request);
  const phone = normalizeE164(rawPhone);
  // US-only by design: this is a CA SMB demo, and restricting to +1 closes the
  // IRSF abuse vector (paid calls to non-US premium numbers) at the app layer —
  // defense in depth alongside the number's allowed_outbound_country_list=["US"].
  // (retell-docs/pages/reliability/prevent-abuse.md, .../fraud-protection.md)
  if (!phone || !/^\+1\d{10}$/.test(phone)) {
    return NextResponse.json(
      { success: false, error: 'Please enter a valid US phone number.' },
      { status: 400 },
    );
  }

  const ip = clientIp(request);

  // Bot guard for the hero form (JSON submissions). Native form posts skip this
  // and rely on the rate-limit + US-only guards. No-op until RECAPTCHA_SECRET_KEY
  // is set (verifyRecaptcha returns ok when unconfigured).
  if (isJson) {
    const rc = await verifyRecaptcha(recaptchaToken, ip);
    if (!rc.ok) {
      if (DEV) console.log('[demo-call] recaptcha rejected', rc.reason, rc.score);
      return NextResponse.json(
        { success: false, error: "Couldn't verify you're human — please try again." },
        { status: 400 },
      );
    }
  }

  const leadId = crypto.randomUUID();
  const live = (process.env.DEMO_CALL_LIVE || '').toLowerCase() === 'true';

  // ── Not live yet: capture intent only (prior stub behavior) ───────────────
  if (!live) {
    if (DEV) console.log('[demo-call] capture-only (DEMO_CALL_LIVE off) for', phone);
    await persistLead({ leadId, phoneE164: phone, source: 'homepage_outbound', ip: ip ?? undefined, status: 'submitted' });
    await notifyOwner(phone, 'Outbound AI calling is not live yet — follow up manually.');
    return NextResponse.json({
      success: true,
      message: "Got it — we've received your number and will be in touch shortly.",
    });
  }

  // ── Live path: requires the D1 cost guard. Fail closed if absent. ─────────
  const db = getDemoDb();
  const apiKey = process.env.RETELL_API_KEY;
  const fromNumber = process.env.RETELL_FROM_NUMBER;
  const agentId = process.env.RETELL_OUTBOUND_AGENT_ID;

  if (!db || !apiKey || !fromNumber) {
    console.error(
      '[demo-call] DEMO_CALL_LIVE=true but missing prerequisites — refusing to place a call.',
      { hasDb: !!db, hasApiKey: !!apiKey, hasFrom: !!fromNumber },
    );
    await persistLead({ leadId, phoneE164: phone, source: 'homepage_outbound', ip: ip ?? undefined, status: 'submitted' });
    await notifyOwner(phone, 'Live calling misconfigured (missing DB/secret) — follow up manually.');
    return NextResponse.json({
      success: true,
      message: "Got it — we've received your number and will be in touch shortly.",
    });
  }

  // Rate limit / abuse guard.
  const rl = await checkRateLimit(db, phone, ip, limitsFromEnv());
  if (!rl.allowed) {
    const message =
      rl.reason === 'number'
        ? "You've already requested a few demo calls for this number today. Call our demo line any time, or we'll follow up."
        : "We've hit today's demo-call limit. Call our demo line any time, or leave your number and we'll follow up.";
    if (DEV) console.log('[demo-call] rate-limited', { phone, ip, reason: rl.reason });
    return NextResponse.json({ success: false, error: message }, { status: 429 });
  }

  // Persist the lead, then place the call.
  await persistLead({ leadId, phoneE164: phone, source: 'homepage_outbound', ip: ip ?? undefined, status: 'submitted' });

  try {
    const call = await createPhoneCall({
      apiKey,
      fromNumber,
      toNumber: phone,
      overrideAgentId: agentId,
      metadata: { lead_id: leadId, source: 'homepage_outbound' },
    });
    await recordAttempt(db, { id: leadId, phoneE164: phone, ip, callId: call.call_id });
    await persistLead({
      leadId,
      phoneE164: phone,
      source: 'homepage_outbound',
      ip: ip ?? undefined,
      status: 'calling',
      retellCallId: call.call_id,
    });
    await notifyOwner(phone, `AI demo call placed (call_id ${call.call_id}). Follow up to close.`);
    return NextResponse.json({
      success: true,
      message: 'Got it. Our AI agent is calling you now.',
    });
  } catch (err) {
    console.error('[demo-call] create-phone-call failed', err);
    await persistLead({ leadId, phoneE164: phone, source: 'homepage_outbound', ip: ip ?? undefined, status: 'failed' });
    await notifyOwner(phone, 'AI demo call FAILED to place — follow up manually.');
    return NextResponse.json({
      success: true,
      message: "Got it — we've received your number and will be in touch shortly.",
    });
  }
}
