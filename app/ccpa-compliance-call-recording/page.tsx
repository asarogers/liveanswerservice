import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { loadSitePlan, noindexSlugs, gatedRobots } from "@/lib/site-plan";

const SLUG = "ccpa-compliance-call-recording";
const NOINDEX = noindexSlugs(loadSitePlan()).has(SLUG);

export const metadata: Metadata = {
  openGraph: {
  url: "https://liveanswerservice.com/ccpa-compliance-call-recording",
  },
  robots: gatedRobots("/ccpa-compliance-call-recording"),
  title: "CCPA Compliance for Call Recording — Live Answer",
  description:
    "How Live Answer handles California CCPA two-party-consent for call recording. Disclosure script, encryption, retention, deletion requests, BAA availability.",
  alternates: { canonical: `/${SLUG}` },
  ...(NOINDEX ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } } : {}),
};

export default function CCPAPage() {
  return (
    <>
      <style>{`
        @media (max-width: 760px) {
          .ccpa-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
      <section className="la-hero">
        <div className="wrap ccpa-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <div className="hero-eyebrow">
              <span className="dot" aria-hidden="true" />
              <span>California compliance · built in</span>
            </div>
            <h1>CCPA &amp; <em>call recording</em>, handled.</h1>
            <p className="sub">
              <strong>You&rsquo;re a California business owner — one missed disclosure can become a
              §632 lawsuit.</strong> Every Live Answer call opens with a compliant disclosure,
              encrypted recording, 30-day deletion. You stay out of the courtroom.
            </p>
            <form className="hero-call-form" action="/api/demo-call" method="post">
              <input type="tel" name="phone" placeholder="Enter your phone number" required aria-label="Your phone number" />
              <button type="submit">
                <i className="ti ti-phone-outgoing" aria-hidden="true" />
                Hear the disclosure
              </button>
            </form>
            <div style={{ fontSize: 13, color: "#94867a" }}>
              We&rsquo;ll call you and play the exact two-party-consent prompt your callers hear.
            </div>
            <div className="hero-transitional">
              Want the full one-pager? <Link href="/book">Book a 30-min compliance walk-through →</Link>
            </div>
          </div>

          <div className="hero-phone-wrap">
            <div className="phone-mockup" role="img" aria-label="Sample CCPA-compliant call opening">
              <div className="phone-notch" aria-hidden="true" />
              <div className="phone-screen">
                <div className="phone-status">
                  <span>10:02 AM</span>
                  <span aria-hidden="true"><i className="ti ti-shield-check" /> <i className="ti ti-lock" /></span>
                </div>
                <div className="phone-callbar">
                  <i className="ti ti-phone-call" aria-hidden="true" />
                  <span>Live Answer · 0:08</span>
                </div>
                <div className="chat-thread">
                  <div className="chat-bubble ai">Thanks for calling — this call may be recorded for service quality.</div>
                  <div className="chat-bubble caller">Sure, no problem.</div>
                  <div className="chat-bubble ai">Wonderful. How can I help today?</div>
                  <div className="chat-bubble caller" style={{ opacity: 0.7, fontStyle: "italic" }}>(consent captured · encrypted · §632 compliant)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stakes" aria-label="Why this matters">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-num">01 · The stakes</span>
            <h2 className="section-title" style={{ margin: 0 }}>What happens if you get this wrong.</h2>
          </div>
          <div className="stakes-grid">
            <div className="stakes-stat">
              <div className="num">$5,000</div>
              <div className="label">statutory damages per violation under CA Penal Code §637.2</div>
            </div>
            <div className="stakes-stat">
              <div className="num">3×</div>
              <div className="label">actual damages — whichever is greater — payable to the caller</div>
            </div>
            <div className="stakes-stat">
              <div className="num">100%</div>
              <div className="label">of calls Live Answer records open with the disclosure</div>
            </div>
          </div>
        </div>
      </section>

      <section className="voc-pullout" aria-label="What owners are afraid of">
        <div className="wrap-narrow">
          <blockquote className="voc-quote">&ldquo;I just want to answer my phones — I don&rsquo;t want to get sued because some agency I&rsquo;ve never heard of decided I&rsquo;m the test case.&rdquo;</blockquote>
          <div className="voc-attribution">— solo attorney, r/Lawyertalk</div>
        </div>
      </section>

      <section className="scenarios" aria-label="What CCPA requires">
        <div className="wrap">
          <span className="section-num">01 · The law</span>
          <h2 className="section-title">What California requires.</h2>
          <div className="scenarios-grid">
            <div className="scenario-card">
              <div className="time"><i className="ti ti-microphone" aria-hidden="true" /> Two-party consent</div>
              <div className="body">
                California Penal Code §632 requires all parties to a confidential communication
                to consent to recording. The AI plays a disclosure at the start of every call.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-shield" aria-hidden="true" /> Data minimization</div>
              <div className="body">
                CCPA requires collection of only the personal information reasonably necessary.
                Our intake scripts default to minimum-necessary; PHI collection is opt-in only.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-eraser" aria-hidden="true" /> Right to delete</div>
              <div className="body">
                Callers can request deletion of their recording + transcript. We honor requests
                within 30 days. Standard retention is 90 days; configurable per customer.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="plan" aria-label="Our compliance posture">
        <div className="wrap">
          <span className="section-num">02 · Our posture</span>
          <h2 className="section-title">What we do by default.</h2>
          <div className="plan-grid">
            <div className="plan-step">
              <div className="num">1</div>
              <h3>Disclosure at greeting</h3>
              <p>Every call opens with: &ldquo;This call may be recorded for service quality.&rdquo; In Spanish for Spanish-speaking callers.</p>
            </div>
            <div className="plan-step">
              <div className="num">2</div>
              <h3>Encryption + retention</h3>
              <p>Recordings encrypted at rest and in transit. 90-day default retention. 7-day, 30-day, or indefinite configurable.</p>
            </div>
            <div className="plan-step">
              <div className="num">3</div>
              <h3>BAA for healthcare</h3>
              <p>Dental and medical practices get a signed BAA before clinical deployment. PHI off by default.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="success" aria-label="What success looks like">
        <div className="wrap-narrow">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-num">03 · What you get</span>
            <h2 className="section-title" style={{ margin: 0 }}>Sleep soundly. Answer every call.</h2>
          </div>
          <div className="success-grid">
            <div className="success-item">
              <i className="ti ti-shield-check" aria-hidden="true" />
              <strong>Every call disclosed</strong>
            </div>
            <div className="success-item">
              <i className="ti ti-lock" aria-hidden="true" />
              <strong>AES-256 encrypted</strong>
            </div>
            <div className="success-item">
              <i className="ti ti-eraser" aria-hidden="true" />
              <strong>30-day deletion SLA</strong>
            </div>
            <div className="success-item">
              <i className="ti ti-file-certificate" aria-hidden="true" />
              <strong>BAA for healthcare</strong>
            </div>
            <div className="success-item">
              <i className="ti ti-language" aria-hidden="true" />
              <strong>Spanish disclosure included</strong>
            </div>
            <div className="success-item">
              <i className="ti ti-headphones-off" aria-hidden="true" />
              <strong>Recording-off mode available</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="scenarios" aria-label="What happens without us">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-num">04 · The failure path</span>
            <h2 className="section-title" style={{ margin: 0 }}>What goes wrong if you DIY this.</h2>
          </div>
          <div className="scenarios-grid">
            <div className="scenario-card">
              <div className="time"><i className="ti ti-alert-triangle" aria-hidden="true" /> Missed disclosure</div>
              <div className="body">
                One employee forgets the script. One call gets recorded silently. One angry caller
                hires a plaintiff&rsquo;s firm. §637.2 gives them $5,000 statutory plus attorney&rsquo;s
                fees — paid by you.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-cloud-off" aria-hidden="true" /> Unsecured storage</div>
              <div className="body">
                Recordings on a desktop. PHI in a Gmail inbox. A laptop gets stolen and you&rsquo;re
                now answering both the CCPA regulator AND the HIPAA breach notification timeline.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-mail-question" aria-hidden="true" /> Deletion ignored</div>
              <div className="body">
                Caller emails a deletion request. It sits in a folder for 60 days. CCPA says 45.
                Now you have a documented violation in writing — discoverable in any future case.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <h2>Take compliance off your plate.</h2>
          <div className="sub">
            Call the demo line — hear the exact disclosure your callers will hear. Three minutes,
            no commitment.
          </div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
          <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/book" className="btn-secondary">
              Book a compliance walk-through →
            </Link>
            <Link href="/start-trial" className="btn-secondary">
              Start 7-day free trial →
            </Link>
          </div>
          <div className="guarantees" style={{ marginTop: 24, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            <span><i className="ti ti-shield-check" aria-hidden="true" /> Signed BAA available</span>
            <span><i className="ti ti-shield-check" aria-hidden="true" /> Recording-off mode</span>
            <span><i className="ti ti-shield-check" aria-hidden="true" /> Cancel anytime</span>
          </div>
        </div>
      </section>
    </>
  );
}
