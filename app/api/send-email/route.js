/**
 * Email sending API route.
 * Delegates to the shared sendInquiryEmail utility.
 */

import { sendInquiryEmail } from '@/lib/sendEmail';

export async function POST(request) {
  try {
    const inquiry = await request.json();
    const result = await sendInquiryEmail(inquiry);
    return Response.json(result);
  } catch (error) {
    console.error('Send email error:', error);
    return Response.json(
      { error: 'Failed to send email notification.' },
      { status: 500 }
    );
  }
}
