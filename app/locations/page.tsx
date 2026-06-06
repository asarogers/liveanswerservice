import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { getAllLocations } from "@/lib/locations-data";
import { loadSitePlan, noindexSlugs } from "@/lib/site-plan";

export const metadata: Metadata = {
  openGraph: {
    url: "/locations",
  },
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
            from the Oregon border to San Diego. Our service extends across diverse regions,
            each with unique business needs, allowing us to provide tailored solutions.
            Below: the metros we&rsquo;ve built dedicated local landing pages for.
          </p>
        </div>
      </section>

      <section className="scenarios" aria-label="Locations currently served">
        <div className="wrap">
          <span className="section-num">01 · Currently live</span>
          <h2 className="section-title">{live.length} metros.</h2>
          <p className="sub-text">
            We've established strong local presence in these key areas, ensuring efficient service delivery.
            Each location offers customized support to meet the specific needs of businesses in those regions. 
            From the bustling streets of Los Angeles to the tech hubs of Silicon Valley, our team is ready to serve.
            Our services are designed to address the unique challenges faced by businesses in each region,
            whether it's the high-paced environment of LA or the innovative ecosystem of San Francisco Bay Area.
          </p>
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
            <p className="sub-text">
              These upcoming locations are part of our commitment to expand coverage and support
              businesses across California. We'll continue to enhance our presence in these areas,
              ensuring comprehensive service availability.
            </p>
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
              ship per our launch schedule. Each new location is carefully selected based on
              business density, growth potential, and community needs.
            </p>
          </div>
        </section>
      )}

      <section className="stakes" aria-label="California-specific coverage stats">
        <div className="wrap">
          <h2 className="stats-title">Why California Businesses Choose Us</h2>
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
          <p className="sub-text">
            Our commitment to comprehensive coverage ensures that businesses across California
            receive the support they need, regardless of location. We're dedicated to expanding
            our reach and enhancing services to meet the diverse needs of California's business community.
            With over 10 million Spanish-speakers in California, our bilingual services help bridge communication gaps,
            while our round-the-clock availability ensures no customer is left waiting. Our team of experts is trained
            to handle the unique challenges faced by businesses in different regions, providing personalized solutions
            that drive success.
          </p>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <h2>Not on the list? We still serve you.</h2>
          <p className="sub">Local landing pages are SEO infrastructure — service coverage is statewide already.</p>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </section>

      <section className="faq-section">
        <div className="wrap">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>How do you serve areas without dedicated landing pages?</h3>
              <p>We offer comprehensive statewide service, ensuring businesses in all regions receive our support.
                Our team is equipped to handle inquiries from any part of California, even if a specific landing page hasn't been created yet.</p>
            </div>
            <div className="faq-item">
              <h3>What industries do you primarily serve?</h3>
              <p>We cater to a wide range of industries, including retail, healthcare, tech, and more. Our flexible solutions are designed
                to meet the unique needs of businesses in various sectors across California.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer bilingual support beyond Spanish?</h3>
              <p>Currently, we provide standard bilingual English/Spanish services across all locations. While we focus on Spanish due to its prevalence,
                we may expand to other languages in the future based on demand.</p>
            </div>
            <div className="faq-item">
              <h3>Why did you choose these specific locations?</h3>
              <p>We selected these locations based on factors like population density, business concentration, and market needs. Our goal is to provide
                the best possible service to California's diverse business communities.</p>
            </div>
            <div className="faq-item">
              <h3>Will you expand outside of California?</h3>
              <p>We're focused on serving California businesses for now due to its unique market dynamics and our deep roots in the state. However,
                we'll continue to explore opportunities for expansion as we grow.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-tips">
        <div className="wrap">
          <h2>SEO Tips for California Businesses</h2>
          <p className="sub-text">
            As a California-based business, optimizing your online presence is crucial. Here are some tips:
          </p>
          <ul className="tip-list">
            <li><strong>Local SEO:</strong> Make sure to claim and optimize your Google My Business profile.</li>
            <li><strong>Content Marketing:</strong> Create content that targets local keywords relevant to your business.</li>
            <li><strong>Bilingual Content:</strong> Consider creating Spanish language content to reach California's large Hispanic population.</li>
            <li><strong>Backlinks:</strong> Build high-quality backlinks from reputable local websites and directories.</li>
          </ul>
        </div>
      </section>

      <section className="customer-stories">
        <div className="wrap">
          <h2>Real Success Stories</h2>
          <p className="sub-text">
            Don't just take our word for it. Here's what some of our California clients have to say:
          </p>
          <div className="testimonials-grid">
            <div className="testimonial-item">
              <div className="quote">"Live Answer transformed how we handle customer inquiries. Their bilingual support made a huge difference!"</div>
              <div className="author">- Maria Gonzalez, Tech Startups</div>
            </div>
            <div className="testimonial-item">
              <div className="quote">"As a small business owner in LA, Live Answer's solutions have been instrumental in growing my customer base."</div>
              <div className="author">- John Miller, Retail Services</div>
            </div>
            <div className="testimonial-item">
              <div className="quote">"Thanks to Live Answer, our Sacramento office now offers seamless 24/7 support to all our clients."</div>
              <div className="author">- Sarah Lee, Healthcare Solutions</div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="wrap">
          <h2>Why Partner with Live Answer?</h2>
          <p className="sub-text">
            Here are the key benefits of choosing our services:
          </p>
          <ul className="benefit-list">
            <li><strong>Localized Expertise:</strong> Deep understanding of California's diverse markets and regions.</li>
            <li><strong>Bilingual Support:</strong> Comprehensive English/Spanish services to connect with all customers.</li>
            <li><strong>Proactive Service:</strong> We anticipate needs and provide solutions before issues arise.</li>
            <li><strong>Scalable Solutions:</strong> Services that grow with your business, whether you're a startup or established company.</li>
            <li><strong>24/7 Availability:</strong> Round-the-clock support to ensure no customer is left waiting.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
