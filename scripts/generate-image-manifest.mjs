#!/usr/bin/env node
/**
 * generate-image-manifest.mjs
 *
 * Scans public/images/services and public/images/blog at build time,
 * records which slugs have .png vs .svg, and writes the result to
 * content/image-manifest.json.
 *
 * Imported as a static JSON module at runtime so Cloudflare Workers
 * never need to access the filesystem.
 *
 * Runs automatically before every build via the "prebuild" npm script.
 */

import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, '..');
const OUT_FILE  = path.join(ROOT, 'content', 'image-manifest.json');

function scanDir(subdir) {
  const dir = path.join(ROOT, 'public', 'images', subdir);
  const result = {};
  if (!fs.existsSync(dir)) return result;
  // Precedence (best first): .webp → .png → .jpg → .jpeg → .svg
  const rank = { '.webp': 0, '.png': 1, '.jpg': 2, '.jpeg': 2, '.svg': 3 };
  for (const file of fs.readdirSync(dir)) {
    const ext  = path.extname(file).toLowerCase();
    const slug = path.basename(file, ext);
    if (!(ext in rank)) continue;
    if (!(slug in result) || rank[ext] < rank[result[slug]]) {
      result[slug] = ext;
    }
  }
  return result;
}

const manifest = {
  services: scanDir('services'),
  blog:     scanDir('blog'),
};

fs.writeFileSync(OUT_FILE, JSON.stringify(manifest, null, 2) + '\n');

const sCount = Object.keys(manifest.services).length;
const bCount = Object.keys(manifest.blog).length;
console.log(`[image-manifest] services: ${sCount}, blog: ${bCount} → content/image-manifest.json`);
