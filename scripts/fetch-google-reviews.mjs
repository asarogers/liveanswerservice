#!/usr/bin/env node
// Fetches Google reviews via Places API (New) and writes them to
// content/_generated/google-reviews.json for the site to consume.
//
// PLACE_ID set 2026-06-08 to the live LAS listing (place ID
// ChIJuT9VP8QzjoAR1PJtkhd7ytE / CID 15117030440393634516 — derived from the
// CID via Places Text Search, googleMapsUri cid matched exactly). The listing
// is brand-new with 0 reviews, so this currently writes an empty manifest
// (rating null) until real reviews land — that's expected, not an error.
// (The previous manifest in this repo was Well Prepped Life review data
// cloned from the template donor — CID 8611157451037066694 is WPL's, do not
// reuse it here.)
//
// Failure mode: never blocks the build. If the API key is missing/invalid
// or the request fails, writes an empty array and logs a warning.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const PLACE_ID = 'ChIJuT9VP8QzjoAR1PJtkhd7ytE';
const KEY_FILE = path.join(ROOT, 'google-places-key.txt');
const OUT_DIR = path.join(ROOT, 'content', '_generated');
const OUT_FILE = path.join(OUT_DIR, 'google-reviews.json');

function readApiKey() {
  if (!fs.existsSync(KEY_FILE)) return null;
  const raw = fs.readFileSync(KEY_FILE, 'utf8').trim();
  if (!raw || raw.startsWith('PASTE_')) return null;
  return raw;
}

function writeEmpty(reason) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(
    OUT_FILE,
    JSON.stringify({ reviews: [], rating: null, userRatingCount: 0, googleMapsUri: null, fetchedAt: null, skipped: reason }, null, 2),
  );
  console.log(`[google-reviews] Wrote empty manifest (${reason}).`);
}

if (PLACE_ID.startsWith('PASTE_')) {
  writeEmpty('missing-place-id (no live GBP yet)');
  process.exit(0);
}

const apiKey = readApiKey();
if (!apiKey) {
  writeEmpty('missing-api-key');
  process.exit(0);
}

const url = `https://places.googleapis.com/v1/places/${PLACE_ID}`;
const fieldMask = 'displayName,rating,userRatingCount,googleMapsUri,reviews';

try {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': fieldMask,
      'Accept': 'application/json',
    },
  });

  if (!res.ok) {
    const body = await res.text();
    console.warn(`[google-reviews] Places API ${res.status}: ${body.slice(0, 200)}`);
    writeEmpty(`api-${res.status}`);
    process.exit(0);
  }

  const data = await res.json();
  const reviews = (data.reviews || []).map((r) => ({
    author: r.authorAttribution?.displayName || 'Google user',
    authorUri: r.authorAttribution?.uri || null,
    authorPhoto: r.authorAttribution?.photoUri || null,
    rating: r.rating || 5,
    text: r.text?.text || r.originalText?.text || '',
    relativeTime: r.relativePublishTimeDescription || '',
    publishTime: r.publishTime || null,
  }));

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(
    OUT_FILE,
    JSON.stringify(
      {
        reviews,
        rating: data.rating ?? null,
        userRatingCount: data.userRatingCount ?? 0,
        googleMapsUri: data.googleMapsUri ?? null,
        fetchedAt: new Date().toISOString(),
      },
      null,
      2,
    ),
  );
  console.log(`[google-reviews] Wrote ${reviews.length} reviews (rating ${data.rating ?? '—'} / ${data.userRatingCount ?? 0} total).`);
} catch (err) {
  console.warn(`[google-reviews] Fetch failed: ${err?.message || err}`);
  writeEmpty('fetch-error');
  process.exit(0);
}
