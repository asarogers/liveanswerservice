/**
 * Phone normalization for the demo-call flow.
 *
 * Targets are US destinations (our Retell number only dials US numbers), so we
 * default a bare 10-digit number to the +1 country code. Returns null when the
 * input can't be coerced to a plausible US E.164 number.
 */
export function normalizeE164(raw: string | undefined | null): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();

  // Already E.164-ish (+ then digits) — keep if 11–15 digits after the +.
  if (trimmed.startsWith('+')) {
    const digits = trimmed.slice(1).replace(/\D/g, '');
    if (digits.length >= 11 && digits.length <= 15) return `+${digits}`;
    // +1XXXXXXXXXX written with separators still lands here.
    if (digits.length === 10) return `+1${digits}`;
    return null;
  }

  const digits = trimmed.replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return null;
}
