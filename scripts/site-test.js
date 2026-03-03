const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://vsbwqlkbcgvmphuqfgqb.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzYndxbGtiY2d2bXBodXFmZ3FiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDgxODIyNiwiZXhwIjoyMDg2Mzk0MjI2fQ.Zx3X2bMp6m9Pp1kUH1PGkRCKakE9EJZylWns6tO_Y80';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function testWithSite() {
  console.log('🧪 Testing insert with site field...');
  
  const testEmail = `site-test-${Date.now()}@example.com`;
  
  try {
    // Try with email and site
    console.log('Testing with email + site...');
    const { data: result, error } = await supabase
      .from('subscribers')
      .insert([{ 
        email: testEmail,
        site: 'grey-wave'
      }])
      .select();

    if (error) {
      console.log('❌ Insert failed:', error.message);
    } else {
      console.log('✅ Insert successful!');
      console.log('Available columns:', Object.keys(result[0]));
      console.log('Full record:', result[0]);
      
      // Clean up
      await supabase.from('subscribers').delete().eq('email', testEmail);
      return result[0];
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testWithSite();