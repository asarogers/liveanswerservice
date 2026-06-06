import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { getAllServices, getAllServiceSlugs } from "@/lib/services-data";
import { getAllLocations, getAllLocationSlugs } from "@/lib/locations-data";
import { getAllPosts } from "@/lib/blog";
import { getAllGuideSlugs } from "@/lib/guides";
import { VERTICALS } from "@/lib/verticals";
import { loadSitePlan, type SitePlanLink } from "@/lib/site-plan";
import { existsSync } from "fs";
import { join } from "path";

/**
 * PRIVATE nav index — for the team's use, not for visitors.
 * - robots.ts disallows /dev-nav
 * - this page emits robots:noindex itself
 * - omitted from sitemap
 *
 * Driven by site-plan.json (lastmod_schedule + priority/exclude buckets) —
 * the same file Mission Control's /page-schedule panel edits and the sitemap
 * + noindex gates consume. Do NOT hand-edit week tables here; edit
 * site-plan.json (or use Mission Control) and this page follows.
 *
 * Wave cadence rules: /repo/important/WEBSITE-GROWTH-TIMING.md (10–20 URLs
 * per wave, ~2-week intervals to avoid Google's programmatic-SEO classifier).
 */
export const metadata: Metadata = {
  title: "Dev nav · Live Answer",
  description: "Private navigation index — not for public use.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

type PageStatus = "live" | "gated" | "needs-content" | "branch-held";

type PageEntry = {
  path: string;
  label: string;
  status: PageStatus;
  notes?: string;
};

type Section = {
  key: string;
  title: string;
  when: string;
  description?: string;
  pages: PageEntry[];
};

/* ───────────────────────────────────────────────────────────
   Hand-maintained labels for paths (everything else is derived
   from site-plan.json). Unlisted paths get a prettified slug.
   ─────────────────────────────────────────────────────────── */
const LABELS: Record<string, string> = {
  "/": "Homepage (HVAC)",
  "/calculator": "Calculator (HVAC missed-call)",
  "/pricing": "Pricing",
  "/locations/san-jose": "San Jose (HQ / NAP city)",
  "/services/hvac-answering-service": "HVAC vertical page",
  "/services/attorney-answering-service": "Legal vertical page",
  "/services/small-business-answering-service": "SMB umbrella vertical",
  "/services/dental-answering-service": "Dental vertical page",
  "/services/medical-office-answering-service": "Medical vertical page",
  "/services/restaurant-answering-service": "Restaurant vertical",
  "/services/real-estate-answering-service": "Real estate vertical",
  "/services/property-management-answering-service": "Property management vertical",
  "/services/salon-and-spa-answering-service": "Salon & spa vertical",
  "/services/veterinary-answering-service": "Veterinary vertical (NEW 2026-06-06)",
  "/ai-receptionist": "AI receptionist (SEO — 'best AI receptionist for small business')",
  "/missed-call-recovery": "Missed-call recovery (product page)",
  "/services/live-answering-service": "Live answering service (brand keyword)",
  "/how-it-works": "How it works",
  "/start-trial": "Start trial",
  "/comparison": "vs Ruby / Smith.ai / AnswerConnect",
  "/ccpa-compliance-call-recording": "CCPA compliance page",
  "/24-7-answering-service": "24/7 answering service (SEO)",
  "/vs-hiring-a-receptionist": "AI vs hiring a receptionist",
  "/cheap-answering-service": "Cheap answering service (SEO)",
  "/bilingual-answering-service-california": "Bilingual answering CA (SEO)",
  "/free-trial": "Free trial (paid-ads LP)",
  "/locations/sacramento": "Sacramento",
  "/locations/los-angeles": "Los Angeles / Inland Empire",
  "/locations/san-francisco-bay-area": "San Francisco Bay Area",
  "/guides/how-much-does-an-answering-service-cost": "Guide: answering service cost (queued in Mission Control #19)",
  "/guides/do-i-need-an-answering-service": "Guide: do I need one? (queued in Mission Control #20)",
  "/guides/what-is-call-overflow-handling": "Guide: call overflow handling (queued in Mission Control #21)",
  "/guides/after-hours-answering-service": "Guide: after-hours answering (queued in Mission Control #22)",
  "/guides/virtual-receptionist-cost": "Guide: virtual receptionist cost (queued in Mission Control #23)",
  "/guides/what-does-a-virtual-receptionist-do": "Guide: what does a VR do (queued in Mission Control #24)",
  "/guides/best-answering-service-for-small-business": "Guide: best answering service (queued in Mission Control #25)",
  "/guides/is-an-answering-service-worth-it": "Guide: worth it / ROI (queued in Mission Control #26)",
  "/spam-call-filtering": "Spam call filtering (feature page)",
  "/services/plumbing-answering-service": "Plumbing vertical (NEW 2026-06-06 — San Jose angle)",
};

/* Pages that are live from day one but not part of the ranked schedule. */
const ALWAYS_LIVE: PageEntry[] = [
  { path: "/about",         label: "About",                    status: "live", notes: "HVAC-primary, Legal next" },
  { path: "/privacy",       label: "Privacy policy",           status: "live", notes: "AI answering + CCPA two-party consent" },
  { path: "/terms",         label: "Terms of service",         status: "live", notes: "$500/mo, 7-day trial, booking guarantee" },
  { path: "/accessibility", label: "Accessibility statement",  status: "live", notes: "WCAG 2.1 AA" },
  { path: "/book",          label: "Book a consult",           status: "live", notes: "7-day trial" },
  { path: "/services",      label: "Industries index",         status: "live" },
  { path: "/locations",     label: "Locations index",          status: "live" },
  { path: "/blog",          label: "Blog index",               status: "live", notes: "301s post slugs to /guides" },
  { path: "/guides/missed-call-cost-california-small-business", label: "Guide: missed-call cost CA", status: "live", notes: "ships with Week 1 — guides are not gated" },
  { path: "/guides/ai-vs-human-answering-service-comparison",   label: "Guide: AI vs human",         status: "live", notes: "ships with Week 1 — covers 'AI receptionist vs live answering service' (opp 0.53)" },
  { path: "/guides/bilingual-answering-service-california",     label: "Guide: bilingual CA",        status: "live", notes: "ships with Week 1" },
];

const INFRA: PageEntry[] = [
  { path: "/sitemap.xml",      label: "Sitemap (generated)",    status: "live", notes: "app/sitemap.ts — priority/exclude from site-plan.json" },
  { path: "/robots.txt",       label: "Robots.txt (generated)", status: "live", notes: "app/robots.ts" },
  { path: "/api/contact",      label: "Contact form API",       status: "live", notes: "Resend integration" },
  { path: "/api/demo-call",    label: "Demo call API stub",     status: "live", notes: "Resend stub until Retell wired" },
  { path: "/site.webmanifest", label: "PWA manifest",           status: "live" },
];

function prettify(path: string): string {
  const slug = path.split("/").filter(Boolean).pop() ?? path;
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

const STATUS_STYLE: Record<PageStatus, { bg: string; color: string; label: string }> = {
  live:            { bg: "#000",    color: "#fff",    label: "LIVE / INDEXED" },
  gated:           { bg: "#FEF3C7", color: "#7A4F00", label: "GATED · NOINDEX" },
  "needs-content": { bg: "#FEE2E2", color: "#9B1F12", label: "NEEDS CONTENT" },
  "branch-held":   { bg: "#ECE4F7", color: "#5B3A8E", label: "ON WAVE BRANCH" },
};

export default function DevNavPage() {
  const services = getAllServices();
  const locations = getAllLocations();
  const posts = getAllPosts();
  const plan = loadSitePlan();

  // Union legacy services-data with the VERTICALS registry (vet et al. are registry-only)
  const serviceSlugs = new Set([...getAllServiceSlugs(), ...Object.keys(VERTICALS)]);
  const locationSlugs = new Set(getAllLocationSlugs());
  const guideSlugs = new Set(getAllGuideSlugs());

  const priorityUrls = new Map<string, SitePlanLink>(
    (plan?.sitemaps.priority.urls ?? []).map((u) => [u.url, u]),
  );
  const excludeUrls = new Map<string, SitePlanLink>(
    (plan?.exclude.urls ?? []).map((u) => [u.url, u]),
  );

  const existsInRepo = (path: string): boolean => {
    const slug = path.split("/").filter(Boolean).pop() ?? "";
    if (path.startsWith("/services/"))  return serviceSlugs.has(slug);
    if (path.startsWith("/locations/")) return locationSlugs.has(slug);
    if (path.startsWith("/guides/"))    return guideSlugs.has(slug);
    // top-level route — check the app dir (build-time fs is fine; this page is static)
    try {
      return existsSync(join(process.cwd(), "app", slug, "page.tsx"));
    } catch {
      return true;
    }
  };

  const toEntry = (path: string, branch?: string): PageEntry => {
    const inPriority = priorityUrls.get(path);
    const inExclude = excludeUrls.get(path);
    const built = path === "/" ? true : existsInRepo(path);
    // not built + wave has a branch → the CODE is held on that branch (by design).
    // Guides are never on branches — their content lives in the MC publisher
    // queue until publish day, so they stay "needs-content" regardless.
    const status: PageStatus = !built
      ? (branch && !path.startsWith("/guides/") ? "branch-held" : "needs-content")
      : inExclude ? "gated" : "live";
    return {
      path,
      label: LABELS[path] ?? prettify(path),
      status,
      notes: inExclude?.reason ?? inPriority?.reason,
    };
  };

  const weekSections: Section[] = (plan?.lastmod_schedule ?? []).map((w, i) => ({
    key: `week-${w.week}`,
    title: `Wave ${i + 1} (week ${w.week})`,
    when: `Mon ${w.target_date} · ${w.count} URLs${w.branch ? ` · ⎇ ${w.branch}` : ""}`,
    pages: w.urls.map((u) => toEntry(u, w.branch)),
  }));

  // Excluded pages that appear in no wave — deliberately unscheduled (e.g.
  // geo pages held until the rank-map milestone per WEBSITE-GROWTH-TIMING.md).
  const scheduledPaths = new Set(
    (plan?.lastmod_schedule ?? []).flatMap((w) => w.urls),
  );
  const onHold: PageEntry[] = [...excludeUrls.keys()]
    .filter((url) => !scheduledPaths.has(url))
    .map(toEntry);

  const sections: Section[] = [
    ...weekSections,
    ...(onHold.length > 0
      ? [{
          key: "on-hold",
          title: "On hold — not scheduled",
          when: "milestone-gated",
          description:
            "Built and noindexed, but deliberately NOT on the wave schedule. Per WEBSITE-GROWTH-TIMING.md: no geo expansion until the rank map shows ≥25–35% top-3 coverage from the GBP address and every core URL has ≥1 backlink. City-list pages are a spam flag since Aug 2025 — geo intent is carried by GBP service-area work instead.",
          pages: onHold,
        }]
      : []),
    {
      key: "always-live",
      title: "Always live (ungated)",
      when: "from launch",
      description:
        "Support, legal, and index pages that ship indexed from day one but aren't ranked targets. Guides are not gated by site-plan — they go live when their markdown lands in content/guides/ (Mission Control's publisher does this on the scheduled date).",
      pages: ALWAYS_LIVE,
    },
    {
      key: "infra",
      title: "Infrastructure",
      when: "always live",
      description: "Non-marketing routes, APIs, system files.",
      pages: INFRA,
    },
  ];

  const scheduled = weekSections.flatMap((s) => s.pages);
  const liveCount = scheduled.filter((p) => p.status === "live").length;

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <header style={{ marginBottom: 32, borderBottom: "1px solid #E2E8F0", paddingBottom: 24 }}>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 36, margin: 0, letterSpacing: "-0.02em" }}>
          Dev nav · publishing schedule
        </h1>
        <p style={{ marginTop: 12, fontSize: 14, color: "#475569", maxWidth: 760, lineHeight: 1.6 }}>
          Rendered from{" "}
          <code style={{ background: "#F1F5F9", padding: "2px 6px", borderRadius: 4 }}>site-plan.json</code>{" "}
          — the same file that drives the sitemap, per-page noindex gates, and Mission Control&rsquo;s{" "}
          <strong>/page-schedule</strong> panel. Site goes public <strong>Mon 2026-06-08</strong> (Week 1).
          Each Monday: move that week&rsquo;s URLs from <code>exclude</code> →{" "}
          <code>sitemaps.priority</code> (or use Mission Control&rsquo;s promote button) and redeploy.
          Cadence rules per <code>WEBSITE-GROWTH-TIMING.md</code>: small hand-quality batches; one weak
          page can stall the whole domain.
        </p>
        <p style={{ marginTop: 12, fontSize: 13, color: "#94A3B8" }}>
          <strong style={{ color: "#0F172A" }}>{liveCount}/{scheduled.length}</strong> scheduled pages live ·{" "}
          {services.length} service routes · {locations.length} location routes · {posts.length} guides/posts ·{" "}
          Phone: <a href={siteConfig.phone.href} style={{ color: "#0F172A" }}>{siteConfig.phone.display}</a>
        </p>
      </header>

      {sections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <footer style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid #E2E8F0", fontSize: 12, color: "#94A3B8" }}>
        <p style={{ margin: 0, lineHeight: 1.7 }}>
          Edit the schedule in{" "}
          <code style={{ background: "#F1F5F9", padding: "2px 6px", borderRadius: 4 }}>site-plan.json</code>{" "}
          (or Mission Control → page-schedule) — not in this file. Strategy + keyword rationale:{" "}
          <code style={{ background: "#F1F5F9", padding: "2px 6px", borderRadius: 4 }}>
            important/business/liveanswerservice/LIVEANSWERSERVICE.md
          </code>{" "}
          §&ldquo;Release Plan — Weekly Waves&rdquo;.
        </p>
      </footer>
    </main>
  );
}

function SectionBlock({ section }: { section: Section }) {
  const live = section.pages.filter((p) => p.status === "live").length;

  return (
    <section style={{ marginBottom: 40 }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 24, margin: 0, letterSpacing: "-0.01em" }}>
            {section.title}
          </h2>
          <span style={{ fontSize: 13, color: "#94A3B8", fontFamily: "ui-monospace, Menlo, monospace" }}>
            {section.when}
          </span>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", color: "#475569" }}>
            {live}/{section.pages.length} LIVE
          </span>
        </div>
        {section.description && (
          <p style={{ marginTop: 6, fontSize: 13, color: "#475569", maxWidth: 760, lineHeight: 1.55 }}>
            {section.description}
          </p>
        )}
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, border: "1px solid #E2E8F0", borderRadius: 10, background: "#fff", overflow: "hidden" }}>
        {section.pages.map((p) => (
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
