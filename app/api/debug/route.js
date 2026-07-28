export async function GET() {
  const hasKey = !!process.env.RESEND_API_KEY;
  const keyPreview = process.env.RESEND_API_KEY 
    ? process.env.RESEND_API_KEY.substring(0, 5) + '...' + process.env.RESEND_API_KEY.slice(-4)
    : 'NOT SET';
  const notificationEmail = process.env.NOTIFICATION_EMAIL || 'johnson@semwheelchair.com';
  
  return Response.json({
    hasKey,
    keyPreview,
    notificationEmail,
    env: Object.keys(process.env).filter(k => !k.includes('KEY') && !k.includes('TOKEN') && !k.includes('SECRET')).slice(0, 20),
  });
}
