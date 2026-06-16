-- Add the GA4 client_id to the demo-call attempt so /api/retell-webhook can
-- replay the demo_call_* funnel into GA4 via the Measurement Protocol, stitched
-- to the same web user (TRACKING-PLAN.md §2c). Captured at submit, read by lead_id.
-- Apply:  wrangler d1 migrations apply liveanswerservice-demo --remote  (and --local)

ALTER TABLE demo_call_attempts ADD COLUMN client_id TEXT;
