# WellPreparedLife — Indexing Fix Tracker
_Started: 2026-05-05_

## Root causes of "discovered but not indexed" (14/115 pages)
1. Duplicate FAQPage JSON-LD schema on location pages (structured data error signal)
2. No /locations hub page → weak internal link equity to city pages
3. Near-duplicate FAQ content across 24 location pages
4. Fake aggregateRating reviewCount ("14") violates Google's structured data accuracy policy
5. `lastModified: new Date()` in sitemap caused churn on every build
6. Missing hub for /services/categories/[slug] dynamic route
7. No cross-links from service pages → relevant city pages (or vice versa)

---

## Fixes

### ✅ DONE
- [x] Remove duplicate FAQPage JSON-LD from `app/locations/[slug]/page.tsx`
- [x] Create `app/locations/page.tsx` hub with city grid
- [x] Create `lib/locations-faqs.ts` with 2 city-specific Q&As × 24 cities
- [x] Fold section-heading FAQs + city-local FAQs into FAQSection prop
- [x] Fix sitemap `lastModified: new Date()` → static date for location URLs
- [x] Add Locations to Navigation.tsx NAV_LINKS
- [x] Add `/locations` hub to sitemap.ts

### ✅ DONE (continued)
- [x] Fix `reviewCount: "14"` → `"2"` in `app/layout.tsx` (line 168)
- [x] Fix `reviewCount: "14"` → `"2"` in `app/locations/[slug]/page.tsx` (line 140)
- [x] Create `app/services/categories/page.tsx` hub page
- [x] Add `/services/categories` to sitemap
- [x] Fix all static page `lastModified: new Date()` → `SITE_LAST_MODIFIED` in sitemap
- [x] Add "Browse all service categories →" link from services hub to categories hub

### ✅ DONE (continued)
- [x] Add tier-based priority ordering to `scripts/request-indexing.mjs`
  - G/F pages submitted first, then E, then everything else
  - New flag: `--priority` = only submit pages in site-plan priority list
  - New npm script: `npm run index:priority`

### 🚨 CRITICAL UNBLOCKED WORK — 37 priority pages not built yet
The SEO pipeline identified 42 G/F/E tier pages as high-opportunity targets.
Only 5 exist. The other 37 return 404 and can never be indexed.

Already built (5):
  /services/soft-food-meal-prep, /services/single-serving-meal-prep,
  /services/personal-chef-for-seniors, /services/adaptive-cooking, /services/stroke-recovery-meals

Not yet built (37) — see site-plan.json `sitemaps.priority.urls` for the full list.
Top G/F tier pages to build first:
  - /services/in-home-meal-prep-san-francisco  (G)
  - /services/meal-prep-service-bay-area        (F)
  - /services/cooking-for-aging-parent          (F)
  - /services/someone-to-cook-for-elderly       (F)
  - /services/meal-prep-service-san-jose        (F)
  - /services/personal-chef-bay-area            (F)
  - /services/personal-chef-san-jose            (F)
  - /services/personal-chef-for-elderly-parents (F)
  - /services/meals-for-elderly-parent          (F)
  - /services/one-handed-cooking                (F)

### 📋 TODO
- [ ] Build the 37 missing G/F/E tier service pages (biggest indexing unlock)
- [ ] Cross-link service pages → relevant city pages (e.g. "We serve San Jose" footer links)
- [ ] Cross-link location pages → most relevant service pages (beyond what's already there)
- [ ] Update `SITE_LAST_MODIFIED` in sitemap after future meaningful content changes
- [ ] Consider Find-MyRoomie-style differentiated pages (medium-term):
  - Comparison pages (e.g., "meal prep vs meal delivery for seniors in San Jose")
  - How-to guides with local specifics (post-surgery, memory care)
  - Persona pages ("caregiver who lives far away", "Parkinson's patient")
- [ ] When new Google reviews come in: update `reviewCount` in layout.tsx and locations/[slug]/page.tsx

### Indexing commands
```bash
npm run index            # new URLs only, priority-sorted (runs automatically after deploy)
npm run index:all        # resubmit all 115 URLs, priority-sorted
npm run index:priority   # resubmit only G/F/E tier pages (useful after building new priority pages)
npm run index:dry        # preview what would be submitted
```

### 🔍 WATCH
- Google Search Console — "discovered but not indexed" should drop within 4-6 weeks
- Rich Results Test — run after deploy to verify FAQPage schema passes
- aggregateRating — update reviewCount whenever new Google reviews come in

---

## Deploy status
- Background deploy started: `npm run deploy` in wellpreppedlife/
- After deploy: run `node scripts/request-indexing.mjs --all`
