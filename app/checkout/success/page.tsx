import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "You're in — Live Answer",
  description: "Your Live Answer trial is active. We'll be in touch within one business day to schedule your kickoff call.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-static";

const STEPS = [
  { label: "Within 1 business day", body: "We email you to schedule a 30-minute kickoff call." },
  { label: "Kickoff call", body: "We collect ~15 questions about your business, vertical, hours, and CRM. Your agent is built within 48 hours." },
  { label: "Live on a forward", body: "You point your overflow / after-hours line at the AI. SMS summaries land in 60 seconds." },
  { label: "Day 7 — decide", body: "Continue at your selected rate, or cancel. No card charged for the recurring plan until the trial ends." },
];

export default function CheckoutSuccessPage() {
  return (
    <section className="la-hero">
      <div className="wrap-narrow">
        <h1>You&rsquo;re in.</h1>
        <p className="sub">
          <strong>Your trial is active.</strong> We&rsquo;ll email your receipt within a few minutes, and reach out within one business day to schedule your kickoff call.
        </p>

        <div className="plan" style={{ marginTop: 32 }}>
          <ol style={{ listStyle: "none", padding: 0, display: "grid", gap: 20 }}>
            {STEPS.map((step, i) => (
              <li key={i}>
                <strong>{i + 1}. {step.label}</strong>
                <p style={{ margin: "4px 0 0" }}>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="phone-secondary" style={{ marginTop: 32 }}>
          <Link href="/">Back to home</Link> · Questions? Call{" "}
          <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
        </div>
      </div>
    </section>
  );
}
