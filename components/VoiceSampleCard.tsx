"use client";

import { useEffect, useRef, useState } from "react";

export default function VoiceSampleCard({
  name,
  env,
  src,
  index,
}: {
  name: string;
  env: string;
  src: string;
  index: number;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1
  const seed = index * 1.3;

  // Only one sample plays at a time: pause this one if another starts.
  useEffect(() => {
    const onOtherPlay = (e: Event) => {
      if ((e as CustomEvent).detail !== src) audioRef.current?.pause();
    };
    window.addEventListener("voice-sample-play", onOtherPlay);
    return () => window.removeEventListener("voice-sample-play", onOtherPlay);
  }, [src]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      window.dispatchEvent(new CustomEvent("voice-sample-play", { detail: src }));
      void a.play();
    } else {
      a.pause();
    }
  };

  return (
    <div className={`voice-card${playing ? " is-playing" : ""}`}>
      <span className="voice-pill">{env}</span>
      <div className="voice-name">{name}</div>
      <button
        type="button"
        className="voice-play"
        aria-label={`${playing ? "Pause" : "Play"} ${name}`}
        aria-pressed={playing}
        onClick={toggle}
      >
        {playing ? (
          <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true" style={{ display: "block" }}>
            <rect x="3.5" y="3" width="3" height="10" rx="1" fill="#1a1611" />
            <rect x="9.5" y="3" width="3" height="10" rx="1" fill="#1a1611" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 16 16" aria-hidden="true" style={{ display: "block" }}>
            <polygon points="5,3 13,8 5,13" fill="#1a1611" stroke="#1a1611" strokeLinejoin="round" strokeWidth="0.5" />
          </svg>
        )}
      </button>
      <div className="voice-wave" aria-hidden="true">
        <div className="voice-wave-bars">
          {Array.from({ length: 64 }).map((_, j) => {
            const h = 18 + (Math.sin(j * 0.45 + seed) + 1) * 30 + (Math.sin(j * 0.13 + seed * 2) + 1) * 18;
            const active = playing && j / 64 <= progress;
            return <span key={j} style={{ height: `${Math.min(100, h)}%`, opacity: active ? 1 : undefined }} />;
          })}
        </div>
        <span className="voice-wave-scrub" style={{ left: `${4 + progress * 92}%` }} />
      </div>
      <audio
        ref={audioRef}
        src={src}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => { setPlaying(false); setProgress(0); }}
        onTimeUpdate={(e) => {
          const a = e.currentTarget;
          if (a.duration) setProgress(a.currentTime / a.duration);
        }}
      />
    </div>
  );
}
