/**
 * ============================================================
 *  LIVE ANSWER — Service Detail Page Data
 *
 *  Each vertical landing page from BUSINESS.md is represented as a
 *  ServiceDetail entry consumed by app/services/[slug]/page.tsx.
 *
 *  Publishing schedule: site-plan.json `lastmod_schedule` is canonical
 *  (9 weekly waves from 2026-06-08) — do not duplicate the week map here;
 *  it drifted once already. Gating is automatic via noindexSlugs().
 *
 *  Phone: (669) 365-6533 | liveanswerservice.com
 * ============================================================
 */

import { resolveImagePath } from "./image-path";
// Waves 2–9 service-page expansion ServiceDetails — isolated in ./verticals/expansion
// so wave-branch merges don't collide. Spec: important/business/liveanswerservice/SERVICE-PAGE-EXPANSION.md
import { EXPANSION_DETAILS } from "./verticals/expansion";

export function serviceImagePath(slug: string): string {
  return resolveImagePath("services", slug);
}

export interface ServiceDetail {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { heading: string; content: string }[];
  relatedServices: string[];
  relatedLocations: string[];
  /**
   * Hub/child silo fields — Core-30 architecture.
   *
   * isHub:    true if this page is the root of a silo cluster.
   *           Hub pages collect child pages into a "Related services" section.
   * hubSlug:  slug of the hub page this child belongs to. Set on child pages.
   *           A child must NOT appear in relatedServices for a different hub —
   *           the dev-time silo guard below enforces this at module load.
   *
   * NOTE: The 11 current service verticals are NOT restructured into hubs.
   * These fields are here to add the capability for future silos without
   * breaking any existing page. Simply set isHub: true on a future aggregator
   * page and hubSlug on its children.
   */
  isHub?: boolean;
  hubSlug?: string;
  name?: string; // Short display name used in nav/breadcrumbs (optional)
}

export const serviceDetails: ServiceDetail[] = [
  /* ──────────────────────────────────────────────────────────
     WEEK 1 — HVAC
     ────────────────────────────────────────────────────────── */
  {
    slug: "hvac-answering-service",
    title: "HVAC Answering Service — 24/7 AI Dispatcher for California",
    metaDescription:
      "AI receptionist for California HVAC contractors. Answers every call 24/7, books straight into Jobber, ServiceTitan, or Housecall Pro. Bilingual EN/ES. Flat $500/mo flat, no overages.",
    h1: "Never Lose Another HVAC Call to Voicemail",
    intro:
      "When a homeowner's AC dies at 11 PM in July, they don't leave a voicemail and wait until morning. They Google the next contractor on the list and call them. Industry data puts the HVAC miss rate at 27–62% — and every missed call is somewhere between $275 for a routine service and $4,000 for an install. We built Live Answer specifically for the California HVAC owner who is still answering the phone between jobs, watching emergencies bleed to whichever shop happened to pick up. Our AI dispatcher answers in under two rings, qualifies the job, triages emergency vs. routine, and books it directly into Jobber, ServiceTitan, or Housecall Pro — in English or Spanish, 24/7, for less than one day of a California dispatcher's pay per month.",
    sections: [
      {
        heading: "What the AI Dispatcher Actually Does on a Call",
        content:
          "The AI answers within two rings, in English or Spanish (the caller picks the language in the first three seconds, or the AI detects it). It takes the standard intake — name, callback number, service address, system age, symptom, urgency — using HVAC-trained vocabulary so it correctly handles \"the AC isn't blowing cold\" or \"my condensate line is leaking\" without forcing the homeowner to translate for it. If the AI flags the call as an emergency (no AC during a heatwave, gas smell, water damage from a leaking unit, no heat with elderly residents or infants), it texts the on-call owner within 30 seconds with the address and a one-line summary so they can call back personally. Routine calls get booked directly into the dispatch board for the next available slot. Every call ends with an SMS summary to the owner and a transcript stored for 90 days. The whole interaction sounds like a competent human — not a phone tree — because the system prompt is HVAC-specific, the voice model is tuned for phone audio, and the AI is explicitly scripted not to fake confidence on anything it isn't sure about.",
      },
      {
        heading: "Why Flat Rate Wins Over Per-Minute Pricing",
        content:
          "Most HVAC answering services either cap minutes (Whippy Lite at 2,000 credits per month, Simple Phones at 100 calls) or charge per-minute fees that surprise you on your monthly bill ($0.90–$1.50 per minute is standard for human services). During a summer heatwave or a winter cold snap your call volume can triple in a week — exactly when you can't afford for the answering service to either stop answering or send you a four-figure surprise invoice. Live Answer charges a flat $500/mo, unlimited — no per-minute fees, no overage charges, no call caps, and the rate is locked at sign-up. A single recovered $1,200 emergency install pays for three months of service. One residential AC replacement pays for the year. The math is so favorable that pricing transparency isn't a concession — it's the wedge.",
      },
      {
        heading: "Integrations Built for the HVAC Stack",
        content:
          "We book into Google Calendar or any iCal-compatible calendar — that covers the one-truck owner who is still managing dispatch on his phone. We also sync directly with the four dominant HVAC field-service platforms: Jobber, ServiceTitan, Housecall Pro, and FieldEdge. Bookings push as either a job or an estimate depending on call type, with the AI tagging emergency dispatches so they surface at the top of the daily board. If you use a CRM we haven't pre-built (RazorSync, ServiceFusion, Workiz), you can request a custom integration — we ship most in under two weeks. Two-way SMS means the AI can also confirm appointments with the homeowner the night before and reroute reschedules without you touching them. The result: by the time you finish a job and check your phone, the next two are already booked.",
      },
      {
        heading: "What Sign-Up Actually Looks Like",
        content:
          "We're a done-for-you service, not a self-serve AI tool you have to configure. The 30-minute kickoff call covers fifteen questions: your pricing structure, service area, after-hours rules, who gets paged for emergencies, what's in scope vs. what gets escalated, your competitor list (so the AI doesn't recommend them by accident), and your existing CRM. We build the agent in 48 hours and you're live by day three. The 7-day free trial has no credit card and no setup fee, and you keep your phone number portable in case you ever leave. Our booking guarantee is concrete: capture ten booked jobs in your first 30 days or get a full refund. At an average $500/job that's $5,000 of recovered revenue against a sub-$500 service — the math is the guarantee.",
      },
    ],
    // Cross-silo links prohibited (silo doctrine) — no same-silo siblings live
    // yet; the "View all industries" hub link carries discovery instead.
    relatedServices: [],
    relatedLocations: ["san-jose", "sacramento", "los-angeles", "san-francisco-bay-area"],
  },

  /* ──────────────────────────────────────────────────────────
     WEEK 1 — LEGAL
     ────────────────────────────────────────────────────────── */
  {
    slug: "attorney-answering-service",
    title: "Attorney Answering Service — 24/7 AI Intake for California Firms",
    metaDescription:
      "AI intake specialist for California solo and small firms. 24/7 bilingual EN/ES, conflict check at the call, books into Clio, MyCase, PracticePanther. Flat $500/mo Unlimited, no per-minute fees.",
    h1: "Never Miss Another Retainer",
    intro:
      "One missed call to a California PI or immigration firm is, on average, more than $5,000 in lost retainer revenue. A bar-association referral that hits voicemail at 8 PM Saturday becomes another firm's client by Sunday morning — Spanish-speaking PI and immigration clients in particular call three or four firms in a single sitting, and the firm that answers first wins. Live Answer's Always-On Intake answers every potential client 24/7, runs a real conflict check during the call, qualifies the matter by practice area, and books the consult directly into Clio, MyCase, or PracticePanther — in English or Spanish — before the caller dials anyone else. It's built for solo to ten-attorney firms across PI, immigration, family, criminal defense, employment, and estate practices.",
    sections: [
      {
        heading: "Intake That Sounds Like a Specialist, Not a Phone Tree",
        content:
          "The AI intake specialist is scripted by practice area. A PI call gets the right questions: date of incident, injuries, current treatment, insurance carrier, whether police were involved. An immigration call gets the right ones: visa status, country of origin, deadlines, USCIS notices in hand. A family law call gets safety screening first, then case type. The AI runs a real-time conflict check against the firm's existing client list before the consult is booked — anything ambiguous gets flagged to the attorney's cell, never to the caller. High-value matters can be hot-transferred to the attorney's mobile mid-call based on a configurable threshold. Every intake ends with an SMS plus email summary to the attorney within 60 seconds of the call, plus a full transcript stored with two-party-consent disclosure baked into the greeting per CCPA. The AI never gives legal advice — that's a hard guardrail in the prompt — and it tells the caller so directly when asked.",
      },
      {
        heading: "Bilingual Is Standard, Not an Upcharge",
        content:
          "California has 10.4 million Spanish speakers and the legal incumbents — Answering Legal, LexReception, Smith.ai — either treat Spanish as a premium add-on or cap it to business hours. We include native English-Spanish on Better and Best tiers, with the AI detecting the caller's language within three seconds and switching automatically. For a Los Angeles, Inland Empire, or Central Valley firm doing PI or immigration work, this single feature pays for the service. The Spanish intake is genuinely conversational — we use a native Spanish voice model, not English-text translated mid-call — and Spanish-speaking callers do not get a degraded version of the intake. The same conflict check, the same qualifying questions, the same calendar integration, the same SMS summary to the attorney. If your existing answering service quoted you extra for bilingual, that's because bilingual is hard for a human staffing model; for an AI built bilingual from day one, it's the same call.",
      },
      {
        heading: "Pricing That Doesn't Punish Growth",
        content:
          "The $500/mo Unlimited plan covers 24/7 calls, bilingual EN/ES, conflict check at intake, and native sync into Clio, MyCase, PracticePanther, and Lawmatics — locked rate at sign-up, no per-minute fees. Multi-attorney firms with custom routing requirements take the Custom plan (15-minute discovery call, quote in 24 hours). Setup is $199 one-time, waived with annual prepay. The booking guarantee is five qualified intakes in your first 30 days — defined up front as practice-area match plus no conflict plus consult booked — or we refund the month. A single captured retainer ($3K–$10K+) covers Unlimited for 6–20 months. Answering Legal sits at $300–$500/mo for English-only voicemail-style intake; we match the price and add 24/7 AI, native bilingual, and real CRM sync the incumbents don't have.",
      },
    ],
    // Cross-silo links prohibited (silo doctrine) — see hvac entry note.
    relatedServices: [],
    relatedLocations: ["san-jose", "los-angeles", "sacramento", "san-francisco-bay-area"],
  },

  /* ──────────────────────────────────────────────────────────
     WEEK 1 — SMALL BUSINESS (general)
     ────────────────────────────────────────────────────────── */
  {
    slug: "small-business-answering-service",
    title: "Best Answering Service for Small Business — California AI Receptionist",
    metaDescription:
      "Affordable answering service for California small businesses. Bilingual EN/ES, 24/7, books into your calendar, flat $500/mo flat. 7-day free trial, no credit card.",
    h1: "Every Customer Reaches You. Even When You Can't Pick Up.",
    intro:
      "Most California small businesses lose 6 out of 10 calls — to voicemail, to busy signals, to staff who are already with another customer. Industry data has the average SMB losing $126,000 a year to missed calls, which is the kind of number a buyer dismisses until you walk them through their own math: how many calls do you miss in a week, what's an average customer worth, what does that multiply to? Live Answer is the AI receptionist for the owner who is still personally answering the phone — solo HVAC contractors, single-location dentists, sole-prop service businesses, salons, consultants. We answer every call 24/7 in English or Spanish, qualify the caller, book the appointment into your calendar, and text you the summary in under a minute. Flat rate. Unlimited calls. No per-minute surprises. Less than one captured customer pays for the year.",
    sections: [
      {
        heading: "Built for the Owner Who Is Still the Front Desk",
        content:
          "If your business has one to three people and the owner is still answering the phone between jobs, that's exactly who Live Answer is built for. $500/mo Unlimited answers every call, in English or Spanish, with calendar booking, SMS summary, emergency escalation to your cell, spam and robocall filtering, and 90 days of call recordings and transcripts. $500/mo Unlimited adds CRM sync to whichever system you actually use (Jobber, HouseCallPro, Clio, Dentrix, Jane App), known-caller recognition so returning customers are greeted by name, Google review request automation after every booking, no-show and missed-connection follow-up SMS, and business-hours human escalation between 9 and 5 for anything the AI flags as needing real judgement. Both tiers are flat-rate with no per-minute fees and no overage charges — the rate you sign up at is the rate forever. About 70% of customers pick Pro, mostly because the CRM sync alone saves more hours per week than the price difference.",
      },
      {
        heading: "Bilingual That Actually Works in Conversation",
        content:
          "California has 10.4 million Spanish-speaking residents, and roughly 40% of SMBs across the state serve Spanish-speaking customers regularly. The standard market response is either no Spanish coverage at all or an English-only voicemail that loses the call. A few incumbents claim bilingual, but it's commonly a transfer-to-Spanish-line that runs business hours only. We built Live Answer bilingual from day one. The AI detects the caller's language in the first three seconds and switches to native Spanish — same qualifying questions, same booking flow, same CRM sync, same SMS summary to you. The voice model is tuned for Spanish phonetics specifically, not English text run through translation mid-call. If your business is in Los Angeles, the Inland Empire, or Central Valley, this feature usually pays for the service by itself; the customers most likely to hang up on English-only voicemail are the ones we capture for you.",
      },
      {
        heading: "Why \"Every Call\" Matters More Than \"Cheaper Per Minute\"",
        content:
          "The market splits into two failure modes. Cheap AI competitors at $25–$49/mo cap minutes at 100–200, then either stop answering or hit you with per-minute overages. Human answering services like Ruby, AnswerConnect, and Posh start at $245–$400/mo and charge per-minute fees on top, so during a busy month your bill can double. Both designs make you ration calls. Live Answer is flat-rate unlimited because rationing calls is the same as not answering them — and not answering them is exactly the problem you're trying to solve. Your locked rate at sign-up never goes up. The 7-day free trial requires no credit card. The booking guarantee is concrete: if we don't generate measurable booked revenue in your first 30 days, you get a refund. There's nothing to ration, nothing to count, nothing to second-guess when call volume spikes. You answer every call, full stop.",
      },
    ],
    // Cross-silo links prohibited (silo doctrine) — see hvac entry note.
    relatedServices: [],
    relatedLocations: ["san-jose", "sacramento", "los-angeles", "san-francisco-bay-area"],
  },

  // Waves 2–9 service-page expansion (16 verticals, noindex until promoted)
  ...EXPANSION_DETAILS,
];

/* ============================================================
   DEV-TIME SILO GUARD
   ────────────────────────────────────────────────────────────
   At module load, warn if a service's relatedServices list
   includes a child that belongs to a DIFFERENT hub. Cross-hub
   internal links undermine silo authority and confuse crawlers.
   This runs only in development builds (NODE_ENV !== 'production')
   so there is zero production overhead.
   ============================================================ */
if (process.env.NODE_ENV !== "production") {
  const hubMap: Record<string, string> = {};
  for (const s of serviceDetails) {
    if (s.hubSlug) hubMap[s.slug] = s.hubSlug;
  }
  for (const s of serviceDetails) {
    const myHub = s.isHub ? s.slug : s.hubSlug;
    for (const rel of s.relatedServices) {
      const relHub = hubMap[rel];
      if (relHub && myHub && relHub !== myHub) {
        console.warn(
          `[services-data] silo violation: "${s.slug}" (hub: ${myHub}) has relatedServices entry "${rel}" which belongs to hub "${relHub}". Cross-hub links fragment topical authority.`,
        );
      }
    }
  }
}

/* ============================================================
   HELPERS — stable export shape for [slug] route + sitemap
   ============================================================ */
export function getServiceBySlug(slug: string): ServiceDetail | null {
  return serviceDetails.find((s) => s.slug === slug) ?? null;
}

export function getAllServiceSlugs(): string[] {
  return serviceDetails.map((s) => s.slug);
}

export function getAllServices(): ServiceDetail[] {
  return serviceDetails;
}

/**
 * Returns all child services for a given hub slug.
 * Children are services where hubSlug === the given slug.
 */
export function getChildServices(hubSlug: string): ServiceDetail[] {
  return serviceDetails.filter((s) => s.hubSlug === hubSlug);
}

/**
 * Returns the hub service for a given child slug, or undefined if the
 * child has no hubSlug or the hub page doesn't exist in serviceDetails.
 */
export function getHubService(childSlug: string): ServiceDetail | undefined {
  const child = serviceDetails.find((s) => s.slug === childSlug);
  if (!child?.hubSlug) return undefined;
  return serviceDetails.find((s) => s.slug === child.hubSlug) ?? undefined;
}
