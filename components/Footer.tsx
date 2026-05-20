import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Site-wide footer. Matches the design from
 * /important/business/liveanswerservice/files/index.html.
 *
 * Four columns: brand, Industries, Resources, Legal — plus a centered
 * trust strip at the bottom (CCPA compliant · Bilingual EN/ES · Made
 * in California · copyright).
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="la-footer">
      <div className="wrap">
        <div className="footer-cols">
          <div className="footer-col">
            <h4><span className="brand-dot" aria-hidden="true" />Live Answer</h4>
            <div className="footer-tagline">Never miss another booking.</div>
            <div style={{ marginTop: 12, fontSize: 13, lineHeight: 1.7 }}>
              2561 Skylark Drive<br />
              San Jose, CA 95125<br />
              <a href={siteConfig.phone.href} style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>
                {siteConfig.phone.display}
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Industries</h4>
            <ul>
              <li><Link href="/services/hvac-answering-service">HVAC</Link></li>
              <li><Link href="/services/attorney-answering-service">Legal</Link></li>
              <li><Link href="/services/dental-answering-service">Dental</Link></li>
              <li><Link href="/services/small-business-answering-service">Small business</Link></li>
              <li><Link href="/services">All industries</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/calculator">Calculator</Link></li>
              <li><Link href="/comparison">Compare</Link></li>
              <li><Link href="/how-it-works">How it works</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/ccpa-compliance-call-recording">CCPA</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/accessibility">Accessibility</Link></li>
              <li><Link href="/book">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>CCPA compliant</span>
          <span className="sep">·</span>
          <span>Bilingual EN/ES</span>
          <span className="sep">·</span>
          <span>Made in California</span>
          <span className="sep">·</span>
          <span>© {year} Live Answer Service</span>
        </div>
      </div>
    </footer>
  );
}
