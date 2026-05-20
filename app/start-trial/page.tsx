import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { loadSitePlan, noindexSlugs } from "@/lib/site-plan";

const SLUG = "start-trial";
const NOINDEX = noindexSlugs(loadSitePlan()).has(SLUG);

export const metadata: Metadata = {
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
              <p>We collect ~15 questions about your business, vertical, hours, and CRM. We build the agent in 48 hours.</p>
            </div>
            <div className="plan-step">
              <div className="num">D3</div>
              <h3>Live AI on a forward</h3>
              <p>You point your overflow / after-hours line at the AI. Real calls flow in. SMS summaries land in 60 seconds.</p>
            </div>
            <div className="plan-step">
              <div className="num">D7</div>
              <h3>Decide</h3>
              <p>Continue at $500/mo, cancel, or extend. No card on file. We port any number out free if you leave.</p>
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
    </>
  );
}
