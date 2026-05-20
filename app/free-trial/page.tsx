import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { loadSitePlan, noindexSlugs } from "@/lib/site-plan";

const SLUG = "free-trial";
const NOINDEX = noindexSlugs(loadSitePlan()).has(SLUG);

export const metadata: Metadata = {
  title: "Free Trial — Live Answer AI Receptionist · No Credit Card",
  description:
    "Free 7-day trial of Live Answer. No credit card. AI answers your calls within 24 hours of setup. Cancel anytime, keep your phone number.",
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
            <strong>7 days. AI live within 24 hours. No card on file.</strong> If it doesn&rsquo;t
            book what we said it would book, you owe nothing and you keep your phone number.
          </p>
        </div>
      </section>

      <section className="stakes" aria-label="Trial terms at a glance">
        <div className="wrap">
          <div className="stakes-grid">
            <div className="stakes-stat">
              <div className="num">$0</div>
              <div className="label">card required to start</div>
            </div>
            <div className="stakes-stat">
              <div className="num">7 days</div>
              <div className="label">to evaluate with real customer calls</div>
            </div>
            <div className="stakes-stat">
              <div className="num">24 hrs</div>
              <div className="label">from kickoff to AI live on your line</div>
            </div>
          </div>
        </div>
      </section>

      <section className="plan" aria-label="What's in the trial">
        <div className="wrap">
          <div className="section-eyebrow">In the trial</div>
          <h2 className="section-title">Everything in Unlimited.</h2>
          <div className="plan-grid">
            <div className="plan-step">
              <div className="num">✓</div>
              <h3>Every Unlimited feature</h3>
              <p>Unlimited calls, bilingual EN/ES, native CRM sync, emergency escalation, call recordings, no-show follow-up SMS.</p>
            </div>
            <div className="plan-step">
              <div className="num">✓</div>
              <h3>Real customer calls</h3>
              <p>You forward overflow or after-hours, real prospects reach the AI. SMS summaries land in 60 seconds.</p>
            </div>
            <div className="plan-step">
              <div className="num">✓</div>
              <h3>Money-back guarantee</h3>
              <p>If your AI doesn&rsquo;t book what we promised in the kickoff call, we refund the month. No questions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="phone-cta">
        <div className="eyebrow">Three minutes from now to live.</div>
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
