# Copy Rework — 2026-06-11 (data-grounded)

Findings + fixes from the measured data (report §1A–§1C, `research.*` tables). The body
copy on service pages is genuinely good (VOC pain, $ math, integrations) — **don't rewrite
what works.** The problems are structural: where copy is aimed, and one word.

---

## Fix 1 — THE HOMEPAGE IS THE HVAC PAGE (biggest issue)

`app/page.tsx` renders `VerticalLandingPage config={hvacConfig}` with title
**"Live Answer for HVAC — Never lose another job"** and canonical `/`.

Why this is wrong, on the data:
- The homepage is the site's strongest URL (all authority concentrates there). receptionhq's
  homepage earns **26,751 ETV across 486 keywords** by targeting the category head terms; ours
  targets `hvac answering service` (480/mo) — and `/services/hvac-answering-service` shipped in
  Wave 1 too, so we're **cannibalizing our own HVAC page** while leaving the head terms unclaimed.
- The head terms the homepage should own: `ai receptionist` (5,400/mo · KD 9 · +237% YoY),
  `ai answering service` (1,900 · KD 18 · +116%), `24/7 answering service`, `answering service
  for small business` (880–1,000/mo each).

**Fix:** build a true category homepage:
- Title: `AI Receptionist & 24/7 Answering Service for California Small Business | Live Answer`
- H1 (pain-led, head-term loaded): `Never miss another call. An AI receptionist that answers
  24/7 — in English and Spanish — for $500/mo flat.`
- Sections: how it works → verticals grid (links to the service pages) → pricing transparency
  ($500 flat vs per-minute) → demo line CTA → reviews/proof.
- HVAC content lives only at `/services/hvac-answering-service`.

## Fix 2 — The word "job" is poisoning the site's intent signal

Google's content read of the site returned **88/96 job-seeker queries** (`receptionist job`,
`answering service jobs`…). Cause: "receptionist/answering" + **112 visible "job" mentions**,
including title-level ("Never lose another job", hvac meta). Google parses that as employment.

**Policy (titles/meta/H1 strictly; body copy lightly):**
- Never use "job(s)" in `<title>`, meta description, H1, or OG tags. Replace with
  **call / customer / lead / booking / emergency**: "Never lose another job" → "Never lose
  another customer" (or "…another call").
- In body copy, "$4,000 job" is fine *occasionally* (it's trade vernacular), but prefer
  "a $4,000 install" / "a $500 service call" where natural. Target: cut the 112 mentions to <30.
- Also audit: "hiring" (dev-nav, sitemap notes) — keep out of indexable copy.
- **Verify the fix:** re-run `keywords_for_site` after deploy (`fetch_labs.py site`) — success =
  the content read flips from job queries to buyer queries.

## Fix 3 — Exact-phrase targeting (the data is picky)

| Page | Must target (exact) | Avoid |
|---|---|---|
| medical | **"medical answer service"** (6,600/mo · KD 7) in title/H1/intro | "medical answering service" (0/mo · KD 25) |
| bilingual | the measured set: `bilingual answering service` (880–1,000), `answering service bilingual`, `spanish answering service` (320), `bilingual virtual receptionist` (260), `spanish speaking answering service` (210) | generic "multilingual" |
| funeral | "answering service for **directors**" (1,600 · KD 2) + "funeral home answering service" (320) | — |
| cost pages | autocomplete phrasings: "how much does an answering service cost" (210), "answering service cost" (260), "cheap answering service for small business" (110) | invented phrasings |
| AI pages | "AI receptionist" / "AI answering service" **verbatim in title + H1** | "AI dispatcher"/"AI agent" as the *primary* label (fine as flavor) |
| appointment page | "AI appointment setter" (320 · KD 7) | "appointment scheduling" as primary |

## Fix 4 — Weave in the proof assets we've mined (already in the DB)

- **VOC quotes** (36k reviews, `research.prospect_reviews`): use real missed-call pain as
  social-proof framing — e.g. the Christmas-Eve roof leak, the flooded garage, *"Takes your
  money then no call back — WARNING"*. Anonymized verbatims beat invented testimonials.
- **GBP buyer questions** (`research.gbp_qna`, 21 Qs) → FAQ sections (FAQ schema already
  required by the template checks).
- **Stats already validated:** 62% unanswered / $126K, HVAC $500–$4,000, dental ~$850/patient,
  legal $5,000+ retainer — keep using them; they're consistent with the demand data.
- **Bilingual + flat-price + booking CTA** are the three wedges *zero* competitors carry
  (0/839 GBPs have a booking link; none flag Spanish) — every page's above-the-fold should
  hit at least two of the three.

## Title formula (new + retargeted pages)

`[Exact buyer phrase] in California | $500/mo Flat, Bilingual | Live Answer`
H1 = the pain, in the prospect's words; first 100 words contain the exact phrase once,
naturally. No keyword stuffing — KD on our targets is 0–18; clean targeting is enough.

## Order of operations
1. Homepage swap (Fix 1) + job-language pass on titles/meta/H1 (Fix 2) — **before Wave 3
   promotes** (6/22), so the AI pages launch into a site Google reads as buyer-intent.
2. Apply Fix 3 briefs to the Wave 3–4 new/cherry-picked pages as they're built.
3. Re-run the `keywords_for_site` check post-deploy to confirm the intent flip.

---

## Audit + fixes — 2026-06-13 (every route checked)

Full route-by-route audit of `main` against Fixes 1–4. **Result: `main` is broadly
compliant** — Fix 1 (category homepage), Fix 2 in titles/meta/H1, Fix 3 (appointment→"AI
appointment setter", AI pages verbatim), and Fix 4 (3 wedges) are all landed. This is why
the `wave-2…wave-9` branches read as out-of-whack: they were cut **before** this rework and
still carry pre-rework copy + the old `(669) 365-6533` phone. Any wave merge must favor
`main` (see `WAVE-REWORK-2026-06-11.md` branch mechanics + the safe-merge recipe).

Three concrete gaps found and fixed this pass:
1. **`/terms`** had a placeholder `(555) 123-4567` → corrected to the canonical AI line
   `(669) 316-1742`.
2. **`/calculator`** shipped with **no `metadata` export** (it's a `"use client"` page) — added
   `app/calculator/layout.tsx` supplying `<title>` + description (with the $500/mo wedge) and
   `gatedRobots("/calculator")`.
3. **HVAC live page** (`lib/verticals/hvac.ts`, the vertical config that `getVertical()` renders
   — the `services-data.ts` hvac entry is dead/shadowed) still had ~5 prominent body "job" uses;
   de-"job"ed per Fix 2's body-copy guidance.

Still open (backlog, tracked in `TODO.md`): the Fix-3 pages **medical** ("medical answer
service"), **funeral** ("answering service for directors"), and a **plumbing**-specific page
are not built on `main` yet; and the dead `services-data.ts` vertical duplicates should be
removed.
