# Live Answer · Site Pages Inventory

**Authoritative list of every page on the site that must follow the locked theme + be mobile-friendly.**

Theme tokens live at `:root` in `app/globals.css` — single source of truth. Any page-level work must reference those tokens (not hardcoded hex values).

---

## Theme — quick reference

| Token | Value | Use |
|---|---|---|
| `--color-page` | `#f7f2e7` | Most section backgrounds (cream) |
| `--color-page-alt` | `#ffffff` | Only for compare-section style breaks |
| `--color-card` | `#fdfaf3` | Card surface (near-white cream) |
| `--color-ink` | `#1a1611` | Primary text + dark slabs |
| `--color-text` | `#5c5147` | Secondary text |
| `--color-text-muted` | `#94867a` | Tertiary/supporting text |
| `--color-brand` | `#5a1f2e` | Burgundy — all primary CTAs |
| `--color-brand-hover` | `#461624` | CTA hover |
| `--color-border` | `#d9cdb1` | Tan hairline — all card borders |
| `--color-border-soft` | `#e8dec5` | Lighter tan — internal dividers |
| `--gradient-hero` | `linear-gradient(135deg, #5a1f2e, #1a1611)` | Vertical-landing hero background |
| `--section-pad-y` | `72px` | Section vertical padding |
| `--themed-box-bg` | `rgba(255,255,255,0.70)` | Themed container fill |
| `--radius-md` | `12px` | Card radius |
| `--radius-lg` | `16px` | Large feature cards |

---

## Page inventory

### Home / vertical-landing
- [ ] `/` (`app/page.tsx`) — Home (renders `VerticalLandingPage` with `hvacConfig`) · theme ✅ · mobile ✅

### Verticals & SEO landers
- [ ] `/24-7-answering-service` (`app/24-7-answering-service/page.tsx`) · theme ✅ · mobile audit needed
- [ ] `/bilingual-answering-service-california` (`app/bilingual-answering-service-california/page.tsx`) · theme ✅ · mobile audit needed
- [ ] `/ccpa-compliance-call-recording` (`app/ccpa-compliance-call-recording/page.tsx`) · theme ✅ · mobile audit needed
- [ ] `/cheap-answering-service` (`app/cheap-answering-service/page.tsx`) · theme ✅ · mobile audit needed
- [ ] `/vs-hiring-a-receptionist` (`app/vs-hiring-a-receptionist/page.tsx`) · theme ✅ · mobile audit needed
- [ ] `/comparison` (`app/comparison/page.tsx`) · theme ✅ · mobile audit needed

### Locations
- [ ] `/locations` (`app/locations/page.tsx`) — index · theme ✅ · mobile audit needed
- [ ] `/locations/[slug]` (`app/locations/[slug]/page.tsx`) — detail template (renders all metros) · theme ✅ · mobile audit needed

### Services
- [ ] `/services` (`app/services/page.tsx`) — index · theme ✅ · mobile audit needed
- [ ] `/services/[slug]` (`app/services/[slug]/page.tsx`) — detail template · theme ✅ · mobile audit needed

### Blog
- [ ] `/blog` (`app/blog/page.tsx`) — index · theme ✅ · mobile audit needed
- [ ] `/blog/[slug]` (`app/blog/[slug]/page.tsx`) — article · theme ✅ · mobile audit needed

### Conversion / info
- [ ] `/about` (`app/about/page.tsx`) · theme ✅ · mobile audit needed
- [ ] `/book` (`app/book/page.tsx`) · theme ✅ · mobile audit needed
- [ ] `/calculator` (`app/calculator/page.tsx`) · theme ⚠ (verify) · mobile audit needed
- [ ] `/free-trial` (`app/free-trial/page.tsx`) · theme ⚠ (verify) · mobile audit needed
- [ ] `/how-it-works` (`app/how-it-works/page.tsx`) · theme ⚠ (verify) · mobile audit needed
- [ ] `/pricing` (`app/pricing/page.tsx`) · theme ⚠ (verify) · mobile audit needed
- [ ] `/start-trial` (`app/start-trial/page.tsx`) · theme ⚠ (verify) · mobile audit needed

### Legal / utility
- [ ] `/accessibility` (`app/accessibility/page.tsx`) · theme ⚠ (verify) · mobile audit needed
- [ ] `/privacy` (`app/privacy/page.tsx`) · theme ⚠ (verify) · mobile audit needed
- [ ] `/terms` (`app/terms/page.tsx`) · theme ⚠ (verify) · mobile audit needed

### Internal (do NOT touch)
- `app/dev-nav/**` — internal lab pages, never indexed, can use any styling

---

## Mobile-friendliness checklist (apply to every page above)

1. **No horizontal scroll at 320px width** — every grid must collapse to 1 column on small viewports.
2. **All `grid-template-columns: repeat(N, 1fr)` or fixed-column grids** must have a `@media (max-width: 760px)` or smaller breakpoint that collapses to `1fr`.
3. **Inline-style 2-col grids** (e.g. `gridTemplateColumns: "1.05fr 1fr"`) must collapse on mobile — either move to CSS with media queries or add a fallback.
4. **Phone-mockup phones** should shrink (`max-width: 100%`) and not overflow.
5. **Tables / wide compare grids** should either scroll horizontally within their card OR stack vertically on mobile.
6. **Section padding** should reduce on mobile (use `--section-pad-y-tight` or inline media queries).
7. **Hero gradient cards** should stack: text card top, phone mockup below (or hidden).
8. **CTA buttons** should be full-width on small screens for tap-target size (min 44px tall).
9. **H1 size** should scale down with `clamp()` or media queries — avoid huge fixed-size headings on phones.
10. **Image / SVG mockups** should scale down with `max-width: 100%; height: auto`.

---

## How to update

When making theme or mobile changes to multiple pages:
1. Always reference this file first.
2. Tick the checkbox for each page touched.
3. Update the theme reference at the top if tokens change.
4. Run a quick `grep -rn "#0F172A\|#475569\|#E2E8F0\|#94A3B8" app/` to catch hardcoded legacy values.
