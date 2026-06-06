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
     WEEK 5 — REAL ESTATE
     ────────────────────────────────────────────────────────── */
  {
    slug: "real-estate-answering-service",
    title: "Real Estate Answering Service — AI Receptionist for California Agents",
    metaDescription:
      "AI receptionist for California real estate agents and brokerages. Captures buyer/seller leads 24/7, books showings into your calendar, bilingual EN/ES. Flat $500/mo flat.",
    h1: "Every Lead. Captured Before They Call the Next Agent.",
    intro:
      "California real estate runs on speed-to-lead — a buyer or seller calling on a Zillow listing at 9 PM on a Tuesday has three or four other agents in mind, and the agent who picks up wins the contact. Industry-standard buyer/seller commissions in California are $15,000–$60,000 per closed deal, so a missed call isn't a $50 mistake — it's a $20,000 one. Live Answer's real estate configuration answers every inbound call 24/7, qualifies the lead by type (buyer / seller / renter / inquiry), pulls the listing if a caller references a specific MLS number, and books the showing or callback into your calendar before the caller dials anyone else. Bilingual English-Spanish standard.",
    sections: [
      {
        heading: "Lead Qualification That Goes Beyond \"Take a Message\"",
        content:
          "The AI is scripted to qualify every inbound call by lead type: is this a buyer (in which case: price range, timeline, financing pre-approval status, neighborhoods of interest, currently working with another agent), a seller (current property address, motivation, timeline, current loan, comparable sales they're aware of), a renter (budget, move-in date, pet status, employment), or an investor (cash or financed, target return, property type). Specific MLS or address references get logged in the summary so you walk into the callback already knowing what they were looking at. Anything ambiguous gets escalated to your cell. Bookings push to your team calendar — showings as appointments, callbacks as 15-minute slots — and the AI confirms by SMS to the lead before you ever see the message.",
      },
      {
        heading: "Bilingual In Markets Where It Decides the Deal",
        content:
          "Across the Central Valley, the Inland Empire, and large parts of LA County, Spanish-speaking buyers and sellers are a meaningful share of the market — and they are the most likely to hang up on English-only voicemail and call the next agent. The standard real estate answering services on the market either don't offer Spanish at all or charge extra for a transfer-to-Spanish-line that runs business hours only. Live Answer is bilingual standard on Better and Best, with native voice modeling and the same lead qualification flow regardless of language. For a brokerage in LA, Riverside, or Fresno, this single feature usually pays for the service in the first month.",
      },
      {
        heading: "Booking Guarantee Tied to the Math That Closes Deals",
        content:
          "Our booking guarantee for real estate is concrete: capture five qualified buyer or seller leads in your first 30 days — defined as full intake plus contact info plus follow-up booked — or you get a full refund. At California commission averages, one closed transaction from those five leads pays for the service for several years. Flat rate, unlimited calls, no per-minute fees, no overages, locked rate at sign-up. The phone is the front door of a real estate practice; missing calls there is missing the entire business. Live Answer makes the front door always answered.",
      },
    ],
    relatedServices: ["property-management-answering-service", "small-business-answering-service"],
    relatedLocations: ["san-jose", "los-angeles", "san-francisco-bay-area", "sacramento"],
  },

  /* ──────────────────────────────────────────────────────────
     WEEK 5 — PROPERTY MANAGEMENT
     ────────────────────────────────────────────────────────── */
  {
    slug: "property-management-answering-service",
    title: "Property Management Answering Service — California AI Receptionist",
    metaDescription:
      "24/7 AI receptionist for California property managers. Handles maintenance requests, leasing inquiries, tenant calls. Bilingual EN/ES. Books into AppFolio, Buildium, Yardi. Flat $500/mo flat.",
    h1: "Every Tenant Call. Logged, Triaged, Routed.",
    intro:
      "Property management is the call-volume problem in concentrated form: maintenance requests at 2 AM, leasing inquiries during business hours, lease renewals, complaints, vendor coordination — all flowing through one phone line, and most of it after-hours or while staff is in the field. Industry-standard property management answering services charge per minute and treat maintenance triage as a premium feature. Live Answer's property management configuration handles all of it on a flat rate: 24/7 maintenance request intake with urgency triage, leasing inquiry qualification, tenant complaint logging, and direct sync into AppFolio, Buildium, or Yardi.",
    sections: [
      {
        heading: "Maintenance Triage That Actually Distinguishes Urgency",
        content:
          "The AI is scripted to classify every maintenance call by urgency category: emergency (flooding, gas leak, no heat in winter, no AC during a heat advisory, security/lockout, sewage backup), urgent (no hot water, partial HVAC failure, electrical issue with safety risk, major appliance failure), and routine (cosmetic, low-priority repair, general request). Emergencies trigger an immediate SMS to the on-call manager and an outbound text to your preferred vendor. Urgent items go into the dispatch queue with a same-day or next-business-day SLA tag. Routine items are logged as work orders directly in AppFolio, Buildium, or Yardi with photos requested via follow-up SMS to the tenant. The AI never auto-dispatches vendors without confirmation; that's a policy decision your team makes per property, not something we automate around you.",
      },
      {
        heading: "Leasing Inquiries Without the Showing-Coordination Headache",
        content:
          "Inbound leasing calls get qualified the same way: bedrooms, budget, move-in timeline, pet status, household size, employment / income, current housing status. The AI pulls the inquired-about unit's availability and pricing from your PMS in real time. If the unit is available and the lead qualifies for self-tour, the AI offers the next three available slots and books directly. If the unit requires an agent-led showing, the AI books with your on-site team and confirms via SMS. Anything that needs human judgment — credit-challenged applicants, voucher holders, non-standard accommodations — gets escalated. The 7-day free trial is structured around exactly this: forward your leasing line at it for two weeks, count the leads it qualifies that you wouldn't have caught otherwise.",
      },
      {
        heading: "Bilingual Tenant Communication, By Default",
        content:
          "A significant share of California tenants are Spanish-speaking, and tenant satisfaction (which feeds renewal rates) is strongly correlated with whether they can communicate maintenance issues in their primary language. Most property management answering services offer English-only or upcharge for bilingual. Live Answer includes native English-Spanish on Better and Best, with the same triage logic and PMS sync in either language. The AI also handles the routine but important details that tenants want consistency on — confirming what time the plumber is coming, whether they need to be home, what entry procedures apply — in the language the tenant called in.",
      },
    ],
    relatedServices: ["real-estate-answering-service", "small-business-answering-service"],
    relatedLocations: ["san-jose", "los-angeles", "san-francisco-bay-area", "sacramento"],
  },

  /* ──────────────────────────────────────────────────────────
     WEEK 5 — SALON & SPA
     ────────────────────────────────────────────────────────── */
  {
    slug: "salon-and-spa-answering-service",
    title: "Salon & Spa Answering Service — AI Receptionist for California",
    metaDescription:
      "AI receptionist for California salons and spas. Books appointments 24/7 into Vagaro, Mindbody, Booker, Square Appointments. Bilingual EN/ES. Flat $500/mo flat.",
    h1: "Every Booking. While Your Stylists Are With Clients.",
    intro:
      "Salons and spas miss calls during exactly the hours they most need to be answering them — when every stylist is with a client, when reception is checking someone out, when the phone is ringing through to voicemail because there are three chairs and two phone lines. Industry-typical missed-call rates for salons run 25–40%, and a missed new-client call is usually a $150–$400 service plus the lifetime value of a recurring client. Live Answer's salon configuration is an AI receptionist that books directly into Vagaro, Mindbody, Booker, or Square Appointments — 24/7, bilingual, in the voice and brand your salon already has.",
    sections: [
      {
        heading: "Booking Logic That Respects Your Stylists' Schedules",
        content:
          "The AI handles the standard salon booking flow: service type (cut, color, balayage, blowout, treatment, etc.), preferred stylist by name, preferred time, new client versus existing. The AI looks at your booking software in real time to find genuine availability — not slots that look open but are blocked for prep — and offers the next three valid options. New-client intake includes contact info, hair type or relevant skin condition, allergies (relevant for color and chemical services), and how they heard about you. Existing clients are recognized by phone number when possible and the AI greets them by name. Cancellations and reschedules are handled inline; no-show fees and deposit policies are explained per your salon's rules. Last-minute fill-ins for a same-day cancellation can be offered to a waitlist your AI maintains.",
      },
      {
        heading: "After-Hours and Weekend Bookings That Actually Convert",
        content:
          "A significant share of salon bookings get researched on weeknights and weekends — when the prospective client has time to think about it, and your salon is closed. The standard market response is voicemail, which converts at single digits because the prospect has already moved on by Monday morning. Live Answer answers those calls in real time: a Tuesday-night caller can have a Saturday appointment booked, confirmed by SMS, and added to your calendar before they hang up. That single behavior shift — from \"left a voicemail\" to \"booked an appointment\" — is the entire ROI case for the service. Rosie's salon-specific competitor charges $49–$999/mo with similar features; we bracket them with flat $500 and bilingual standard.",
      },
      {
        heading: "Bilingual That Captures the Walk-In Demographic",
        content:
          "Walk-in and call-in salon clients in much of California — LA, Inland Empire, Central Valley, Sacramento, parts of the Bay — are heavily Spanish-speaking. Most salon booking platforms have English-only phone integration even if their app supports Spanish. Live Answer answers calls in native Spanish when the caller speaks Spanish — the AI detects the language in the first three seconds — and handles the same booking flow with the same software sync. For a salon serving a Spanish-speaking neighborhood, the captured-revenue math from bilingual alone usually exceeds the cost of the service.",
      },
    ],
    relatedServices: ["small-business-answering-service", "restaurant-answering-service"],
    relatedLocations: ["los-angeles", "san-jose", "sacramento", "san-francisco-bay-area"],
  },


  /* ──────────────────────────────────────────────────────────
     WEEK 7 — LIVE ANSWERING SERVICE (generic + brand-anchor SEO)
     ────────────────────────────────────────────────────────── */
  {
    slug: "live-answering-service",
    title: "Live Answering Service — 24/7 AI Receptionist for California",
    metaDescription:
      "Live answering service that picks up every call 24/7 — never voicemail. Bilingual EN/ES, books into your calendar, flat $500/mo flat. 7-day free trial, no credit card.",
    h1: "A Live Answering Service That Actually Answers — Every Call",
    intro:
      "\"Live answering service\" used to mean a person at a call center reading from your script. It worked, but it cost $245–$400/mo on the low end and $4,000/mo on the high end, with per-minute fees on top and limited hours in the practical reality of human staffing. Live Answer is the next version of that promise: an answering service that's genuinely live — picks up every call, in under two rings, 24/7, in English or Spanish — at a flat rate that doesn't punish you for growing. The mechanism is AI, but the experience the caller has is the experience a great human receptionist would give them: warmth, competence, fast booking, and a real summary to the business owner within minutes of the call.",
    sections: [
      {
        heading: "What \"Live\" Means When the Receptionist Is AI",
        content:
          "The bar is simple: a caller should not be able to tell within ten seconds that they're talking to a system rather than a person. We hit that bar by using best-in-class voice models tuned for phone-quality audio (Inworld TTS 1.5 Max, Cartesia, ElevenLabs depending on the use case), real-time speech recognition with under 300ms latency (Deepgram Nova), and a script discipline that explicitly forbids the AI from faking confidence on anything it isn't sure about. Combine that with vertical-specific intake — HVAC, legal, dental, restaurant, real estate, salon, medical — and the caller's experience is closer to talking to a competent specialist receptionist than to a generic robot. The AI is also bilingual by default and answers in native Spanish if the caller starts in Spanish.",
      },
      {
        heading: "Why a 24/7 AI Beats a Live Human Service on Real Calls",
        content:
          "Human answering services are excellent at being personable; they are not good at being available. After-hours coverage is either expensive or not actually live (the \"24/7\" plan often routes after-hours to voicemail or to a smaller skeleton staff). Industry-standard miss rates for human services during peak hours run 8–15%, because there's a queue and at some point the queue overflows. Live Answer doesn't have a queue. Every call is answered in parallel. There's no after-hours degradation — 3 AM Saturday gets the same answer as 10 AM Tuesday. For most California small businesses, the cost-and-coverage math closes immediately: flat $500 a month, every call, every hour, every language we support, no overages.",
      },
      {
        heading: "Tested by Calling the Demo Line Yourself",
        content:
          "The strongest proof we can offer is the demo line. Call (669) 365-6533 and the actual AI receptionist answers — try to break it, ask it to book an appointment, switch to Spanish mid-call, throw it edge cases. The AI in the demo line is the same engine that handles production calls; the only difference is that the demo-mode prompt knows the caller is likely evaluating the service and can pivot to booking a setup consult or texting a Stripe payment link if the caller wants to sign up on the same call. No competitor we found offers this — Smith.ai, Ruby, AnswerConnect all require a sales call or a credit-card-required trial before you can experience the product. Live Answer is the experience.",
      },
    ],
    relatedServices: ["small-business-answering-service", "hvac-answering-service", "attorney-answering-service"],
    relatedLocations: ["san-jose", "san-francisco-bay-area", "los-angeles", "sacramento"],
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
