'use client';

import { useRef, useState } from 'react';
import { Events } from '@/lib/analytics';
import { siteConfig } from '@/lib/siteConfig';
import { getVisitorId, getSessionId } from '@/lib/session';

/* ============================================================
   LeadCaptureForm — the transitional "just leave your info"
   on-ramp (StoryBrand Ch.8). Lowest-commitment capture on the
   page: email or phone is enough. Reused directly and as the
   email-gate in front of PDF downloads (<ResourcesSection>).

   Posts to /api/lead → persistLead (Hetzner) + notifyOwner.
   ============================================================ */

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

interface LeadCaptureFormProps {
  /** Origin tag written to the lead, e.g. "lead_form:spam_page" or
   *  "download:missed-call-checklist". */
  source: string;
  /** Show the free-text "what do you need?" field. Default false (keep it short). */
  showMessage?: boolean;
  /** Submit button label. */
  submitLabel?: string;
  /** Custom success message (the download gate overrides this). */
  successMessage?: string;
  /** Called after a successful submit — used by the download gate to release
   *  the file. Receives the values that were captured. */
  onSuccess?: (values: { name: string; email: string; phone: string }) => void;
  /** Compact layout (name+email on one row) for hero/inline use. */
  compact?: boolean;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const INPUT_CLASS =
  'w-full rounded-lg border border-[#E0D8CF] bg-white px-4 py-3 text-[#2C2C2C] placeholder:text-[#5A5A5A]/60 focus:border-[#1A1A17] focus:outline-none focus:ring-2 focus:ring-[#1A1A17]/30 transition-colors';

export default function LeadCaptureForm({
  source,
  showMessage = false,
  submitLabel = 'Send it to me',
  successMessage = "Got it — we'll be in touch shortly.",
  onSuccess,
  compact = false,
}: LeadCaptureFormProps) {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [error, setError] = useState<string>('');
  const started = useRef(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (!started.current) {
      started.current = true;
      Events.formStart();
    }
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    if (!form.email && !form.phone) {
      setError('Please leave an email or phone number so we can reach you.');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source,
          visitorId: getVisitorId(),
          sessionId: getSessionId(),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { success?: boolean; error?: string };
      if (data.success) {
        setStatus('success');
        Events.formSubmit();
        Events.leadSubmit(source);
        onSuccess?.({ name: form.name, email: form.email, phone: form.phone });
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="alert"
        className="rounded-xl border border-[#1A1A17] bg-[#F2F0E8] p-6 text-center"
      >
        <h3 className="mb-1 font-[family-name:var(--font-serif)] text-lg font-bold text-[#2C2C2C]">
          You&apos;re all set.
        </h3>
        <p className="text-sm text-[#5A5A5A]">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {status === 'error' && error && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error} You can also call us at{' '}
          <a href={siteConfig.phone.href} className="font-semibold underline">
            {siteConfig.phone.display}
          </a>
          .
        </div>
      )}

      <div className={compact ? 'grid gap-4 sm:grid-cols-2' : 'space-y-4'}>
        <div>
          <label htmlFor={`lead-name-${source}`} className="sr-only">
            Name
          </label>
          <input
            id={`lead-name-${source}`}
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={INPUT_CLASS}
          />
        </div>
        <div>
          <label htmlFor={`lead-email-${source}`} className="sr-only">
            Email
          </label>
          <input
            id={`lead-email-${source}`}
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@business.com"
            className={INPUT_CLASS}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`lead-phone-${source}`} className="sr-only">
          Phone (optional)
        </label>
        <input
          id={`lead-phone-${source}`}
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone (optional)"
          className={INPUT_CLASS}
        />
      </div>

      {showMessage && (
        <div>
          <label htmlFor={`lead-message-${source}`} className="sr-only">
            What do you need?
          </label>
          <textarea
            id={`lead-message-${source}`}
            name="message"
            rows={3}
            value={form.message}
            onChange={handleChange}
            placeholder="What do you need help with? (optional)"
            className={`${INPUT_CLASS} resize-y`}
          />
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        aria-busy={status === 'loading'}
      >
        {status === 'loading' ? 'Sending…' : submitLabel}
      </button>

      <p className="text-center text-xs text-[#5A5A5A]">
        No spam. We respond within 24 hours. Your information is never shared.
      </p>
    </form>
  );
}
