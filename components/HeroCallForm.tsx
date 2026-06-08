'use client';

import { useState, useEffect, useCallback } from 'react';
import { trackEvent } from '@/lib/analytics';

/**
 * Homepage "type your number → get a call" form.
 *
 * Replaces the old native <form action="/api/demo-call" method="post"> (which
 * navigated the browser to raw JSON). This posts JSON via fetch, shows inline
 * status, fires the demo_call_request GA event, and — when a reCAPTCHA v3 site
 * key is configured — attaches a token the Worker verifies.
 *
 * recaptchaSiteKey is read server-side (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)
 * and passed in as a prop, mirroring how layout.tsx injects the GA id.
 */

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

export default function HeroCallForm({ recaptchaSiteKey }: { recaptchaSiteKey?: string }) {
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');
  const [message, setMessage] = useState('');

  // Load the reCAPTCHA v3 script once, only if configured.
  useEffect(() => {
    if (!recaptchaSiteKey || document.getElementById('recaptcha-v3')) return;
    const s = document.createElement('script');
    s.id = 'recaptcha-v3';
    s.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
    s.async = true;
    document.head.appendChild(s);
  }, [recaptchaSiteKey]);

  const getToken = useCallback(async (): Promise<string | undefined> => {
    if (!recaptchaSiteKey || !window.grecaptcha) return undefined;
    try {
      return await new Promise<string>((resolve, reject) => {
        window.grecaptcha!.ready(() => {
          window.grecaptcha!.execute(recaptchaSiteKey, { action: 'demo_call' }).then(resolve, reject);
        });
      });
    } catch {
      return undefined;
    }
  }, [recaptchaSiteKey]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setMessage('');
    trackEvent('demo_call_request', { method: 'hero_form' });

    const recaptchaToken = await getToken();
    try {
      const res = await fetch('/api/demo-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, recaptchaToken }),
      });
      const data = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string; error?: string };
      if (res.ok && data.success) {
        setStatus('ok');
        setMessage(data.message || "Got it — we'll call you shortly.");
        setPhone('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }

  return (
    <>
      <form className="hero-call-form" onSubmit={onSubmit}>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          required
          aria-label="Your phone number"
          disabled={status === 'loading'}
        />
        <button type="submit" disabled={status === 'loading'}>
          <i className="ti ti-phone-outgoing" aria-hidden="true" />
          {status === 'loading' ? 'Calling…' : 'Call me'}
        </button>
      </form>
      {message && (
        <div className={`hero-call-status hero-call-status--${status}`} role="status" aria-live="polite">
          {message}
        </div>
      )}
      {recaptchaSiteKey && (
        <p className="recaptcha-disclosure" style={{ fontSize: 11, color: '#888', marginTop: 6 }}>
          Protected by reCAPTCHA — Google{' '}
          <a href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">Privacy</a>
          {' '}&amp;{' '}
          <a href="https://policies.google.com/terms" rel="noopener noreferrer" target="_blank">Terms</a>.
        </p>
      )}
    </>
  );
}
