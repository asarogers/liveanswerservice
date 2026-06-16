# Live Answer Service

Marketing site for Live Answer — AI receptionist for California small business.

> **Business brain / single source of truth:** `../important/business/liveanswerservice/LIVEANSWERSERVICE.md` (strategy, pricing intent, roadmap, and a map of all LAS docs, reports, and DB sources). This README stays scoped to the codebase.

## Stack

- Next.js 16 App Router
- Tailwind CSS v4
- Cloudflare Workers via [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare)
- Resend (contact form)
- Cal.com embed (booking)

## Local dev

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy        # build → wrangler deploy → check_all.py healthcheck → autofix
npm run postdeploy    # ping Bing + submit changed URLs to Google Indexing API
```

`scripts/deploy.mjs` is the canonical deploy path. It runs the OpenNext build, deploys to Cloudflare Workers, then runs `check_all.py` against the live sitemap. If healthcheck flags fixable issues, it patches the repo and redeploys.

## Template spec

This repo conforms to `/Users/atlas/repo/important/strategy/WEBSITE-TEMPLATE.md`. Run `preflight --client liveanswerservice` to verify.

**Documented deviations from the template:**
- `app/services/categories/` (REQ route in the spec) is intentionally absent — the entire GBP-categories layer was archived for this site; `middleware.ts` returns **410 Gone** for `/services/categories` and its subroutes. Vertical landing pages (`lib/verticals/`) carry the category-intent keywords instead.
- `/blog` has no route — `content/guides/` is the sole long-form surface; `middleware.ts` 301s `/blog` and all post slugs to `/guides` (blog route + `lib/blog.ts` removed 2026-06-06).
- `aggregateRating` is intentionally absent from all LocalBusiness JSON-LD until a real Live Answer Service GBP with real reviews exists (`scripts/fetch-google-reviews.mjs` needs its PLACE_ID set then). Never hardcode it.

## Publishing schedule

The publishing schedule (9 weekly waves from 2026-06-08) lives in `site-plan.json` `lastmod_schedule` — that file is canonical (BUSINESS.md's old 8-week plan is superseded). Pages not yet promoted are listed under `exclude.urls` and rendered with `<meta name="robots" content="noindex">` + omitted from the sitemap. Each Monday, move that wave's URLs out of `exclude` (or use Mission Control → page-schedule's promote button) and redeploy. Dashboard: `/dev-nav`.
# liveanswerservice
