# LAS Launch TODOs (pre-Monday deploy)

## 🔴 Needs your decision before Monday
- [ ] **#22 Hero "Call me" CTA** — still hits the Resend stub. Decide: ship a real demo-call flow, or soften the promise on the hero. (Blocker: this is the primary conversion path.)

## 🔴 P0 — before deploy
- [ ] **Commit the working tree** — all fixes are uncommitted on `main` (already 11 ahead of origin). Decide: one commit or split P0/cleanup.
- [ ] **Re-run wave-merge rehearsal** — edits to shared files (`VerticalLandingPage.tsx`, `types.ts`, `services-data.ts`, `sitemap.ts`) may conflict when promote-week merges wave-2…wave-9. Re-rehearse or rebase the wave branches.
- [ ] **Create the LAS Google Business Profile** — none exists. (Gaps #3 was wrong: CID 8611157451037066694 is Well Prepped Life's listing, not LAS's. `gbp_status='none'` in the DB is correct — do not write that CID anywhere.)
- [x] **Set real `PLACE_ID`** in `fetch-google-reviews.mjs` — DONE 2026-06-08 (`ChIJuT9VP8QzjoAR1PJtkhd7ytE`); fetch runs clean, 0 reviews today, auto-fills when reviews land.

## 🟢 Full-site copy audit vs DataForSEO rework — DONE 2026-06-13
Audited **every** route against `COPY-REWORK-2026-06-11.md` (homepage→category, ban "job"
in titles/meta/H1, exact-phrase targeting, 3 wedges). `main` is broadly compliant — the
rework copy is landed here, which is why the wave-2…wave-9 branches read as stale (cut
pre-rework). Fixes applied this pass:
- [x] **/terms placeholder phone** — `(555) 123-4567` → `(669) 316-1742` (`app/terms/page.tsx`).
- [x] **/calculator missing metadata** — page is `"use client"` so it can't export metadata;
  added `app/calculator/layout.tsx` with `<title>`+description (weaves $500/mo wedge) +
  `gatedRobots("/calculator")`.
- [x] **HVAC "job"-language body pass** — `lib/verticals/hvac.ts`: vocQuote, scenarios,
  plan step ("You get the booking"), success item, and FAQ de-"job"ed (titles/meta/H1 were
  already clean). The live HVAC page is the **vertical config**, not the `services-data.ts`
  entry (`getVertical()` shadows it in `app/services/[slug]/page.tsx`).

Backlog surfaced by the audit (not blocking Monday):
- [ ] **Build the Wave 3-6 data-driven pages** still missing on `main`: `medical` (exact
  "medical answer service", 6,600/mo KD 7), `funeral` ("answering service for directors",
  1,600 KD 2), plumbing-specific (only generic emergency-dispatch covers it today).
- [ ] **Dead duplication** — `lib/services-data.ts` still defines `hvac/attorney/small-business`
  slugs that `getVertical()` shadows (never render). Remove the stale entries.

## 🟡 External setup / credentials needed
- [ ] **#8 Bing Places** — requires OAuth login.
- [x] **#25 Microsoft Clarity** — DONE 2026-06-08: project `x428bvg5r1`, wired in `wrangler.toml` + `layout.tsx`, deployed + verified live in prod HTML. *(Cal.com handle already live via `/book` embed.)*
- [ ] **email_aliases** — DNS zone isn't even linked yet; link the zone first, then seed the DB row (seeding first would fake out preflight).

## 🟢 Post-launch / content
- [ ] **#9 Baseline rank map** — capture pre-launch keyword positions for comparison.
- [ ] **#24 Demo recordings** — produce real AI-receptionist call recordings for the site.
- [ ] **#27 Publish-tick cron** — set up the publishing-schedule cron.

## 📝 Notes (already done — context only)
- Audit corrections: Gaps #3 was a false positive (WPL's CID); `FAQAccordion.tsx` was already compliant.
- All fixable gaps (#1–#7, #10–#15, #19–#21, #23, #26, #30) fixed and verified via tsc, full prod build, and grep of prerendered HTML.
- Bonus: fabricated testimonials removed from /about and /locations; pre-existing TS error in dev-nav fixed.
