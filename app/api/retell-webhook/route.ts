import { NextRequest, NextResponse } from 'next/server';
import { verifyRetellSignature } from '@/lib/retell';
import { updateLeadAnalysis } from '@/lib/leads';

/**
 * POST /api/retell-webhook — receive Retell call events (DEMO-CALL-FLOW.md §3, §5.3).
 *
 * Subscribed events (set on the agent's webhook_events): call_started, call_ended,
 * call_analyzed. We verify the x-retell-signature, map the call back to our lead
 * via metadata.lead_id, store the post-call analysis, and ACK fast (204).
 *
 * Retell's webhook times out at 10s and retries up to 3x on non-2xx, so this
 * handler must be quick and idempotent — persistence is an upsert keyed on
 * lead_id / retell_call_id on the Hetzner side.
 *
 * Signature key: Retell signs with the API key that carries the "webhook" badge,
 * which may differ from the key used for outbound API calls. We use
 * RETELL_WEBHOOK_API_KEY when set, else fall back to RETELL_API_KEY.
 */

const DEV = process.env.NODE_ENV !== 'production';

interface RetellCall {
  call_id?: string;
  metadata?: { lead_id?: string; [k: string]: unknown };
  disconnection_reason?: string;
  duration_ms?: number;
  transcript?: string;
  recording_url?: string;
  call_cost?: { combined_cost?: number };
  call_analysis?: {
    call_summary?: string;
    user_sentiment?: string;
    in_voicemail?: boolean;
    custom_analysis_data?: Record<string, unknown>;
  };
}

function statusFromCall(event: string, call: RetellCall): string {
  if (event === 'call_started') return 'in_progress';
  const reason = call.disconnection_reason || '';
  if (['dial_no_answer', 'dial_busy', 'dial_failed', 'no_answer'].includes(reason)) return 'no_answer';
  if (reason === 'voicemail_reached') return 'voicemail';
  if (reason.startsWith('error')) return 'failed';
  return 'completed';
}

function str(v: unknown): string | undefined {
  return typeof v === 'string' ? v : undefined;
}
function bool(v: unknown): boolean | undefined {
  return typeof v === 'boolean' ? v : undefined;
}

export async function POST(request: NextRequest) {
  // Raw body is REQUIRED for signature verification — do not re-serialize.
  const rawBody = await request.text();
  const signature = request.headers.get('x-retell-signature');
  const signingKey = process.env.RETELL_WEBHOOK_API_KEY || process.env.RETELL_API_KEY;

  const valid = await verifyRetellSignature(rawBody, signature, signingKey);
  if (!valid) {
    console.error('[retell-webhook] invalid signature');
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let payload: { event?: string; call?: RetellCall };
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: 'Bad payload' }, { status: 400 });
  }

  const event = payload.event || '';
  const call = payload.call || {};
  const callId = call.call_id;
  const leadId = call.metadata?.lead_id;

  if (DEV) console.log('[retell-webhook]', event, callId, 'lead', leadId);

  if (!callId) {
    // Nothing actionable, but ACK so Retell stops retrying.
    return new NextResponse(null, { status: 204 });
  }

  const status = statusFromCall(event, call);
  const analysis = call.call_analysis;
  const custom = analysis?.custom_analysis_data || {};

  // Persist (best-effort, never throws). On call_analyzed we have the rich fields.
  await updateLeadAnalysis({
    leadId,
    retellCallId: callId,
    status,
    callerName: str(custom.caller_name),
    userReached: bool(custom.user_reached),
    wantsMeeting: bool(custom.wants_meeting),
    wantsToBuy: bool(custom.wants_to_buy),
    outcome: str(custom.outcome),
    sentiment: str(custom.sentiment) || str(analysis?.user_sentiment),
    summary: str(custom.detailed_call_summary) || str(analysis?.call_summary),
    transcript: call.transcript,
    recordingUrl: call.recording_url,
    durationS: typeof call.duration_ms === 'number' ? Math.round(call.duration_ms / 1000) : undefined,
    costUsd: typeof call.call_cost?.combined_cost === 'number' ? call.call_cost.combined_cost / 100 : undefined,
  });

  return new NextResponse(null, { status: 204 });
}
