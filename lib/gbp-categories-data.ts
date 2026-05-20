/**
 * ============================================================
 *  LIVE ANSWER — GBP Categories & Services
 *
 *  Source of truth for the Google Business Profile categories
 *  Live Answer uses and the services nested under each. Should
 *  mirror Cloudflare D1 `gbp_locations` for liveanswerservice.
 * ============================================================
 */

export interface GBPService {
  /** GBP display name (exact text used in Google Business Profile) */
  name: string;
  /** URL slug — points to /services/[slug] */
  slug: string;
  /** True if the service page doesn't exist yet and must be generated */
  isNew?: boolean;
}

export interface GBPCategory {
  /** URL slug — used at /services/categories/[slug] */
  slug: string;
  /** Short display name (title-cased) */
  name: string;
  /** Exact GBP category name as it appears in Google Business Profile */
  gbpName: string;
  /** One-line tagline shown under the category name */
  tagline: string;
  /** 2-3 sentence description for the category hub page */
  description: string;
  /** Whether this is the GBP primary category */
  isPrimary?: boolean;
  services: GBPService[];
}

export const gbpCategories: GBPCategory[] = [
  /* ── 1. Answering Service (Primary) ─────────────────────── */
  {
    slug: "answering-service",
    name: "Answering Service",
    gbpName: "Telephone answering service",
    tagline: "AI receptionist for every California small business — 24/7, bilingual EN/ES",
    description:
      "Live Answer is an AI-powered telephone answering service that picks up every call, books the appointment, and texts you the summary. We serve California small businesses across HVAC, legal, dental, medical, restaurants, real estate, salons, and more. Flat $500/mo flat, no per-minute fees.",
    isPrimary: true,
    services: [
      { name: "24/7 AI receptionist",                slug: "live-answering-service" },
      { name: "After-hours answering service",       slug: "live-answering-service" },
      { name: "Bilingual English-Spanish answering", slug: "live-answering-service" },
      { name: "Appointment booking service",         slug: "small-business-answering-service" },
      { name: "Small business answering service",    slug: "small-business-answering-service" },
    ],
  },

  /* ── 2. Virtual Receptionist ────────────────────────────── */
  {
    slug: "virtual-receptionist",
    name: "Virtual Receptionist",
    gbpName: "Virtual office",
    tagline: "Replace your front desk with an AI receptionist that never sleeps",
    description:
      "Live Answer's virtual receptionist service replaces or augments your existing front desk with a 24/7 AI receptionist trained for your industry. Books directly into your calendar or CRM, handles bilingual callers natively, and sends you a summary of every call within 60 seconds.",
    services: [
      { name: "Virtual receptionist",                  slug: "small-business-answering-service" },
      { name: "Bilingual virtual receptionist",        slug: "small-business-answering-service" },
      { name: "Industry-trained AI receptionist",      slug: "live-answering-service" },
      { name: "Appointment scheduling AI",             slug: "small-business-answering-service" },
    ],
  },

  /* ── 3. Industry-Specific (HVAC) ────────────────────────── */
  {
    slug: "hvac-services",
    name: "HVAC Answering",
    gbpName: "HVAC contractor support service",
    tagline: "24/7 AI dispatcher for California HVAC and plumbing shops",
    description:
      "An AI dispatcher that answers every HVAC service call 24/7, triages emergencies versus routine, and books directly into Jobber, ServiceTitan, Housecall Pro, or FieldEdge. Bilingual English-Spanish. Flat rate, no per-minute fees, no caps.",
    services: [
      { name: "HVAC answering service",            slug: "hvac-answering-service" },
      { name: "Plumbing answering service",        slug: "hvac-answering-service" },
      { name: "After-hours dispatcher AI",         slug: "hvac-answering-service" },
      { name: "Emergency dispatch routing",        slug: "hvac-answering-service" },
    ],
  },

  /* ── 4. Industry-Specific (Legal) ───────────────────────── */
  {
    slug: "legal-intake",
    name: "Legal Intake",
    gbpName: "Legal services",
    tagline: "24/7 AI intake specialist for California solo and small firms",
    description:
      "Live Answer's Always-On Intake service answers every potential client 24/7, runs a real-time conflict check, qualifies the matter, and books the consult into Clio, MyCase, or PracticePanther — in English or Spanish, before they call the next firm.",
    services: [
      { name: "Attorney answering service",        slug: "attorney-answering-service" },
      { name: "Legal intake specialist (AI)",      slug: "attorney-answering-service" },
      { name: "PI / immigration intake",           slug: "attorney-answering-service" },
      { name: "Bilingual legal intake",            slug: "attorney-answering-service" },
    ],
  },

  /* ── 5. Industry-Specific (Healthcare) ──────────────────── */
  {
    slug: "healthcare-front-desk",
    name: "Healthcare Front Desk",
    gbpName: "Medical office",
    tagline: "HIPAA-aware AI front desk for California dental and medical practices",
    description:
      "Front Desk On-Call is Live Answer's healthcare configuration — a HIPAA-aware AI receptionist that books new patients into Dentrix, Open Dental, Eaglesoft, Curve, NexHealth, Athena, Epic, and other major PMS / EHR systems. Bilingual EN/ES standard.",
    services: [
      { name: "Dental answering service",          slug: "dental-answering-service" },
      { name: "Medical office answering service",  slug: "medical-office-answering-service" },
      { name: "Patient appointment booking AI",    slug: "medical-office-answering-service" },
      { name: "Bilingual medical intake",          slug: "medical-office-answering-service" },
    ],
  },
];

/* ============================================================
   HELPERS
   ============================================================ */
export function getCategoryBySlug(slug: string): GBPCategory | null {
  return gbpCategories.find((c) => c.slug === slug) ?? null;
}

export function getAllCategorySlugs(): string[] {
  return gbpCategories.map((c) => c.slug);
}

export function getAllCategories(): GBPCategory[] {
  return gbpCategories;
}
