import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { getAllServices } from "@/lib/services-data";
import { loadSitePlan, noindexSlugs } from "@/lib/site-plan";

export const metadata: Metadata = {
  title: "Industries We Serve — Live Answer AI Receptionist",
  description:
    "Live Answer is built for California HVAC contractors and law firms — with dental, medical, real estate, restaurants, salons, and property management coming next. Bilingual EN/ES, 24/7, $500/mo flat.",
  alternates: { canonical: "/services" },
};

// Map vertical icon — kept inline so the index doesn't need a separate data file.
const ICON_FOR: Record<string, string> = {
  "hvac-answering-service":              "ti-flame",
  "attorney-answering-service":          "ti-scale",
  "small-business-answering-service":    "ti-building-store",
  "dental-answering-service":            "ti-tooth",
  "restaurant-answering-service":        "ti-tools-kitchen-2",
  "real-estate-answering-service":       "ti-home",
  "property-management-answering-service": "ti-building",
  "salon-and-spa-answering-service":     "ti-cut",
  "medical-office-answering-service":    "ti-stethoscope",
  "live-answering-service":              "ti-phone-call",
};

export default function ServicesIndexPage() {
  // Surface gated services in a separate "coming soon" rail so the page
  // reflects the actual publishing schedule.
  const noindex = noindexSlugs(loadSitePlan());
  const all = getAllServices();
  const live    = all.filter((s) => !noindex.has(s.slug));
  const coming  = all.filter((s) =>  noindex.has(s.slug));

  return (
    <>
      <section className="la-hero">
        <div className="wrap-narrow">
          <h1>Built for <em>your industry</em>.</h1>
          <p className="sub">
            Vertical-specific intake scripts. Real CRM and calendar sync. Bilingual EN/ES.
            Flat rate, unlimited calls, locked at sign-up.
          </p>
        </div>
      </section>

      <section className="scenarios" aria-label="Industries we currently serve">
        <div className="wrap">
          <div className="section-eyebrow">Available now</div>
          <h2 className="section-title">{live.length} industries.</h2>
          <div className="scenarios-grid">
            {live.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="scenario-card"
                style={{ display: "block", textDecoration: "none" }}
              >
                <div className="time">
                  <i className={`ti ${ICON_FOR[s.slug] ?? "ti-briefcase"}`} aria-hidden="true" />{" "}
                  {s.h1.replace(/^Never (lose|miss) another /i, "").replace(/\.$/, "")}
                </div>
                <div className="body">{s.metaDescription}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {coming.length > 0 && (
        <section className="plan" aria-label="Industries launching soon">
          <div className="wrap">
            <div className="section-eyebrow">Launching soon</div>
            <h2 className="section-title">{coming.length} more on the way.</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: 12,
                maxWidth: 900,
                margin: "0 auto",
              }}
            >
              {coming.map((s) => (
                <div
                  key={s.slug}
                  style={{
                    padding: 16,
                    background: "#fdfaf3",
                    border: "1px solid #d9cdb1",
                    borderRadius: 10,
                    fontSize: 14,
                    color: "#5c5147",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                    <i className={`ti ${ICON_FOR[s.slug] ?? "ti-briefcase"}`} aria-hidden="true" />
                    <span style={{ fontSize: 13, fontWeight: 500, color: "#1a1611" }}>
                      {s.h1.replace(/^Never (lose|miss) another /i, "").replace(/\.$/, "")}
                    </span>
                  </div>
                  <div style={{ fontSize: 13, lineHeight: 1.5 }}>{s.metaDescription}</div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 24, textAlign: "center", fontSize: 13, color: "#94867a" }}>
              On the 8-week launch schedule. Call the demo line if you want early access for your
              vertical.
            </p>
          </div>
        </section>
      )}

      <section className="final-cta">
        <div className="wrap">
          <h2>Don&rsquo;t see your industry?</h2>
          <div className="sub">Call the demo line and tell the AI what you do. We&rsquo;ll build a custom script.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </section>
    </>
  );
}
