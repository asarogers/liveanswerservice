import { getVisitorId, getSessionId, pushEvent } from '@/lib/session'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  // Stamp the first-party ids on every event so GA4 (User Explorer) and our
  // own journey sink share one key per visitor/session. Also mirror the event
  // into the in-memory journey (flushed to /api/session on page hide).
  const visitor_id = getVisitorId()
  const session_id = getSessionId()
  pushEvent(name, params)
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, {
      page_path: window.location.pathname,
      visitor_id,
      // `session_id` is a GA4-reserved param name — send ours under a distinct
      // key so it's usable as a custom dimension (las_session_id).
      las_session_id: session_id,
      ...params,
    })
  }
}

/**
 * Read the GA4 client_id so server-side events (e.g. the demo-call funnel
 * sent via the Measurement Protocol from /api/retell-webhook) can be stitched
 * to the same user. Resolves to undefined if gtag/the property isn't ready.
 * See important/business/liveanswerservice/TRACKING-PLAN.md §1.
 */
export function getGaClientId(): Promise<string | undefined> {
  return new Promise((resolve) => {
    const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    if (typeof window === 'undefined' || typeof window.gtag !== 'function' || !id) {
      return resolve(undefined)
    }
    try {
      window.gtag('get', id, 'client_id', (cid: string) => resolve(cid))
      // Fallback if the callback never fires.
      setTimeout(() => resolve(undefined), 1000)
    } catch {
      resolve(undefined)
    }
  })
}

/**
 * Canonical key-event helpers — the single source of truth is
 * important/business/liveanswerservice/TRACKING-PLAN.md.
 * Event names match the pipeline's CONVERSION_EVENTS (client-signals/fetch_ga4.py),
 * NOT the template's legacy `contact_form_submit`.
 */
export const Events = {
  // ── Core CTAs (key events) — always pass a distinct `location` per placement
  //    (home_hero, home_final, pricing_final, how_it_works_final, comparison_final,
  //     services_final, nav, footer, sample_call, …) so the funnel is segmentable
  //    by where the click happened. See TRACKING-PLAN.md §2a.
  phoneClick: (location?: string) =>
    trackEvent('phone_click', { event_category: 'contact', location, cta_location: location }),
  bookClick: (location?: string) =>
    trackEvent('book_click', { event_category: 'conversion', location, cta_location: location }),
  trialStart: (location?: string) =>
    trackEvent('trial_start', { event_category: 'conversion', location, cta_location: location }),
  // Transitional CTA — the low-commitment on-ramp (StoryBrand Ch.8): leave
  // info, hear a call, get the guide. Engagement, not a key conversion.
  ctaTransitional: (location?: string) =>
    trackEvent('cta_transitional', { event_category: 'engagement', location, cta_location: location }),

  // ── Forms (key events) ────────────────────────────────────────────────────
  formStart: () =>
    trackEvent('form_start', { event_category: 'engagement' }),
  formSubmit: () =>
    trackEvent('form_submit', { event_category: 'conversion' }),
  /** Transitional lead-capture form submit. `source` = per-placement tag
   *  (lead_form:<page>, download:<slug>, chat). Key event. */
  leadSubmit: (source: string) =>
    trackEvent('lead_submit', { event_category: 'conversion', source }),
  calculatorComplete: (params: { vertical?: string; lost_revenue?: number } = {}) =>
    trackEvent('calculator_complete', { event_category: 'conversion', ...params }),

  // ── Chat widget funnel (retrieval bot) ────────────────────────────────────
  chatOpen: (location?: string) =>
    trackEvent('chat_open', { event_category: 'engagement', location }),
  chatMessage: (params: { matched: boolean; intent?: string | null } ) =>
    trackEvent('chat_message', { event_category: 'engagement', matched: params.matched, intent: params.intent ?? 'none' }),
  /** The bot couldn't answer — a gap to add to the whitelist. Log the query. */
  chatUnanswered: (query: string) =>
    trackEvent('chat_unanswered', { event_category: 'engagement', query }),
  /** Visitor handed over contact info inside the chat. Key event. */
  chatLeadCapture: (method: 'email' | 'phone') =>
    trackEvent('chat_lead_capture', { event_category: 'conversion', method }),

  // ── Resources / gated PDF downloads (transitional CTA) ────────────────────
  resourceView: (slug: string) =>
    trackEvent('resource_view', { event_category: 'engagement', resource: slug }),
  downloadGate: (slug: string) =>
    trackEvent('download_gate_open', { event_category: 'engagement', resource: slug }),
  /** Email left to unlock a PDF. Key event. */
  downloadSubmit: (slug: string) =>
    trackEvent('download_submit', { event_category: 'conversion', resource: slug }),
  downloadOpen: (slug: string) =>
    trackEvent('download_open', { event_category: 'engagement', resource: slug }),

  // ── Sample-call player (proof asset) ──────────────────────────────────────
  sampleCallPlay: () =>
    trackEvent('sample_call_play', { event_category: 'engagement' }),
  sampleCallComplete: () =>
    trackEvent('sample_call_complete', { event_category: 'engagement' }),

  // ── Demo-call funnel (client side; server side fires via Measurement Protocol)
  demoCallRequest: (params: { vertical?: string } = {}) =>
    trackEvent('demo_call_request', { event_category: 'conversion', ...params }),
  demoCallInvalid: (reason: string) =>
    trackEvent('demo_call_request_invalid', { event_category: 'engagement', reason }),
  demoCallRateLimited: (limitType: 'ip' | 'number' | 'global') =>
    trackEvent('demo_call_rate_limited', { event_category: 'engagement', limit_type: limitType }),

  // ── Behavioral (NOT key events) ───────────────────────────────────────────
  /** One-shot per section per pageload (IntersectionObserver). Reveals where
   *  scanning stops. See components/SectionViewTracker.tsx. */
  sectionView: (section: string) =>
    trackEvent('section_view', { event_category: 'engagement', section }),
  faqOpen: (question: string) =>
    trackEvent('faq_open', { event_category: 'engagement', question }),
  verticalView: (vertical: string) =>
    trackEvent('vertical_view', { event_category: 'engagement', vertical }),
  pricingView: () =>
    trackEvent('pricing_view', { event_category: 'engagement' }),
  /** Fired once per milestone (25/50/75/90) per page — GA4-visible scroll depth
   *  so "how far did they get" shows in your daily reports, not just Clarity. */
  scrollMilestone: (percent: 25 | 50 | 75 | 90, page_path: string) =>
    trackEvent('scroll_depth', { event_category: 'engagement', percent, page_path }),
  outboundClick: (url: string) =>
    trackEvent('outbound_click', { event_category: 'engagement', url }),
}
