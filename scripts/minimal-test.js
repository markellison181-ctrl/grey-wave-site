const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://vsbwqlkbcgvmphuqfgqb.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzYndxbGtiY2d2bXBodXFmZ3FiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDgxODIyNiwiZXhwIjoyMDg2Mzk0MjI2fQ.Zx3X2bMp6m9Pp1kUH1PGkRCKakE9EJZylWns6tO_Y80';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function testMinimalInsert() {
  console.log('🧪 Testing minimal insert to understand table structure...');
  
  const testEmail = `minimal-test-${Date.now()}@example.com`;
  
  try {
    // Try just email
    console.log('Testing with just email...');
    const { data: result1, error: error1 } = await supabase
      .from('subscribers')
      .insert([{ email: testEmail }])
      .select();

    if (error1) {
      console.log('❌ Email-only insert failed:', error1.message);
    } else {
      console.log('✅ Email-only insert successful:');
      console.log('Available columns:', Object.keys(result1[0]));
      console.log('Full record:', result1[0]);
      
      // Clean up
      await supabase.from('subscribers').delete().eq('email', testEmail);
      return result1[0];
    }

  } catch (error) {
    console.error('❌ Minimal test failed:', error.message);
  }
}

testMinimalInsert();