-- Stripe billing: customers, subscription, and idempotent webhook log.
-- Ported from archived/assurgit/migrations/0018_billing.sql, pruned for LAS's
-- single flat-rate plan (no tier column, no 3-month initial-term column —
-- LAS is month-to-month from day one).
--
-- Customers are keyed off Stripe's customer_id. We store an email lookup so
-- the public Customer Portal flow can find a customer by the email they enter
-- without us having any local user accounts.

CREATE TABLE IF NOT EXISTS customers (
  id                       INTEGER PRIMARY KEY AUTOINCREMENT,
  stripe_customer_id       TEXT NOT NULL UNIQUE,
  email                    TEXT NOT NULL,
  name                     TEXT,
  business_name            TEXT,
  phone                    TEXT,
  created_at               INTEGER NOT NULL,
  updated_at               INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_customers_email ON customers(email);


-- One row per Stripe Subscription. status mirrors Stripe's lifecycle states:
-- 'incomplete' | 'incomplete_expired' | 'trialing' | 'active' | 'past_due'
-- | 'canceled' | 'unpaid' | 'paused'.

CREATE TABLE IF NOT EXISTS subscriptions (
  id                       INTEGER PRIMARY KEY AUTOINCREMENT,
  customer_id              INTEGER NOT NULL,
  stripe_subscription_id   TEXT NOT NULL UNIQUE,
  billing_period           TEXT NOT NULL,                    -- monthly | yearly
  status                   TEXT NOT NULL,
  cancel_at_period_end     INTEGER NOT NULL DEFAULT 0,       -- 0/1 boolean
  current_period_start     INTEGER,
  current_period_end       INTEGER,
  trial_end                INTEGER,
  deposit_paid             INTEGER NOT NULL DEFAULT 0,        -- $199 setup fee, waived on yearly
  created_at               INTEGER NOT NULL,
  updated_at               INTEGER NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_subscriptions_customer ON subscriptions(customer_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_status   ON subscriptions(status);


-- Idempotent webhook event log. Stripe may retry the same event multiple
-- times; we de-duplicate by stripe_event_id. processed_at = NULL means we
-- received the event but haven't applied it yet (used as a lock).

CREATE TABLE IF NOT EXISTS billing_events (
  id                       INTEGER PRIMARY KEY AUTOINCREMENT,
  stripe_event_id          TEXT NOT NULL UNIQUE,
  event_type               TEXT NOT NULL,
  payload_json             TEXT NOT NULL,
  received_at              INTEGER NOT NULL,
  processed_at             INTEGER,
  error                    TEXT
);

CREATE INDEX IF NOT EXISTS idx_billing_events_type ON billing_events(event_type);
