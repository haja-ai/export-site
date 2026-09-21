'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminGate from '../../components/AdminGate';
import AdminNav from '../../components/AdminNav';

function RedirectToInquiryManager() {
  const router = useRouter();
  useEffect(() => { router.replace('/admin/inquiries'); }, [router]);
  return <div style={{ padding: 32, fontFamily: 'system-ui', color: '#6b7280' }}>正在打开询盘管理...</div>;
}

export default function AdminReplyPage() {
  return <AdminGate><AdminNav /><RedirectToInquiryManager /></AdminGate>;
}
