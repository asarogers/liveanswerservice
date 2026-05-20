declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, { page_path: window.location.pathname, ...params })
}

export const Events = {
  phoneClick: () => trackEvent('phone_click', { event_category: 'contact' }),
  bookClick:  () => trackEvent('book_click',  { event_category: 'conversion' }),
  formSubmit: () => trackEvent('contact_form_submit', { event_category: 'conversion' }),
}
