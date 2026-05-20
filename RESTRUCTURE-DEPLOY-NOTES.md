# Restructure Deploy Notes

## Deploy Summary

- **Initial deploy:** 2026-05-08 — Cloudflare Worker `wellpreppedlife` Version `e4d1fe7a-eb8c-43be-87cc-6be14b7b015e`
- **Redeploys:** 2x same day for middleware regex fix and category-layer trim. Final sitemap = 66 URLs.
- **Build:** OpenNext for Cloudflare (`@opennextjs/cloudflare` 1.17.1) — clean
- **Pre-flight healthcheck:** Skipped (no local check_all.py)

## Baseline (GSC Coverage > Valid, 2026-05-10 pull)

**16 URLs in "Valid" — but only 13 are KEEP pages:**

| # | URL | Last crawled | Status |
|---|---|---|---|
| 1 | `/` | 2026-05-06 | KEEP |
| 2 | `/about` | 2026-05-05 | KEEP |
| 3 | `/locations/san-jose` | 2026-05-07 | KEEP |
| 4 | `/locations/fremont` | 2026-05-05 | KEEP |
| 5 | `/locations/san-francisco` | 2026-05-05 | KEEP (not in original recon — undercounted) |
| 6 | `/locations/san-mateo` | 2026-05-04 | KEEP |
| 7 | `/locations/hillsborough` | 2026-04-17 | KEEP |
| 8 | `/services/custom-menu-planning` | 2026-05-04 | KEEP |
| 9 | `/services/wheelchair-accessible-cooking` | 2026-05-06 | KEEP (experiment-paired) |
| 10 | `/services/tremor-adapted-cooking` | 2026-04-15 | KEEP |
| 11 | `/services/biweekly-meal-prep` | 2026-04-14 | KEEP |
| 12 | `/services/memory-care-nutrition` | 2026-04-14 | KEEP |
| 13 | `/guides/personal-chef-san-jose` | 2026-05-08 | NEW — crawled same day as deploy ✅ |
| 14 | `/blog/best-low-sodium-meal-ideas-for-seniors` | 2026-05-08 | 410'd — should deindex |
| 15 | `/services/appliance-selection-seniors` | 2026-04-08 | 301'd → kitchen-safety-assessment |
| 16 | `/services/allergen-free-cooking` | 2026-03-31 | 301'd → medical-diet-planning |

**Effective baseline: 13 KEEP indexed pages on 2026-05-10.**

**Pre-restructure trend** (from Chart.csv): 0 on Mar 14 → 6 on Mar 31 → 8 on Apr 4 → 14 on Apr 13 → 13 (held) → 16 on May 4. Domain was warming up on its own; experiment kicks the curve.

**First experiment datapoint:** `/guides/personal-chef-san-jose` crawled within hours of the May 8 deploy. Confirms new URL paths get crawl-budget normally.



## Smoke Test Results

| URL | Expected | Actual | Notes |
|---|---|---|---|
| /services/nutrition-coaching-seniors | 410 | 410 | OK |
| /services/senior-diet-consulting | 410 | 410 | OK |
| /blog/best-low-sodium-meal-ideas-for-seniors | 410 | 410 | OK |
| /blog/meal-prep-for-seniors-with-dementia | 410 | 410 | OK |
| /services/categories/nutrition-consulting | 410 | **404** | ANOMALY — see below |
| /services/meal-prep-for-seniors | 301 -> /services/personal-chef-for-seniors | 301, correct target | OK |
| /services/diabetic-meal-prep | 301 -> /services/medical-diet-planning | 301, correct target | OK |
| /services/post-surgery-meal-prep | 301 -> /services/post-hospital-meal-prep | 301, correct target | OK |
| /locations/sunnyvale | 301 -> /service-areas | 301, correct target | OK |
| /locations/cupertino | 301 -> /service-areas | 301, correct target | OK |
| / | 200 | 200 | OK |
| /pricing | 200 | 200 | OK |
| /service-areas | 200 | 200 | OK |
| /guides/personal-chef-bay-area | 200 | 200 | OK |
| /guides/in-home-meal-prep-san-francisco | 200 | 200 | OK |
| /services/personal-chef-for-seniors | 200 | 200 | OK |
| /locations/san-jose | 200 | 200 | OK |

### Anomaly: /services/categories/<slug> returns 404 instead of 410

The middleware regex `^/services/([^/]+)/?$` matches single-segment service paths only.
Archived category slugs (`nutrition-consulting`, `specialized-diet-meal-prep`) live at the
two-segment path `/services/categories/<slug>` and fall through to the dynamic
`[slug]` route which returns notFound() → HTTP 404.

**Effect:** still removes from index (404 + Google deindexing), but slower than 410 and
without explicit "permanently gone" signal. Recommend follow-up patch: add a
`/services/categories/(.+)` matcher in middleware.ts that returns 410 for
`archivedCategorySlugs`.

Severity: low. Does not block deploy success.

## IndexNow Ping

- **Endpoint:** `https://api.indexnow.org/indexnow`
- **Key:** `07f93ab5161b47969b8d347345c9c909` (verified at /public/07f93ab5161b47969b8d347345c9c909.txt)
- **Response:** HTTP 200
- **URLs submitted:** 13 (pricing, service-areas, guides index, 10 guides)

## Action Items Requiring Justine's GSC Access

1. **Resubmit sitemap** — In Search Console -> Sitemaps, resubmit
   `https://wellpreppedlife.com/sitemap.xml`.
2. **Request Indexing** (URL Inspection -> Request Indexing) on these 6 URLs only
   (don't bulk-request — looks spammy):
   - https://wellpreppedlife.com/
   - https://wellpreppedlife.com/services
   - https://wellpreppedlife.com/blog
   - https://wellpreppedlife.com/pricing
   - https://wellpreppedlife.com/guides
   - https://wellpreppedlife.com/guides/in-home-meal-prep-san-francisco
3. **Capture baseline metrics** (date-stamp today's values for day-28 comparison):
   - Coverage -> Indexed pages count: ____
   - Coverage -> "Discovered – currently not indexed" count: ____
   - Coverage -> "Crawled – currently not indexed" count: ____
   - Sitemaps -> Discovered URLs vs Indexed URLs: ____ / ____

## Monitoring Checkpoints (per RESTRUCTURE-PLAN Phase 5.8–5.11)

- **Day 3 (2026-05-11):** GSC "Last crawled" report — did `/guides/*` cohort crawl? Did 410s register?
- **Day 7 (2026-05-15):** Indexed page count vs baseline; "Discovered – not indexed" count vs baseline (~100 stuck).
- **Day 14 (2026-05-22):** Any `/guides/*` URL ranking? Any dynamic counterparts moving? Document position deltas per keyword.
- **Day 28 (2026-06-05):** Experiment outcome — winner (static vs dynamic vs neither) per keyword pair. Write findings to `/repo/important/business/wellpreppedlife/experiments/restructure-2026-05.md`.

## Fix Loop Triggers (Phase 5.12–5.15)

- If 410s aren't registering by day 7 — verify `Cache-Control: no-store` header on 410 responses (already present in middleware).
- If `/guides/*` doesn't crawl by day 7 — check sitemap inclusion, internal links from homepage, robots.txt, meta robots.
- If "Discovered – not indexed" persists past day 14 — escalate cuts (more aggressive 410s, fewer sitemap URLs).
- If indexed but no clicks — audit titles/meta-descriptions for CTR.
