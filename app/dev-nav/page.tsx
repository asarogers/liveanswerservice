import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { getAllServices } from "@/lib/services-data";
import { getAllLocations } from "@/lib/locations-data";
import { getAllPosts } from "@/lib/blog";

/**
 * PRIVATE nav index — for the team's use, not for visitors.
 * - robots.ts disallows /dev-nav
 * - this page emits robots:noindex itself
 * - omitted from sitemap
 *
 * Grouped by RELEASE WAVE per the rollout plan in
 * /repo/important/WEBSITE-GROWTH-TIMING.md (10–20 URLs per wave, 2-week
 * intervals to avoid Google's programmatic-SEO classifier).
 */
export const metadata: Metadata = {
  title: "Dev nav · Live Answer",
  description: "Private navigation index — not for public use.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

type WaveKey = "wave1" | "wave2" | "wave3" | "wave4" | "infra";

type PageEntry = {
  path: string;
  label: string;
  status: "ready" | "needs-redesign" | "needs-content" | "compliance";
  notes?: string;
};

type Wave = {
  key: WaveKey;
  title: string;
  when: string;
  description: string;
  pages: PageEntry[];
};

/* ───────────────────────────────────────────────────────────
   WAVE DEFINITIONS — keep in sync with WEBSITE-GROWTH-TIMING.md
   ─────────────────────────────────────────────────────────── */
const WAVES: Wave[] = [
  {
    key: "wave1",
    title: "Wave 1 — Launch",
    when: "Week 0 · ship now",
    description:
      "Minimum viable site that can convert HVAC traffic. Every page hand-quality, redesigned, B&W aesthetic.",
    pages: [
      { path: "/",                                   label: "Homepage (HVAC)",                                  status: "ready",            notes: "VerticalLandingPage + hvac config" },
      { path: "/calculator",                         label: "Calculator (HVAC missed-call)",                     status: "ready",            notes: "3 presets, $500 payback math" },
      { path: "/pricing",                            label: "Pricing",                                           status: "ready",            notes: "Unlimited $500 + Custom" },
      { path: "/services/hvac-answering-service",    label: "HVAC vertical page",                                status: "ready",            notes: "Routes to homepage template via VERTICALS registry" },
      { path: "/how-it-works",                       label: "How it works",                                      status: "ready",            notes: "Updated for $500 Unlimited" },
      { path: "/about",                              label: "About",                                             status: "ready",            notes: "HVAC-primary, Legal next" },
      { path: "/start-trial",                        label: "Start trial",                                       status: "ready",            notes: "7-day, $199 setup waived w/ annual" },
      { path: "/privacy",                            label: "Privacy policy",                                    status: "ready",            notes: "Updated for AI answering + CCPA two-party consent" },
      { path: "/terms",                              label: "Terms of service",                                  status: "ready",            notes: "Updated for $500/mo, 7-day trial, booking guarantee" },
      { path: "/accessibility",                      label: "Accessibility statement",                           status: "ready",            notes: "WCAG 2.1 AA · updated May 2026" },
    ],
  },
  {
    key: "wave2",
    title: "Wave 2 — Legal vertical + objection handling",
    when: "Week 2–3 · after HVAC starts indexing",
    description:
      "Add Legal (highest LTV vertical per the brief) plus the high-trend SEO + competitive pages. Watch GSC before shipping.",
    pages: [
      { path: "/services/attorney-answering-service", label: "Legal vertical page",                              status: "ready",            notes: "VerticalLandingPage + legal config" },
      { path: "/comparison",                          label: "vs Ruby / Smith.ai / AnswerConnect",               status: "ready",            notes: "Updated for $500 flat" },
      { path: "/vs-hiring-a-receptionist",            label: "AI vs hiring a receptionist",                      status: "ready",            notes: "$500 → $6,000/yr math" },
      { path: "/24-7-answering-service",              label: "24/7 answering service (SEO)",                     status: "ready",            notes: "+60% Trends keyword" },
      { path: "/ccpa-compliance-call-recording",      label: "CCPA compliance page",                             status: "ready",            notes: "Zero competitors own this — white space. Updated with section nums." },
      { path: "/free-trial",                          label: "Free trial (paid-ads LP)",                          status: "ready",            notes: "7-day, no card" },
    ],
  },
  {
    key: "wave3",
    title: "Wave 3 — Dental/Medical + high-volume SEO + locations",
    when: "Week 4–6",
    description:
      "Add dental + medical verticals (sister pair), highest-trend SEO pages, and the three priority California metros.",
    pages: [
      { path: "/services/dental-answering-service",         label: "Dental vertical page",                       status: "ready",            notes: "VerticalLandingPage + dental config — HIPAA-aware, Dentrix/Open Dental/Eaglesoft" },
      { path: "/services/medical-office-answering-service", label: "Medical vertical page",                      status: "ready",            notes: "VerticalLandingPage + medical config — HIPAA-aware, Athena/eClinicalWorks/NextGen" },
      { path: "/cheap-answering-service",                   label: "Cheap answering service (SEO)",              status: "ready",            notes: "+130% YoY — biggest trend signal" },
      { path: "/bilingual-answering-service-california",    label: "Bilingual answering CA (SEO)",                status: "ready",            notes: "Updated for $500 flat, section nums, bilingual standard" },
      { path: "/locations/sacramento",                      label: "Sacramento (top HVAC metro)",                 status: "ready",            notes: "Bell Bros / Rooter Hero density · $500/mo flat" },
      { path: "/locations/los-angeles",                     label: "Los Angeles / Inland Empire",                 status: "ready",            notes: "800K SMBs · 48% Hispanic · bilingual edge" },
      { path: "/locations/san-francisco-bay-area",          label: "San Francisco Bay Area",                      status: "ready",            notes: "Slug is san-francisco-bay-area · 9-county coverage" },
    ],
  },
  {
    key: "wave4",
    title: "Wave 4 — Long tail, drip-fed",
    when: "Week 7+ · 2 pages/week",
    description:
      "Remaining verticals (restaurant, real estate, property mgmt, salon, SMB), more locations, blog content. Add slowly to avoid programmatic-SEO classifier.",
    pages: [
      { path: "/services/restaurant-answering-service",          label: "Restaurant vertical",                    status: "ready",            notes: "VerticalLandingPage + restaurant config — OpenTable/Resy/Toast" },
      { path: "/services/real-estate-answering-service",         label: "Real estate vertical",                   status: "ready",            notes: "VerticalLandingPage + real-estate config — Follow Up Boss/kvCORE/BoomTown" },
      { path: "/services/property-management-answering-service", label: "Property management vertical",           status: "ready",            notes: "VerticalLandingPage + property-management config — AppFolio/Buildium/Yardi" },
      { path: "/services/salon-and-spa-answering-service",       label: "Salon & spa vertical",                   status: "ready",            notes: "VerticalLandingPage + salon config — Vagaro/Mindbody/Booksy" },
      { path: "/services/small-business-answering-service",      label: "SMB umbrella vertical",                  status: "ready",            notes: "VerticalLandingPage + small-business config — Google Cal/Calendly/HubSpot" },
      { path: "/book",                                           label: "Book a consult",                         status: "ready",            notes: "Updated for 7-day trial" },
      { path: "/services",                                       label: "Industries index",                       status: "ready",            notes: "All 9 verticals now use VerticalLandingPage template" },
      { path: "/locations",                                      label: "Locations index",                        status: "ready",            notes: "Section nums updated · pricing fixed in locations-data" },
      { path: "/blog",                                           label: "Blog index",                             status: "ready",            notes: "Add posts gradually, 1–2/week" },
    ],
  },
  {
    key: "infra",
    title: "Infrastructure",
    when: "Always live",
    description: "Non-marketing routes, APIs, system files.",
    pages: [
      { path: "/sitemap.xml",       label: "Sitemap (generated)",            status: "ready",  notes: "app/sitemap.ts" },
      { path: "/robots.txt",        label: "Robots.txt (generated)",         status: "ready",  notes: "app/robots.ts" },
      { path: "/api/contact",       label: "Contact form API",               status: "ready",  notes: "Resend integration" },
      { path: "/api/demo-call",     label: "Demo call API stub",             status: "ready",  notes: "Resend stub until Retell wired" },
      { path: "/site.webmanifest",  label: "PWA manifest",                    status: "ready" },
    ],
  },
];

const STATUS_STYLE: Record<PageEntry["status"], { bg: string; color: string; label: string }> = {
  ready:           { bg: "#000",     color: "#fff",    label: "READY" },
  "needs-redesign":{ bg: "#FEF3C7",  color: "#7A4F00", label: "NEEDS REDESIGN" },
  "needs-content": { bg: "#FEE2E2",  color: "#9B1F12", label: "NEEDS CONTENT" },
  compliance:      { bg: "#FEE2E2",  color: "#9B1F12", label: "FIX BEFORE LAUNCH" },
};

export default function DevNavPage() {
  const services = getAllServices();
  const locations = getAllLocations();
  const posts = getAllPosts();

  const totalCounted = WAVES.flatMap((w) => w.pages).length;
  const ready = WAVES.flatMap((w) => w.pages).filter((p) => p.status === "ready").length;

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <header style={{ marginBottom: 32, borderBottom: "1px solid #E2E8F0", paddingBottom: 24 }}>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 36, margin: 0, letterSpacing: "-0.02em" }}>
          Dev nav · release plan
        </h1>
        <p style={{ marginTop: 12, fontSize: 14, color: "#475569", maxWidth: 760, lineHeight: 1.6 }}>
          Pages grouped by <strong>release wave</strong> per the rollout plan in{" "}
          <code style={{ background: "#F1F5F9", padding: "2px 6px", borderRadius: 4 }}>
            WEBSITE-GROWTH-TIMING.md
          </code>
          . Ship 10–20 URLs per wave, wait ~2 weeks between waves so Google&rsquo;s
          programmatic-SEO classifier doesn&rsquo;t flag the whole domain.
        </p>
        <p style={{ marginTop: 12, fontSize: 13, color: "#94A3B8" }}>
          <strong style={{ color: "#0F172A" }}>{ready}/{totalCounted}</strong> pages ready ·{" "}
          {services.length} service routes · {locations.length} location routes · {posts.length} blog posts ·{" "}
          Phone: <a href={siteConfig.phone.href} style={{ color: "#0F172A" }}>{siteConfig.phone.display}</a>
        </p>
      </header>

      {WAVES.map((wave) => (
        <WaveSection key={wave.key} wave={wave} />
      ))}

      <footer style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid #E2E8F0", fontSize: 12, color: "#94A3B8" }}>
        <p style={{ margin: 0, lineHeight: 1.7 }}>
          Edit waves in{" "}
          <code style={{ background: "#F1F5F9", padding: "2px 6px", borderRadius: 4 }}>
            app/dev-nav/page.tsx
          </code>
          . Each wave should add 5–10 hand-quality pages. Don&rsquo;t bulk-deploy weak content — one
          stalled page can freeze the whole domain for 2 weeks (see wellpreppedlife case study).
        </p>
      </footer>
    </main>
  );
}

function WaveSection({ wave }: { wave: Wave }) {
  const ready = wave.pages.filter((p) => p.status === "ready").length;

  return (
    <section style={{ marginBottom: 40 }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 24, margin: 0, letterSpacing: "-0.01em" }}>
            {wave.title}
          </h2>
          <span style={{ fontSize: 13, color: "#94A3B8", fontFamily: "ui-monospace, Menlo, monospace" }}>
            {wave.when}
          </span>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", color: "#475569" }}>
            {ready}/{wave.pages.length} READY
          </span>
        </div>
        <p style={{ marginTop: 6, fontSize: 13, color: "#475569", maxWidth: 760, lineHeight: 1.55 }}>
          {wave.description}
        </p>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, border: "1px solid #E2E8F0", borderRadius: 10, background: "#fff", overflow: "hidden" }}>
        {wave.pages.map((p) => (
          <PageRow key={p.path} page={p} />
        ))}
      </ul>
    </section>
  );
}

function PageRow({ page }: { page: PageEntry }) {
  const style = STATUS_STYLE[page.status];
  return (
    <li style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderBottom: "1px solid #F1F5F9", fontSize: 13 }}>
      <Link
        href={page.path}
        style={{ fontFamily: "ui-monospace, Menlo, monospace", color: "#0F172A", flexShrink: 0, fontWeight: 500 }}
      >
        {page.path}
      </Link>
      <span style={{ color: "#475569", fontSize: 13 }}>— {page.label}</span>
      {page.notes && (
        <span style={{ color: "#94A3B8", fontSize: 12, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>
          · {page.notes}
        </span>
      )}
      <span
        style={{
          marginLeft: "auto",
          padding: "3px 9px",
          borderRadius: 4,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.08em",
          background: style.bg,
          color: style.color,
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}
      >
        {style.label}
      </span>
    </li>
  );
}
