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

This repo conforms to `/Users/atlas/repo/important/WEBSITE-TEMPLATE.md`. Run `preflight --client liveanswerservice` to verify.

## Publishing schedule

The publishing schedule (9 weekly waves from 2026-06-08) lives in `site-plan.json` `lastmod_schedule` — that file is canonical (BUSINESS.md's old 8-week plan is superseded). Pages not yet promoted are listed under `exclude.urls` and rendered with `<meta name="robots" content="noindex">` + omitted from the sitemap. Each Monday, move that wave's URLs out of `exclude` (or use Mission Control → page-schedule's promote button) and redeploy. Dashboard: `/dev-nav`.
# liveanswerservice
