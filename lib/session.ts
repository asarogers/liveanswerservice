/**
 * First-party visitor journey tracking — the per-visitor timeline layer.
 *
 * GA4 gives aggregate funnels; Microsoft Clarity gives visual session replay +
 * scroll heatmaps. This module gives the third thing neither does cleanly: a
 * compact, queryable-in-OUR-Postgres journey per visitor — landing page, the
 * pages they hit, how long they dwelled in each section, how far they scrolled,
 * the ordered CTAs they fired, and whether they reached /book — keyed by a
 * stable `visitor_id` we also stamp on leads, so a booking joins back to the
 * exact path that produced it.
 *
 * All client-side + best-effort. The journey is accumulated in memory and
 * flushed via navigator.sendBeacon to /api/session on page hide (sendBeacon
 * survives unload; a fetch would be killed). Safe to import anywhere — every
 * function is a no-op on the server.
 */

const VID_KEY = 'las_vid';
const SID_KEY = 'las_sid';
const SID_TS_KEY = 'las_sid_ts';
const SESSION_TTL_MS = 30 * 60 * 1000; // 30-min inactivity → new session (GA4 convention)

function uuid(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

/** Persistent across sessions (localStorage). Identifies the human. */
export function getVisitorId(): string {
  if (typeof window === 'undefined') return '';
  try {
    let v = localStorage.getItem(VID_KEY);
    if (!v) {
      v = uuid();
      localStorage.setItem(VID_KEY, v);
    }
    return v;
  } catch {
    return '';
  }
}

/** Per-session (sessionStorage + 30-min sliding TTL). Identifies the visit. */
export function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  try {
    const now = Date.now();
    const lastTs = Number(sessionStorage.getItem(SID_TS_KEY) || 0);
    let s = sessionStorage.getItem(SID_KEY);
    if (!s || now - lastTs > SESSION_TTL_MS) {
      s = uuid();
      sessionStorage.setItem(SID_KEY, s);
    }
    sessionStorage.setItem(SID_TS_KEY, String(now));
    return s;
  } catch {
    return '';
  }
}

// ── In-memory journey accumulator ──────────────────────────────────────────

interface SectionDwell {
  firstSeen: number; // ms epoch
  dwellMs: number;
  enteredAt: number | null; // currently-in-view timestamp, or null
}

interface JourneyEvent {
  t: number; // ms since session start
  name: string;
  params?: Record<string, unknown>;
}

interface Journey {
  visitorId: string;
  sessionId: string;
  startedAt: number;
  landingPage: string;
  pages: string[];
  sections: Record<string, SectionDwell>;
  maxScrollPct: number;
  events: JourneyEvent[];
  reachedBook: boolean;
  reachedConversion: string | null; // first key CTA reached
}

let journey: Journey | null = null;
let flushed = false;

function ensureJourney(): Journey | null {
  if (typeof window === 'undefined') return null;
  if (!journey) {
    journey = {
      visitorId: getVisitorId(),
      sessionId: getSessionId(),
      startedAt: Date.now(),
      landingPage: window.location.pathname,
      pages: [window.location.pathname],
      sections: {},
      maxScrollPct: 0,
      events: [],
      reachedBook: window.location.pathname.startsWith('/book'),
      reachedConversion: null,
    };
  }
  return journey;
}

export function recordPageView(path: string): void {
  const j = ensureJourney();
  if (!j) return;
  getSessionId(); // refresh TTL
  if (j.pages[j.pages.length - 1] !== path) j.pages.push(path);
  if (path.startsWith('/book') || path.startsWith('/start-trial')) j.reachedBook = true;
  pushEvent('page_view', { path });
}

export function recordSectionEnter(section: string): void {
  const j = ensureJourney();
  if (!j) return;
  const now = Date.now();
  const s = j.sections[section] ?? { firstSeen: now, dwellMs: 0, enteredAt: null };
  if (s.enteredAt == null) s.enteredAt = now;
  j.sections[section] = s;
}

export function recordSectionExit(section: string): void {
  const j = journey;
  if (!j) return;
  const s = j.sections[section];
  if (s && s.enteredAt != null) {
    s.dwellMs += Date.now() - s.enteredAt;
    s.enteredAt = null;
  }
}

export function recordScroll(pct: number): void {
  const j = ensureJourney();
  if (!j) return;
  if (pct > j.maxScrollPct) j.maxScrollPct = Math.min(100, Math.round(pct));
}

/** Called by trackEvent for every GA event, so the journey mirrors GA4. */
export function pushEvent(name: string, params?: Record<string, unknown>): void {
  const j = ensureJourney();
  if (!j) return;
  j.events.push({ t: Date.now() - j.startedAt, name, params });
  // Mark the first conversion-intent CTA reached.
  const CONVERSIONS = ['book_click', 'trial_start', 'lead_submit', 'chat_lead_capture', 'download_submit', 'demo_call_request', 'phone_click'];
  if (!j.reachedConversion && CONVERSIONS.includes(name)) j.reachedConversion = name;
}

/** Close out any open section dwell timers (called before a flush). */
function settleDwell(): void {
  if (!journey) return;
  const now = Date.now();
  for (const s of Object.values(journey.sections)) {
    if (s.enteredAt != null) {
      s.dwellMs += now - s.enteredAt;
      s.enteredAt = now; // keep counting if the page isn't actually gone
    }
  }
}

/** Compact wire shape sent to /api/session. */
export function snapshot() {
  const j = ensureJourney();
  if (!j) return null;
  settleDwell();
  return {
    visitor_id: j.visitorId,
    session_id: j.sessionId,
    landing_page: j.landingPage,
    duration_ms: Date.now() - j.startedAt,
    pages: j.pages,
    sections: Object.fromEntries(
      Object.entries(j.sections).map(([k, v]) => [k, Math.round(v.dwellMs)]),
    ),
    max_scroll_pct: j.maxScrollPct,
    reached_book: j.reachedBook,
    reached_conversion: j.reachedConversion,
    events: j.events,
  };
}

/**
 * Beacon the journey to /api/session. Fires on visibilitychange→hidden and
 * pagehide. `final` uses sendBeacon (survives unload); a manual call can use
 * fetch. Deduped so we don't double-send the same terminal snapshot.
 */
export function flush(final = false): void {
  if (typeof window === 'undefined') return;
  if (final && flushed) return;
  const snap = snapshot();
  if (!snap) return;
  const body = JSON.stringify(snap);
  try {
    if (final && navigator.sendBeacon) {
      navigator.sendBeacon('/api/session', new Blob([body], { type: 'application/json' }));
      flushed = true;
    } else {
      void fetch('/api/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        keepalive: true,
      });
    }
  } catch {
    /* best-effort */
  }
}
