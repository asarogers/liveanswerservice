"use client";

import { useRef, useState } from "react";

export default function HeroLogoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [promptDismissed, setPromptDismissed] = useState(false);
  const [closing, setClosing] = useState(false);
  const [muted, setMuted] = useState(true);

  const enableSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.volume = 1;
    v.play().catch(() => {});
    setMuted(false);
    setClosing(true);
    setTimeout(() => setPromptDismissed(true), 320);
  };

  const dismiss = () => {
    setClosing(true);
    setTimeout(() => setPromptDismissed(true), 320);
  };

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) v.play().catch(() => {});
    setMuted(v.muted);
  };

  return (
    <div className="hero-logo-stage">
      <div className="hero-logo-frame">
        <video
          ref={videoRef}
          className="hero-logo-video"
          src="/video/Live%20answer%20without%20logo.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-label="Live Answer logo animation"
        />
        {promptDismissed && (
          <button
            type="button"
            className="hero-logo-sound"
            onClick={toggle}
            aria-label={muted ? "Unmute video" : "Mute video"}
          >
            <i className={`ti ${muted ? "ti-volume-off" : "ti-volume"}`} aria-hidden="true" />
          </button>
        )}
      </div>

      {!promptDismissed && (
        <div
          className={`hero-sound-overlay${closing ? " is-closing" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="hero-sound-title"
        >
          <button
            type="button"
            className="hero-sound-backdrop"
            onClick={dismiss}
            aria-label="Dismiss audio prompt"
            tabIndex={-1}
          />
          <button
            type="button"
            className="hero-sound-card"
            onClick={enableSound}
            aria-label="Tap to hear audio"
          >
            <div className="hero-sound-bars" aria-hidden="true">
              <span /><span /><span /><span /><span />
            </div>
            <div className="hero-sound-copy">
              <div className="hero-sound-eyebrow">Sound is off</div>
              <div className="hero-sound-title" id="hero-sound-title">
                Tap to <em>hear</em> Live Answer
              </div>
              <div className="hero-sound-cta">
                <i className="ti ti-volume" aria-hidden="true" />
                <span>Turn audio on</span>
              </div>
            </div>
          </button>
          <button
            type="button"
            className="hero-sound-skip"
            onClick={dismiss}
          >
            Continue without sound
          </button>
        </div>
      )}
    </div>
  );
}
