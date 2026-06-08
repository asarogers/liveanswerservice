# LAS Launch TODOs (pre-Monday deploy)

## 🔴 Needs your decision before Monday
- [ ] **#22 Hero "Call me" CTA** — still hits the Resend stub. Decide: ship a real demo-call flow, or soften the promise on the hero. (Blocker: this is the primary conversion path.)

## 🔴 P0 — before deploy
- [ ] **Commit the working tree** — all fixes are uncommitted on `main` (already 11 ahead of origin). Decide: one commit or split P0/cleanup.
- [ ] **Re-run wave-merge rehearsal** — edits to shared files (`VerticalLandingPage.tsx`, `types.ts`, `services-data.ts`, `sitemap.ts`) may conflict when promote-week merges wave-2…wave-9. Re-rehearse or rebase the wave branches.
- [ ] **Create the LAS Google Business Profile** — none exists. (Gaps #3 was wrong: CID 8611157451037066694 is Well Prepped Life's listing, not LAS's. `gbp_status='none'` in the DB is correct — do not write that CID anywhere.)
- [ ] **Set real `PLACE_ID`** in `fetch-google-reviews.mjs` once the LAS GBP exists (currently a placeholder; prebuild fails safe without it).

## 🟡 External setup / credentials needed
- [ ] **#8 Bing Places** — requires OAuth login.
- [ ] **#25 Microsoft Clarity ID + Cal.com handle** — provision and wire in.
- [ ] **email_aliases** — DNS zone isn't even linked yet; link the zone first, then seed the DB row (seeding first would fake out preflight).

## 🟢 Post-launch / content
- [ ] **#9 Baseline rank map** — capture pre-launch keyword positions for comparison.
- [ ] **#24 Demo recordings** — produce real AI-receptionist call recordings for the site.
- [ ] **#27 Publish-tick cron** — set up the publishing-schedule cron.

## 📝 Notes (already done — context only)
- Audit corrections: Gaps #3 was a false positive (WPL's CID); `FAQAccordion.tsx` was already compliant.
- All fixable gaps (#1–#7, #10–#15, #19–#21, #23, #26, #30) fixed and verified via tsc, full prod build, and grep of prerendered HTML.
- Bonus: fabricated testimonials removed from /about and /locations; pre-existing TS error in dev-nav fixed.
