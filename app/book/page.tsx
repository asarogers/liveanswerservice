import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import CalEmbed from "@/components/CalEmbed";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Book a 30-min Setup Consult — Live Answer",
  description:
    "Book your free 30-minute setup consult with Live Answer. No credit card. We map your AI receptionist to your business in one call.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book a 30-min Setup Consult | Live Answer",
    description:
      "Free 30-minute setup consult with Live Answer. We map your AI receptionist to your business in one call.",
    url: `${siteConfig.url}/book`,
    siteName: siteConfig.name,
    type: "website",
    images: [{ url: `${siteConfig.url}/opengraph-image.png`, width: 1200, height: 630 }],
  },
};

const CHECKLIST = [
  "30-minute call, no credit card required",
  "We map your inbound flow — current miss rate, peak hours, after-hours pattern",
  "Vertical-specific intake script designed live (HVAC contractors, law firms)",
  "CRM/calendar integration scoped — Jobber, ServiceTitan, Clio, MyCase, etc.",
  "7-day free trial starts within 48 hours of the kickoff",
];

export default function BookPage() {
  return (
    <>
      <section className="la-hero">
        <div className="wrap-narrow">
          <h1>Book a <em>30-min setup consult</em>.</h1>
          <p className="sub">
            We&rsquo;ll map your inbound flow, design your vertical-specific intake script, and
            scope your CRM integration — all in one call. No credit card. No commitment.
          </p>
        </div>
      </section>

      <section aria-label="Book your setup consult" className="wrap" style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px 16px" }}>
        <CalEmbed />
      </section>

      <section className="phone-cta">
        <div className="eyebrow">Prefer to talk first? Call the demo line.</div>
        <a href={siteConfig.phone.href} className="phone-btn">
          <i className="ti ti-phone-call" aria-hidden="true" />
          <span>{siteConfig.phone.display}</span>
        </a>
        <div className="phone-secondary">
          Tell the AI you&rsquo;d like to book a setup consult — it&rsquo;ll schedule you on the
          founder&rsquo;s calendar.
        </div>
      </section>

      <section className="scenarios" aria-label="What we cover on the call">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div className="section-eyebrow">What we cover</div>
          <h2 className="section-title">Five things in 30 minutes.</h2>
          <ul style={{ listStyle: "none", padding: 0, maxWidth: 560, margin: "0 auto" }}>
            {CHECKLIST.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  padding: "12px 0",
                  borderBottom: "1px solid #d9cdb1",
                  fontSize: 15,
                  lineHeight: 1.5,
                  textAlign: "left",
                }}
              >
                <i
                  className="ti ti-check"
                  aria-hidden="true"
                  style={{ color: "#5a1f2e", fontSize: 18, marginTop: 2, flexShrink: 0 }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="plan" aria-label="Or send a message">
        <div className="wrap" style={{ maxWidth: 640 }}>
          <div className="section-eyebrow">Prefer email?</div>
          <h2 className="section-title">Send us a message.</h2>
          <p style={{ fontSize: 14, color: "#5c5147", marginBottom: 24, textAlign: "center" }}>
            Drop your number and a one-liner about your business — we&rsquo;ll respond within
            one business hour during 9 AM–6 PM PT.
          </p>
          <ContactForm />
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <h2>Or just dial. We&rsquo;re always open.</h2>
          <div className="sub">The fastest path to a setup consult is calling.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </section>
    </>
  );
}
