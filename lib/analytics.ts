declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, { page_path: window.location.pathname, ...params })
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
  // Core CTAs
  phoneClick: (location?: string) =>
    trackEvent('phone_click', { event_category: 'contact', location }),
  bookClick: (location?: string) =>
    trackEvent('book_click', { event_category: 'conversion', location }),
  trialStart: (location?: string) =>
    trackEvent('trial_start', { event_category: 'conversion', location }),
  formStart: () =>
    trackEvent('form_start', { event_category: 'engagement' }),
  formSubmit: () =>
    trackEvent('form_submit', { event_category: 'conversion' }),
  calculatorComplete: (params: { vertical?: string; lost_revenue?: number } = {}) =>
    trackEvent('calculator_complete', { event_category: 'conversion', ...params }),

  // Demo-call funnel (client side; server side fires via Measurement Protocol)
  demoCallRequest: (params: { vertical?: string } = {}) =>
    trackEvent('demo_call_request', { event_category: 'conversion', ...params }),
  demoCallInvalid: (reason: string) =>
    trackEvent('demo_call_request_invalid', { event_category: 'engagement', reason }),

  // Behavioral (not key events)
  faqOpen: (question: string) =>
    trackEvent('faq_open', { event_category: 'engagement', question }),
  verticalView: (vertical: string) =>
    trackEvent('vertical_view', { event_category: 'engagement', vertical }),
}
