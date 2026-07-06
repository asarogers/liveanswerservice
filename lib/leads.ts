/**
 * Lead persistence to the always-on Hetzner store (DEMO-CALL-FLOW.md §2, §6).
 *
 * The deployed Worker cannot reach the Mac's Postgres, so demo leads are written
 * to the Hetzner VPS (FastAPI, next to the existing /api/receipt). The Mac later
 * pulls them into the local `pipeline` DB on a cron.
 *
 * This module is BEST-EFFORT by design: a demo call must never be dropped because
 * the lead store is briefly unreachable, so every call swallows errors and logs.
 * Config comes from env: LEADS_INGEST_URL (base, e.g. https://audit.assurgit.com)
 * and LEADS_INGEST_TOKEN (bearer). If LEADS_INGEST_URL is unset, these no-op.
 */

/**
 * Where a lead originated. The voice-demo path uses 'homepage_outbound' /
 * 'inbound_call' (unchanged). The transitional-CTA surfaces (StoryBrand Ch.8)
 * add lower-commitment sources: a bare lead form, a gated PDF download, or the
 * chat widget. A free-form string is also accepted so per-page tags like
 * 'lead_form:spam_page' or 'download:missed-call-checklist' pass through.
 */
export type LeadSource =
  | 'homepage_outbound'
  | 'inbound_call'
  | 'lead_form'
  | 'download'
  | 'chat'
  | (string & {});

export interface LeadSubmission {
  leadId: string;
  /** E.164 phone. Required for the voice-demo path; optional for form/download
   *  leads where email is the primary identifier. */
  phoneE164?: string;
  source: LeadSource;
  ip?: string;
  status: string;
  retellCallId?: string;
  /** Optional contact fields captured by the non-voice forms. */
  name?: string;
  email?: string;
  message?: string;
  /** First-party journey keys (lib/session.ts) — join a lead to the exact
   *  visitor path that produced it. */
  visitorId?: string;
  sessionId?: string;
}

export interface LeadAnalysisUpdate {
  leadId?: string;
  retellCallId: string;
  status: string;
  callerName?: string;
  userReached?: boolean;
  wantsMeeting?: boolean;
  wantsToBuy?: boolean;
  outcome?: string;
  sentiment?: string;
  summary?: string;
  transcript?: string;
  recordingUrl?: string;
  durationS?: number;
  costUsd?: number;
}

function leadsConfig(): { base: string; token: string | undefined } | null {
  const base = process.env.LEADS_INGEST_URL;
  if (!base) return null;
  return { base: base.replace(/\/$/, ''), token: process.env.LEADS_INGEST_TOKEN };
}

async function postJson(path: string, payload: unknown): Promise<boolean> {
  const cfg = leadsConfig();
  if (!cfg) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('[leads] LEADS_INGEST_URL unset — skipping persist', JSON.stringify(payload));
    }
    return false;
  }
  try {
    const res = await fetch(`${cfg.base}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(cfg.token ? { Authorization: `Bearer ${cfg.token}` } : {}),
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error(`[leads] ${path} -> ${res.status} ${await res.text().catch(() => '')}`);
      return false;
    }
    return true;
  } catch (err) {
    console.error(`[leads] ${path} failed`, err);
    return false;
  }
}

/** Create / upsert the lead row at submission time. Never throws. */
export async function persistLead(sub: LeadSubmission): Promise<boolean> {
  return postJson('/api/leads', {
    id: sub.leadId,
    phone_e164: sub.phoneE164 ?? '',
    source: sub.source,
    status: sub.status,
    ip: sub.ip,
    retell_call_id: sub.retellCallId,
    name: sub.name,
    email: sub.email,
    message: sub.message,
    visitor_id: sub.visitorId,
    session_id: sub.sessionId,
  });
}

/** Patch the lead with post-call analysis (called from the webhook). Never throws. */
export async function updateLeadAnalysis(upd: LeadAnalysisUpdate): Promise<boolean> {
  return postJson('/api/leads/update', {
    id: upd.leadId,
    retell_call_id: upd.retellCallId,
    status: upd.status,
    caller_name: upd.callerName,
    user_reached: upd.userReached,
    wants_meeting: upd.wantsMeeting,
    wants_to_buy: upd.wantsToBuy,
    outcome: upd.outcome,
    sentiment: upd.sentiment,
    summary: upd.summary,
    transcript: upd.transcript,
    recording_url: upd.recordingUrl,
    duration_s: upd.durationS,
    cost_usd: upd.costUsd,
  });
}
