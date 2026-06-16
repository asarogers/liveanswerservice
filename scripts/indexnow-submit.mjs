#!/usr/bin/env node
/**
 * indexnow-submit.mjs — Push URLs to IndexNow (Bing, Copilot, Yandex, Seznam…)
 *
 * Why this exists:
 *   Microsoft retired the anonymous Bing sitemap-ping endpoint — it now returns
 *   HTTP 410, so the Bing ping in request-indexing.mjs is a no-op. The Google
 *   Indexing API only covers Google. IndexNow is the live way to tell Bing /
 *   Copilot about new or changed URLs in near-real-time. The key file is hosted
 *   at the site root (public/<key>.txt) and verified in Bing Webmaster Tools.
 *
 *   Runs locally on deploy (we only deploy from one machine) — no server needed.
 *   IndexNow's api.indexnow.org fans the submission out to all participating
 *   search engines, so one POST covers Bing, Copilot, Yandex, Seznam, etc.
 *
 * Usage:
 *   node scripts/indexnow-submit.mjs                # submit ALL sitemap URLs
 *   node scripts/indexnow-submit.mjs --new          # only URLs not seen before (cache)
 *   node scripts/indexnow-submit.mjs --dry          # preview, no POST
 *   node scripts/indexnow-submit.mjs <url> <url>…   # submit explicit URLs
 *
 * Env override:
 *   INDEXNOW_KEY   defaults to the verified key below
 */

import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL    = 'https://liveanswerservice.com';
const HOST        = 'liveanswerservice.com';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const ENDPOINT    = 'https://api.indexnow.org/indexnow';
const CACHE_FILE  = path.join(__dirname, '..', 'deploy-state', 'indexnow-cache.json');

// Key generated + verified in Bing Webmaster Tools; file hosted at public/<key>.txt
const KEY          = process.env.INDEXNOW_KEY || '5eb13736d4c842a9badd8ae9297bc9ac';
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;

// IndexNow accepts up to 10,000 URLs per request; we batch to stay well under.
const BATCH_SIZE = 1000;

// ── CLI ─────────────────────────────────────────────────────────────────────
const args     = process.argv.slice(2);
const DRY      = args.includes('--dry');
const NEW_ONLY = args.includes('--new');
const urlArgs  = args.filter((a) => a.startsWith('http'));

// ── Cache (for --new) ─────────────────────────────────────────────────────────
function loadCache() {
  try { return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8')); }
  catch { return { lastRun: '', submittedUrls: {} }; }
}
function saveCache(cache) {
  fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true });
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2) + '\n');
}

// ── Sitemap ───────────────────────────────────────────────────────────────────
async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status} — is the site live?`);
  const xml  = await res.text();
  const urls = [];
  const regex = /<loc>(.*?)<\/loc>/g;
  let m;
  while ((m = regex.exec(xml)) !== null) urls.push(m[1].trim());
  return urls;
}

// ── Verify the key file is actually reachable (IndexNow 403s otherwise) ─────────
async function verifyKeyHosted() {
  try {
    const res  = await fetch(KEY_LOCATION);
    const body = (await res.text()).trim();
    if (!res.ok)      return `key file ${KEY_LOCATION} → HTTP ${res.status} (deploy it first)`;
    if (body !== KEY) return `key file content "${body}" ≠ key "${KEY}"`;
    return null; // ok
  } catch (e) {
    return `could not fetch ${KEY_LOCATION}: ${e.message}`;
  }
}

// ── Submit one batch ───────────────────────────────────────────────────────────
async function submitBatch(urlList) {
  const res = await fetch(ENDPOINT, {
    method : 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body   : JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });
  const text = await res.text().catch(() => '');
  return { status: res.status, ok: res.ok, text };
}

// ── Main ───────────────────────────────────────────────────────────────────────
async function main() {
  console.log('=== IndexNow submission ===');
  console.log(`Host: ${HOST}`);
  console.log(`Key : ${KEY}  (${KEY_LOCATION})`);

  // 1. Determine the URL set
  let urls;
  if (urlArgs.length) {
    urls = urlArgs;
    console.log(`Mode: explicit (${urls.length} URL(s) from args)`);
  } else {
    console.log('Fetching live sitemap…');
    urls = await fetchSitemapUrls();
    console.log(`Found ${urls.length} URL(s) in sitemap.`);
  }

  // 2. Keep only same-host URLs (IndexNow 422s on foreign hosts)
  urls = urls.filter((u) => { try { return new URL(u).host === HOST; } catch { return false; } });

  // 3. --new filtering
  const cache = loadCache();
  if (NEW_ONLY) {
    const before = urls.length;
    urls = urls.filter((u) => !cache.submittedUrls[u]);
    console.log(`--new: ${urls.length} of ${before} not yet submitted.`);
  }

  if (!urls.length) { console.log('Nothing to submit. Done.'); return; }

  // 4. Verify the key is hosted (skip the check in --dry)
  if (!DRY) {
    const problem = await verifyKeyHosted();
    if (problem) {
      console.error(`[ABORT] ${problem}`);
      process.exitCode = 1;
      return;
    }
    console.log('[OK]   Key file verified hosted.');
  }

  if (DRY) {
    console.log('\n[DRY RUN] Would submit:');
    for (const u of urls) console.log(`  • ${u}`);
    return;
  }

  // 5. Submit in batches
  let submitted = 0;
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    const { status, ok, text } = await submitBatch(batch);
    // 200 OK and 202 Accepted both mean success (202 = received, key validating)
    if (ok || status === 202) {
      submitted += batch.length;
      console.log(`[OK]   Submitted ${batch.length} URL(s) → HTTP ${status}`);
      const now = new Date().toISOString();
      for (const u of batch) cache.submittedUrls[u] = now;
    } else {
      console.error(`[FAIL] Batch of ${batch.length} → HTTP ${status} ${text ? `— ${text}` : ''}`);
      // 400 invalid format · 403 key not valid/hosted · 422 url/host mismatch · 429 rate limit
    }
  }

  cache.lastRun = new Date().toISOString();
  saveCache(cache);
  console.log(`\n=== Done: ${submitted} submitted, ${urls.length - submitted} failed ===`);
}

main().catch((e) => { console.error('[ERROR]', e.message); process.exitCode = 1; });
