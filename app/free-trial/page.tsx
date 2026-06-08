import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { loadSitePlan, noindexSlugs, gatedRobots } from "@/lib/site-plan";

const SLUG = "free-trial";
const NOINDEX = noindexSlugs(loadSitePlan()).has(SLUG);

export const metadata: Metadata = {
  openGraph: {
  url: "https://liveanswerservice.com/free-trial",
  },
  robots: gatedRobots("/free-trial"),
  title: "Free Trial — Live Answer AI Receptionist · No Credit Card",
  description:
    "Experience our award-winning AI receptionist for 7 days at no cost. Start your free trial now with no credit card required.",
  alternates: { canonical: `/${SLUG}` },
  ...(NOINDEX ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } } : {}),
};

export default function FreeTrialPage() {
  return (
    <>
      <section className="la-hero">
        <div className="wrap-narrow">
          <h1>Free trial. No card. <em>Real calls.</em></h1>
          <p className="sub">
            <strong>7 days. AI live within 24 hours. No credit card required.</strong> If our system doesn't meet your expectations, you can cancel anytime and keep your phone number.
          </p>
          <div className="intro-text">
            <p>Live Answer is an AI receptionist that answers your business line while you&rsquo;re on a job, in a meeting, or asleep. Letting software talk to your customers is a trust decision — so the trial is free, runs on your real calls, and requires no credit card.</p>
            <p>Forward your line, let the AI take a week of real calls, and judge it on what lands in your inbox: bookings, messages, and call summaries. If it doesn&rsquo;t earn the $500/mo, cancel and keep your number.</p>
          </div>
        </div>
      </section>

      <section className="stakes" aria-label="Trial terms at a glance">
        <div className="wrap">
          <h2 className="section-title">Trial Terms At A Glance</h2>
          <div className="stakes-grid">
            <div className="stakes-stat">
              <div className="num">$0</div>
              <div className="label">No credit card required to start</div>
              <p>Experience our service risk-free with no financial obligations during the trial period. We believe in giving you a genuine opportunity to evaluate our platform without any upfront costs.</p>
            </div>
            <div className="stakes-stat">
              <div className="num">7 days</div>
              <div className="label">Full access to all features for evaluation</div>
              <p>Use every aspect of Live Answer to see how it fits your needs and enhances your workflow. This includes advanced features like call recording, multi-language support, and integration with leading CRM platforms.</p>
            </div>
            <div className="stakes-stat">
              <div className="num">24 hrs</div>
              <div className="label">From sign-up to AI live on your line</div>
              <p>One forwarding change and the AI is on your line — most accounts go live the same day they finish the kickoff call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="plan" aria-label="What's in the trial">
        <div className="wrap">
          <div className="section-eyebrow">Included In Your Trial</div>
          <h2 className="section-title">Everything You Need To Succeed</h2>
          <div className="plan-grid">
            <div className="plan-step">
              <div className="num">✓</div>
              <h3>Every Feature Available</h3>
              <p>The trial is the full product: unlimited calls, bilingual support (English/Spanish), CRM integration, emergency escalation, call recordings, and automated no-show follow-up SMS. What you evaluate is exactly what you&rsquo;d pay for.</p>
            </div>
            <div className="plan-step">
              <div className="num">✓</div>
              <h3>Real-Time Call Management</h3>
              <p>Forward overflow or after-hours calls to our AI receptionist. Get instant SMS summaries within 60 seconds of each interaction. Stay informed and maintain customer engagement even when you're unavailable.</p>
            </div>
            <div className="plan-step">
              <div className="num">✓</div>
              <h3>24/7 Support</h3>
              <p>Our dedicated support team is available around the clock to address any issues or questions you may have during your trial period. We're committed to ensuring a smooth and successful evaluation of our service.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq" aria-label="Frequently Asked Questions">
        <div className="wrap">
          <h2 className="section-title">Common Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How does the cancellation process work?</h3>
              <p>Cancellation is simple and can be done at any time through your account dashboard. Your phone number remains yours to keep, even if you choose not to continue with our service.</p>
            </div>
            <div className="faq-item">
              <h3>What happens after the free trial ends?</h3>
              <p>After 7 days, you can either continue using Live Answer at a monthly rate or cancel without any obligations. We'll provide you with detailed usage statistics to help you decide.</p>
            </div>
            <div className="faq-item">
              <h3>Do I need to provide payment details for the trial?</h3>
              <p>No, our free trial requires no credit card information. You can explore all features without any financial commitment upfront.</p>
            </div>
            <div className="faq-item">
              <h3>How easy is it to set up the service?</h3>
              <p>Our setup process is designed to be quick and straightforward. Typically, you'll have your AI receptionist operational within 24 hours of signing up.</p>
            </div>
            <div className="faq-item">
              <h3>Do I need any special technical expertise to use Live Answer?</h3>
              <p>No technical expertise is required. Our system is designed for ease of use, allowing you to start managing calls efficiently with minimal setup and training.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="phone-cta">
        <div className="eyebrow">Three minutes from now to live service.</div>
        <a href={siteConfig.phone.href} className="phone-btn">
          <i className="ti ti-phone-call" aria-hidden="true" />
          <span>{siteConfig.phone.display}</span>
        </a>
        <div className="phone-secondary">
          Or <Link href="/start-trial">read the trial flow first</Link> · cancel anytime
        </div>
      </section>
    </>
  );
}