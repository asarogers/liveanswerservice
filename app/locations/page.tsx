import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { getAllLocations } from "@/lib/locations-data";
import { loadSitePlan, noindexSlugs } from "@/lib/site-plan";

export const metadata: Metadata = {
  title: "Service Areas — Live Answer Across California",
  description:
    "Live Answer is headquartered in San Jose and serves businesses across California — Bay Area, Sacramento, Los Angeles, and the Inland Empire.",
  alternates: { canonical: "/locations" },
};

export default function LocationsIndexPage() {
  const noindex = noindexSlugs(loadSitePlan());
  const all     = getAllLocations();
  const live    = all.filter((l) => !noindex.has(l.slug));
  const coming  = all.filter((l) =>  noindex.has(l.slug));

  return (
    <>
      <section className="la-hero">
        <div className="wrap-narrow">
          <h1>HQ in San Jose. <em>Statewide reach.</em></h1>
          <p className="sub">
            Live Answer is headquartered in Willow Glen and serves California small businesses
            from the Oregon border to San Diego. Below: the metros we&rsquo;ve built dedicated
            local landing pages for.
          </p>
        </div>
      </section>

      <section className="scenarios" aria-label="Locations currently served">
        <div className="wrap">
          <span className="section-num">01 · Currently live</span>
          <h2 className="section-title">{live.length} metros.</h2>
          <div className="scenarios-grid">
            {live.map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="scenario-card"
                style={{ display: "block", textDecoration: "none" }}
              >
                <div className="time">
                  <i className="ti ti-map-pin" aria-hidden="true" /> {l.city}, {l.state}
                </div>
                <div className="body">{l.metaDescription}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {coming.length > 0 && (
        <section className="plan" aria-label="Locations launching soon">
          <div className="wrap">
            <span className="section-num">02 · Launching soon</span>
            <h2 className="section-title">{coming.length} more metro pages on the way.</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: 12,
                maxWidth: 900,
                margin: "0 auto",
              }}
            >
              {coming.map((l) => (
                <div
                  key={l.slug}
                  style={{
                    padding: 16,
                    background: "#fdfaf3",
                    border: "1px solid #d9cdb1",
                    borderRadius: 10,
                    fontSize: 14,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                    <i className="ti ti-map-pin" aria-hidden="true" />
                    <span style={{ fontWeight: 500, color: "#1a1611" }}>
                      {l.city}, {l.state}
                    </span>
                  </div>
                  <div style={{ fontSize: 13, lineHeight: 1.5, color: "#5c5147" }}>
                    {l.metaDescription}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 24, textAlign: "center", fontSize: 13, color: "#94867a" }}>
              We already serve customers in these metros today — the dedicated landing pages
              ship per our launch schedule.
            </p>
          </div>
        </section>
      )}

      <section className="stakes" aria-label="California-specific coverage stats">
        <div className="wrap">
          <div className="stakes-grid">
            <div className="stakes-stat">
              <div className="num">10.4M</div>
              <div className="label">Spanish-speakers in California — bilingual is standard</div>
            </div>
            <div className="stakes-stat">
              <div className="num">800K+</div>
              <div className="label">small businesses in LA County alone</div>
            </div>
            <div className="stakes-stat">
              <div className="num">24/7</div>
              <div className="label">coverage from the same San Jose team</div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <h2>Not on the list? We still serve you.</h2>
          <div className="sub">Local landing pages are SEO infrastructure — service coverage is statewide already.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </section>
    </>
  );
}
