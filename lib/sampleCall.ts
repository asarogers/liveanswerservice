/**
 * A representative inbound call — the proof asset behind the "Hear a real call"
 * transitional CTA (StoryBrand Ch.8: samples/demos on-ramp the buyer). This is
 * the exact experience a customer gets at 2am: rings, answered on ring one, the
 * AI qualifies and books, and the owner gets the summary.
 *
 * SampleCallPlayer syncs the transcript to `audioSrc` when a recording is
 * present; with no audio it auto-advances on `atSec` so the experience works
 * either way. To feature a genuine recording, drop the file in public/audio/,
 * set `audioSrc`, and align each turn's `atSec` to the audio.
 */

export type Speaker = 'ai' | 'caller';

export interface CallTurn {
  speaker: Speaker;
  text: string;
  /** Seconds into the call this turn begins (drives transcript timing). */
  atSec: number;
}

export interface SampleCall {
  /** Honest label — flip copy to "a real customer call" once a recording is featured. */
  label: string;
  scenario: string;
  /** Optional recording under public/audio/. Undefined = transcript-only playback. */
  audioSrc?: string;
  /** Total run length in seconds (transcript-only auto-advance uses this). */
  durationSec: number;
  turns: CallTurn[];
}

export const SAMPLE_CALL: SampleCall = {
  label: 'How a typical after-hours call goes',
  scenario: 'HVAC · 9:47pm · no heat · owner already home for the night',
  audioSrc: undefined, // ← set to '/audio/real-call.mp3' when a recording is featured
  durationSec: 38,
  turns: [
    { speaker: 'ai', atSec: 0, text: 'Thanks for calling Summit Heating & Air, this is the after-hours line — how can I help?' },
    { speaker: 'caller', atSec: 4, text: 'Hey, uh, my heat just went out and it’s freezing. Are you guys even open?' },
    { speaker: 'ai', atSec: 8, text: 'We’ve got you — I can get a technician scheduled right now. Is this for your home or a business?' },
    { speaker: 'caller', atSec: 13, text: 'My house. It’s a two-story, the furnace is just blowing cold air.' },
    { speaker: 'ai', atSec: 18, text: 'Got it. First available is 8am tomorrow, or we have an emergency visit tonight for the after-hours rate. Which would you like?' },
    { speaker: 'caller', atSec: 25, text: 'Let’s do 8am, that’s fine.' },
    { speaker: 'ai', atSec: 28, text: 'Booked for 8am. Can I get the best number to text the confirmation to?' },
    { speaker: 'caller', atSec: 32, text: 'Yeah, it’s 408-555-0121.' },
    { speaker: 'ai', atSec: 35, text: 'Perfect — you’re on the schedule for 8am and the confirmation is on its way. Stay warm, we’ll see you in the morning.' },
  ],
};
