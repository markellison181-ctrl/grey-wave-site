import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vsbwqlkbcgvmphuqfgqb.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!;

// Use service role for server-side operations
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source = 'website', referrer } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check if email already exists
    const { data: existingSubscriber } = await supabase
      .from('subscribers')
      .select('id, status')
      .eq('email', normalizedEmail)
      .eq('site', 'grey-wave')
      .single();

    if (existingSubscriber) {
      if (existingSubscriber.status === 'active') {
        return NextResponse.json(
          { error: 'This email is already subscribed to The Grey Wave.' },
          { status: 409 }
        );
      }
      // If status is not active, we could reactivate them
    }

    // Insert new subscriber
    const { data: newSubscriber, error: insertError } = await supabase
      .from('subscribers')
      .insert([
        {
          email: normalizedEmail,
          site: 'grey-wave',
          tier: 'free',
          status: 'active'
        }
      ])
      .select()
      .single();

    if (insertError) {
      console.error('Supabase insert error:', insertError);
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      );
    }

    // Trigger welcome email (we'll create this next)
    try {
      await fetch(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api/welcome-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: normalizedEmail, subscriberId: newSubscriber.id })
      });
    } catch (emailError) {
      console.error('Welcome email failed:', emailError);
      // Don't fail the subscription if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to The Grey Wave!',
      subscriberId: newSubscriber.id
    });

  } catch (error) {
    console.error('Subscribe API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}