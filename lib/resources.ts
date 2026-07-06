/**
 * Downloadable resources — the "more information" / lead-generator library
 * (StoryBrand Ch.8 + roadmap step 4: a free, valuable PDF is the canonical
 * transitional CTA — it stakes territory, creates reciprocity, positions us
 * as the guide).
 *
 * Each entry is email-gated by <ResourcesSection>: the visitor leaves an email
 * (captured as source `download:<slug>`) and the PDF at `file` (served from
 * public/downloads/) is released. Add a row here + drop the PDF in
 * public/downloads/ to publish a new resource — no component change.
 */

export interface Resource {
  slug: string;
  title: string;
  /** One-line value promise — what they get and why it helps. */
  blurb: string;
  /** Filename under public/downloads/. */
  file: string;
  /** Short kicker/type label, e.g. "Checklist", "Template", "Guide". */
  kind: string;
  /** Whether the PDF is actually generated & present yet. Ungenerated rows are
   *  hidden from the site until flipped true (lets us commit the catalog first). */
  ready: boolean;
}

export const RESOURCES: Resource[] = [
  {
    slug: 'missed-call-cost-checklist',
    title: 'The Missed-Call Cost Checklist',
    blurb: 'Add up what unanswered calls are really costing you each month — and the 7 leaks to plug first. Pairs with our savings calculator.',
    file: 'missed-call-cost-checklist.pdf',
    kind: 'Checklist',
    ready: true,
  },
  {
    slug: 'after-hours-script-template',
    title: 'After-Hours Call-Handling Script',
    blurb: 'Exactly what to say (or have your AI say) when you can’t pick up — the greeting, the questions to ask, and how to book on the spot.',
    file: 'after-hours-script-template.pdf',
    kind: 'Template',
    ready: false,
  },
  {
    slug: '247-coverage-buyers-guide',
    title: 'The 24/7 Coverage Buyer’s Guide',
    blurb: 'How to compare answering services without getting burned by per-minute billing — the questions to ask before you sign anything.',
    file: '247-coverage-buyers-guide.pdf',
    kind: 'Guide',
    ready: false,
  },
];

/** Resources that are actually downloadable right now. */
export function availableResources(): Resource[] {
  return RESOURCES.filter((r) => r.ready);
}

export function getResource(slug: string): Resource | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}
