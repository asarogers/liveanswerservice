import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Brand Kit · Live Answer",
  description: "Live Answer visual identity at a glance — mark, wordmark, colors, type.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function BrandKitPage() {
  return (
    <main className="bk-page">
      <div className="bk-card">
        {/* Row 1 — large mark + horizontal wordmark on dark */}
        <div className="bk-cell bk-cell-mark">
          <Image src="/brand/mark-light.png" alt="Live Answer mark" width={260} height={260} priority className="bk-mark-lg" />
          <div className="bk-mark-variants">
            <div className="bk-mini-icon bk-mini-icon--filled">
              <Image src="/brand/mark-square-light.png" alt="" width={44} height={44} />
            </div>
            <div className="bk-mini-icon bk-mini-icon--outlined">
              <Image src="/brand/mark-square-light.png" alt="" width={44} height={44} />
            </div>
          </div>
        </div>

        <div className="bk-cell bk-cell-wordmark-lg">
          <div className="bk-wordmark-lg">
            <Image src="/brand/mark-light.png" alt="" width={110} height={110} />
            <span className="bk-wordmark-text">
              live answer
              <span className="bk-wordmark-sub">SERVICE</span>
            </span>
          </div>
        </div>

        {/* Row 2 — colors + secondary wordmark */}
        <div className="bk-cell bk-cell-colors">
          <div className="bk-label">Colors</div>
          <div className="bk-swatch-row">
            <div className="bk-swatch" style={{ background: "#5A1424" }}>
              <span>#5A1424</span>
            </div>
            <div className="bk-swatch" style={{ background: "#8E2138" }}>
              <span>#8E2138</span>
            </div>
            <div className="bk-swatch" style={{ background: "#B23A4E" }}>
              <span>#B23A4E</span>
            </div>
            <div className="bk-swatch bk-swatch--light" style={{ background: "#F5EFE3", color: "#5A1424" }}>
              <span>#F5EFE3</span>
            </div>
          </div>
        </div>

        <div className="bk-cell bk-cell-wordmark-sm">
          <div className="bk-wordmark-sm">
            <Image src="/brand/mark-light.png" alt="" width={56} height={56} />
            <span>
              live answer
              <small>SERVICE</small>
            </span>
          </div>
        </div>

        {/* Row 3 — font specimen + wordmark on gradient */}
        <div className="bk-cell bk-cell-font">
          <div className="bk-label">Font</div>
          <div className="bk-font-block">
            <div className="bk-font-headline">Fraunces</div>
            <div className="bk-font-body">
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj<br />
              Kk Ll Mm Nn Oo Pp Qq Rr Ss<br />
              Tt Uu Vv Ww Xx Yy Zz
            </div>
            <div className="bk-font-meta">Display · Geist for body</div>
          </div>
        </div>

        <div className="bk-cell bk-cell-wordmark-gradient">
          <div className="bk-wordmark-sm bk-wordmark-sm--dark">
            <Image src="/brand/mark-square-light.png" alt="" width={56} height={56} />
            <span>
              live answer
              <small>SERVICE</small>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
