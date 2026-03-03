const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://vsbwqlkbcgvmphuqfgqb.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzYndxbGtiY2d2bXBodXFmZ3FiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDgxODIyNiwiZXhwIjoyMDg2Mzk0MjI2fQ.Zx3X2bMp6m9Pp1kUH1PGkRCKakE9EJZylWns6tO_Y80';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function checkStructure() {
  console.log('📋 Checking subscribers table structure...');
  
  try {
    // Get existing subscribers to see the structure
    const { data: subscribers, error } = await supabase
      .from('subscribers')
      .select('*')
      .limit(1);

    if (error) {
      console.log('❌ Error querying subscribers:', error.message);
    } else {
      if (subscribers && subscribers.length > 0) {
        console.log('✅ Sample subscriber record structure:');
        console.log(Object.keys(subscribers[0]));
      } else {
        console.log('📭 No subscribers found, but table exists');
      }
    }

    // Try to insert a test subscriber with the expected structure
    console.log('🧪 Testing insert with expected structure...');
    const testEmail = `structure-test-${Date.now()}@example.com`;
    
    const { data: insertResult, error: insertError } = await supabase
      .from('subscribers')
      .insert([{
        email: testEmail,
        source: 'website',
        welcome_sent: false
      }])
      .select();

    if (insertError) {
      console.log('❌ Insert failed:', insertError.message);
      console.log('Need to check required fields...');
    } else {
      console.log('✅ Insert successful with structure:');
      console.log(insertResult[0]);
      
      // Clean up
      await supabase.from('subscribers').delete().eq('email', testEmail);
    }

  } catch (error) {
    console.error('❌ Structure check failed:', error.message);
  }
}

checkStructure();