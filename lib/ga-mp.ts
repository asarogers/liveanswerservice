/**
 * GA4 Measurement Protocol — server-side demo-call funnel (TRACKING-PLAN.md §2c).
 *
 * Replays the demo_call_* funnel into GA4 from /api/retell-webhook, stitched to
 * the same web user via the client_id we captured at submit time (HeroCallForm →
 * /api/demo-call → D1 demo_call_attempts.client_id, read back by lead_id).
 *
 * No-ops unless GA_API_SECRET (Worker secret) AND a measurement id are set, so it
 * is safe to ship before the secret exists — the funnel simply activates once the
 * secret is added (GA4 Admin → Data Streams → the web stream → Measurement
 * Protocol API secrets → Create, then `wrangler secret put GA_API_SECRET`).
 */

const MP_ENDPOINT = 'https://www.google-analytics.com/mp/collect';

export interface GaEvent {
  name: string;
  params?: Record<string, unknown>;
}

/** Fire-and-await GA4 MP events. Never throws; silently no-ops when unconfigured. */
export async function sendGaEvents(clientId: string | undefined, events: GaEvent[]): Promise<void> {
  const apiSecret = process.env.GA_API_SECRET;
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!apiSecret || !measurementId || !clientId || events.length === 0) return;
  try {
    const url = `${MP_ENDPOINT}?measurement_id=${encodeURIComponent(measurementId)}&api_secret=${encodeURIComponent(apiSecret)}`;
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ client_id: clientId, non_personalized_ads: true, events }),
    });
  } catch (err) {
    console.error('[ga-mp] send failed', err);
  }
}

/**
 * Map a Retell webhook (event + our derived status + analysis) → GA4 funnel
 * events. Returns [] when there's nothing to emit. Event names match
 * TRACKING-PLAN.md §2c and the pipeline's CONVERSION_EVENTS.
 */
export function funnelEvents(
  event: string,
  status: string,
  leadId: string | undefined,
  analysis: { wantsMeeting?: boolean; wantsToBuy?: boolean; outcome?: string; durationS?: number },
): GaEvent[] {
  const base: Record<string, unknown> = { lead_id: leadId, event_category: 'conversion' };
  const out: GaEvent[] = [];
  if (event === 'call_started') {
    out.push({ name: 'demo_call_started', params: base });
  } else if (event === 'call_ended') {
    if (status === 'no_answer' || status === 'voicemail') {
      out.push({ name: 'demo_call_no_answer', params: { ...base, reason: status } });
    } else if (status !== 'failed') {
      // Any connected end (demo_completed, hung_up, or a qualification status).
      out.push({ name: 'demo_call_completed', params: { ...base, duration_s: analysis.durationS } });
    }
  } else if (event === 'call_analyzed') {
    if (analysis.wantsMeeting) out.push({ name: 'demo_call_qualified_meeting', params: base });
    if (analysis.wantsToBuy) out.push({ name: 'demo_call_qualified_purchase', params: base });
    if (analysis.outcome === 'not_interested') out.push({ name: 'demo_call_not_interested', params: base });
  }
  return out;
}
