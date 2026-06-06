// Pre-generated at build time by scripts/generate-guides-manifest.mjs.
// Imported as a static JSON module so the Cloudflare Worker never needs fs.
//
// ── CONTENT MODEL [src: 2026-06-01 + 2026-01-05 calls] ──────────────────────
//
// /guides/* is the SOLE long-form content surface for liveanswerservice.com.
// /blog/* 301-redirects to /guides/* (see middleware.ts + lib/redirects.ts).
//
// What belongs in guides (do publish):
//   • Geo-specific content: real customer scenarios by city, named business
//     districts, specific verticals in that market.
//   • Case-study / customer-experience content: anonymized client scenarios
//     grounded in a real vertical, city, and outcome.
//   • Category-entry guides: buyer's guides comparing answering service options,
//     local pricing, and use-case fit.
//   • Local-resource guides: competitor comparisons, bilingual coverage maps,
//     industry-specific intake guides with named local context.
//
// What does NOT belong (do not publish):
//   • Generic national blog articles that could be search-and-replaced into
//     any city without changing the content.
//   • AI-generated thin content — every guide must have a named author
//     and at least one real California specific.
//
// Rationale: generic blog content builds zero local topical authority.
// Geo/case-study guide content signals E-E-A-T and locality to Google.
//
// ────────────────────────────────────────────────────────────────────────────
import manifest from '../content/guides-manifest.json';

export interface Guide {
  slug: string;
  title: string;
  description: string;
  h1: string;
  targetKeyword: string;
  datePublished: string;
  dateModified: string;
  author?: string;
  content: string;
  contentHtml: string;
}

export function getAllGuides(): Guide[] {
  return (manifest as Guide[]).slice().sort(
    (a, b) =>
      new Date(b.datePublished).getTime() -
      new Date(a.datePublished).getTime(),
  );
}

export function getGuideBySlug(slug: string): Guide | null {
  return getAllGuides().find((g) => g.slug === slug) ?? null;
}

export function getAllGuideSlugs(): string[] {
  return getAllGuides().map((g) => g.slug);
}
