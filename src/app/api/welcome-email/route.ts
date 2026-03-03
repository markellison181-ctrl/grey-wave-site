import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vsbwqlkbcgvmphuqfgqb.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!;
const sendGridApiKey = process.env.SENDGRID_API_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, subscriberId } = body;

    if (!email || !subscriberId) {
      return NextResponse.json(
        { error: 'Email and subscriber ID are required' },
        { status: 400 }
      );
    }

    // Check if welcome email already sent
    const { data: subscriber } = await supabase
      .from('subscribers')
      .select('*')
      .eq('id', subscriberId)
      .single();

    if (!subscriber) {
      return NextResponse.json(
        { error: 'Subscriber not found' },
        { status: 404 }
      );
    }

    // Create welcome email content
    const welcomeEmailData = {
      personalizations: [{
        to: [{ email: email }],
        subject: "Welcome to The Grey Wave"
      }],
      from: {
        email: "james@seniorshousingcanada.ca",
        name: "James Baxter"
      },
      content: [{
        type: "text/html",
        value: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to The Grey Wave</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #ffffff;">
              <div style="text-align: center; margin-bottom: 40px;">
                <h1 style="color: #1e40af; margin: 0; font-size: 28px; font-weight: 700;">The Grey Wave</h1>
                <p style="color: #64748b; margin: 8px 0 0; font-size: 16px;">Canada's data-driven seniors housing newsletter</p>
              </div>
              
              <div style="background-color: #f8fafc; border-left: 4px solid #f59e0b; padding: 24px; margin-bottom: 32px;">
                <p style="margin: 0; font-size: 18px; color: #1e40af; font-weight: 600;">Welcome to The Grey Wave</p>
                <p style="margin: 12px 0 0; color: #475569; font-size: 16px;">You're now part of Canada's most comprehensive seniors housing intelligence network.</p>
              </div>
              
              <p style="margin: 0 0 20px; font-size: 16px; color: #475569;">Hi there,</p>
              
              <p style="margin: 0 0 20px; font-size: 16px; color: #475569;">
                Thanks for joining The Grey Wave. Every Friday, you'll get data-driven insights on Canada's seniors housing market — the trends, transactions, and demographic shifts that matter.
              </p>
              
              <p style="margin: 0 0 20px; font-size: 16px; color: #475569;">
                I started this newsletter because the data tells a compelling story that not enough people are hearing. Canada's aging population is creating unprecedented demand for seniors housing, but the supply picture is complicated.
              </p>
              
              <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 24px; margin: 32px 0;">
                <h3 style="margin: 0 0 16px; font-size: 18px; color: #1e40af;">What you can expect:</h3>
                <ul style="margin: 0; padding-left: 20px; color: #475569;">
                  <li style="margin-bottom: 8px;">Weekly market updates with real transaction data</li>
                  <li style="margin-bottom: 8px;">Deep dives into demographic trends and policy changes</li>
                  <li style="margin-bottom: 8px;">Analysis you won't find anywhere else</li>
                  <li style="margin-bottom: 0;">Always backed by data, never by hype</li>
                </ul>
              </div>
              
              <p style="margin: 0 0 20px; font-size: 16px; color: #475569;">
                The first issue goes out this Friday. If you have questions or feedback, just reply to this email — I read every message.
              </p>
              
              <p style="margin: 0 0 32px; font-size: 16px; color: #475569;">
                Best,<br>
                <strong>James Baxter</strong><br>
                <span style="color: #64748b;">Calgary, AB</span>
              </p>
              
              <div style="text-align: center; padding-top: 32px; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0 0 8px; font-size: 14px; color: #94a3b8;">The Grey Wave</p>
                <p style="margin: 0; font-size: 14px; color: #94a3b8;">
                  <a href="https://seniorshousingcanada.ca" style="color: #1e40af; text-decoration: none;">seniorshousingcanada.ca</a>
                </p>
              </div>
            </div>
          </body>
          </html>
        `
      }]
    };

    // Send email via SendGrid
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${sendGridApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(welcomeEmailData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('SendGrid error:', errorText);
      throw new Error('Failed to send welcome email');
    }

    console.log('Welcome email sent successfully to:', email);

    return NextResponse.json({
      success: true,
      message: 'Welcome email sent successfully'
    });

  } catch (error) {
    console.error('Welcome email API error:', error);
    return NextResponse.json(
      { error: 'Failed to send welcome email' },
      { status: 500 }
    );
  }
}