"use client";

import { useState, useCallback, KeyboardEvent } from "react";

/* ============================================================
   DATA
   ============================================================ */
const faqs: { q: string; a: string }[] = [
  {
    q: "What areas of California do you serve?",
    a: "We serve California small businesses statewide — focused on Sacramento, the Bay Area, Greater Los Angeles, and the Inland Empire. Bilingual EN/ES is included on every account.",
  },
  {
    q: "How does the AI receptionist work?",
    a: "You forward your business line to a number we provide. Every call is answered within 2 rings, 24/7. Our AI qualifies the caller, books the appointment into your dispatch software, and texts you a summary within 60 seconds. Emergencies escalate to your cell within 30 seconds.",
  },
  {
    q: "How much does it cost?",
    a: "$500/mo flat for unlimited calls. No per-minute fees, no overages, no surprise bills. A one-time $199 setup fee is waived for accounts that prepay annually. Custom plans for multi-location operations are available — contact us for a quote.",
  },
  {
    q: "Will it sound robotic?",
    a: "Call our demo line and judge for yourself. We use the best-in-class TTS and STT stack tuned for phone audio, with vertical-specific scripting that sounds like a person who knows your business — not a phone tree.",
  },
  {
    q: "Can it handle Spanish-speaking callers?",
    a: "Yes — native EN/ES on every account, no upcharge. The AI detects the caller's language in the first 3 seconds and switches automatically. Critical for California, where ~10.4M residents speak Spanish.",
  },
  {
    q: "What if the AI can't answer a question?",
    a: "The AI takes a message, texts you the details immediately, and books a callback slot. For emergencies — water leaks, no heat, no AC, after-hours legal intakes — it routes directly to your cell within 30 seconds.",
  },
  {
    q: "Is there a contract?",
    a: "No. Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee.",
  },
  {
    q: "How long does setup take?",
    a: "48 hours from your kickoff call. We script the AI, train it on your business, integrate your dispatch software, and go live.",
  },
  {
    q: "Is it CCPA-compliant?",
    a: "Yes. A two-party consent prompt plays at the start of every recorded call. Recordings are encrypted at rest and in transit. Deletion requests honored within 30 days. Recording can be disabled per account.",
  },
  {
    q: "What if it doesn't book the calls you promised?",
    a: "Booking guarantee: if your AI doesn't capture the bookings we committed to in the kickoff call within the first 30 days, we credit one full month of service. Specific thresholds are vertical-specific and confirmed at onboarding.",
  },
];

/* ============================================================
   SUB-COMPONENT: Single FAQ Item
   ============================================================ */
function FAQItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}) {
  const id = `faq-answer-${index}`;
  const triggerId = `faq-trigger-${index}`;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onToggle(index);
      }
    },
    [index, onToggle]
  );

  return (
    <div className="border border-[#E0D8CF] rounded-xl overflow-hidden bg-white">
      <h3>
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={id}
          onClick={() => onToggle(index)}
          onKeyDown={handleKeyDown}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-[family-name:var(--font-sans)] font-bold text-[#2C2C2C] text-base leading-snug hover:bg-[#F2F0E8] focus-visible:bg-[#F2F0E8] transition-colors cursor-pointer"
        >
          <span>{item.q}</span>
          {/* Chevron icon */}
          <span
            className={`shrink-0 w-6 h-6 rounded-full bg-[#F2F0E8] flex items-center justify-center transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 text-[#1A1A17]"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </h3>

      {/* Answer panel */}
      <div
        id={id}
        role="region"
        aria-labelledby={triggerId}
        hidden={!isOpen}
      >
        <p className="font-[family-name:var(--font-sans)] text-[#5A5A5A] text-base leading-relaxed px-6 pb-5 pt-1">
          {item.a}
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   MAIN EXPORT: FAQ Accordion
   ============================================================ */
export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="flex flex-col gap-3" role="list">
        {faqs.map((item, i) => (
          <div key={i} role="listitem">
            <FAQItem
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={handleToggle}
            />
          </div>
        ))}
      </div>
    </>
  );
}
