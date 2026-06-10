import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import HeroCallForm from "@/components/HeroCallForm";
import HeroLogoVideo from "@/components/HeroLogoVideo";

export const metadata: Metadata = {
  openGraph: {
  url: "/about",
  images: [{ url: "https://liveanswerservice.com/opengraph-image.png", width: 1024, height: 1024, alt: "Live Answer Service" }],
  },
  title: "About Live Answer — AI Receptionist Built for California",
  description:
    "Live Answer is an AI-powered answering service built in San Jose for California small business. Founded by Ace Rodgers. Bilingual EN/ES, 24/7, $500/mo flat.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="la-hero">
        <div className="wrap about-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <div className="hero-eyebrow">
              <span className="dot" aria-hidden="true" />
              <span>About Live Answer</span>
            </div>
            <h1>Built in San Jose. <em>For California.</em></h1>
            <p className="sub">
              <strong>An AI answering service for California small business — starting with HVAC contractors and expanding to legal services.</strong>{" "}
              We offer bilingual English/Spanish support, 24/7 coverage at a flat rate of $500 per month. Our service is designed to grow with your business without additional costs.
            </p>
            <HeroCallForm recaptchaSiteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} />
            <div style={{ fontSize: 13, color: "#94867a" }}>
              Have one of our AI agents call you now · no credit card · cancel anytime
            </div>
            <div className="hero-transitional">
              Ready to talk to a human? <Link href="/book">Book a 30-min setup consult →</Link>
            </div>
          </div>

          <div className="hero-phone-wrap">
            <HeroLogoVideo />
          </div>
        </div>
      </section>

      <section className="scenarios" aria-label="What we do">
        <div className="wrap">
          <div className="section-eyebrow">What we do</div>
          <h2 className="section-title">Three things, every call, every time.</h2>
          <div className="scenarios-grid">
            <div className="scenario-card">
              <div className="time"><i className="ti ti-phone-call" aria-hidden="true" /> Answer</div>
              <div className="body">
                We pick up every call within two rings, 24 hours a day, seven days a week, in English or Spanish. Our advanced filtering system ensures spam and robocalls are automatically blocked. In emergencies, we escalate calls directly to your cell phone within 30 seconds.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-calendar-event" aria-hidden="true" /> Book</div>
              <div className="body">
                Our system integrates directly with popular CRMs like Jobber, ServiceTitan, HousecallPro, and FieldEdge for HVAC contractors. For legal professionals, we integrate with Clio, MyCase, and PracticePanther. With over 35 integrations available, your calendar stays updated in real time.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-message-2" aria-hidden="true" /> Notify</div>
              <div className="body">
                Within 60 seconds of each call ending, we send you an SMS and email summary. Every conversation is recorded and transcribed for up to 90 days. We also ensure compliance with CCPA privacy regulations by including two-party consent notifications.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="plan" aria-label="Who runs Live Answer">
        <div className="wrap">
          <div className="section-eyebrow">The team</div>
          <h2 className="section-title">Local, accountable, reachable.</h2>
          <div className="plan-grid">
            <div className="plan-step">
              <div className="num">A</div>
              <h3>Ace — Founder</h3>
              <p>Founder Ace Rodgers created Live Answer in Willow Glen after witnessing the challenges California small business owners face with missed calls. He's personally involved in every client setup to ensure our service meets your needs.</p>
            </div>
            <div className="plan-step">
              <div className="num">SJ</div>
              <h3>Headquarters</h3>
              <p>Based in San Jose, California, our team provides local support and handles all setup consults and monthly call reviews. We're not a distant call center; we're your neighbors here to help.</p>
            </div>
            <div className="plan-step">
              <div className="num">CA</div>
              <h3>California-focused</h3>
              <p>Bilingual support is standard, reflecting California's diverse population. We are CCPA compliant and tailor our services for local industries, starting with HVAC contractors and expanding to legal services.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="wrap">
          <h2>Why Choose Live Answer?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <i className="ti ti-coin" aria-hidden="true" />
              <h3>Cost-effective Solution</h3>
              <p>Traditional answering services can cost upwards of $1,000 per month. We offer premium service at a flat rate of $500/month with no hidden fees or contracts.</p>
            </div>
            <div className="benefit-card">
              <i className="ti ti-paint-brush" aria-hidden="true" />
              <h3>Customizable Service</h3>
              <p>Your business is unique. We offer flexible solutions that adapt to your specific needs, whether you're an HVAC contractor, legal professional, or other small business owner.</p>
            </div>
            <div className="benefit-card">
              <i className="ti ti-shield" aria-hidden="true" />
              <h3>Local Support</h3>
              <p>We're not a faceless corporation. Our team is based in San Jose and available to provide personalized support whenever you need it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials removed 2026-06-06 — they were fabricated (pre-launch,
          zero customers). Re-add only with real, verifiable customer quotes. */}

      <section className="faq">
        <div className="wrap">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-card">
              <h3>Is there a contract?</h3>
              <p>No, we offer month-to-month service with no long-term commitments.</p>
            </div>
            <div className="faq-card">
              <h3>How does pricing work?</h3>
              <p>A flat rate of $500/month covers unlimited calls, 24/7 support, and all features including call transcription and integration capabilities.</p>
            </div>
            <div className="faq-card">
              <h3>Can I cancel anytime?</h3>
              <p>Yes, you can cancel with 30 days' notice. We want you to feel confident in your decision to try Live Answer risk-free.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stakes" aria-label="The problem we solve">
        <div className="wrap">
          <div className="stakes-grid">
            <div className="stakes-stat">
              <div className="num">62%</div>
              <div className="label">of calls to your business go to voicemail</div>
            </div>
            <div className="stakes-stat">
              <div className="num">$126K</div>
              <div className="label">average yearly cost of missed calls per SMB</div>
            </div>
            <div className="stakes-stat">
              <div className="num">10.4M</div>
              <div className="label">Spanish-speakers in California we cover natively</div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .about-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        .benefits-grid, .faq-grid, .testimonial-grid {
          display: grid;
          gap: 24px;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
        .scenario-card { margin-bottom: 24px; }
      `}</style>
      <section className="final-cta">
        <div className="wrap">
          <h2>Try it before you trust it.</h2>
          <div className="sub">Call the demo line. Three minutes to know if this is for you.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
          <div style={{ marginTop: 20 }}>
            <Link href="/book" className="btn-secondary">
              Or book a 30-min setup consult →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}