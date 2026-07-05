#!/usr/bin/env node
/**
 * deploy.mjs — Build → Cloudflare Workers → Health Check → Indexing
 *
 * Indexing (request-indexing.mjs + indexnow-submit.mjs) runs from inside this
 * script now, gated the same as every other step — NOT via npm's "postdeploy"
 * lifecycle hook. That hook used to run unconditionally after ANY successful
 * `npm run deploy`, including `--dry-run`, `--skip-deploy`, and `--skip-check`
 * invocations — so a "preview" run was silently pinging Google/IndexNow with
 * real production URLs. Fixed 2026-07-05; see package.json (postdeploy removed).
 *
 * After deploy, runs Arnold's check-page healthcheck against the live sitemap.
 *
 * Usage:
 *   npm run deploy                          # build + deploy + healthcheck + autofix + index
 *   node scripts/deploy.mjs --skip-build    # deploy only
 *   node scripts/deploy.mjs --skip-deploy   # build only
 *   node scripts/deploy.mjs --skip-check    # skip post-deploy healthcheck entirely
 *   node scripts/deploy.mjs --skip-index    # skip Google/IndexNow indexing ping
 *   node scripts/deploy.mjs --with-autofix  # OPT IN to the SEO autofix (default: OFF — it mutates source)
 *   node scripts/deploy.mjs --dry-run       # print every step, touch nothing
 *
 * Source-mutating steps are OPT-IN ONLY. The default deploy is build + deploy +
 * read-only healthcheck and never edits tracked files:
 *   - audit-route  → --with-audit-route (its expand_content.py LLM writer injected
 *                    filler prose into app/book, app/about, app/services, etc.)
 *   - SEO autofix  → --with-autofix      (mechanical, but still rewrites source on
 *                    deploy; kept off by default so deploys stay reproducible)
 */

import { execSync }      from 'child_process';
import path              from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, '..');

const argv        = process.argv.slice(2);
const SKIP_BUILD   = argv.includes('--skip-build');
const SKIP_DEPLOY  = argv.includes('--skip-deploy');
const SKIP_CHECK   = argv.includes('--skip-check');
const WITH_AUTOFIX = argv.includes('--with-autofix'); // opt-in; default OFF (was default-on and mutated source on every deploy)
const SKIP_INDEX   = argv.includes('--skip-index');
const DRY_RUN      = argv.includes('--dry-run');

const PYTHON      = '/opt/homebrew/bin/python3';
const HEALTHCHECK = '/Users/atlas/repo/agents/arnold/workspace/tasks/check-page/check_all.py';
const SITEMAP     = 'https://liveanswerservice.com/sitemap.xml';
const AUDIT_JSON  = `/tmp/audit-${path.basename(ROOT)}.json`;
const ATLAS_ROUTE = '/Users/atlas/repo/agents/Atlas/workspace/tasks/audit-route/route.py';
const SEO_AUTOFIX = '/Users/atlas/repo/scripts/seo-autofix.py';

const log = (msg) => console.log(`\n✦ ${msg}`);

function run(cmd) {
  log(`$ ${cmd}`);
  if (DRY_RUN) { console.log('  (dry-run — skipped)'); return; }
  execSync(cmd, { stdio: 'inherit', cwd: ROOT });
}

async function main() {
  if (DRY_RUN) log('DRY-RUN mode — no real changes will be made');

  log(`[deploy.mjs] NODE_ENV as seen by the build = ${JSON.stringify(process.env.NODE_ENV ?? '(unset)')}`);

  if (!SKIP_BUILD) {
    log('Building with @opennextjs/cloudflare…');
    run('npx opennextjs-cloudflare build');
  } else {
    log('Skipping build (--skip-build)');
  }

  if (!SKIP_DEPLOY) {
    log('Deploying to Cloudflare Workers…');
    run('wrangler deploy');
  } else {
    log('Skipping deploy (--skip-deploy)');
  }

  if (!SKIP_DEPLOY && !SKIP_CHECK) {
    log('Waiting 10s for Cloudflare edge to propagate…');
    if (!DRY_RUN) await new Promise((r) => setTimeout(r, 10_000));

    // Regenerate sites.json from PG before any downstream tool reads it.
    // See /repo/important/PRINCIPLES.md (rule 1). Uses /usr/bin/python3
    // because the regenerator needs psycopg2.
    log('Refreshing sites.json from PG (single source of truth)…');
    try {
      run(`/usr/bin/python3 /Users/atlas/repo/scripts/regenerate-sites-json.py`);
    } catch {
      log('sites.json regen failed — continuing with existing file.');
    }

    log('Running post-deploy healthcheck (Arnold check_all)…');
    try {
      run(`${PYTHON} ${HEALTHCHECK} --liveanswerservice --save-json "${AUDIT_JSON}"`);
      log('Healthcheck passed.');
    } catch {
      log('Healthcheck found issues — review output above.');
    }
    // Audit-route is OPT-IN (--with-audit-route): its child agents
    // (expand_content / fix-seo) write LLM output directly into source files
    // and corrupted app/book, app/locations, app/terms, app/about and
    // app/services on 2026-06-06 (raw "Here's the enhanced..." dumps).
    // Re-enable per-run only after those writers validate their output parses.
    if (argv.includes('--with-audit-route')) {
      try {
        run(`${PYTHON} ${ATLAS_ROUTE} --results "${AUDIT_JSON}" --site "${SITEMAP.split('/')[2]}" --sitemap "${SITEMAP}"`);
      } catch {
        log('Atlas routing failed — review output above.');
      }
    } else {
      log('Skipping audit-route (opt in with --with-audit-route).');
    }

    if (WITH_AUTOFIX) {
      log('Running SEO autofix (--with-autofix)…');
      let autofixApplied = false;
      try {
        // seo-autofix.py exits 0 = nothing to fix, 2 = fixes applied, 1 = error
        if (DRY_RUN) {
          console.log('  (dry-run — skipping autofix)');
        } else {
          execSync(`${PYTHON} ${SEO_AUTOFIX} --audit "${AUDIT_JSON}" --project "${ROOT}"`, { stdio: 'inherit', cwd: ROOT });
          log('No SEO fixes needed.');
        }
      } catch (err) {
        if (err.status === 2) {
          autofixApplied = true;
          log('SEO fixes applied — rebuilding and redeploying…');
        } else {
          log('SEO autofix failed — review output above.');
        }
      }

      if (autofixApplied) {
        log('Rebuilding with @opennextjs/cloudflare…');
        run('npx opennextjs-cloudflare build');
        log('Redeploying to Cloudflare Workers…');
        run('wrangler deploy');
        log('Auto-redeploy complete. Skipping second audit run.');
      }
    } else {
      log('Skipping SEO autofix (default — opt in with --with-autofix). Healthcheck above is report-only.');
    }
  } else if (SKIP_CHECK) {
    log('Skipping healthcheck (--skip-check)');
  }

  if (!SKIP_DEPLOY) {
    if (SKIP_INDEX) {
      log('Skipping Google/IndexNow indexing (--skip-index)');
    } else {
      log('Pinging Google indexing…');
      run('node scripts/request-indexing.mjs');
      log('Submitting to IndexNow…');
      run('node scripts/indexnow-submit.mjs');
    }
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
