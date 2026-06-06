import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { loadSitePlan, noindexSlugs, gatedRobots } from "@/lib/site-plan";

const SLUG = "spam-call-filtering";
const NOINDEX = noindexSlugs(loadSitePlan()).has(SLUG);

export const metadata: Metadata = {
  robots: gatedRobots("/spam-call-filtering"),
  title: "Spam Call Filtering for Business — Answered, Never Billed",
  description:
    "AI answers every call, recognizes spam and robocalls in seconds, and never books or bills them. Real customers are never blocked. Flat $500/mo unlimited.",
  alternates: { canonical: `/${SLUG}` },
  ...(NOINDEX ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } } : {}),
};

const CHAIN: Array<{ icon: string; title: string; body: string }> = [
  {
    icon: "ti-phone-incoming",
    title: "Every call is answered first",
    body: "Live Answer picks up in two rings — no caller is ever pre-blocked. That's the whole point: a real customer with an unknown number is never turned away by an overzealous filter.",
  },
  {
    icon: "ti-ear-scan",
    title: "The AI listens and classifies",
    body: "Within seconds the agent recognizes the patterns of a robocall, auto-dialer, or sales pitch — the dead air, the recorded opener, the off-script script — and tags the call as spam.",
  },
  {
    icon: "ti-hand-stop",
    title: "Spam gets dispatched, not booked",
    body: "Recognized spam is ended cleanly. It never reaches your calendar, never triggers a callback, and never lands on your cell as an “urgent” escalation.",
  },
  {
    icon: "ti-filter",
    title: "Your summary stream stays clean",
    body: "Spam is segregated from your real call log. The SMS and email summaries you actually read only contain real callers — customers, leads, and bookings.",
  },
  {
    icon: "ti-receipt-off",
    title: "And it costs you nothing",
    body: "Flat $500/mo, unlimited. A wave of robocalls doesn't move your invoice. On a metered service, every one of those seconds is billed back to you.",
  },
];

const COST: Array<{ icon: string; title: string; body: string }> = [
  {
    icon: "ti-tools",
    title: "Every spam call interrupts a job",
    body: "If you answer your own line, a robocall pulls you off a roof, out from under a sink, or away from a customer in front of you — for a car-warranty pitch.",
  },
  {
    icon: "ti-clock-dollar",
    title: "On metered services, you pay for them",
    body: "Per-minute billing doesn't care who's calling. At $1.50–$3.45/min, a steady drip of robocalls and auto-dialers quietly inflates your bill all month.",
  },
  {
    icon: "ti-bell-ringing",
    title: "Spam buries the calls that matter",
    body: "When voicemail and message logs fill with junk, the one real customer who left a message gets lost in the noise — and never gets a callback.",
  },
  {
    icon: "ti-mood-confuzed",
    title: "Aggressive blocking loses customers",
    body: "Crank up a carrier or app blocker and you start dropping real callers with unknown numbers — a new customer, a supplier, a referral. A blocked customer is a lost job.",
  },
];

export default function SpamCallFilteringPage() {
  return (
    <>
      <style>{`
        @media (max-width: 760px) {
          .scf-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .scf-chain-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section className="la-hero">
        <div className="wrap scf-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <div className="hero-eyebrow">
              <span className="dot" aria-hidden="true" />
              <span>Spam call filtering for business</span>
            </div>
            <h1>Spam calls get answered. <em>You never see them.</em></h1>
            <p className="sub">
              Live Answer picks up every call, recognizes robocalls and sales spam in seconds, and{" "}
              <strong>dispatches them without booking them, billing you, or interrupting your day</strong> —
              while real customers always get through.
            </p>
            <form className="hero-call-form" action="/api/demo-call" method="post">
              <input type="tel" name="phone" placeholder="Enter your phone number" required aria-label="Your phone number" />
              <button type="submit">
                <i className="ti ti-phone-outgoing" aria-hidden="true" />
                Hear it screen a call
              </button>
            </form>
            <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
              Call the demo line and watch a call get screened in real time.
            </div>
            <div className="hero-transitional">
              On a metered plan? <Link href="/calculator">See what spam is costing you &rarr;</Link>
            </div>
          </div>

          <div className="hero-phone-wrap">
            <div className="phone-mockup" role="img" aria-label="A spam call being screened and dismissed">
              <div className="phone-notch" aria-hidden="true" />
              <div className="phone-screen">
                <div className="phone-status">
                  <span>10:22 AM</span>
                  <span aria-hidden="true"><i className="ti ti-signal-4g" /> <i className="ti ti-wifi" /> <i className="ti ti-battery" /></span>
                </div>
                <div className="phone-callbar">
                  <i className="ti ti-phone-call" aria-hidden="true" />
                  <span>Screened call · 0:09</span>
                </div>
                <div className="chat-thread">
                  <div className="chat-bubble ai">Live Answer &mdash; this is Sarah. How can I help?</div>
                  <div className="chat-bubble caller">&hellip;final notice about your vehicle&rsquo;s warranty&hellip;</div>
                  <div className="chat-bubble ai">Recognized as a recorded sales call. Ending it.</div>
                  <div className="chat-bubble ai" style={{ opacity: 0.7 }}>Tagged spam · not booked · not billed · owner not notified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stakes" aria-label="The business cost of spam calls">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="section-eyebrow">The cost of spam calls</div>
            <h2 className="section-title">For a business, spam calls aren&rsquo;t just annoying. They&rsquo;re expensive.</h2>
            <p style={{ maxWidth: 660, margin: "12px auto 0", color: "var(--color-text)" }}>
              On a personal cell a robocall is a shrug. On a business line it interrupts paid work,
              it can run up a metered bill, and it buries the one call you actually needed to take.
            </p>
          </div>
          <div className="scenarios-grid">
            {COST.map((c) => (
              <div className="scenario-card" key={c.title}>
                <div className="time"><i className={`ti ${c.icon}`} aria-hidden="true" /> {c.title}</div>
                <div className="body">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scenarios" aria-label="Why carrier and app blockers are the wrong tool">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="section-eyebrow">Why blockers fail a business line</div>
            <h2 className="section-title">Carrier and app blockers were built for personal phones.</h2>
            <p style={{ maxWidth: 660, margin: "12px auto 0", color: "var(--color-text)" }}>
              A blocklist makes a yes/no guess <em>before</em> anyone answers. On a personal phone a
              false positive is a missed friend. On a business line it&rsquo;s a missed job.
            </p>
          </div>
          <div className="scenarios-grid">
            <div className="scenario-card">
              <div className="time"><i className="ti ti-alert-triangle" aria-hidden="true" /> False positives block customers</div>
              <div className="body">
                Carrier and app filters routinely flag legitimate unknown numbers as spam. The new
                customer calling from a number you&rsquo;ve never seen gets silently sent to a junk
                bin &mdash; and you never learn the call happened.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-adjustments" aria-hidden="true" /> It&rsquo;s a blunt dial</div>
              <div className="body">
                Loosen the filter and spam gets through; tighten it and customers get blocked. A
                blocklist can&rsquo;t tell the difference between a robocall and a first-time caller,
                because it decides before anyone speaks.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-eye-off" aria-hidden="true" /> You can&rsquo;t see what it dropped</div>
              <div className="body">
                Blocked calls leave no record you&rsquo;ll ever read. You have no way to know whether
                the filter saved you from a robocall or cost you a paying customer.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="plan" aria-label="How answer-and-screen filtering works">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-num">How it works</span>
            <h2 className="section-title" style={{ margin: 0 }}>Answer first, then screen. The opposite of a blocklist.</h2>
            <p style={{ maxWidth: 660, margin: "12px auto 0", color: "var(--color-text)" }}>
              Instead of guessing before the call, Live Answer answers every call and decides what it
              actually is &mdash; so spam is dismissed and real callers are never blocked.
            </p>
          </div>
          <div className="plan-grid scf-chain-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {CHAIN.map((step, i) => (
              <div className="plan-step" key={step.title}>
                <div className="num">{i + 1}</div>
                <h3><i className={`ti ${step.icon}`} aria-hidden="true" style={{ marginRight: 8 }} />{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scenarios" aria-label="What the owner sees">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="section-eyebrow">What you see</div>
            <h2 className="section-title">A clean call log. Spam kept out of it.</h2>
            <p style={{ maxWidth: 660, margin: "12px auto 0", color: "var(--color-text)" }}>
              The summaries that hit your phone are the calls that matter. Spam is recorded and
              segregated &mdash; visible if you ever want to check, invisible the rest of the time.
            </p>
          </div>
          <div className="scenarios-grid">
            <div className="scenario-card">
              <div className="time"><i className="ti ti-message-2" aria-hidden="true" /> Your summary stream</div>
              <div className="body">
                Real callers only: name, what they needed, what was booked. No &ldquo;car warranty&rdquo;
                or &ldquo;final notice&rdquo; junk cluttering the texts you actually read.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-folder" aria-hidden="true" /> Spam, segregated</div>
              <div className="body">
                Recognized spam is logged separately, not deleted. If you ever want to confirm what was
                filtered, it&rsquo;s there &mdash; out of your way, not gone.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-phone-check" aria-hidden="true" /> Nothing real is lost</div>
              <div className="body">
                Because every call is answered, a real customer is never blocked. The worst case for a
                legitimate caller is a few seconds with the AI &mdash; never a junk bin.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="scenarios" aria-label="Pricing context">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="section-eyebrow">Pricing context</div>
            <h2 className="section-title">On a flat rate, spam is free to ignore. On a metered one, you pay for it.</h2>
            <p style={{ maxWidth: 660, margin: "12px auto 0", color: "var(--color-text)" }}>
              The structure of your plan decides whether spam costs you money. Metered services bill
              every minute regardless of who&rsquo;s calling. Live Answer is <strong>$500/mo flat,
              unlimited</strong> &mdash; robocalls cost the same as silence.
            </p>
          </div>
          <div className="scenarios-grid">
            <div className="scenario-card">
              <div className="time"><i className="ti ti-clock-dollar" aria-hidden="true" /> Metered services</div>
              <div className="body">
                Per-minute billing at $1.50&ndash;$3.45/min doesn&rsquo;t distinguish a robocall from a
                customer. Every spam second the service spends screening or fielding a junk call is
                billed back to you.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-infinity" aria-hidden="true" /> Live Answer flat</div>
              <div className="body">
                $500/mo, unlimited, no overage. A bad week of robocalls doesn&rsquo;t move the invoice.
                Filtering spam is just part of the service, not a line item that costs you more.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-calculator" aria-hidden="true" /> See your number</div>
              <div className="body">
                Spam volume is real volume on a metered bill. <Link href="/calculator">See what your
                call volume would cost &rarr;</Link> on a per-minute plan versus flat-rate.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="voc-pullout" aria-label="Proof — the demo line">
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <div className="section-eyebrow">Proof, not a promise</div>
          <h2 className="section-title">Call the line. Try to get a junk call past it.</h2>
          <p style={{ maxWidth: 600, margin: "12px auto 24px", color: "var(--color-text)" }}>
            Call the demo line and play a recorded sales pitch &mdash; then call back as a real
            customer with a job. Watch the AI dismiss the first in seconds and book the second. Same
            line, two outcomes, no blocklist.
          </p>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </section>

      <section className="guarantees" aria-label="Risk reversal" style={{ padding: "32px 0", display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
        <span><i className="ti ti-shield-check" aria-hidden="true" /> 7-day free trial · no card</span>
        <span><i className="ti ti-shield-check" aria-hidden="true" /> Real customers never blocked</span>
        <span><i className="ti ti-shield-check" aria-hidden="true" /> Flat $500/mo · spam costs nothing</span>
      </section>

      <section className="faq" aria-label="Spam call filtering FAQ">
        <div className="wrap">
          <h2>Spam call filtering questions</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <h3>What is spam call filtering for business?</h3>
              <p>
                For a business, spam call filtering means keeping robocalls, auto-dialers, and sales
                spam off your real call log without blocking legitimate callers. Live Answer does it by
                answering every call, recognizing spam in seconds, and dispatching it &mdash; so junk
                never reaches your calendar, your phone, or your bill, and real customers always get
                through.
              </p>
            </li>
            <li>
              <h3>Do spam calls cost money on an answering service?</h3>
              <p>
                On a metered answering service, yes. Per-minute billing &mdash; typically
                $1.50&ndash;$3.45 per minute &mdash; charges you for every minute the service spends on
                a call, and it doesn&rsquo;t distinguish a robocall from a customer. A steady stream of
                spam quietly inflates the bill. Live Answer is flat $500/mo unlimited, so spam costs you
                nothing.
              </p>
            </li>
            <li>
              <h3>Will real customers ever get blocked?</h3>
              <p>
                No. That&rsquo;s the difference between filtering and blocking. Carrier and app
                blocklists guess before anyone answers and routinely send legitimate unknown numbers to
                a junk bin. Live Answer answers every call first, so a real customer is never pre-blocked
                &mdash; the screening happens on the call, not before it.
              </p>
            </li>
            <li>
              <h3>How does Live Answer detect spam?</h3>
              <p>
                The AI answers the call and listens. It recognizes the patterns of a robocall or
                recorded sales pitch &mdash; dead air, a recorded opener, an off-script pitch &mdash; and
                tags the call as spam within seconds. Recognized spam is ended cleanly and logged
                separately; it&rsquo;s never booked, never escalated to your cell, and never added to the
                summaries you read.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <h2>Let the spam calls hit the AI. Not you.</h2>
          <div className="sub">Every robocall answered and dismissed &mdash; every real customer booked.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
          <div style={{ marginTop: 20 }}>
            <Link href="/calculator" className="btn-secondary">
              See what spam is costing you &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
