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
  founder: "Ace Rodgers",
  url: "https://liveanswerservice.com",

  // ── Contact ───────────────────────────────────────────────
  phone: {
    display: "(669) 316-1742",
    href: "tel:+16693161742",
    schema: "+1-669-316-1742",
  },
  email: "ace@liveanswerservice.com",

  // ── Scheduling ────────────────────────────────────────────
  // Live Cal.com handle (verified 2026-06-08). Booking embedded on /book via CalEmbed.
  // Books onto the founder's Google Calendar. cal.com/liveanswerservice/{30min,15min}.
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
