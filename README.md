# Live Answer Service

Marketing site for Live Answer — AI receptionist for California small business.

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

The 8-week page-launch schedule (per BUSINESS.md) is enforced by `site-plan.json` — pages not yet in their launch week are listed under `exclude.urls` and rendered with `<meta name="robots" content="noindex">` + omitted from the sitemap. Each Monday, move the next batch of URLs out of `exclude` and redeploy.
# liveanswerservice
