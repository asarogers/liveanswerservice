import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Checkout canceled — Live Answer",
  description: "No card was charged. Take another look at pricing when you're ready.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-static";

export default function CheckoutCancelPage() {
  return (
    <section className="la-hero">
      <div className="wrap-narrow">
        <h1>No card was charged.</h1>
        <p className="sub">You closed checkout before finishing. Nothing was billed and no trial started.</p>
        <div className="phone-secondary" style={{ marginTop: 24 }}>
          <Link href="/pricing">Back to pricing</Link> ·{" "}
          <Link href="/book">Talk to us first (30 min)</Link> · or call{" "}
          <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
        </div>
      </div>
    </section>
  );
}
