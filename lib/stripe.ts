import Stripe from "stripe";

/**
 * Minimal Stripe wiring for the Cloudflare Workers runtime, ported from
 * archived/assurgit/lib/stripe.ts (identical stack: Next.js App Router +
 * OpenNext on Workers). Workers doesn't expose Node's http module, so we tell
 * the SDK to use fetch, and swap in a SubtleCrypto-backed provider for webhook
 * signature verification instead of Node crypto.
 *
 * LAS has exactly ONE plan (unlike Assurgit's starter/growth/scale tiers), so
 * this is simplified to a flat monthly/yearly/deposit lookup — no tier
 * dimension, no 3-month initial-term logic (LAS is month-to-month from day one).
 */

let cached: Stripe | null = null;

export function getStripe(secretKey: string): Stripe {
  if (cached) return cached;
  cached = new Stripe(secretKey, {
    httpClient: Stripe.createFetchHttpClient(),
  });
  return cached;
}

// SubtleCrypto isn't available at module load on Workers — only inside a
// request. So we build the provider per-request rather than at import time.
export function getCryptoProvider() {
  return Stripe.createSubtleCryptoProvider();
}

// Stripe lookup_keys registered in the dashboard (test mode as of 2026-07-05 —
// see CTA-IMPLEMENTATION-HANDOFF.md §4). Lookup keys are stable across
// test/live so the same code works in both once live prices are created.
export const PRICE_LOOKUPS = {
  monthly: "las_monthly",
  yearly: "las_annual",
  deposit: "las_setup",
} as const;

export type BillingPeriod = "monthly" | "yearly";

// Resolve a billing period to real Stripe price IDs by lookup_key. Done per
// request rather than baked into env vars so price-ID drift between test and
// live doesn't break anything.
export async function resolvePriceIds(
  stripe: Stripe,
  billingPeriod: BillingPeriod,
): Promise<{ recurring: string; deposit: string | null }> {
  const periodKey = PRICE_LOOKUPS[billingPeriod];

  const list = await stripe.prices.list({
    lookup_keys: [periodKey, PRICE_LOOKUPS.deposit],
    expand: ["data.product"],
    active: true,
    limit: 10,
  });

  const recurring = list.data.find((p) => p.lookup_key === periodKey);
  if (!recurring) throw new Error(`Stripe price with lookup_key=${periodKey} not found`);

  const deposit = list.data.find((p) => p.lookup_key === PRICE_LOOKUPS.deposit) ?? null;

  return { recurring: recurring.id, deposit: deposit?.id ?? null };
}
