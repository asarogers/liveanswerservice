/**
 * lib/service-faqs.ts
 *
 * Per-service FAQ sets. Each slug maps to PAA-aligned questions specific to
 * that vertical. Used by app/services/[slug]/page.tsx to override the
 * generic SERVICE_FAQS fallback from common-faqs.ts.
 *
 * Answers under ~500 chars — optimized for featured snippets + AI overviews.
 */
import type { FAQ } from "@/lib/common-faqs";

export const SERVICE_FAQ_MAP: Record<string, FAQ[]> = {
  "hvac-answering-service": [
    {
      q: "Does the AI dispatcher know HVAC terminology?",
      a: "Yes. The system prompt is HVAC-specific — capacitor, condensate line, R-410A, MERV ratings, evap coils. The AI correctly handles \"the AC isn't blowing cold\" or \"my furnace won't ignite\" without forcing the caller to translate. The voice model is also tuned for residential / commercial vocabulary differences.",
    },
    {
      q: "Can the AI book directly into ServiceTitan, Jobber, or Housecall Pro?",
      a: "Yes — Pro tier integrates with Jobber, ServiceTitan, Housecall Pro, and FieldEdge directly. Bookings push as either a job or estimate based on the call type, with emergency dispatches flagged at the top of the daily board. Custom CRM integrations (RazorSync, ServiceFusion, Workiz) ship in under two weeks for Pro customers.",
    },
    {
      q: "How does emergency triage work?",
      a: "The AI flags emergencies — no AC during a heatwave, gas smell, water damage, no heat with elderly residents or infants — and texts the on-call owner within 30 seconds with the address and a one-line summary. Routine calls get booked directly. The owner defines the emergency criteria during the 30-minute kickoff.",
    },
    {
      q: "What's the cost for HVAC?",
      a: "Flat $149/mo on Good (after-hours + weekends), $249/mo on Better (24/7 with CRM sync and bilingual), $399/mo on Best (unlimited multi-line). Setup is waived for the first 30 customers. The booking guarantee is 10 booked jobs in 30 days or a full refund.",
    },
    {
      q: "What if I already have a Spanish-speaking dispatcher?",
      a: "Live Answer's bilingual covers after-hours, weekends, and any time your dispatcher is on another call — without doubling the headcount cost. Native Spanish is included on Better and Best, with the same triage logic and CRM sync regardless of language.",
    },
  ],

  "attorney-answering-service": [
    {
      q: "Does the AI run a real conflict check?",
      a: "Yes. The AI queries your existing client list during the intake and flags any potential conflicts to the attorney's cell — never to the caller. Anything ambiguous gets escalated. Conflicts are caught before the consult is booked, not after.",
    },
    {
      q: "Can the AI handle PI, immigration, family, and criminal intake?",
      a: "Yes. The intake script is scripted per practice area. A PI call gets the right questions: date of incident, injuries, treatment status, insurance. An immigration call gets visa status, country of origin, USCIS deadlines. Family law starts with safety screening. Criminal defense starts with custody status.",
    },
    {
      q: "Does the AI give legal advice?",
      a: "No. That's a hard guardrail in the prompt — the AI is scripted to say so explicitly when asked, and to redirect any legal-advice question to the attorney consult. ABA model rules on attorney-client privilege are respected throughout.",
    },
    {
      q: "Can the AI hot-transfer to my cell for high-value matters?",
      a: "Yes. You define a threshold during onboarding — high-value PI, time-sensitive immigration deadlines, or any other criteria — and the AI hot-transfers those calls to your mobile during configured hours. Outside those hours the AI takes a full intake and sends the summary within 60 seconds.",
    },
    {
      q: "What's the legal pricing?",
      a: "$500/mo Unlimited — 24/7 calls, bilingual EN/ES, conflict check at intake, Clio/MyCase/PracticePanther/Lawmatics sync. Custom plan for multi-attorney firms with multi-location routing or specialized workflows. $199 one-time setup, waived with annual prepay. Guarantee: 5 qualified intakes in 30 days or full refund.",
    },
  ],

  "dental-answering-service": [
    {
      q: "Can the AI book directly into Dentrix or Open Dental?",
      a: "Yes — Pro and Best tiers integrate directly with Dentrix, Open Dental, Eaglesoft, Curve, NexHealth, and Athenahealth. Solo books to Google Calendar. The AI handles new patient versus existing patient routing and insurance pre-screening.",
    },
    {
      q: "Is the AI HIPAA-compliant?",
      a: "Yes. We provide a signed BAA before clinical deployment. Recordings are encrypted at rest and in transit. The intake script collects minimum necessary information by default — no PHI in transcripts unless your office explicitly opts in. Deletion requests are honored within 30 days.",
    },
    {
      q: "Does it handle insurance verification?",
      a: "On Better and Best tiers the AI collects carrier, plan name, member ID, group number, and subscriber details, and can run real-time verification through Availity, Waystar, or pVerify if API-accessible. Patients with out-of-network coverage get redirected rather than booked into slots that will later cancel.",
    },
    {
      q: "What about recall calls for lapsed patients?",
      a: "Better and Best support outbound recall calls — the AI places reminder calls to lapsed patients on a schedule you set. Historically recovers 8–15% of stale patients depending on the practice's patient mix.",
    },
    {
      q: "What's the dental pricing?",
      a: "$500/mo Unlimited — 24/7 calls, bilingual EN/ES, full PMS sync (Dentrix/Open Dental/Eaglesoft/NexHealth), HIPAA-aware intake, recall calls. Custom plan for multi-location practices. $199 one-time setup, waived with annual prepay. Guarantee: 30 booked appointments in 30 days or full refund.",
    },
  ],
};

export function getServiceFAQs(slug: string): import("@/lib/common-faqs").FAQ[] | null {
  return SERVICE_FAQ_MAP[slug] ?? null;
}
