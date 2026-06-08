/**
 * D1-backed rate limiting + abuse guard for the outbound demo-call endpoint
 * (DEMO-CALL-FLOW.md §8.4, OPEN-ITEMS #4/#12).
 *
 * Phase 1 places a PAID AI call per submission with no SMS consent gate, so this
 * is the only cost/abuse guard until A2P SMS lands. Three independent caps:
 *   - per phone number  ≤ N / 24h  (cost guard against re-submitting one number)
 *   - per IP            ≤ N / 24h  (form-abuse guard)
 *   - global            ≤ N / 24h  (hard daily ceiling on spend)
 *
 * The D1 binding (env.DEMO_DB) is accessed via getCloudflareContext in the route;
 * this module is binding-agnostic and takes a minimal D1 interface so we don't
 * depend on @cloudflare/workers-types being installed.
 */

export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = unknown>(colName?: string): Promise<T | null>;
  run(): Promise<unknown>;
}
export interface D1Database {
  prepare(query: string): D1PreparedStatement;
}

export interface RateLimitConfig {
  perNumberPer24h: number;
  perIpPer24h: number;
  globalPer24h: number;
}

export const DEFAULT_RATE_LIMITS: RateLimitConfig = {
  perNumberPer24h: 3,
  perIpPer24h: 10,
  globalPer24h: 50,
};

export interface RateLimitResult {
  allowed: boolean;
  /** Machine-readable reason when blocked: 'number' | 'ip' | 'global'. */
  reason?: 'number' | 'ip' | 'global';
}

const DAY_MS = 24 * 60 * 60 * 1000;

async function count(db: D1Database, where: string, ...binds: unknown[]): Promise<number> {
  const row = await db
    .prepare(`SELECT COUNT(*) AS c FROM demo_call_attempts WHERE ${where}`)
    .bind(...binds)
    .first<{ c: number }>();
  return row?.c ?? 0;
}

/**
 * Check all three caps. Returns the first cap that would be exceeded. Read-only;
 * call recordAttempt() after a call is actually placed.
 */
export async function checkRateLimit(
  db: D1Database,
  phoneE164: string,
  ip: string | null,
  cfg: RateLimitConfig = DEFAULT_RATE_LIMITS,
  nowMs: number = Date.now(),
): Promise<RateLimitResult> {
  const since = nowMs - DAY_MS;

  const globalCount = await count(db, 'created_at > ?', since);
  if (globalCount >= cfg.globalPer24h) return { allowed: false, reason: 'global' };

  const numberCount = await count(db, 'phone_e164 = ? AND created_at > ?', phoneE164, since);
  if (numberCount >= cfg.perNumberPer24h) return { allowed: false, reason: 'number' };

  if (ip) {
    const ipCount = await count(db, 'ip = ? AND created_at > ?', ip, since);
    if (ipCount >= cfg.perIpPer24h) return { allowed: false, reason: 'ip' };
  }

  return { allowed: true };
}

/** Record a placed call so it counts against future windows. Never throws. */
export async function recordAttempt(
  db: D1Database,
  attempt: { id: string; phoneE164: string; ip: string | null; callId?: string },
  nowMs: number = Date.now(),
): Promise<void> {
  try {
    await db
      .prepare(
        'INSERT INTO demo_call_attempts (id, phone_e164, ip, call_id, created_at) VALUES (?, ?, ?, ?, ?)',
      )
      .bind(attempt.id, attempt.phoneE164, attempt.ip, attempt.callId ?? null, nowMs)
      .run();
  } catch (err) {
    console.error('[rate-limit] recordAttempt failed', err);
  }
}
