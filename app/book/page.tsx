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
  "Integration with other tools like Zapier or Make.com",
  "Setting up callback rules and priorities",
  "Creating custom hold messages and music on hold",
  "Detailed analytics setup for call tracking",
  "Customized onboarding plan tailored to your business needs"
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
          <p style={{ color: "#5c5147", fontSize: 14, marginTop: "8px" }}>
            By booking this consult, you&rsquo;ll gain insights into how our AI receptionist can
            revolutionize your business communication. We understand that every business is unique,
            which is why we tailor our solutions to fit your specific needs and industry.
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
          <h2 className="section-title">Ten essential items in just 30 minutes.</h2>
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

      <section className="benefits" aria-label="Why choose Live Answer">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div className="section-eyebrow">Why book with us?</div>
          <h2 className="section-title">Benefits of choosing Live Answer</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "24px 0" }}>
            {[
              "Increase your first-call resolution rate",
              "Reduce missed calls by up to 90%",
              "Save time and improve customer satisfaction",
              "Get a customized solution for your industry needs",
              "Start seeing results within days, not weeks"
            ].map((benefit) => (
              <li
                key={benefit}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  padding: "16px 0",
                  borderBottom: "1px solid #d9cdb1",
                  fontSize: 15,
                  lineHeight: 1.5,
                  textAlign: "left"
                }}
              >
                <i
                  className="ti ti-arrow-right"
                  aria-hidden="true"
                  style={{ color: "#5a1f2e", fontSize: 18, marginTop: 2, flexShrink: 0 }}
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="faq" aria-label="Frequently Asked Questions">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div className="section-eyebrow">Need more info? We've got answers.</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <dl style={{ padding: "24px 0", rowGap: "16px" }}>
            <div>
              <dt className="faq-question">What do I need to have ready for the call?</dt>
              <dd className="faq-answer">
                Just your phone and a quiet place to talk. We’ll handle all the technical setup.
              </dd>
            </div>

            <div>
              <dt className="faq-question">How soon can we get started after the consult?</dt>
              <dd className="faq-answer">
                Typically within 48 hours of your call, you'll have access to our platform and tools.
              </dd>
            </div>

            <div>
              <dt className="faq-question">Is there a contract or commitment required?</dt>
              <dd className="faq-answer">
                No contracts. We offer a no-obligation free trial so you can see the benefits firsthand.
              </dd>
            </div>

            <div>
              <dt className="faq-question">Can I cancel anytime during the trial period?</dt>
              <dd className="faq-answer">
                Absolutely. Our trial is risk-free, with no strings attached.
              </dd>
            </div>

            <div>
              <dt className="faq-question">Do you offer training and support after setup?</dt>
              <dd className="faq-answer">
                Yes! We provide ongoing support to ensure your team gets the most out of our platform.
              </dd>
            </div>

            <div>
              <dt className="faq-question">What industries do you work with best?</dt>
              <dd className="faq-answer">
                We specialize in serving businesses like HVAC contractors, law firms, medical practices,
                and service-based professionals who rely on consistent communication.
              </dd>
            </div>

            <div>
              <dt className="faq-question">How does the AI handle complex inquiries?</dt>
              <dd className="faq-answer">
                Our AI is trained to manage standard intake efficiently while escalating more
                complex or urgent matters directly to you or your team, ensuring no important details are missed.
              </dd>
            </div>

            <div>
              <dt className="faq-question">How long does it take to fully set up?</dt>
              <dd className="faq-answer">
                Most businesses see a full implementation within 1-2 weeks, depending on specific integration needs.
              </dd>
            </div>
          </dl>
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

      <section className="why-now" aria-label="Why book now?">
        <div className="wrap" style={{ maxWidth: 720, padding: "32px 16px", textAlign: "center" }}>
          <h2 className="section-title">Why book your consult today?</h2>
          <p className="sub">
            Here&rsquo;s why you should act now:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "16px auto" }}>
            {[
              "Secure a spot on our calendar — no credit card required",
              "Start your free trial and see results within days",
              "Get personalized attention to maximize your setup"
            ].map((reason) => (
              <li
                key={reason}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  padding: "16px 0",
                  borderBottom: "1px solid #d9cdb1",
                  fontSize: 15,
                  lineHeight: 1.5
                }}
              >
                <i
                  className="ti ti-clock"
                  aria-hidden="true"
                  style={{ color: "#5a1f2e", fontSize: 18, marginTop: 2, flexShrink: 0 }}
                />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}