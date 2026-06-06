#!/usr/bin/env node
/**
 * generate-guides-manifest.mjs
 *
 * Reads all .mdx (and .md) files in content/guides/, extracts frontmatter +
 * content, and writes content/guides-manifest.json.
 *
 * Mirrors generate-blog-manifest.mjs. Runs as part of `prebuild`. The
 * generated manifest is imported as a static JSON module so the Cloudflare
 * Worker has no runtime fs dependency.
 *
 * Files prefixed with `_` (e.g. `_TEMPLATE.md`) are skipped.
 */

import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT       = path.resolve(__dirname, '..');
const GUIDES_DIR = path.join(ROOT, 'content', 'guides');
const OUT_FILE   = path.join(ROOT, 'content', 'guides-manifest.json');

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const data = {};
  for (const line of match[1].split('\n')) {
    const colon = line.indexOf(':');
    if (colon === -1) continue;
    const key   = line.slice(0, colon).trim();
    let   value = line.slice(colon + 1).trim();
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    else if (value === 'true')  value = true;
    else if (value === 'false') value = false;
    data[key] = value;
  }
  return { data, content: match[2].trim() };
}

if (!fs.existsSync(GUIDES_DIR)) {
  console.log('[guides-manifest] No content/guides directory — writing empty manifest.');
  fs.writeFileSync(OUT_FILE, JSON.stringify([], null, 2) + '\n');
  process.exit(0);
}

const files = fs.readdirSync(GUIDES_DIR).filter(
  (f) => (f.endsWith('.mdx') || f.endsWith('.md')) && !f.startsWith('_')
);

const guides = files
  .map((file) => {
    const slug = file.replace(/\.mdx?$/, '');
    const raw  = fs.readFileSync(path.join(GUIDES_DIR, file), 'utf8');
    const { data, content } = parseFrontmatter(raw);
    const renderer = new marked.Renderer();
    renderer.image = ({ href, title, text }) => {
      const titleAttr = title ? ` title="${title}"` : '';
      return `<img src="${href}" alt="${text || ''}"${titleAttr} loading="lazy">`;
    };
    const contentHtml = marked(content, { gfm: true, breaks: false, renderer });
    return { slug, content, contentHtml, ...data };
  })
  .sort((a, b) => {
    const ad = new Date(a.datePublished || 0).getTime();
    const bd = new Date(b.datePublished || 0).getTime();
    return bd - ad;
  });

fs.writeFileSync(OUT_FILE, JSON.stringify(guides, null, 2) + '\n');
console.log(`[guides-manifest] ${guides.length} guides → content/guides-manifest.json`);
