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
    h1: "Never Lose Another HVAC Job to Voicemail",
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
          "Most HVAC answering services either cap minutes (Whippy Lite at 2,000 credits per month, Simple Phones at 100 calls) or charge per-minute fees that surprise you on your monthly bill ($0.90–$1.50 per minute is standard for human services). During a summer heatwave or a winter cold snap your call volume can triple in a week — exactly when you can't afford for the answering service to either stop answering or send you a four-figure surprise invoice. Live Answer charges a flat $500/mo Unlimited and $500/mo Unlimited, with no per-minute fees, no overage charges, no caps on unlimited tiers, and the rate is locked at sign-up. A single recovered $1,200 emergency install pays for three months of Pro. One residential AC replacement pays for the year. The math is so favorable that pricing transparency isn't a concession — it's the wedge.",
      },
      {
        heading: "Integrations Built for the HVAC Stack",
        content:
          "On Solo we book into Google Calendar or any iCal-compatible calendar — that covers the one-truck owner who is still managing dispatch on his phone. On Pro we sync directly with the four dominant HVAC field-service platforms: Jobber, ServiceTitan, Housecall Pro, and FieldEdge. Bookings push as either a job or an estimate depending on call type, with the AI tagging emergency dispatches so they surface at the top of the daily board. If you use a CRM we haven't pre-built (RazorSync, ServiceFusion, Workiz), Pro customers can request a custom integration — we ship most in under two weeks. Two-way SMS means the AI can also confirm appointments with the homeowner the night before and reroute reschedules without you touching them. The result: by the time you finish a job and check your phone, the next two are already booked.",
      },
      {
        heading: "What Sign-Up Actually Looks Like",
        content:
          "We're a done-for-you service, not a self-serve AI tool you have to configure. The 30-minute kickoff call covers fifteen questions: your pricing structure, service area, after-hours rules, who gets paged for emergencies, what's in scope vs. what gets escalated, your competitor list (so the AI doesn't recommend them by accident), and your existing CRM. We build the agent in 48 hours and you're live by day three. The 7-day free trial has no credit card and no setup fee, and you keep your phone number portable in case you ever leave. Our booking guarantee is concrete: capture ten booked jobs in your first 30 days or get a full refund. At an average $500/job that's $5,000 of recovered revenue against a sub-$500 service — the math is the guarantee.",
      },
    ],
    relatedServices: ["attorney-answering-service", "small-business-answering-service"],
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
    relatedServices: ["hvac-answering-service", "small-business-answering-service"],
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
    relatedServices: ["hvac-answering-service", "attorney-answering-service"],
    relatedLocations: ["san-jose", "sacramento", "los-angeles", "san-francisco-bay-area"],
  },

  /* ──────────────────────────────────────────────────────────
     WEEK 2 — DENTAL (noindex via site-plan until launch)
     ────────────────────────────────────────────────────────── */
  {
    slug: "dental-answering-service",
    title: "Dental Answering Service — AI Front Desk for California Practices",
    metaDescription:
      "AI front desk for California dental practices. Books new patients 24/7 into Dentrix, Open Dental, Eaglesoft, Curve, or NexHealth. Bilingual EN/ES. HIPAA-aware. Flat $500/mo flat.",
    h1: "Your Front Desk Shouldn't End at 5 PM or Pause at Lunch",
    intro:
      "California dental practices miss 20–38% of calls — and almost all of them happen at lunch, before 9 AM, or after 5 PM. At an average $850 lifetime value per new patient, that's six figures per practice per year leaking out the front desk. Front Desk On-Call is Live Answer's offering for dental, medical, and wellness practices: a 24/7 AI receptionist that books new patients straight into your PMS, handles Spanish-speaking callers natively, and runs HIPAA-aware intake. It's built to cover the lunch-hour gap and the after-5 PM gap without replacing your existing team — your in-office staff stays with patients in the chair, the AI handles the rest.",
    sections: [
      {
        heading: "Books Directly Into Your Practice Management System",
        content:
          "Pro and Best tiers integrate with the dominant California dental and medical PMS platforms: Dentrix, Open Dental, Eaglesoft, Curve, NexHealth, and Athenahealth for medical. Solo books to Google Calendar or any iCal-compatible system, which covers the smaller single-provider practice that hasn't yet committed to a full PMS for booking. The AI is scripted for the standard dental intake — new patient versus existing, insurance carrier and verification questions, pain level triage for emergencies, preferred provider and chair side. Recall calls are an option on Better and Best: the AI can place outbound reminder calls to lapsed patients on a schedule you set, which historically recovers 8–15% of stale patients. Booking conflicts and ambiguous schedules get flagged to your office manager for review before they hit the chair, so the AI never overbooks or double-books — it errs on escalation.",
      },
      {
        heading: "HIPAA-Aware, CCPA-Compliant by Default",
        content:
          "Two-party-consent disclosure plays at the start of every call, satisfying California's recording laws. The intake script is set to minimum-necessary information by default — the AI does not record PHI in transcripts unless your office explicitly opts in. We provide a signed BAA for HIPAA compliance and our infrastructure encrypts call recordings at rest and in transit. Deletion requests are honored within 30 days. If your office prefers, we can disable recording entirely and retain only the structured summary (caller name, callback number, service requested, appointment booked). The AI is also scripted to refuse to give clinical advice — emergency or pain-level triage questions get routed to a triage protocol you define during onboarding, never to AI-generated medical guidance.",
      },
      {
        heading: "Pricing That Closes the Math Against a Receptionist",
        content:
          "A California front-desk hire runs $38,000–$48,000 per year fully loaded, plus 60+ days to replace when they quit (and turnover is brutal right now). Unlimited at $500/mo is 8–10% of that cost and covers 24/7 plus bilingual plus PMS sync plus recall calls. Custom plan adds multi-location routing, custom intake by service line, and a monthly performance review. WellReceived charges $375–$395/mo for 150–300 minutes; TrueLark charges $249/mo with a dental-specific feature set; we beat both on flat-rate unlimited at the higher volume tiers. Booking guarantee: 30 booked appointments in 30 days or a full refund plus a $250 credit toward a real receptionist hire. At $850 LTV per new patient, capturing ten extra bookings is $8,500 of recovered revenue against a sub-$500 service — a 19x payback in 30 days.",
      },
    ],
    relatedServices: ["medical-office-answering-service", "small-business-answering-service"],
    relatedLocations: ["san-jose", "los-angeles", "san-francisco-bay-area"],
  },

  /* ──────────────────────────────────────────────────────────
     WEEK 3 — RESTAURANT
     ────────────────────────────────────────────────────────── */
  {
    slug: "restaurant-answering-service",
    title: "Restaurant Answering Service — AI Phone Host for California Restaurants",
    metaDescription:
      "AI phone host for California restaurants. Takes reservations, handles takeout orders, answers menu questions 24/7. Bilingual EN/ES. Books into OpenTable, Resy, Toast. Flat $500/mo flat.",
    h1: "Every Reservation. Captured.",
    intro:
      "Restaurants miss calls during the worst possible moments — the dinner rush, when the host is seating a six-top, when the line out the door is exactly the kind of demand signal a hungry caller hangs up on rather than waits through. Average reservation value across California sit-down restaurants runs $50–$200, and at high single-digit miss rates compounded over a year, that's another full table-turn per week walking out the door before it ever walks in. Live Answer's restaurant configuration is an AI phone host that answers every call within two rings, books reservations directly into OpenTable, Resy, or your POS, takes takeout orders, and handles routine menu and hours questions — in English or Spanish — without ever putting a caller on hold.",
    sections: [
      {
        heading: "Reservations, Takeout, and FAQ in a Single Voice Layer",
        content:
          "The AI handles the three high-volume call types in a restaurant: reservation booking (with party size, time, special requests, allergies), takeout orders (with item-by-item ordering against your menu, modifications, total quote, and pickup time), and FAQ (hours, parking, menu items, dietary accommodations, private dining). Reservations push to OpenTable or Resy in real time; takeout orders push to Toast or Square POS as draft tickets your kitchen confirms. Anything outside scope — a wedding inquiry, a press request, a complaint — gets routed to the manager's cell with a summary, never auto-resolved. The voice model is tuned for hospitality warmth (we want the AI to sound like the best host you've ever hired, not a phone tree), and the system prompt includes your restaurant's actual personality — formal versus casual, the names of the chefs and managers, your house cocktail's correct pronunciation.",
      },
      {
        heading: "Why the Slang.ai $399 Anchor Is Beatable",
        content:
          "Slang.ai is the visible incumbent in restaurant-specific AI phone hosts, priced at around $399/mo with a feature set similar to ours. The opportunity isn't beating them on features — it's that the rest of the restaurant AI market below $399 is wide open. Most California restaurants doing $1M–$5M in revenue cannot justify a $399/mo line item until they understand what one captured Friday-night reservation is worth. Live Answer's $500/mo Unlimited (Custom for multi-location) bracket Slang.ai with flat-rate unlimited (Slang.ai counts calls), bilingual standard (Slang.ai charges extra), and a 7-day free trial with no card. For restaurants in the LA / Inland Empire / Central Valley markets where Spanish-speaking diners are 30–50% of inbound, bilingual is the meaningful wedge — and it's included.",
      },
      {
        heading: "What Happens When the Phone Rings During Rush",
        content:
          "Most restaurant phone systems fail during rush because the host is physically with another guest. The standard fallback is a voicemail nobody checks until the next morning, which loses the reservation entirely. Live Answer answers in parallel — the host stays at the door, the AI takes the call. If the caller wants to speak to a person specifically, the AI offers to take a message and have the manager call back within 30 minutes, or it can hot-transfer to a mobile number during business hours. Spam and robocall filtering is on by default. The AI ends every call with a confirmation SMS to the caller (\"You're booked for 4 at 7:30 PM Saturday, see you then\") and a structured summary to your manager dashboard. By Sunday morning you have a transcript of every Friday-night call, what you booked, what you couldn't accommodate, and what your phone host actually sounded like.",
      },
    ],
    relatedServices: ["small-business-answering-service", "salon-and-spa-answering-service"],
    relatedLocations: ["san-jose", "san-francisco-bay-area", "los-angeles"],
  },


  /* ──────────────────────────────────────────────────────────
     WEEK 7 — MEDICAL OFFICE
     ────────────────────────────────────────────────────────── */
  {
    slug: "medical-office-answering-service",
    title: "Medical Office Answering Service — California AI Front Desk",
    metaDescription:
      "AI front desk for California medical offices. Books patients into Athena, Epic, Cerner, NextGen. Bilingual EN/ES. HIPAA-compliant with signed BAA. Flat $500/mo flat.",
    h1: "Every Patient Call. Answered. Booked. Charted.",
    intro:
      "California medical practices face the same structural problem as dental: a front desk that's drowning between patient check-ins, insurance verification, and the phones, with the result that lunch-hour and after-hours calls — which is where most new patients try to reach you — go to voicemail. The cost is steep: a new patient is worth $1,200–$3,500 in lifetime value in primary care, much more in specialty practices. Live Answer's medical office configuration is a HIPAA-compliant AI front desk that books patients directly into Athena, Epic, Cerner, NextGen, or any major EHR, handles insurance pre-screening, and triages clinical urgency to your protocol — in English or Spanish, 24/7.",
    sections: [
      {
        heading: "Clinical Triage to Your Protocol, Not AI Guesses",
        content:
          "The AI does not give clinical advice. That's a hard guardrail. What it does is run an urgency-screening script that your practice defines during onboarding — a structured set of questions the front desk would normally ask (chief complaint, duration, severity, current medications, recent ER visits, etc.) that map to a routing decision: same-day appointment, next-available appointment, nurse callback, or 911 redirect. The AI never decides — it follows the protocol you wrote. Anything outside the script gets routed to your on-call provider or office manager. Recordings and transcripts are encrypted, retention is configurable from 7 days to indefinite, and we provide a signed BAA before any clinical deployment.",
      },
      {
        heading: "Insurance Pre-Screening That Saves Real Front-Desk Hours",
        content:
          "On Better and Best tiers the AI handles insurance pre-screening — collecting carrier, plan name, member ID, group number, and primary subscriber details — and can run real-time verification through your existing verification tooling if it's API-accessible (Availity, Waystar, pVerify). Patients without coverage or with coverage the practice doesn't accept get redirected appropriately rather than booked into a slot that will later cancel for billing reasons. New-patient packets get sent via SMS or email automatically, with reminders if the patient doesn't complete them before the appointment. The hours saved at the front desk add up quickly — a single FTE freed from insurance phone-tag is usually worth the cost of the service.",
      },
      {
        heading: "Bilingual Medical Intake Without an Interpreter Line",
        content:
          "Medical practices serving Spanish-speaking populations either staff bilingual front desk (expensive, hard to hire) or rely on interpreter services that add a call-leg and friction. Live Answer's medical configuration is native bilingual on Better and Best — same clinical triage protocol, same EHR sync, same insurance pre-screening, in Spanish. For practices in LA County, the Inland Empire, Central Valley, and parts of the Bay Area, this addresses a meaningful share of the patient population without the interpreter overhead. The voice model is tuned for medical Spanish vocabulary specifically; the AI handles common conditions, symptoms, and medications fluently.",
      },
    ],
    relatedServices: ["dental-answering-service", "small-business-answering-service"],
    relatedLocations: ["san-jose", "los-angeles", "san-francisco-bay-area"],
  },



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
