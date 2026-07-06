import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/session — sink for the first-party visitor-journey beacon
 * (lib/session.ts, sent via navigator.sendBeacon on page hide).
 *
 * Forwards the compact journey (visitor_id, session_id, pages, per-section
 * dwell ms, max scroll %, ordered events, reached_book / reached_conversion)
 * to the always-on Hetzner store so it's queryable in our Postgres and joins
 * to leads by visitor_id. Best-effort and fire-and-forget: a beacon must never
 * error the page it's leaving. No-op if LEADS_INGEST_URL is unset (mirrors
 * lib/leads.ts) — the journey is still captured in GA4 + Clarity regardless.
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
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const base = process.env.LEADS_INGEST_URL;
  if (!base) {
    if (DEV) console.log('[session] LEADS_INGEST_URL unset — journey not persisted:', JSON.stringify(body).slice(0, 200));
    return NextResponse.json({ ok: true, persisted: false });
  }

  const payload = { ...body, ip: clientIp(request), received_at: Date.now() };
  try {
    const token = process.env.LEADS_INGEST_TOKEN;
    const res = await fetch(`${base.replace(/\/$/, '')}/api/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok && DEV) console.warn('[session] Hetzner /api/sessions ->', res.status);
  } catch (err) {
    if (DEV) console.warn('[session] forward failed', err);
  }
  // Always ack — the beacon doesn't read the response anyway.
  return NextResponse.json({ ok: true });
}
