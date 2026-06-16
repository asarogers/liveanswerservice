import type { Metadata } from "next";
import Link from "next/link";
import { getAllGuides } from "@/lib/guides";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Guides — Live Answer",
  description:
    "In-depth guides on AI receptionists, missed-call economics, and bilingual answering coverage for California small businesses.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "Guides — Live Answer",
    description:
      "In-depth guides on AI receptionists, missed-call economics, and bilingual answering coverage for California small businesses.",
    url: `${siteConfig.url}/guides`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      { url: `${siteConfig.url}/opengraph-image.png`, width: 1200, height: 630, alt: "Live Answer guides" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guides — Live Answer",
    description:
      "In-depth guides on AI receptionists, missed-call economics, and bilingual answering coverage for California small businesses.",
    images: [`${siteConfig.url}/opengraph-image.png`],
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function GuidesIndexPage() {
  const guides = getAllGuides();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="la-hero" style={{ paddingBottom: 32 }}>
        <div className="wrap-narrow">
          <h1>
            Answering service <em>guides</em>.
          </h1>
          <p className="sub">
            Missed-call economics, bilingual coverage, and AI vs. human comparisons for California
            small business owners. Written by practitioners, not content farms.
          </p>
          <p style={{ color: "#5c5147", marginTop: 16 }}>
            Every guide here answers a question California business owners actually ask us:
            what a missed call really costs, when bilingual coverage pays for itself, and
            how AI answering compares to a human service on price and outcomes. Each one
            is grounded in real numbers and named California specifics — no filler.
          </p>
        </div>
      </section>

      {/* Guide introduction */}
      <section className="section-pad" aria-labelledby="guide-intro-heading">
        <div className="wrap-narrow">
          <h2 id="guide-intro-heading">Why These Guides?</h2>
          <p>As a small business owner, you know how critical it is to manage customer interactions effectively. Every missed call could mean lost opportunities and dissatisfied customers. That's why we've created these in-depth guides to help you:</p>
          <ul className="list-disc">
            <li>Understand the true cost of missed calls: Learn how every unanswered call translates to potential revenue loss</li>
            <li>Learn how bilingual services can expand your customer reach: Discover why offering service in multiple languages is crucial for success in diverse markets</li>
            <li>Compare AI vs human answering systems objectively: Explore the pros and cons of each option based on real-world data</li>
            <li>Discover best practices for handling overflow call volume: Implement strategies to manage high traffic without losing customers</li>
            <li>Implement strategies to improve caller experience: Find out how better service leads to increased customer satisfaction and loyalty</li>
            <li>Match your call handling to your business: adjust your approach based on specific industry challenges and goals</li>
          </ul>
        </div>
      </section>

      {/* Guide grid */}
      <section className="section-pad" aria-labelledby="all-guides-heading">
        <div className="wrap" style={{ maxWidth: 1100 }}>
          <h2
            id="all-guides-heading"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(22px, 2.4vw, 28px)",
              fontWeight: 400,
              letterSpacing: "-0.015em",
              color: "#1a1611",
              margin: "0 0 24px",
            }}
          >
            All guides
          </h2>

          {guides.length === 0 ? (
            <p style={{ color: "#5c5147" }}>Guides coming soon.</p>
          ) : (
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 24,
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
              aria-label="Guide list"
            >
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/guides/${g.slug}`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      padding: 24,
                      background: "#fdfaf3",
                      border: "1px solid #d9cdb1",
                      borderRadius: 12,
                      textDecoration: "none",
                      transition: "border-color 0.15s, transform 0.15s",
                    }}
                    aria-label={`Read guide: ${g.h1 || g.title}`}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 20,
                        fontWeight: 400,
                        lineHeight: 1.25,
                        letterSpacing: "-0.015em",
                        color: "#1a1611",
                        margin: "0 0 10px",
                      }}
                    >
                      {g.h1 || g.title}
                    </h3>
                    <p style={{ fontSize: 14, lineHeight: 1.55, color: "#5c5147", flex: 1, margin: "0 0 16px" }}>
                      {g.description}
                    </p>
                    <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "1px solid #d9cdb1", fontSize: 12, color: "#94867a", display: "flex", gap: 8, alignItems: "center" }}>
                      {g.author && <span>{g.author}</span>}
                      {g.author && <span aria-hidden="true">·</span>}
                      <time dateTime={g.datePublished}>{formatDate(g.datePublished)}</time>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Guide benefits */}
      <section className="section-pad" aria-labelledby="benefits-heading">
        <div className="wrap-narrow">
          <h2 id="benefits-heading">Why Read Our Guides?</h2>
          <p>Our guides are written by experienced professionals who have managed thousands of calls for California small businesses. Unlike generic content, our insights come from real-world experience:</p>
          <ol className="list-decimal">
            <li>Data-driven insights on call handling: We analyze real data to show what works and why</li>
            <li>Actionable strategies to reduce missed calls: Specific tactics you can implement today</li>
            <li>Expert advice on choosing the right answering solution: Pro tips for selecting AI vs human services</li>
            <li>Case studies showing measurable improvements: Real-world examples of businesses that succeeded</li>
            <li>Tips for improving customer satisfaction scores: How better call handling improves retention</li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <div className="wrap">
          <h2>Done reading? Start dialing.</h2>
          <div className="sub">Call the demo line and roleplay your worst customer.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-pad" aria-labelledby="faq-heading">
        <div className="wrap-narrow">
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <dl className="faq-list">
            <div className="faq-item">
              <dt>How often should I review my call handling?</dt>
              <dd>We recommend at least quarterly reviews to adjust for business growth and seasonality.</dd>
            </div>
            <div className="faq-item">
              <dt>What's the ideal call abandonment rate?</dt>
              <dd>Aim for less than 5%. Anything above that indicates potential missed opportunities.</dd>
            </div>
            <div className="faq-item">
              <dt>Do I need bilingual service?</dt>
              <dd>If your customer base includes Spanish speakers, it's strongly recommended to improve satisfaction and conversion rates.</dd>
            </div>
            <div className="faq-item">
              <dt>How much does call handling impact retention?</dt>
              <dd>Poor call handling can lead to 30-40% higher churn rates. Good service improves retention significantly.</dd>
            </div>
            <div className="faq-item">
              <dt>Is AI better than human operators?</dt>
              <dd>Depends on your needs. AI is great for simple routing but humans excel in complex situations requiring empathy.</dd>
            </div>
            <div className="faq-item">
              <dt>How can I measure the effectiveness of my call handling?</dt>
              <dd>Track key metrics like call abandonment rate, average handle time, and customer satisfaction scores to gauge performance.</dd>
            </div>
            <div className="faq-item">
              <dt>What tools do you recommend for managing call overflow?</dt>
              <dd>We suggest implementing a combination of caller ID, voicemail-to-text services, and live monitoring to ensure no calls go unanswered.</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}