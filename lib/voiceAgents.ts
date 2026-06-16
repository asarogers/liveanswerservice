/**
 * The six AI voice agents shown in the VOICE AGENTS section. Each is a real
 * Retell recording (the voice saying "…this is <name>") over a distinct
 * ambience bed, so `env` labels the background. Brand-fixed and identical
 * across verticals, so the list lives here rather than in per-vertical config.
 *
 * Plain module (not "use client") so it can be imported by both the server
 * component (VerticalLandingPage) and the client card without crossing the
 * client/server boundary as a module reference.
 */
export type VoiceAgent = { name: string; env: string; src: string };

export const VOICE_AGENTS: VoiceAgent[] = [
  { name: "Grace", env: "Busy office", src: "/audio/voice-grace.mp3" },
  { name: "Jenny", env: "Coffee shop", src: "/audio/voice-jenny.mp3" },
  { name: "Kate", env: "Convention hall", src: "/audio/voice-kate.mp3" },
  { name: "Marissa", env: "Summer outdoor", src: "/audio/voice-marissa.mp3" },
  { name: "Brian", env: "Mountain air", src: "/audio/voice-brian.mp3" },
  { name: "Adrian", env: "Open line", src: "/audio/voice-adrian.mp3" },
];
