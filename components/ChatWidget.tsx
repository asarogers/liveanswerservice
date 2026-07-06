'use client';

import { useEffect, useRef, useState } from 'react';
import { Events } from '@/lib/analytics';
import { siteConfig } from '@/lib/siteConfig';
import { getVisitorId, getSessionId } from '@/lib/session';

/* ============================================================
   ChatWidget — the "Start a live chat" transitional CTA.

   Talks to /api/chat, a $0 retrieval bot that only answers from
   a curated whitelist (no hallucinated pricing, no off-topic).
   When the bot can't answer, it offers to capture the visitor's
   contact info and route them to the voice demo. Own small
   widget on brand tokens — no Intercom/Drift.
   ============================================================ */

interface Msg {
  role: 'user' | 'bot';
  text: string;
}

const SUGGESTIONS = ['How much does it cost?', 'Is there a free trial?', 'How does it work?', 'Do you answer 24/7?'];

const GREETING =
  'Hi! I can answer questions about Live Answer — pricing, hours, the free trial, or how it works. What would you like to know?';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: 'bot', text: GREETING }]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [showCapture, setShowCapture] = useState(false);
  const [contact, setContact] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, open, showCapture]);

  async function send(text: string) {
    const clean = text.trim();
    if (!clean || busy) return;
    const history = [...messages, { role: 'user' as const, text: clean }];
    setMessages(history);
    setInput('');
    setBusy(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: clean, history }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        reply?: string;
        offerCapture?: boolean;
        matched?: string | null;
      };
      const matched = Boolean(data.matched);
      Events.chatMessage({ matched, intent: data.matched ?? null });
      if (!matched) Events.chatUnanswered(clean);
      setMessages((m) => [...m, { role: 'bot', text: data.reply || 'Sorry, try again?' }]);
      if (data.offerCapture) setShowCapture(true);
    } catch {
      setMessages((m) => [
        ...m,
        { role: 'bot', text: `Something glitched — call ${siteConfig.phone.display} and the AI will answer live.` },
      ]);
    } finally {
      setBusy(false);
    }
  }

  async function submitContact(e: React.FormEvent) {
    e.preventDefault();
    const val = contact.trim();
    if (!val) return;
    const isEmail = val.includes('@');
    setBusy(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          [isEmail ? 'email' : 'phone']: val,
          history: messages,
          visitorId: getVisitorId(),
          sessionId: getSessionId(),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { reply?: string };
      Events.chatLeadCapture(isEmail ? 'email' : 'phone');
      Events.leadSubmit('chat');
      setMessages((m) => [...m, { role: 'bot', text: data.reply || 'Thanks — we’ll be in touch.' }]);
      setShowCapture(false);
      setContact('');
    } catch {
      /* best-effort */
    } finally {
      setBusy(false);
    }
  }

  function toggle() {
    setOpen((o) => {
      const next = !o;
      if (next) Events.chatOpen('launcher');
      return next;
    });
  }

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={toggle}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#8E2138] text-white shadow-lg transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#8E2138]/40"
      >
        {/* Green "live" signal dot */}
        <span className="absolute right-1 top-1 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16A34A] opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-[#16A34A] ring-2 ring-[#8E2138]" />
        </span>
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Live Answer"
          className="fixed bottom-24 right-5 z-50 flex h-[30rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-[#E8DEC5] bg-white shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center gap-2 bg-[#1A1A17] px-4 py-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16A34A] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#16A34A]" />
            </span>
            <div className="text-sm font-semibold text-[#FAF9F5]" style={{ fontFamily: 'var(--font-serif)' }}>
              Live Answer · Ask us anything
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-[#F7F2E7] px-3 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'rounded-tr-sm bg-[#8E2138] text-white'
                      : 'rounded-tl-sm bg-white text-[#1A1A17] border border-[#E8DEC5]'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {busy && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-tl-sm border border-[#E8DEC5] bg-white px-3.5 py-2 text-sm text-[#5A5A5A]">
                  …
                </div>
              </div>
            )}

            {/* Suggestions (only before the visitor has said anything) */}
            {messages.length === 1 && !busy && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-[#8E2138]/40 bg-white px-3 py-1.5 text-xs font-medium text-[#8E2138] hover:bg-[#8E2138]/5"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Capture or input */}
          {showCapture ? (
            <form onSubmit={submitContact} className="border-t border-[#E8DEC5] bg-white p-3">
              <p className="mb-2 text-xs text-[#5A5A5A]">Leave your email or phone and we’ll follow up:</p>
              <div className="flex gap-2">
                <input
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="you@business.com or phone"
                  className="min-w-0 flex-1 rounded-lg border border-[#E0D8CF] px-3 py-2 text-sm focus:border-[#1A1A17] focus:outline-none"
                />
                <button type="submit" disabled={busy} className="btn-primary px-4 py-2 text-sm disabled:opacity-60">
                  Send
                </button>
              </div>
            </form>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex gap-2 border-t border-[#E8DEC5] bg-white p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question…"
                aria-label="Type your question"
                className="min-w-0 flex-1 rounded-lg border border-[#E0D8CF] px-3 py-2 text-sm focus:border-[#1A1A17] focus:outline-none"
              />
              <button type="submit" disabled={busy || !input.trim()} className="btn-primary px-4 py-2 text-sm disabled:opacity-60">
                Send
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
