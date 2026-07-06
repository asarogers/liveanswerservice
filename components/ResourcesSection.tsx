'use client';

import { useEffect, useRef, useState } from 'react';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { Events } from '@/lib/analytics';
import type { Resource } from '@/lib/resources';

/* ============================================================
   ResourcesSection — the email-gated "more information" library.

   Renders a card per downloadable PDF. Clicking "Get the free
   guide" expands a LeadCaptureForm (source `download:<slug>`);
   on submit, the PDF link is released. A soft gate: we capture
   the lead, then hand over the file from public/downloads/.
   ============================================================ */

interface ResourcesSectionProps {
  resources: Resource[];
  /** Section heading. */
  heading?: string;
  /** Section intro line. */
  intro?: string;
  headingId?: string;
}

export default function ResourcesSection({
  resources,
  heading = 'Free guides & templates',
  intro = 'No sales call required — grab what’s useful and put it to work today.',
  headingId = 'resources-heading',
}: ResourcesSectionProps) {
  if (!resources.length) return null;

  return (
    <section aria-labelledby={headingId} className="section-pad bg-[#F7F2E7]">
      <div className="container-xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 id={headingId} className="section-heading text-[#1A1A17]">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-[#5A5A5A]" style={{ fontFamily: 'var(--font-sans)' }}>
            {intro}
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <ResourceCard key={r.slug} resource={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  const [open, setOpen] = useState(false);
  const [released, setReleased] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const viewed = useRef(false);
  const downloadHref = `/downloads/${resource.file}`;

  // One resource_view per card per pageload when it scrolls into view.
  useEffect(() => {
    const el = cardRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !viewed.current) {
          viewed.current = true;
          Events.resourceView(resource.slug);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [resource.slug]);

  return (
    <div ref={cardRef} className="flex flex-col rounded-2xl border border-[#E8DEC5] bg-white p-6 shadow-sm">
      <span className="mb-3 inline-flex w-fit items-center rounded-full bg-[#8E2138]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#8E2138]">
        {resource.kind}
      </span>
      <h3
        className="mb-2 text-xl font-bold text-[#1A1A17]"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {resource.title}
      </h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-[#5A5A5A]">{resource.blurb}</p>

      {released ? (
        <a
          href={downloadHref}
          download
          onClick={() => Events.downloadOpen(resource.slug)}
          className="btn-primary w-full justify-center"
        >
          Download the PDF
        </a>
      ) : open ? (
        <div className="rounded-xl bg-[#F7F2E7] p-4">
          <p className="mb-3 text-center text-sm text-[#5A5A5A]">
            Where should we send it?
          </p>
          <LeadCaptureForm
            source={`download:${resource.slug}`}
            submitLabel="Email me the guide"
            successMessage="Check your inbox — and grab it right here now."
            onSuccess={() => {
              Events.downloadSubmit(resource.slug);
              setReleased(true);
            }}
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            Events.downloadGate(resource.slug);
          }}
          className="btn-primary w-full justify-center"
        >
          Get the free guide
        </button>
      )}
    </div>
  );
}
