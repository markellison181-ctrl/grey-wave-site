-- Create subscribers table
CREATE TABLE IF NOT EXISTS subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  source TEXT DEFAULT 'website',
  referrer TEXT,
  welcome_sent BOOLEAN DEFAULT FALSE,
  unsubscribed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for subscribers
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);
CREATE INDEX IF NOT EXISTS idx_subscribers_active ON subscribers(email) WHERE unsubscribed_at IS NULL;

-- Create newsletter_issues table  
CREATE TABLE IF NOT EXISTS newsletter_issues (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content_html TEXT,
  sent_at TIMESTAMPTZ,
  open_count INTEGER DEFAULT 0,
  click_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for newsletter_issues
CREATE INDEX IF NOT EXISTS idx_issues_slug ON newsletter_issues(slug);
CREATE INDEX IF NOT EXISTS idx_issues_sent ON newsletter_issues(sent_at) WHERE sent_at IS NOT NULL;

-- Enable RLS (Row Level Security)
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_issues ENABLE ROW LEVEL SECURITY;

-- Create policies for subscribers table (allow public inserts for signups, admin access for management)
CREATE POLICY IF NOT EXISTS "Allow public insert for subscriptions" ON subscribers
  FOR INSERT WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Allow service role full access to subscribers" ON subscribers
  FOR ALL USING (auth.role() = 'service_role');

-- Create policies for newsletter_issues table (public read for published issues)
CREATE POLICY IF NOT EXISTS "Allow public read for sent newsletters" ON newsletter_issues
  FOR SELECT USING (sent_at IS NOT NULL);

CREATE POLICY IF NOT EXISTS "Allow service role full access to newsletter_issues" ON newsletter_issues
  FOR ALL USING (auth.role() = 'service_role');