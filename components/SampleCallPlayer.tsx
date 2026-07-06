'use client';

import { useEffect, useRef, useState } from 'react';
import { Events } from '@/lib/analytics';
import { siteConfig } from '@/lib/siteConfig';
import { SAMPLE_CALL } from '@/lib/sampleCall';

/* ============================================================
   SampleCallPlayer — "Hear a real call" (StoryBrand Ch.8 sample
   CTA; the single most persuasive asset this product has).

   Plays the recording if one is set on SAMPLE_CALL.audioSrc and
   reveals each transcript turn at its `atSec`. With no audio it
   auto-advances on a timer so the proof still lands. Respects
   prefers-reduced-motion (shows the full transcript immediately).
   ============================================================ */

const call = SAMPLE_CALL;

export default function SampleCallPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const hasAudio = Boolean(call.audioSrc);

  // Reduced motion → reveal everything, skip the timed animation.
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Transcript-only auto-advance ticker.
  useEffect(() => {
    if (!playing || hasAudio) return;
    timerRef.current = setInterval(() => {
      setElapsed((e) => {
        const next = e + 0.25;
        if (next >= call.durationSec) {
          stopTimer();
          setPlaying(false);
          Events.sampleCallComplete();
          return call.durationSec;
        }
        return next;
      });
    }, 250);
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, hasAudio]);

  function stopTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function toggle() {
    if (hasAudio) {
      const a = audioRef.current;
      if (!a) return;
      if (a.paused) void a.play();
      else a.pause();
      return;
    }
    // Transcript-only mode
    if (playing) {
      setPlaying(false);
    } else {
      if (elapsed >= call.durationSec) setElapsed(0);
      setPlaying(true);
      Events.sampleCallPlay();
    }
  }

  const revealAll = reducedMotion;
  const visibleCount = revealAll
    ? call.turns.length
    : call.turns.filter((t) => t.atSec <= elapsed + 0.001).length;
  const progress = revealAll ? 1 : Math.min(1, elapsed / call.durationSec);

  return (
    <div className="mx-auto w-full max-w-xl rounded-2xl border border-[#E8DEC5] bg-white p-5 shadow-sm sm:p-6">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span
              className={`absolute inline-flex h-full w-full rounded-full bg-[#16A34A] ${
                playing ? 'animate-ping opacity-75' : 'opacity-0'
              }`}
            />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#16A34A]" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide text-[#16A34A]">
            {playing ? 'Live · answering' : 'Sample call'}
          </span>
        </div>
        <span className="text-xs text-[#5A5A5A]">{call.scenario}</span>
      </div>

      {/* Play + label */}
      <div className="mb-4 flex items-center gap-4">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? 'Pause the sample call' : 'Play the sample call'}
          aria-pressed={playing}
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#8E2138] text-white transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#8E2138]/40"
        >
          {playing ? (
            <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true">
              <rect x="3.5" y="3" width="3" height="10" rx="1" fill="currentColor" />
              <rect x="9.5" y="3" width="3" height="10" rx="1" fill="currentColor" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 16 16" aria-hidden="true">
              <polygon points="5,3 13,8 5,13" fill="currentColor" />
            </svg>
          )}
        </button>
        <div>
          <div className="font-semibold text-[#1A1A17]" style={{ fontFamily: 'var(--font-serif)' }}>
            {call.label}
          </div>
          <div className="text-sm text-[#5A5A5A]">
            {revealAll ? 'Full transcript below' : 'Answered on ring one — booked in 38 seconds'}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4 h-1 w-full overflow-hidden rounded-full bg-[#E8DEC5]">
        <div
          className="h-full rounded-full bg-[#8E2138] transition-[width] duration-200"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Transcript */}
      <ol className="space-y-2.5">
        {call.turns.slice(0, visibleCount).map((turn, i) => (
          <li
            key={i}
            className={`flex ${turn.speaker === 'ai' ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                turn.speaker === 'ai'
                  ? 'rounded-tl-sm bg-[#F7F2E7] text-[#1A1A17]'
                  : 'rounded-tr-sm bg-[#8E2138] text-white'
              }`}
            >
              <span className="mb-0.5 block text-[10px] font-semibold uppercase tracking-wide opacity-60">
                {turn.speaker === 'ai' ? 'AI receptionist' : 'Caller'}
              </span>
              {turn.text}
            </div>
          </li>
        ))}
      </ol>

      {/* Post-call proof line + CTA */}
      {(revealAll || visibleCount === call.turns.length) && (
        <div className="mt-4 rounded-xl bg-[#1A1A17] p-4 text-center">
          <p className="text-sm text-[#FAF9F5]">
            The owner woke up to a booked 8am job and a text summary — not a missed call.
          </p>
          <a
            href={siteConfig.phone.href}
            onClick={() => Events.phoneClick('sample_call')}
            className="mt-2 inline-block font-bold text-[#FAF9F5] underline underline-offset-2 hover:text-[#F2F0E8]"
          >
            Call {siteConfig.phone.display} and try it yourself →
          </a>
        </div>
      )}

      {hasAudio && (
        <audio
          ref={audioRef}
          src={call.audioSrc}
          preload="none"
          onPlay={() => {
            setPlaying(true);
            Events.sampleCallPlay();
          }}
          onPause={() => setPlaying(false)}
          onEnded={() => {
            setPlaying(false);
            Events.sampleCallComplete();
          }}
          onTimeUpdate={(e) => setElapsed(e.currentTarget.currentTime)}
        />
      )}
    </div>
  );
}
