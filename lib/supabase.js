const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

function requireConfig() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('Supabase is not configured on the server.');
  }
}

export async function supabaseRequest(path, options = {}) {
  requireConfig();
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error('Supabase request failed:', response.status, detail);
    throw new Error(`Supabase request failed (${response.status}).`);
  }
  return response;
}

export async function createInquiry(inquiry) {
  const response = await supabaseRequest('inquiries', {
    method: 'POST',
    headers: { Prefer: 'return=representation' },
    body: JSON.stringify(inquiry),
  });
  const rows = await response.json();
  return rows[0];
}

export async function listInquiries() {
  const response = await supabaseRequest('inquiries?select=*&order=created_at.desc&limit=200');
  return response.json();
}

export async function getInquiry(id) {
  const response = await supabaseRequest(`inquiries?id=eq.${encodeURIComponent(id)}&select=*&limit=1`);
  const rows = await response.json();
  return rows[0] || null;
}

export async function updateInquiryStatus(id, status) {
  const response = await supabaseRequest(`inquiries?id=eq.${encodeURIComponent(id)}`, {
    method: 'PATCH',
    headers: { Prefer: 'return=representation' },
    body: JSON.stringify({ status, updated_at: new Date().toISOString() }),
  });
  const rows = await response.json();
  return rows[0] || null;
}

export async function listInquiryReplies(inquiryId) {
  const response = await supabaseRequest(`inquiry_replies?inquiry_id=eq.${encodeURIComponent(inquiryId)}&select=*&order=sent_at.desc`);
  return response.json();
}

export async function createInquiryReply(reply) {
  const response = await supabaseRequest('inquiry_replies', {
    method: 'POST',
    headers: { Prefer: 'return=representation' },
    body: JSON.stringify(reply),
  });
  const rows = await response.json();
  return rows[0];
}
