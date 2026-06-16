import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { loadSitePlan, noindexSlugs, gatedRobots } from "@/lib/site-plan";

const SLUG = "start-trial";
const NOINDEX = noindexSlugs(loadSitePlan()).has(SLUG);

export const metadata: Metadata = {
  openGraph: {
  url: "https://liveanswerservice.com/start-trial",
  },
  robots: gatedRobots("/start-trial"),
  title: "Start Your 7-Day Free Trial — Live Answer",
  description:
    "Start a 7-day free trial of Live Answer. No credit card. We port a forwarding number, your AI goes live within 24 hours.",
  alternates: { canonical: `/${SLUG}` },
  ...(NOINDEX ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } } : {}),
};

export default function StartTrialPage() {
  return (
    <>
      <section className="la-hero">
        <div className="wrap-narrow">
          <h1>Start your <em>7-day trial</em>.</h1>
          <p className="sub">
            <strong>No credit card. $199 setup waived with annual prepay.</strong> We port a
            forwarding number, your AI goes live within 24 hours, you keep your existing phone
            setup intact in case you want out.
          </p>
        </div>
      </section>

      <section className="phone-cta">
        <div className="eyebrow">Two ways to start. Pick one.</div>
        <a href={siteConfig.phone.href} className="phone-btn">
          <i className="ti ti-phone-call" aria-hidden="true" />
          <span>{siteConfig.phone.display}</span>
        </a>
        <div className="phone-secondary">
          Call to talk to a person · or <Link href="/book">book a 30-min setup consult</Link>
        </div>
      </section>

      <section className="plan" aria-label="What happens after you sign up">
        <div className="wrap">
          <div className="section-eyebrow">After you start</div>
          <h2 className="section-title">The first 7 days.</h2>
          <div className="plan-grid">
            <div className="plan-step">
              <div className="num">D1</div>
              <h3>30-min kickoff call</h3>
              <p>We collect ~15 questions about your business, vertical, hours, and CRM. We build the agent in 48 hours. During this call, we'll discuss your specific needs, target audience, and any unique selling points you want to emphasize. This initial setup ensures your AI is fully aligned with your brand voice and customer service goals.</p>
              <ul className="benefits-list">
                <li>Expert guidance on optimizing your AI's responses</li>
                <li>Customized training based on your industry specifics</li>
                <li>Detailed documentation to help you get started effectively</li>
              </ul>
            </div>
            <div className="plan-step">
              <div className="num">D3</div>
              <h3>Live AI on a forward</h3>
              <p>You point your overflow / after-hours line at the AI. Real calls flow in. SMS summaries land in 60 seconds. Once live, our AI will begin handling inquiries, providing instant responses that reflect your business's values and standards. You'll receive detailed reports summarizing interactions, allowing you to monitor performance and effectiveness throughout the trial period.</p>
              <ul className="benefits-list">
                <li>24/7 customer support coverage</li>
                <li>Real-time analytics dashboard access</li>
                <li>Regular updates and improvements during your trial</li>
              </ul>
            </div>
            <div className="plan-step">
              <div className="num">D7</div>
              <h3>Decide</h3>
              <p>Continue at $500/mo, cancel, or extend. No card on file. We port any number out free if you leave. At the end of your trial, you'll have a clear understanding of how Live Answer can benefit your business. Whether you choose to continue, pause, or extend your trial, we're committed to supporting your decision-making process with transparent pricing and flexible options.</p>
              <ul className="benefits-list">
                <li>Month-to-month billing — no contract</li>
                <li>No obligation to continue after the trial</li>
                <li>Free number porting if you decide to leave</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <h2>Three minutes to set up.</h2>
          <div className="sub">Dial the demo line and tell the AI you&rsquo;d like to start a trial.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </section>

      <section className="faq">
        <div className="wrap">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How long does the setup take?</h3>
              <p>Setup typically takes 48 hours from your kickoff call. Your phone keeps working normally the whole time — the switch-over is a single forwarding change.</p>
            </div>
            <div className="faq-item">
              <h3>What happens after the trial ends?</h3>
              <p>If you choose to continue, we offer flexible payment plans starting at $500/month. You can also cancel without any obligations or extend your trial if you need more time to evaluate.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a cost to try the AI?</h3>
              <p>Our 7-day trial is completely free with no credit card required. We believe in giving you enough time and resources to see the value Live Answer can bring to your business.</p>
            </div>
            <div className="faq-item">
              <h3>Do I need a specific phone number?</h3>
              <p>We handle all number porting and forwarding for you. You don't need a specific number upfront; we'll work with whatever setup you currently have in place.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="wrap">
          <h2>Why Start Your Trial Today?</h2>
          <ul className="benefits-list">
            <li>See immediate improvements in customer engagement</li>
            <li>Reduce response times and improve satisfaction scores</li>
            <li>Gain insights into your customers' most common questions</li>
            <li>Test the AI with real calls to see its effectiveness firsthand</li>
            <li>Receive personalized support throughout the trial period</li>
          </ul>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <h2>Ready to Transform Your Customer Service?</h2>
          <p>Start your 7-day free trial today and experience the difference Live Answer can make for your business.</p>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </section>
    </>
  );
}