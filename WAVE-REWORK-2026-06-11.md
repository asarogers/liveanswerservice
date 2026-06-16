# Wave Rework — 2026-06-11 (data-driven schedule update)

`site-plan.json` waves 3–8 were rebuilt on measured demand (clickstream volume, keyword
difficulty, multi-year YoY, SERP-holder checks — see report §1A/§1C in
`/repo/important/reports/liveanswerservice/liveanswerservice_2026-06-11_combined.md`).
Backup: `site-plan.json.bak-2026-06-11`. Wave 1 shipped; **Wave 2 (6/15) unchanged**.

## Code worklist (in priority order)

### Cherry-picks (page code exists on a later stacked branch — move it earlier)
| Page | From branch | Into | Ships | Why |
|---|---|---|---|---|
| `/ai-receptionist` | wave-6 | wave-3 | 6/22 | 5,400/mo · KD 9 · +237% YoY — best page we have |
| `/services/medical-office-answering-service` | wave-6 | wave-4 | 6/29 | 6,600/mo · KD 7 |
| `/services/plumbing-answering-service` | wave-9 | wave-5 | 7/06 | 590/mo · KD 0 |

### New builds (no code anywhere yet)
| Page | Wave | Target term(s) |
|---|---|---|
| `/ai-answering-service` | 3 (6/22) | `ai answering service` 1,900 · KD 18 · +116% YoY |
| `/services/funeral-home-answering-service` | 4 (6/29) | `answering service for directors` 1,600 · **KD 2** · + `funeral home answering service` 320 · +52% |
| `/services/insurance-verification` | 5 (7/06) | `insurance verification` 2,400 + `dental insurance verification service` 170 · KD 0 · +21% |
| `/services/prior-authorization-service` | 6 (7/13) | `prior authorization services` cluster ~900/mo; lead with `ai/automated prior authorization` (KD 0–4, rising) |

### Retargets (page exists; change the keyword focus + copy)
| Page | Change |
|---|---|
| `/services/medical-office-answering-service` | **Copy must target exact phrase "medical answer service"** (6,600/mo · KD 7). The "-ing" variant is 0/mo · KD 25. Title/H1/intro on the no-"ing" form. |
| `/services/appointment-scheduling-answering-service` | Retarget to **"AI appointment setter"** (320/mo · KD 7) — title/H1 + copy. |
| `/services/insurance-answering-service` | **Do not ship** (agency demand −75%/−91%). Superseded by `/services/insurance-verification`. |

### Cuts (excluded in site-plan.json; keep code on branches, do not promote)
towing-roadside · accounting · cleaning-landscaping · it-msp · nonprofit ·
roofing-construction — all ≤20–50/mo, flat or declining (roofing's "+500%" was a
1-month blip; construction −28% YoY). They are also CNI risk: zero-demand pages that
go "Crawled – not indexed" suppress crawl of new pages domain-wide.

### Demotions worth knowing (now tail, waves 7–8)
`/services/live-answering-service` (KD **51** — unwinnable at zero authority despite +126%),
`/services/real-estate-answering-service` (−75% YoY), `/guides/virtual-receptionist-cost` (−57%).

## Branch mechanics
Stacked order is unchanged (wave-2→3→4, wave-5→6→8→9). Cherry-pick the three pages
onto the earlier branches (their URLs stay noindexed until promoted, so bringing code
early is safe). Mission Control's publish-week action still merges each wave's `branch`
on its Monday. All gating rules stand: GSC index check before promote, ≥1 backlink per
promoted URL, geo pages on hold.
