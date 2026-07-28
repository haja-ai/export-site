import { sendInquiryEmail } from '@/lib/sendEmail';

// In-memory store for inquiries (in production, use a database)
const inquiries = [];

export async function GET() {
  return Response.json({ count: inquiries.length, inquiries: inquiries.slice(-50) });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, country, phone, product, quantity, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    // Create inquiry record
    const inquiry = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      name,
      email,
      company: company || '',
      country: country || '',
      phone: phone || '',
      product: product || '',
      quantity: quantity || '',
      message,
      createdAt: new Date().toISOString(),
      status: 'new',
    };

    inquiries.push(inquiry);

    // Send email notification directly (no HTTP self-call)
    try {
      await sendInquiryEmail(inquiry);
    } catch (emailError) {
      // Email sending failure should not block the inquiry submission
      console.error('Failed to send email notification:', emailError);
    }

    return Response.json(
      {
        success: true,
        message: 'Inquiry submitted successfully. We will contact you within 24 hours.',
        id: inquiry.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Inquiry submission error:', error);
    return Response.json(
      { error: 'Failed to process inquiry. Please try again.' },
      { status: 500 }
    );
  }
}
