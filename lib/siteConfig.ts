/**
 * ============================================================
 *  LIVE ANSWER SERVICE — Site Configuration
 *  Single source of truth for contact info, social handles,
 *  and brand details. Edit here and it updates everywhere.
 * ============================================================
 */

export const siteConfig = {
  // ── Brand ─────────────────────────────────────────────────
  name: "Live Answer",
  tagline: "Never miss another booking.",
  founder: "Asa Rogers",
  url: "https://liveanswerservice.com",

  // ── Contact ───────────────────────────────────────────────
  phone: {
    display: "(669) 365-6533",
    href: "tel:+16693656533",
    schema: "+1-669-365-6533",
  },
  email: "hello@liveanswerservice.com",

  // ── Scheduling ────────────────────────────────────────────
  // TODO: Replace placeholder once Cal.com handle is created.
  calcom: {
    username: "liveanswerservice",
    consultationSlug: "30min",
    followUpSlug: "15min",
  },

  // ── Social Media ──────────────────────────────────────────
  social: {
    instagram: "https://www.instagram.com/liveanswerservice",
    facebook:  "https://www.facebook.com/liveanswerservice",
    tiktok:    "https://www.tiktok.com/@liveanswerservice",
    linkedin:  "https://www.linkedin.com/company/liveanswerservice",
  },

  // ── SEO defaults ──────────────────────────────────────────
  description:
    "AI receptionist that answers every call 24/7, books the appointment, and texts you the summary. Built for California small businesses. Bilingual EN/ES.",
  keywords: [
    "answering service for small business",
    "AI receptionist California",
    "24/7 answering service",
    "bilingual answering service",
    "HVAC answering service",
    "attorney answering service",
    "live answering service",
    "virtual receptionist California",
    "missed call recovery",
  ],
};
