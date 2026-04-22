import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { orderConfirmationEmail } from '@/app/utils/emailTemplates/orderConfirmationEmail';

// Instantiate Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'FreshBox <onboarding@resend.dev>',
      to: 'siddharths3030@gmail.com',
      subject: 'FreshBox Order Confirmation',
      html: orderConfirmationEmail('Test', 'Medium', 'Monday, April 21, 2025', 39.99),
    });

    if (emailError) {
      console.error('[Resend] Test order email failed:', JSON.stringify(emailError, null, 2));
      return NextResponse.json({ success: false, error: emailError }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: emailData });
  } catch (error) {
    console.error('Test route error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
