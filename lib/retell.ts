/**
 * Minimal Retell AI client for the Cloudflare Worker runtime.
 *
 * We deliberately avoid the official `retell-sdk` package: it targets Node and
 * pulls in crypto/stream shims that are awkward on Workers. Both calls we need
 * (create an outbound phone call, verify a webhook signature) are a single
 * fetch / a Web Crypto HMAC, so we implement them directly.
 *
 * Docs (local mirror):
 *   create-phone-call → retell-docs/pages/api-references/create-phone-call.md
 *   webhook signature → retell-docs/pages/features/secure-webhook.md
 */

const RETELL_BASE = 'https://api.retellai.com';

export interface CreatePhoneCallInput {
  apiKey: string;
  fromNumber: string;
  toNumber: string;
  overrideAgentId?: string;
  metadata?: Record<string, unknown>;
  dynamicVariables?: Record<string, string>;
}

export interface CreatePhoneCallResult {
  call_id: string;
  agent_id?: string;
  call_status?: string;
  [k: string]: unknown;
}

/**
 * POST /v2/create-phone-call. Throws on non-2xx with the Retell error message.
 */
export async function createPhoneCall(input: CreatePhoneCallInput): Promise<CreatePhoneCallResult> {
  const body: Record<string, unknown> = {
    from_number: input.fromNumber,
    to_number: input.toNumber,
  };
  if (input.overrideAgentId) body.override_agent_id = input.overrideAgentId;
  if (input.metadata) body.metadata = input.metadata;
  if (input.dynamicVariables) body.retell_llm_dynamic_variables = input.dynamicVariables;

  const res = await fetch(`${RETELL_BASE}/v2/create-phone-call`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${input.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  if (!res.ok) {
    let message = text;
    try {
      message = (JSON.parse(text) as { message?: string }).message || text;
    } catch {
      /* keep raw text */
    }
    throw new Error(`Retell create-phone-call ${res.status}: ${message}`);
  }

  return JSON.parse(text) as CreatePhoneCallResult;
}

/**
 * Verify the `x-retell-signature` header using HMAC-SHA256, per
 * retell-docs/pages/features/secure-webhook.md ("Verify Without SDK").
 *
 * Header format:  v={unix_ms_timestamp},d={hex_digest}
 * Digest:         HMAC-SHA256( rawBody + timestamp , apiKey )   (string concat)
 * Replay guard:   timestamp must be within ±5 minutes of now.
 *
 * IMPORTANT: `apiKey` here must be the key Retell uses to SIGN webhooks — the
 * one with the "webhook" badge in the dashboard — which may differ from the key
 * used for API calls. See RETELL-SETUP.md Step 7.
 *
 * `nowMs` is injectable for testing; defaults to Date.now().
 */
export async function verifyRetellSignature(
  rawBody: string,
  signatureHeader: string | null,
  apiKey: string | undefined,
  nowMs: number = Date.now(),
): Promise<boolean> {
  if (!signatureHeader || !apiKey) return false;

  const match = /^v=(\d+),d=(.*)$/.exec(signatureHeader.trim());
  if (!match) return false;

  const timestamp = match[1];
  const providedDigest = match[2];

  // Replay protection: within 5 minutes.
  const ts = Number(timestamp);
  if (!Number.isFinite(ts) || Math.abs(nowMs - ts) > 5 * 60 * 1000) return false;

  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(apiKey),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sigBuf = await crypto.subtle.sign('HMAC', key, enc.encode(rawBody + timestamp));
  const expectedDigest = bufToHex(sigBuf);

  return timingSafeEqualHex(expectedDigest, providedDigest);
}

function bufToHex(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let hex = '';
  for (let i = 0; i < bytes.length; i++) {
    hex += bytes[i].toString(16).padStart(2, '0');
  }
  return hex;
}

/** Constant-time-ish comparison of two hex strings. */
function timingSafeEqualHex(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}
