/**
 * Google reCAPTCHA v3 server-side verification for the demo-call endpoint.
 *
 * Bot/abuse guard for the public homepage form (Retell recommends reCAPTCHA for
 * any public-initiated calling — reliability/prevent-abuse.md). v3 is invisible
 * and score-based (0.0 = bot … 1.0 = human).
 *
 * Gated: if RECAPTCHA_SECRET_KEY is unset the check is SKIPPED (ok:true) so the
 * build deploys safely before the keys are provisioned. Set the secret + the
 * public NEXT_PUBLIC_RECAPTCHA_SITE_KEY to turn it on.
 */
export interface RecaptchaResult {
  ok: boolean;
  score?: number;
  skipped?: boolean;
  reason?: string;
}

export async function verifyRecaptcha(
  token: string | undefined,
  ip: string | null,
  minScore = 0.5,
): Promise<RecaptchaResult> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return { ok: true, skipped: true };
  if (!token) return { ok: false, reason: 'missing-token' };

  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip) body.set('remoteip', ip);
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });
    const data = (await res.json()) as {
      success: boolean;
      score?: number;
      action?: string;
      'error-codes'?: string[];
    };
    if (!data.success) {
      return { ok: false, score: data.score, reason: (data['error-codes'] || []).join(',') || 'verify-failed' };
    }
    if (typeof data.score === 'number' && data.score < minScore) {
      return { ok: false, score: data.score, reason: 'low-score' };
    }
    return { ok: true, score: data.score };
  } catch (err) {
    console.error('[recaptcha] verify error', err);
    return { ok: false, reason: 'verify-error' };
  }
}
