import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { loadSitePlan, noindexSlugs } from "@/lib/site-plan";

const SLUG = "pricing";
const NOINDEX = noindexSlugs(loadSitePlan()).has(SLUG);

export const metadata: Metadata = {
  openGraph: {
  url: "https://liveanswerservice.com/pricing",
  images: [{ url: "https://liveanswerservice.com/opengraph-image.png", width: 1024, height: 1024, alt: "Live Answer Service" }],
  },
  title: "Pricing — $500/mo Flat, Unlimited Calls, No Overages",
  description:
    "Live Answer pricing — $500/mo flat for unlimited calls, bilingual EN/ES, no overages, locked rate at sign-up. 7-day free trial, no credit card. $199 setup waived with annual prepay.",
  alternates: { canonical: `/${SLUG}` },
  ...(NOINDEX ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } } : {}),
};

export default function PricingPage() {
  return (
    <>
      <section className="la-hero">
        <div className="wrap-narrow">
          <h1>Flat-rate. <em>Unlimited.</em></h1>
          <p className="sub">
            <strong>$500/mo. Unlimited calls. Bilingual EN/ES. Locked rate at sign-up.</strong>{" "}
            No per-minute fees. No overages. Ever.
          </p>
          <p className="hero-text">
            At Live Answer Service, we understand that your business needs a reliable, consistent phone service that doesn't break the bank or leave you guessing about costs. That's why we've designed our pricing to be transparent, predictable, and worry-free. With our flat-rate pricing model, you get all the features you need to grow your business without any hidden fees or surprise charges.
          </p>
        </div>
      </section>

      {/* ── PRICING CARDS — same as homepage ───────────────── */}
      <section className="pricing-section" id="plans">
        <div className="wrap">
          <div className="pricing-grid">
            <div className="price-card featured">
              <div className="badge">Every call. Every minute.</div>
              <div className="tier">Unlimited</div>
              <div className="price">$500<span className="per">/mo</span></div>
              <div className="audience">For California businesses that can&rsquo;t afford to miss a call</div>
              <ul>
                <li><i className="ti ti-check" aria-hidden="true" />Unlimited calls, 24/7 — no counting, no overages</li>
                <li><i className="ti ti-check" aria-hidden="true" />Bilingual English &amp; Spanish from the first ring</li>
                <li><i className="ti ti-check" aria-hidden="true" />Emergency triage + escalation to your cell</li>
                <li><i className="ti ti-check" aria-hidden="true" />Native sync with Jobber, ServiceTitan, Clio, MyCase, and 30+ more</li>
                <li><i className="ti ti-check" aria-hidden="true" />SMS + email summary within 60 seconds</li>
                <li><i className="ti ti-check" aria-hidden="true" />Spam &amp; robocall filtering</li>
                <li><i className="ti ti-check" aria-hidden="true" />Call recordings + 90-day history</li>
                <li><i className="ti ti-check" aria-hidden="true" />No-show + follow-up SMS automation</li>
                <li><i className="ti ti-check" aria-hidden="true" />Real-time analytics and reporting tools</li>
                <li><i className="ti ti-check" aria-hidden="true" />Multi-device call forwarding options</li>
              </ul>
              <div className="setup-fee">
                $199 one-time setup · <em>waived with annual prepay</em>
              </div>
              <div className="annual">Annual: $5,100/yr ($425/mo)</div>
              <Link href="/start-trial" className="btn-secondary" style={{ marginTop: 16, display: "inline-block" }}>
                Start free trial →
              </Link>
            </div>
            <div className="price-card">
              <div className="tier">Custom</div>
              <div className="price">Let&rsquo;s talk</div>
              <div className="audience">Multi-location, franchise, or high-volume operations</div>
              <ul>
                <li><i className="ti ti-check" aria-hidden="true" />Multiple AI agents &amp; dedicated numbers</li>
                <li><i className="ti ti-check" aria-hidden="true" />Multi-location dispatch routing</li>
                <li><i className="ti ti-check" aria-hidden="true" />Custom CRM &amp; API integrations</li>
                <li><i className="ti ti-check" aria-hidden="true" />White-glove onboarding &amp; training</li>
                <li><i className="ti ti-check" aria-hidden="true" />Dedicated success manager</li>
                <li><i className="ti ti-check" aria-hidden="true" />SLA-backed uptime guarantee</li>
                <li><i className="ti ti-check" aria-hidden="true" />Volume discount on annual plans</li>
                <li><i className="ti ti-check" aria-hidden="true" />Customizable call scripts and workflows</li>
                <li><i className="ti ti-check" aria-hidden="true" />Advanced reporting and analytics</li>
                <li><i className="ti ti-check" aria-hidden="true" />Priority support and maintenance</li>
              </ul>
              <div className="annual">15-minute discovery call · custom quote in 24 hours</div>
              <a href={siteConfig.phone.href} className="btn-secondary" style={{ marginTop: 16, display: "inline-block" }}>
                Schedule a call →
              </a>
            </div>
          </div>
          <div className="guarantees">
            <span><i className="ti ti-shield-check" aria-hidden="true" />7-day free trial · no card</span>
            <span><i className="ti ti-shield-check" aria-hidden="true" />Miss a booking? Month free</span>
            <span><i className="ti ti-shield-check" aria-hidden="true" />Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* ── COMPARISON ─────────────────────────────────────── */}
      <section className="compare-section" aria-label="Compare what you'd pay">
        <div className="wrap-narrow">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-num">Compared</span>
            <h2 className="section-title" style={{ margin: 0 }}>Why flat-rate beats the rest.</h2>
          </div>
          <div className="compare-table">
            <div className="compare-row compare-head">
              <div>What you do today</div>
              <div>Cost</div>
              <div>Result</div>
            </div>
            <div className="compare-row">
              <div>Voicemail</div>
              <div>$0/mo</div>
              <div>Lose 6 of 10 after-hours calls</div>
            </div>
            <div className="compare-row">
              <div>Part-time CA receptionist</div>
              <div>~$1,600/mo</div>
              <div>20 hrs/week, English only</div>
            </div>
            <div className="compare-row">
              <div>Full-time CA receptionist</div>
              <div>$3,200–$4,000/mo</div>
              <div>9–5 only · $48K/yr loaded</div>
            </div>
            <div className="compare-row">
              <div>Cheap AI ($25–$49/mo)</div>
              <div>$25–$49/mo</div>
              <div>Caps at 100 calls then stops or overages</div>
            </div>
            <div className="compare-row">
              <div>Human services (Ruby, AnswerConnect)</div>
              <div>$245–$400+/mo</div>
              <div>Per-minute fees on top — busy month = 2–3× bill</div>
            </div>
            <div className="compare-row compare-us">
              <div><strong>Live Answer Service</strong></div>
              <div><strong>$500/mo flat</strong></div>
              <div>24/7 · bilingual · unlimited · locked rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────── */}
      <section className="faq-section" aria-label="Frequently Asked Questions">
        <div className="wrap-narrow">
          <h2>FAQ: Your Questions Answered</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>What's included in the $500/mo flat rate?</h3>
              <p className="answer">Our flat-rate includes unlimited calls, 24/7 bilingual support, call recording, SMS notifications, integration with popular CRMs, spam filtering, and more. All features are included with no additional costs.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a contract or long-term commitment?</h3>
              <p className="answer">No contracts required! You can cancel anytime without any termination fees. We offer a 7-day free trial so you can experience our service risk-free.</p>
            </div>
            <div className="faq-item">
              <h3>How does the setup work?</h3>
              <p className="answer">Our team will guide you through a simple onboarding process to set up your account, integrate with your existing systems, and ensure everything runs smoothly. We offer white-glove service for custom setups.</p>
            </div>
            <div className="faq-item">
              <h3>Can I upgrade or downgrade my plan later?</h3>
              <p className="answer">Yes! We offer flexible plans to accommodate your growing needs. Simply contact our support team, and we'll adjust your plan accordingly with no hassle.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <h2>Less than one captured customer pays for the year.</h2>
          <div className="sub">Call the demo line and tell it your worst call. See what happens.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </section>
    </>
  );
}