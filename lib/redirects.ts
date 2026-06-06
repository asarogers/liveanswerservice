/**
 * Redirect / gone tables consumed by middleware.ts.
 *
 * NOTE: Do not add WPL/meal-prep slugs here. This is liveanswerservice.com.
 * All slug targets are liveanswerservice.com URL paths.
 */

// Service slugs that should return 410 Gone (no canonical replacement).
// Currently none — all 10 service verticals are live.
export const goneSlugs: string[] = [];

// Service slugs that should 301 to a canonical service slug.
// Key = old slug, Value = new canonical slug (without the `/services/` prefix).
export const serviceRedirects: Record<string, string> = {};

// Location slugs that should 301 to /locations (no archived location pages yet).
export const archivedLocationSlugs: string[] = [];

// Service category hub slugs — none archived yet.
export const archivedCategorySlugs: string[] = [];

// GBP category subroute slugs — none archived yet.
export const archivedGBPCategorySlugs: string[] = [];

// Blog post slugs that 301 to their /guides/<slug> equivalent.
// [src: 2026-06-05 migration] All 3 launch blog posts were migrated to /guides/.
// Slugs are preserved 1:1 — no rename.
export const blogToGuideRedirects: Record<string, string> = {
  "missed-call-cost-california-small-business": "missed-call-cost-california-small-business",
  "bilingual-answering-service-california": "bilingual-answering-service-california",
  "ai-vs-human-answering-service-comparison": "ai-vs-human-answering-service-comparison",
};

// Blog post slugs archived with 410 Gone.
// Currently empty — all 3 blog posts are migrated to /guides/, not archived.
export const archivedBlogSlugs: string[] = [];
