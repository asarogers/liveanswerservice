import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { getAllServices } from "@/lib/services-data";
import { loadSitePlan, noindexSlugs } from "@/lib/site-plan";

export const metadata: Metadata = {
  openGraph: {
  url: "/services",
  },
  title: "Industries We Serve — Live Answer AI Receptionist",
  description:
    "Live Answer is built for California HVAC contractors and law firms — with dental, medical, real estate, restaurants, salons, and property management coming next. Bilingual EN/ES, 24/7, $500/mo flat.",
  alternates: { canonical: "/services" },
};

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
            We specialize in providing tailored answering services that meet the unique needs of various industries. Our solutions are designed to enhance communication, improve customer satisfaction, and streamline your operations.
          </p>
          <p className="sub">
            Whether you're a California HVAC contractor needing round-the-clock support or a law firm requiring compliance-focused messaging, Live Answer is here to provide professional, reliable service that helps you grow and stand out in your industry.
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
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {
                    s.slug === "hvac-answering-service" && [
                      <li key="1">24/7 bilingual support</li>,
                      <li key="2">Priority scheduling for emergency calls</li>,
                      <li key="3">Integrated appointment reminders</li>,
                      <li key="4">Custom HVAC-specific greetings and hold messages</li>,
                      <li key="5">Real-time call status updates via text or email</li>
                    ]
                  }
                  {
                    s.slug === "attorney-answering-service" && [
                      <li key="1">Compliance-focused messaging templates</li>,
                      <li key="2">After-hours voicemail management</li>,
                      <li key="3">Client intake form integration</li>,
                      <li key="4">Confidentiality and data protection measures</li>,
                      <li key="5">Discreet handling of sensitive information</li>
                    ]
                  }
                  {
                    s.slug === "small-business-answering-service" && [
                      <li key="1">Customizable greetings and scripts</li>,
                      <li key="2">Call recording and analytics</li>,
                      <li key="3">Mobile app access for call management</li>,
                      <li key="4">Multiple phone number support</li>,
                      <li key="5">Flexible payment plans</li>
                    ]
                  }
                </ul>
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

      <section className="faq" aria-label="Frequently Asked Questions">
        <div className="wrap">
          <h2>FAQ: Common Questions About Our Services</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <h3>How much does your service cost?</h3>
              <p>Our pricing is simple and transparent: $500 per month for unlimited calls, inclusive of all features and support. No hidden fees or contracts.</p>
            </li>
            <li>
              <h3>Can you customize the scripts for my business?</h3>
              <p>Yes! We offer full customization of greetings, intake questions, and after-hours messages to match your brand voice and specific needs. Our team works with you to create a seamless experience for your customers.</p>
            </li>
            <li>
              <h3>Do you offer technical support?</h3>
              <p>Absolutely. We provide 24/7 technical support to ensure your system runs smoothly at all times. If you encounter any issues, our team is available to assist immediately.</p>
            </li>
            <li>
              <h3>Can I integrate this with my existing CRM?</h3>
              <p>We offer direct integration with popular CRMs and calendar systems, streamlining your workflow and improving efficiency. Let us know which system you use, and we'll handle the setup for you.</p>
            </li>
            <li>
              <h3>What about call handling capacity?</h3>
              <p>Our system is designed to handle high volumes of calls simultaneously without any delay or dropped connections. You can trust us to manage your busiest days with ease.</p>
            </li>
            <li>
              <h3>Do you provide data security and compliance?</h3>
              <p>Data security is our top priority. We use enterprise-grade encryption and comply with all relevant regulations to protect your customers' information. Our systems are regularly audited for security and performance.</p>
            </li>
            <li>
              <h3>How long does it take to set up?</h3>
              <p>We can have your account set up and ready to go in as little as 24 hours. We work quickly without compromising on quality to get you started as soon as possible.</p>
            </li>
            <li>
              <h3>What kind of training is available?</h3>
              <p>We provide comprehensive training resources, including video tutorials and a dedicated support team to help you make the most of our services. We're here to ensure your transition is smooth and successful.</p>
            </li>
          </ul>
        </div>
      </section>

    </>
  );
}
