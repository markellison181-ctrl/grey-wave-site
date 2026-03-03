const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://vsbwqlkbcgvmphuqfgqb.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzYndxbGtiY2d2bXBodXFmZ3FiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDgxODIyNiwiZXhwIjoyMDg2Mzk0MjI2fQ.Zx3X2bMp6m9Pp1kUH1PGkRCKakE9EJZylWns6tO_Y80';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createNewsletterTable() {
  console.log('📰 Creating newsletter_issues table...');
  
  try {
    // Since we can't use exec_sql, let's try creating it by making an HTTP request
    const createTableSQL = `
      CREATE TABLE IF NOT EXISTS newsletter_issues (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        title TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        content_html TEXT,
        sent_at TIMESTAMPTZ,
        open_count INTEGER DEFAULT 0,
        click_count INTEGER DEFAULT 0,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
      
      CREATE INDEX IF NOT EXISTS idx_newsletter_issues_slug ON newsletter_issues(slug);
      CREATE INDEX IF NOT EXISTS idx_newsletter_issues_sent ON newsletter_issues(sent_at) WHERE sent_at IS NOT NULL;
    `;

    // Try using direct HTTP API call to execute SQL
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
      method: 'POST',
      headers: {
        'apikey': supabaseServiceKey,
        'Authorization': `Bearer ${supabaseServiceKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ sql: createTableSQL })
    });

    if (!response.ok) {
      console.log('❌ Direct SQL execution not available');
      
      // Alternative: Try to insert a test record to trigger table creation
      console.log('🧪 Trying alternative method...');
      
      const { data, error } = await supabase
        .from('newsletter_issues')
        .insert([{
          title: 'Test Issue',
          slug: `test-${Date.now()}`,
          content_html: '<p>Test content</p>'
        }])
        .select();

      if (error) {
        console.log('❌ Table creation needed. Error:', error.message);
        console.log('📝 You need to manually create the newsletter_issues table in Supabase dashboard with the following columns:');
        console.log('- id (UUID, Primary Key, Default: gen_random_uuid())');
        console.log('- title (TEXT, NOT NULL)');
        console.log('- slug (TEXT, UNIQUE, NOT NULL)');
        console.log('- content_html (TEXT)');
        console.log('- sent_at (TIMESTAMPTZ)');
        console.log('- open_count (INTEGER, DEFAULT: 0)');
        console.log('- click_count (INTEGER, DEFAULT: 0)');
        console.log('- created_at (TIMESTAMPTZ, DEFAULT: NOW())');
        console.log('- updated_at (TIMESTAMPTZ, DEFAULT: NOW())');
      } else {
        console.log('✅ Newsletter issues table created/verified');
        
        // Clean up test record
        await supabase
          .from('newsletter_issues')
          .delete()
          .eq('slug', data[0].slug);
      }
    } else {
      console.log('✅ Newsletter issues table created via SQL');
    }

  } catch (error) {
    console.error('❌ Table creation failed:', error.message);
  }
}

createNewsletterTable();