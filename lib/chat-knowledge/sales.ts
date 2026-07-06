/**
 * Sales chatbot knowledge whitelist — the ONLY facts the bot may state.
 *
 * The chatbot is retrieval-based, not generative (see lib/chat-retrieval.ts):
 * it matches a visitor's question to one of these curated entries and returns
 * the exact `answer`. It literally cannot invent pricing or go off-topic — the
 * scope guarantee from CTA-EXPANSION-PLAN §3, achieved with $0 and no LLM.
 *
 * To teach the bot something new, add an entry here. Keep answers short, true,
 * and each ending in or implying a next step — every reply is also a CTA. A
 * local agent (Sage/arnold pattern) reviews chat transcripts weekly and drafts
 * new entries for questions that fell through to the fallback.
 */

export interface KnowledgeEntry {
  id: string;
  /** Trigger tokens/phrases — lowercased; drive matching in chat-retrieval.ts. */
  keywords: string[];
  /** The curated, on-record answer. */
  answer: string;
}

/** Flat facts the bot may reference, single source of truth for the answers. */
export const FACTS = {
  monthly: '$500/month',
  annual: '$5,100/year',
  setup: '$199 one-time setup (waived when you pay annually)',
  trial: '7-day free trial',
  phoneDisplay: '(669) 316-1742',
} as const;

export const SALES_KNOWLEDGE: KnowledgeEntry[] = [
  {
    id: 'pricing',
    keywords: ['price', 'pricing', 'cost', 'how much', 'rate', 'rates', 'fee', 'monthly', 'per month', 'expensive', 'charge'],
    answer:
      'Pricing is flat and simple: $500/month, or $5,100/year (two months free). There’s a one-time $199 setup fee, waived if you pay annually. No per-minute charges — the price is the same whether you get 10 calls or 200. Want to try it free for 7 days? I can point you to the trial.',
  },
  {
    id: 'per-minute',
    keywords: ['per minute', 'per-minute', 'minutes', 'overage', 'usage', 'metered', 'extra charge', 'hidden fee'],
    answer:
      'No per-minute billing and no overage surprises — it’s one flat rate ($500/mo or $5,100/yr) no matter your call volume. That’s the whole point: you’re never punished for a busy month.',
  },
  {
    id: 'trial',
    keywords: ['trial', 'free trial', 'try', 'test', 'demo', 'try it', 'free'],
    answer:
      'Yes — there’s a 7-day free trial, no card needed to start. You can also hear the AI right now: call (669) 316-1742 and it’ll answer you live. Want the link to start the trial?',
  },
  {
    id: 'how-it-works',
    keywords: ['how does it work', 'how it works', 'what is', 'explain', 'what do you do', 'ai receptionist', 'how'],
    answer:
      'Live Answer is an AI receptionist that answers every call 24/7, sounds human, asks the right questions, books the appointment, and texts you a summary of who called and why. You keep your same number — calls just stop going to voicemail.',
  },
  {
    id: 'hours-247',
    keywords: ['hours', '24/7', 'after hours', 'nights', 'weekends', 'always', 'overnight', 'when', 'available'],
    answer:
      'It answers 24/7 — nights, weekends, holidays, and when you’re already on another call. There are no “closed” hours, so an after-hours caller gets a real conversation and a booking instead of voicemail.',
  },
  {
    id: 'booking',
    keywords: ['book', 'booking', 'appointment', 'schedule', 'calendar', 'schedules'],
    answer:
      'It books appointments directly during the call — it can qualify the caller, offer available times, and confirm the booking, then text you and the customer the details. No callback tag, no lost lead.',
  },
  {
    id: 'bilingual',
    keywords: ['spanish', 'bilingual', 'español', 'espanol', 'language', 'languages', 'english'],
    answer:
      'Yes — it handles English and Spanish, so a Spanish-speaking caller gets a full conversation instead of a hang-up. That matters a lot in most California markets.',
  },
  {
    id: 'spam',
    keywords: ['spam', 'robocall', 'robocalls', 'telemarketer', 'junk', 'screen', 'filter'],
    answer:
      'It screens spam and robocalls automatically — they’re recognized and dismissed without booking anything, billing you, or interrupting your day. Your call summaries only show real customers.',
  },
  {
    id: 'setup',
    keywords: ['setup', 'set up', 'install', 'get started', 'onboarding', 'how long', 'start', 'go live'],
    answer:
      'Setup is quick — we configure it to your business (your services, hours, and how you want calls handled) and you keep your existing number. Most businesses are live within a day. There’s a one-time $199 setup fee, waived on annual plans.',
  },
  {
    id: 'coverage',
    keywords: ['area', 'location', 'where', 'california', 'serve', 'coverage', 'my area', 'available in'],
    answer:
      'We’re built for California small businesses, and because it’s software there’s no geographic limit to coverage — it answers your calls wherever you are. Tell me your trade or town and I can point you to the right page.',
  },
  {
    id: 'industries',
    keywords: ['hvac', 'dental', 'attorney', 'lawyer', 'plumber', 'plumbing', 'salon', 'vet', 'restaurant', 'industry', 'my business', 'work for'],
    answer:
      'It works across local service businesses — HVAC, plumbing, dental, legal, salons, veterinary, restaurants and more. The AI is tuned to your trade’s common questions. Which industry are you in? I can point you to a page built for it.',
  },
  {
    id: 'human-vs-ai',
    keywords: ['human', 'real person', 'people', 'robot', 'sound like', 'realistic', 'natural'],
    answer:
      'It’s AI, but callers say it sounds natural — it converses, not reads a script. The honest way to judge: call (669) 316-1742 and hear it answer you live. That demo is the whole pitch.',
  },
  {
    id: 'cancel',
    keywords: ['cancel', 'contract', 'commitment', 'lock in', 'month to month', 'refund'],
    answer:
      'It’s month-to-month — no long-term contract. You can start with the 7-day free trial and only continue if it’s clearly saving you calls.',
  },
];
