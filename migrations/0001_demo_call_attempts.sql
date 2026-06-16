-- D1 schema for the demo-call rate-limit / abuse guard (lib/rate-limit.ts).
-- Apply with:  wrangler d1 migrations apply liveanswerservice-demo --remote
-- (and --local for `wrangler dev`). See RETELL-SETUP.md Step 7.

CREATE TABLE IF NOT EXISTS demo_call_attempts (
  id          TEXT PRIMARY KEY,   -- lead_id (uuid) of the submission that placed the call
  phone_e164  TEXT NOT NULL,      -- normalized destination number
  ip          TEXT,               -- CF-Connecting-IP at submission (abuse forensics)
  call_id     TEXT,               -- Retell call_id returned by create-phone-call
  created_at  INTEGER NOT NULL    -- epoch milliseconds
);

CREATE INDEX IF NOT EXISTS idx_demo_attempts_phone_time ON demo_call_attempts (phone_e164, created_at);
CREATE INDEX IF NOT EXISTS idx_demo_attempts_ip_time    ON demo_call_attempts (ip, created_at);
CREATE INDEX IF NOT EXISTS idx_demo_attempts_time       ON demo_call_attempts (created_at);
