/**
 * Send inquiry email via Resend.
 * Extracted so both /api/inquiry and /api/send-email can use it without HTTP self-calls.
 */

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildEmailHtml(inquiry) {
  const { name, email, company, country, phone, product, quantity, message } = inquiry;
  return `
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
    .message-box { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #14B8A6; margin-top: 15px; }
    .footer { font-size: 12px; color: #999; text-align: center; padding: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New B2B Inquiry Received</h1>
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
      This inquiry was submitted via the MiniElephant B2B export website (semwheelchair.com).
      <br>Respond within 24 hours to maintain service quality.
    </div>
  </div>
</body>
</html>`;
}

/**
 * Send an inquiry email via Resend API.
 * @param {object} inquiry - { name, email, company, country, phone, product, quantity, message }
 * @returns {Promise<{success: boolean, method: string}>}
 */
export async function sendInquiryEmail(inquiry) {
  const { name, email, message } = inquiry;

  // Skip automated test/bot submissions
  const botPatterns = ['bot@check.internal', 'SEO-Health-Check', 'Automated check', 'test@test'];
  if (botPatterns.some(p => (email || '').toLowerCase().includes(p.toLowerCase()) || 
                             (name || '').includes(p) || 
                             (message || '').includes(p))) {
    console.log('Skipping automated test inquiry:', email);
    return { success: true, method: 'skipped_bot' };
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FROM_EMAIL || 'contact@semwheelchair.com';
  const notificationEmail = process.env.NOTIFICATION_EMAIL || 'johnson@semwheelchair.com';

  if (resendApiKey) {
    const emailHtml = buildEmailHtml(inquiry);
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `MiniElephant B2B <${fromEmail}>`,
        to: [notificationEmail],
        replyTo: email,
        subject: `New B2B Inquiry from ${name}${inquiry.company ? ` - ${inquiry.company}` : ''}`,
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error('Resend API error:', errorData);
      return { success: false, method: 'resend_error' };
    }
    return { success: true, method: 'resend' };
  }

  // Fallback: log to console
  console.log('=== NEW B2B INQUIRY ===');
  console.log(`From: ${name} <${email}>`);
  console.log(`Company: ${inquiry.company || 'N/A'} | Country: ${inquiry.country || 'N/A'}`);
  console.log(`Product: ${inquiry.product || 'N/A'} | Qty: ${inquiry.quantity || 'N/A'}`);
  console.log(`Message: ${inquiry.message}`);
  console.log('=======================');
  return { success: true, method: 'console' };
}
