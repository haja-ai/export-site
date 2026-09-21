import { NextResponse } from 'next/server';
import { createInquiry } from '@/lib/supabase';
import { sendInquiryEmail } from '@/lib/sendEmail';

export const dynamic = 'force-dynamic';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const trim = (value, max) => String(value || '').trim().slice(0, max);

export async function POST(request) {
  try {
    const body = await request.json();
    const name = trim(body.name, 120);
    const email = trim(body.email, 200).toLowerCase();
    const message = trim(body.message, 12000);
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 });
    }

    const inquiry = await createInquiry({
      name,
      email,
      company: trim(body.company, 200),
      country: trim(body.country, 120),
      phone: trim(body.phone, 80),
      product: trim(body.product, 200),
      quantity: trim(body.quantity, 100),
      message,
    });

    try {
      await sendInquiryEmail(inquiry);
    } catch (emailError) {
      console.error('Inquiry was stored but notification email failed:', emailError);
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully. We will contact you within 24 hours.',
      id: inquiry.id,
    }, { status: 201 });
  } catch (error) {
    console.error('Inquiry submission error:', error);
    return NextResponse.json({ error: 'Failed to save your inquiry. Please try again.' }, { status: 500 });
  }
}
