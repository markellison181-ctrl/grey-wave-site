const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://vsbwqlkbcgvmphuqfgqb.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzYndxbGtiY2d2bXBodXFmZ3FiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDgxODIyNiwiZXhwIjoyMDg2Mzk0MjI2fQ.Zx3X2bMp6m9Pp1kUH1PGkRCKakE9EJZylWns6tO_Y80';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function testTables() {
  console.log('🧪 Testing database tables...');
  
  try {
    // Test subscribers table
    console.log('Testing subscribers table...');
    const { data: subscribersTest, error: subscribersError } = await supabase
      .from('subscribers')
      .select('count')
      .limit(1);

    if (subscribersError) {
      console.log('❌ Subscribers table missing:', subscribersError.message);
    } else {
      console.log('✅ Subscribers table exists');
    }

    // Test newsletter_issues table
    console.log('Testing newsletter_issues table...');
    const { data: issuesTest, error: issuesError } = await supabase
      .from('newsletter_issues')
      .select('count')
      .limit(1);

    if (issuesError) {
      console.log('❌ Newsletter issues table missing:', issuesError.message);
    } else {
      console.log('✅ Newsletter issues table exists');
    }

    // If tables exist, let's check their structure
    if (!subscribersError && !issuesError) {
      console.log('📊 Both tables exist. Checking structure...');
      
      // Insert a test subscriber to verify structure
      const testEmail = `test-${Date.now()}@example.com`;
      const { data: insertTest, error: insertError } = await supabase
        .from('subscribers')
        .insert([{ 
          email: testEmail, 
          source: 'test',
          welcome_sent: false
        }])
        .select();

      if (insertError) {
        console.log('❌ Insert test failed:', insertError.message);
      } else {
        console.log('✅ Insert test successful');
        
        // Clean up test record
        await supabase
          .from('subscribers')
          .delete()
          .eq('email', testEmail);
      }
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testTables();