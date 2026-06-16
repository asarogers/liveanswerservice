/**
 * lib/common-faqs.ts
 *
 * Shared FAQ sets for pages that don't define their own. Used by:
 *   - app/locations/[slug]/page.tsx
 *   - app/services/[slug]/page.tsx
 *
 * Power both the visible FAQ accordion and FAQPage JSON-LD. Keep
 * wording grounded in PAA queries to earn featured-snippet real
 * estate and AI-overview citations. Answers under ~500 chars.
 */
export interface FAQ { q: string; a: string }

/** Universal FAQs rendered on every location page. `{city}` is substituted at render time. */
export const LOCATION_FAQS: FAQ[] = [
  {
    q: "How much does an answering service cost in {city}?",
    a: "Live Answer is flat-rate: $500/mo Unlimited, with no per-minute fees, no overage charges, and no minute caps. A {city} receptionist runs $38,000–$48,000/yr fully loaded — we're typically 8–12% of that. One captured customer call usually pays for the service for the month.",
  },
  {
    q: "Does Live Answer work for small businesses in {city}?",
    a: "Yes — we serve California small businesses across HVAC, legal, dental, medical, restaurants, real estate, salons, and property management. {city} businesses can sign up in 24–48 hours; the 7-day free trial is no credit card, no setup fee, and we port a forwarding number so it's reversible.",
  },
  {
    q: "Is the answering service bilingual English-Spanish in {city}?",
    a: "Yes. Native English-Spanish is included standard at no extra cost. The AI detects the caller's language in the first three seconds and switches automatically — same intake, same calendar booking, same SMS summary to the business owner, in either language.",
  },
  {
    q: "How quickly can a {city} business get started with Live Answer?",
    a: "30-minute kickoff call, agent built within 48 hours, live by day three. The 7-day free trial has no credit card required. We forward a number to the AI and your business starts capturing calls within 24 hours of going live.",
  },
  {
    q: "What CRMs and calendars does Live Answer integrate with?",
    a: "Live Answer integrates directly with Jobber, ServiceTitan, Housecall Pro, FieldEdge (HVAC), Clio, MyCase, PracticePanther (legal), Dentrix, Open Dental, Eaglesoft, Curve, NexHealth (dental/medical), OpenTable, Resy, Toast (restaurants), Vagaro, Mindbody, Square Appointments (salons), AppFolio, Buildium, Yardi (property mgmt), and any Google Calendar / iCal-compatible system.",
  },
];

/** Universal FAQs rendered on every service detail page. */
export const SERVICE_FAQS: FAQ[] = [
  {
    q: "How much does Live Answer cost?",
    a: "Flat $500/mo Unlimited — same price for every vertical. No per-minute fees, no overage charges, no minute caps. Setup is free for the first 30 customers per vertical and the rate is locked at sign-up.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — a 7-day free trial with no credit card and no setup fee. We port a forwarding number, you point your overflow or after-hours line at the AI, and it starts taking real calls within 24 hours.",
  },
  {
    q: "Does the AI sound robotic?",
    a: "No. The voice models are tuned for phone-quality audio (Inworld TTS 1.5 Max, Cartesia, ElevenLabs) and the AI is scripted not to fake confidence on anything it isn't sure about. Call (669) 316-1742 to hear the actual production engine — it's the same one that handles paying customer calls.",
  },
  {
    q: "Is it bilingual English-Spanish?",
    a: "Yes — native bilingual is included standard at no extra cost. The AI detects the caller's language in the first three seconds and switches to native Spanish automatically. Same intake, same booking, same CRM sync in either language.",
  },
  {
    q: "What happens if the AI doesn't capture bookings?",
    a: "Every vertical has a concrete booking guarantee — for HVAC it's 10 booked appointments in 30 days, for legal it's 5 qualified intakes, for dental it's 30 booked appointments. Miss the guarantee and you get a full refund. The 7-day free trial itself is no-card, no-commitment.",
  },
  {
    q: "How do I know my calls are actually being answered?",
    a: "Every call gives you a text summary within 60 seconds — caller name, number, what they wanted, and what the AI booked — plus a full recording and transcript you can pull up any time. You see every answered call, every booking, and every transfer, so nothing happens to your phone line that you can't verify.",
  },
  {
    q: "I don't get many calls yet — is the flat rate still worth it?",
    a: "Most owners ask this, and the math usually answers it: one captured customer call typically pays for the month. You're not buying minutes, you're buying never missing the call that matters — the after-hours emergency, the Spanish-speaking caller, the new patient — at a rate that's locked whether you take 5 calls a month or 500. There are no per-minute fees, so a quiet month costs you the same flat $500 and a busy one never surprises you.",
  },
];

/** Substitute `{city}` (and any future placeholders) at render time. */
export function resolveFAQ(faq: FAQ, vars: Record<string, string>): FAQ {
  const sub = (s: string) =>
    Object.entries(vars).reduce((acc, [k, v]) => acc.replaceAll(`{${k}}`, v), s);
  return { q: sub(faq.q), a: sub(faq.a) };
}
