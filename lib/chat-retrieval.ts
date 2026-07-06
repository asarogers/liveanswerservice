/**
 * Retrieval engine for the scoped chatbot — the $0, hallucination-proof core.
 *
 * No LLM: we score the visitor's message against each curated KnowledgeEntry
 * (lib/chat-knowledge/*) by keyword/phrase hits plus token overlap, and return
 * the best match above a confidence threshold — or null, which the /api/chat
 * route turns into a "want the AI to call you?" deflection (itself a CTA).
 *
 * The knowledge corpus is small and finite, so lexical matching is plenty. If
 * we ever want fuzzier phrasing tolerance, the upgrade path is to precompute
 * embeddings for each entry offline and match cosine similarity here instead —
 * a tiny sentence-transformer on the Hetzner VPS (embeddings are cheap on CPU;
 * generation is not). The route/widget don't change. Still $0/chat.
 */

import { SALES_KNOWLEDGE, type KnowledgeEntry } from '@/lib/chat-knowledge/sales';

const STOPWORDS = new Set([
  'the', 'a', 'an', 'is', 'are', 'do', 'does', 'i', 'you', 'we', 'my', 'your', 'to', 'of',
  'and', 'or', 'for', 'in', 'on', 'it', 'this', 'that', 'with', 'can', 'how', 'what', 'me',
  'have', 'has', 'be', 'will', 'would', 'about', 'get', 'got', 'if', 'so', 'am',
]);

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^\w\s$]/g, ' ').replace(/\s+/g, ' ').trim();
}

function tokens(s: string): string[] {
  return normalize(s)
    .split(' ')
    .filter((t) => t.length > 1 && !STOPWORDS.has(t));
}

export interface RetrievalResult {
  entry: KnowledgeEntry;
  score: number;
}

/**
 * Score `message` against the corpus. Returns the best entry + score, or null
 * if nothing clears the confidence bar.
 */
export function retrieve(
  message: string,
  corpus: KnowledgeEntry[] = SALES_KNOWLEDGE,
): RetrievalResult | null {
  const norm = normalize(message);
  const msgTokens = new Set(tokens(message));
  if (msgTokens.size === 0 && norm.length === 0) return null;

  let best: RetrievalResult | null = null;

  for (const entry of corpus) {
    let score = 0;
    for (const kw of entry.keywords) {
      const k = normalize(kw);
      if (!k) continue;
      if (k.includes(' ')) {
        // Multi-word phrase — strong signal when the full phrase appears.
        if (norm.includes(k)) score += 3;
      } else {
        if (msgTokens.has(k)) score += 2;
        else if (norm.includes(k)) score += 1; // substring (e.g. "pricing" in "pricinglist")
      }
    }
    if (!best || score > best.score) best = { entry, score };
  }

  // Confidence bar: at least one solid keyword hit.
  if (!best || best.score < 2) return null;
  return best;
}

/** Convenience: the answer string or null. */
export function answerFor(message: string, corpus?: KnowledgeEntry[]): string | null {
  const r = retrieve(message, corpus);
  return r ? r.entry.answer : null;
}
