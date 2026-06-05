# Favicon Update Debug Log

The browser tab is not updating to the new favicon despite the file on disk
and the dev server response both being correct. Tracking every attempt here.

## What's verified working
- `app/favicon.ico` content = cream bg + maroon mark (verified by reading bytes)
- `curl http://localhost:3000/favicon.ico` returns the cream/maroon PNG (1882 bytes)
- Dev server is running: `next dev` PID 12149 on port 3000
- No service worker is registered anywhere in the codebase
- Cache-bust query strings (`?v=...`) updated everywhere icons are referenced

## Attempts

### Attempt 1 — Replace files + bump version
- Copied `mark-square-dark.png` → all icon files
- Bumped `?v=2` → `?v=20260529b`
- **Result:** No change in tab.

### Attempt 2 — Properly square + sized files
- Found source PNG was 1323×1189 (not square) and 1.5 MB
- Padded to 1323×1323 with `sips --padColor 0b0306`
- Resized to 16/32/180/512 px
- Bumped to `?v=20260529c`
- **Result:** No change in tab.

### Attempt 3 — Cycle through different marks (switch demo)
- Switch 1: mark-light on cream → user saw the change
- Switch 2: mark-square-light on maroon → user saw the change
- **Result:** Switching mechanism works.

### Attempt 4 — Bigger logo via tighter crop
- Cropped source to 900×900 centered before resize
- Bumped to `?v=switch3`, then `?v=1780112533`, then `?v=1780112772`
- **Result:** User says cream still not visible. Browser tab stuck.

### Attempt 5 — Direct verification of served bytes
- `curl /favicon.ico` → 200, 1882 bytes, image/x-icon
- Wrote response to disk, read as PNG → cream bg + maroon mark
- **Conclusion:** server is serving the correct file. Problem is browser-side.

## Next ideas to try
- [x] Clear `.next/cache` for Next.js's own asset cache
  - Found stale 25,931-byte file at `.next/server/app/favicon.ico.body` (May 20 timestamp). But re-running `curl` shows dev server is actually serving the **new** 1882-byte PNG, so the stale cache file isn't being read. Not the cause.
- [ ] **Hypothesis:** Chrome caches favicons keyed by **hostname**, not by URL. Query strings (`?v=...`) get ignored for favicon-cache purposes. The fix is a **new file path**, not a new query string.
- [x] Reference favicon under a brand-new path the browser has never seen
  - Copied current icons to `public/brand-favicon-1780112772.png`, `brand-icon-512-1780112772.png`, `brand-apple-1780112772.png`
  - Updated `app/layout.tsx`'s `icons` metadata to point at these new paths (not `/favicon.ico` and not query-string variants)
  - **Theory:** Chrome's favicon cache is keyed by the (hostname, path) tuple, so a fresh path bypasses the cache
  - **Action user needs to take:** refresh the page; this should pull the new icon in fresh.
- [ ] Add a Next.js route handler for `/favicon.ico` with `Cache-Control: no-store`
- [ ] Make icon visually unmistakable (e.g. flat red square) to confirm browser is/isn't fetching
- [ ] Restart `next dev` (requires user confirmation — would disrupt their session)

## Attempt 6 — Inspect Next.js cache
- `.next/server/app/favicon.ico.body` = 25,931 bytes (stale May 20 file — real multi-resolution ICO from initial build)
- `app/favicon.ico` (source) = 1,882 bytes (correct, new)
- `curl /favicon.ico?v=1780112772` returns **1,882 bytes** → dev server reads source, not the cached body
- So the .next cache is NOT the cause. Server is fine. **Browser favicon cache is the bottleneck.**
