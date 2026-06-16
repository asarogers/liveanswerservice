import type { Metadata } from "next";
import { gatedRobots } from "@/lib/site-plan";

// The calculator page itself is a client component ("use client"), so it can't
// export metadata. This sibling server layout supplies the page <title> + meta
// description and wires the publishing-schedule gate, same as the other
// top-level routes. [copy-audit 2026-06-13: page had no metadata export at all.]
export const metadata: Metadata = {
  title: "Missed-Call Cost Calculator — What Voicemail Costs Your Shop | Live Answer",
  description:
    "See what missed calls actually cost your California business each month, then how a flat $500/mo bilingual AI answering service pays for itself. No email required.",
  alternates: { canonical: "/calculator" },
  robots: gatedRobots("/calculator"),
};

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
