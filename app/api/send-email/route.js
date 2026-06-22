/**
 * Email sending API route.
 * 
 * Uses Resend (free tier: 100 emails/day) if RESEND_API_KEY is set.
 * Falls back to logging the email to console (for development).
 * 
 * To use Resend:
 * 1. Sign up at https://resend.com
 * 2. Add your API key to environment: RESEND_API_KEY=re_xxx
 * 3. Set FROM_EMAIL (default: onbaording@resend.dev)
 * 4. Set NOTIFICATION_EMAIL for where to receive inquiry alerts
 */

export async function POST(request) {
  try {
    const inquiry = await request.json();
    const {
      name,
      email,
      company,
      country,
      phone,
      product,
      quantity,
      message,
    } = inquiry;

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';
    const notificationEmail =
      process.env.NOTIFICATION_EMAIL || 'export@xiaoxiang-dpg.com';

    // Build email HTML
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a2e3c; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 20px; }
    .body { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
    .field { margin-bottom: 12px; }
    .field-label { font-weight: bold; color: #555; font-size: 12px; text-transform: uppercase; }
    .field-value { color: #333; }
    .message-box { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #0d7377; margin-top: 15px; }
    .footer { font-size: 12px; color: #999; text-align: center; padding: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔔 New B2B Inquiry Received</h1>
    </div>
    <div class="body">
      <div class="field">
        <div class="field-label">Name</div>
        <div class="field-value">${escapeHtml(name)}</div>
      </div>
      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value">${escapeHtml(email)}</div>
      </div>
      ${company ? `<div class="field"><div class="field-label">Company</div><div class="field-value">${escapeHtml(company)}</div></div>` : ''}
      ${country ? `<div class="field"><div class="field-label">Country</div><div class="field-value">${escapeHtml(country)}</div></div>` : ''}
      ${phone ? `<div class="field"><div class="field-label">Phone</div><div class="field-value">${escapeHtml(phone)}</div></div>` : ''}
      ${product ? `<div class="field"><div class="field-label">Product Interest</div><div class="field-value">${escapeHtml(product)}</div></div>` : ''}
      ${quantity ? `<div class="field"><div class="field-label">Estimated Quantity</div><div class="field-value">${escapeHtml(quantity)}</div></div>` : ''}
      <div class="message-box">
        <div class="field-label">Message</div>
        <div class="field-value">${escapeHtml(message).replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      This inquiry was submitted via the Xiaoxiang-DPG B2B export website.
      <br>Respond within 24 hours to maintain service quality.
    </div>
  </div>
</body>
</html>`;

    // If Resend API key is available, use it
    if (resendApiKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `Xiaoxiang-DPG B2B <${fromEmail}>`,
          to: [notificationEmail],
          replyTo: email,
          subject: `New B2B Inquiry from ${name}${company ? ` — ${company}` : ''}`,
          html: emailHtml,
        }),
      });

      if (!res.ok) {
        const errorData = await res.text();
        console.error('Resend API error:', errorData);
        // Fall through to console log fallback
      } else {
        return Response.json({ success: true, method: 'resend' });
      }
    }

    // Fallback: log to console in development
    console.log('=== NEW B2B INQUIRY ===');
    console.log(`From: ${name} <${email}>`);
    console.log(`Company: ${company || 'N/A'} | Country: ${country || 'N/A'}`);
    console.log(`Product: ${product || 'N/A'} | Qty: ${quantity || 'N/A'}`);
    console.log(`Message: ${message}`);
    console.log('=======================');

    return Response.json({
      success: true,
      method: 'console',
      note: 'Email logged to console. Set RESEND_API_KEY to send real emails.',
    });
  } catch (error) {
    console.error('Send email error:', error);
    return Response.json(
      { error: 'Failed to send email notification.' },
      { status: 500 }
    );
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
