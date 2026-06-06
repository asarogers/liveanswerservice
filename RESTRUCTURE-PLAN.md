> ⚠️ **TEMPLATE-INHERITED DOCUMENT — WELLPREPPEDLIFE, NOT LIVE ANSWER.** This file came along with the wellpreppedlife site template and describes that client's 2026-05-08 site restructure. Nothing in it reflects liveanswerservice.com state. Kept only as a reference playbook. [flagged 2026-06-06 doc audit]

# WellPreppedLife Restructure Plan

**Created:** 2026-05-08
**Goal:** Cut from ~110 URLs (10 indexed, ~100 stuck "Discovered – not indexed") down to ~30–40 high-quality URLs, then run an experiment with hand-built static pages at `/guides/*` against the existing dynamic templated pages.

**State legend:** `[TODO]` `[IN_PROGRESS]` `[BLOCKED]` `[DONE]` `[CUT]`

---

## Diagnosis recap

- **Indexed (10, untouchable):** `/`, `/about`, `/locations/{san-jose, san-mateo, fremont, hillsborough}`, `/services/{custom-menu-planning, tremor-adapted-cooking, biweekly-meal-prep, memory-care-nutrition}`
- **Stuck "Discovered – not indexed" (~100):** original bulk-submission cohort. Triggered Google's programmatic-SEO classifier.
- **Crawl behavior:** new URLs in small batches DO crawl normally. Bulk cohort is sticky-stuck.
- **Strategy:** archive stuck cohort with 410, build fresh hand-crafted pages at `/guides/*` for 5–10 highest-opportunity keywords. Let Google decide between dynamic vs static.

---

## Phase 1 — Cuts, archives & redirects

Recon + cut decisions + archive moves + 410/301 redirect rules.

### Recon

- [DONE] **1.1** Routes mapped. App Router. Services + Locations both use dynamic `[slug]` route. Sitemap is data-driven (`app/sitemap.ts`). Redirects: NOT configured anywhere — `next.config.ts` has only www→non-www. `middleware.ts` exists (hreflang only). Best add for 410: extend `middleware.ts`.
- [DONE] **1.2** Service slug count: **95** across 5 files (`services-data.ts` + `services-data-batch2.ts` through `-batch5.ts`), all merged via `getAllServices()`.
- [DONE] **1.3** Location slug count: **24** in single file `lib/locations-data.ts`.

### Blog (22 → 12 keep, 10 archive)

- [DONE] **1.4** Archive 10 blog posts (move .md → `content/blog/_archive/`, .json → `content/blog-posts/_archive/`):
  - adaptive-cooking-tools-for-seniors-with-arthritis
  - affordable-healthy-meals-for-seniors-near-me
  - best-low-sodium-meal-ideas-for-seniors
  - cooking-tips-for-seniors-with-parkinsons
  - eating-well-alone-seniors-who-cook-for-one
  - how-to-get-home-cooked-meals-for-senior-living-alone
  - meal-prep-after-stroke-recovery-for-seniors
  - meal-prep-for-elderly-after-surgery-recovery
  - meal-prep-for-seniors-with-dementia
  - meal-prep-for-seniors-with-diabetes
- [DONE] **1.5** Lifted to `content/_snippets/post-hospital-source-material.md`.
- [DONE] **1.6** Lifted to `content/_snippets/medical-diet-diabetes-source-material.md`.

### Services (54 → ~11 keep, archive rest)

KEEP set:
- Indexed (untouchable): `custom-menu-planning`, `tremor-adapted-cooking`, `biweekly-meal-prep`, `memory-care-nutrition`
- Canonical commercial: `personal-chef-for-seniors`, `in-home-meal-prep` (if exists), `post-hospital-meal-recovery` (or `post-surgery-meal-prep`), `adaptive-cooking`, `medical-diet-meal-prep` (umbrella), `family-care-plan` (or closest existing), `kitchen-safety-assessment`

- [DONE] **1.7** Service archive plan: 23 KEEP / 4 → 410 / 65 → 301. (Actual data file count was 92, not 95.)
- [DONE] **1.8** 301 redirect map written to `lib/redirects.ts`.
- [DONE] **1.9** Archived 69 service entries → `archivedServices` arrays in all 5 data files.
- [DONE] **1.10** `/services` index auto-restricted via `getAllServices()` (no code change needed).

### Locations (24 → 8 keep, archive rest)

KEEP set: `san-jose`, `san-mateo`, `fremont`, `hillsborough` (indexed) + `palo-alto`, `mountain-view`, `san-francisco`, `oakland` (priority + keyword demand).

- [DONE] **1.11** 16 locations archived: sunnyvale, campbell, los-gatos, redwood-city, walnut-creek, marin, los-altos, atherton, menlo-park, cupertino, santa-clara, saratoga, los-altos-hills, burlingame, milpitas, east-palo-alto.
- [DONE] **1.12** Moved to `archivedLocations` array in `lib/locations-data.ts`.
- [DONE] **1.13** `Footer.tsx` reduced to 8 keep cities. `app/locations/page.tsx` updated.

### Redirects

- [DONE] **1.14** 410 logic in `middleware.ts` for archived services + archived blog posts (`Cache-Control: no-store`).
- [DONE] **1.15** 301 logic in `middleware.ts` reading from `lib/redirects.ts` (services + locations → /service-areas).

### Phase 1 follow-ups (flagged during execution)

- [DONE] **1.16** `relatedServices` repaired across all 5 service-data files (~23 KEEP entries patched; archived references replaced with closest KEEP slug or dropped).
- [DONE] **1.17** Stale recon — TS errors not present anymore. `npx tsc --noEmit` clean.

## Phase 2 — Differentiate kept pages

- [DONE] **2.1** 8 location pages rewritten with named neighborhoods, real hospitals, distinct anonymized client scenarios (CHF, dysphagia, chemo, COPD, Type 2 diabetes, CKD, hip replacement, Parkinson's). Build clean.
- [DONE] **2.2** 23 service entries + memory-care-nutrition static page rewritten. Word count grew ~30–40% (concrete deliverables replaced marketing prose). Each has a distinct anonymized client scenario (24 unique conditions/locations across the set). One overlap flag: `personal-chef-oakland` service vs guide both reference cultural cooking + Alta Bates Summit — monitor for cannibalization.
- [DONE] **2.3** All 12 kept blog posts audited. Already 1900–3200 words with strong voice — no full rewrites needed. Rewired 12 archived-slug links to KEEP equivalents, added `/pricing` and `/guides/*` cross-links, inserted published $349/$549/$849 framework into the cost-related posts, named competitors honestly in the "who provides" post.

## Phase 3 — Experiment: build `/guides/*` + new pages

Hand-crafted static pages at `/guides/*` targeting G/F-tier keywords. Different copy from dynamic equivalents. No canonical tags — let Google pick.

- [DONE] **3.1** `/pricing` built. 3 tiers + 11-PAA FAQ + 3 JSON-LD schemas (Service+OfferCatalog, FAQPage, BreadcrumbList). Added to nav + footer + sitemap.
- [DONE] **3.2** `/service-areas` built. 8 KEEP cities linked, 16 mention-only cities in regional prose, drive-radius honesty section.
- [DONE] **3.3** `/guides/[slug]/page.tsx` route, `lib/guides.ts`, prebuild manifest script (`scripts/generate-guides-manifest.mjs` wired into package.json prebuild). Self-canonical only.
- [DONE] **3.4** `/guides/in-home-meal-prep-san-francisco` (G, 0.72) — 1733 words, hand-written.
- [DONE] **3.5** `/guides/personal-chef-bay-area` (F, 0.66, intent 0.88) — 1628 words, hand-written.
- [DONE] **3.6** `/guides/personal-chef-san-jose` — 1795 words, SJ-specific (Willow Glen/Almaden/Cambrian/Evergreen + 4 hospitals + multi-cultural cooking note).
- [DONE] **3.7** `/guides/personal-chef-oakland` — 1794 words, East Bay-specific.
- [DONE] **3.8** `/guides/meal-prep-service-bay-area` — 1795 words, comparative buyer's guide.
- [DONE] **3.9** `/guides/someone-to-cook-for-elderly` — 1818 words, plain-language entry-point.
- [DONE] **3.10** `/guides/cooking-for-aging-parent` — ~1750 prose words, peer-to-peer DIY→hire guide.
- [DONE] **3.11** `/guides/wheelchair-accessible-cooking` — ~1750 prose words.
- [DONE] **3.12** `/guides/personal-chef-for-elderly-parents` — 1830 words, adult-child-addressed.
- [DONE] **3.13** `/guides/freezer-meal-prep-seniors` — ~1750 prose words, utility-driven.

## Phase 4 — Sitemap

- [DONE] **4.1** Sitemap = 73 URLs. Removed `/what-is-well-prepped-life`, added `/privacy`, `/terms`, `/accessibility`. No archived slugs leaking.
- [CUT] **4.2** Sitemap split deferred — single `sitemap.xml` is fine at 73 URLs.
- [DONE] **4.3** Nav + footer + homepage surface all kept content. All KEEP URLs reachable in ≤2 clicks.
- [DONE] **4.4** "From the Blog" block + new "Bay Area Buyer's Guides" block + pricing/service-areas CTAs added to homepage.

### Phase 4 follow-ups (flagged during audit)

- [DONE] **4.5** Homepage archived-slug links replaced with KEEP equivalents.
- [DONE] **4.6** Category hub audit complete. Archived 2 hubs (`nutrition-consulting`, `specialized-diet-meal-prep`) — both pointed only at archived/410'd children. Fixed 5 hubs (`meal-prep`, `adaptive-cooking-disability`, `memory-care-nutrition`, `caregiver-support`, `kitchen-safety-optimization`) — replaced archived references with KEEP equivalents. Middleware now 410s archived hub paths via `archivedCategorySlugs`. Final static page count: 87 (was 89).

## Phase 5 — Deploy, resubmit, monitor & fix

### Deploy

- [DONE] **5.1** `npm run build` clean. 87 static pages.
- [CUT] **5.2** No local `check_all.py` available. Smoke tests serve as functional check.
- [DONE] **5.3** Deployed twice. Initial: `50ff1630-...`. Redeploy with category-path middleware fix: latest version live.
- [DONE] **5.4** Smoke tests all pass: 4× 410 (services + blog + categories), 2× 301 (services + locations), 4× 200 (kept pages).

### Resubmit

- [BLOCKED] **5.5** Resubmit sitemap in GSC — requires Justine's account access. Checklist in `RESTRUCTURE-DEPLOY-NOTES.md`.
- [DONE] **5.6** IndexNow pinged 13 URLs (HTTP 200 from api.indexnow.org).
- [BLOCKED] **5.7** Request indexing in GSC — requires Justine's account access.

### Phase 2 deploy (post-content-rewrites)

- [DONE] **5.17** Redeployed with all Phase 2.1 + 2.2 + 2.3 content. 13/13 smoke tests pass.
- [DONE] **5.18** Category-layer trim 2026-05-08: 410'd `/services/categories` index + 6 dynamic GBP category subroutes + 3 redundant static hubs (`meal-prep`, `adaptive-cooking-disability`, `caregiver-support`). Removed `getAllGBPCategories` block from `/services` page. Final sitemap: **67 URLs** (was 71). Smoke tests confirm 410 on all 10 cut URLs, 200 on the 2 retained hubs (`memory-care-nutrition` indexed, `kitchen-safety-optimization` anchors $299 service).

### Monitor (4-week window)

- [TODO] **5.8** Day 3 check: pull GSC "Last crawled" report. Did the `/guides/*` cohort crawl? Did 410s register?
- [TODO] **5.9** Day 7 check: count of indexed pages, count still in "Discovered – not indexed". Compare to baseline (10 indexed, ~100 stuck).
- [TODO] **5.10** Day 14 check: any `/guides/*` URL ranking? Any of the dynamic counterparts moving? Document position deltas per keyword.
- [TODO] **5.11** Day 28 check: experiment outcome. Determine winner (static vs dynamic vs neither) per keyword pair.

### Fix loop

- [TODO] **5.12** If 410s aren't registering in GSC, verify middleware response headers and `Cache-Control: no-store` on 410s.
- [TODO] **5.13** If `/guides/*` pages don't crawl by day 7, investigate: sitemap inclusion, internal links from homepage, `robots.txt`, meta robots tags. Fix and re-deploy.
- [TODO] **5.14** If still stuck "Discovered – not indexed" pages persist past day 14, escalate cuts: more aggressive 410, fewer total URLs in sitemap.
- [TODO] **5.15** If indexed pages rank but get no clicks, audit titles/meta-descriptions for CTR. Iterate.
- [TODO] **5.16** Outcome report: write findings to `/repo/important/business/wellpreppedlife/experiments/restructure-2026-05.md` for future reference.

---

## Decisions made (don't re-litigate)

- Experiment path: `/guides/<slug>` (not flat root, not `/bay-area/`)
- Pricing: ship framework + "Starting at $349/wk + groceries", route to `/book` for exact quote
- Blog cuts: per the 10-cut list above (user-approved)
- Archive method: move source files to `_archive/` directories, 410 the URLs (preserve code, kill discovery)
- No canonical tags between dynamic and static experiment pages

## Open questions / assumptions to verify in 1.1–1.3

- Workers vs. Next.js handles redirects?
- `services-data.ts` vs `services-data-batch2.ts` — which is canonical, or both?
- Is there an `in-home-meal-prep` service slug currently?
- Final pricing numbers: placeholder pending Justine.
