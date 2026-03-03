const { createClient } = require('@supabase/supabase-js');

// Use service role key for admin operations
const supabaseUrl = 'https://vsbwqlkbcgvmphuqfgqb.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzYndxbGtiY2d2bXBodXFmZ3FiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDgxODIyNiwiZXhwIjoyMDg2Mzk0MjI2fQ.Zx3X2bMp6m9Pp1kUH1PGkRCKakE9EJZylWns6tO_Y80';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function setupTables() {
  console.log('🔨 Setting up database tables...');
  
  try {
    // Create subscribers table
    const { error: subscribersError } = await supabase.rpc('exec_sql', {
      sql: `
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
        
        -- Create index for faster lookups
        CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);
        CREATE INDEX IF NOT EXISTS idx_subscribers_active ON subscribers(email) WHERE unsubscribed_at IS NULL;
      `
    });

    if (subscribersError) {
      console.error('Error creating subscribers table:', subscribersError);
    } else {
      console.log('✅ Subscribers table created/verified');
    }

    // Create newsletter_issues table
    const { error: issuesError } = await supabase.rpc('exec_sql', {
      sql: `
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
        
        -- Create index for faster lookups
        CREATE INDEX IF NOT EXISTS idx_issues_slug ON newsletter_issues(slug);
        CREATE INDEX IF NOT EXISTS idx_issues_sent ON newsletter_issues(sent_at) WHERE sent_at IS NOT NULL;
      `
    });

    if (issuesError) {
      console.error('Error creating newsletter_issues table:', issuesError);
    } else {
      console.log('✅ Newsletter issues table created/verified');
    }

    // Test the tables by checking their structure
    const { data: tables } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .in('table_name', ['subscribers', 'newsletter_issues']);

    console.log('📊 Tables verified:', tables?.map(t => t.table_name));

  } catch (error) {
    console.error('❌ Setup failed:', error);
  }
}

setupTables();