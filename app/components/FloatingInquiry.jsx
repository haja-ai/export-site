'use client';

import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  quantity: '',
  message: '',
};

export default function FloatingInquiry({ product = '' }) {
  const [open, setOpen] = useState(true);
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          product: product || 'General inquiry',
          quantity: form.quantity,
          message: form.message,
        }),
      });

      if (!response.ok) throw new Error('Unable to send your inquiry.');

      setStatus('success');
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'generate_lead', {
          event_category: 'floating_inquiry',
          event_label: product || 'homepage',
          value: 1,
        });
      }
    } catch (submissionError) {
      setError(submissionError.message || 'Unable to send your inquiry.');
      setStatus('error');
    }
  };

  const title = product ? `Ask about ${product}` : 'Request a B2B Quote';

  return (
    <aside
      className="fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] max-w-[23rem]"
      aria-label="Quick B2B inquiry"
    >
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="ml-auto flex items-center gap-3 rounded-full bg-teal px-5 py-3.5 text-left text-white shadow-[0_16px_44px_rgba(15,118,110,0.32)] transition hover:-translate-y-0.5 hover:bg-teal/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal/30"
          aria-label="Open quick inquiry form"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
          </span>
          <span><span className="block text-xs font-medium text-white/80">MiniElephant B2B</span><span className="block font-semibold">Get a Quick Quote</span></span>
        </button>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-white/70 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.24)]">
          <div className="flex items-start justify-between gap-3 bg-gray-900 px-5 py-4 text-white">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-200">MiniElephant B2B</p>
              <h2 className="mt-1 text-lg font-bold leading-tight">{title}</h2>
              <p className="mt-1 text-xs text-gray-300">Share your requirement. Our export team will reply within 24 hours.</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="rounded-full p-1 text-gray-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Minimize quick inquiry form">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" /></svg>
            </button>
          </div>

          {status === 'success' ? (
            <div className="px-5 py-7 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 text-teal">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="mt-3 font-bold text-gray-900">Inquiry received</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">Thank you. We will review your request and reply within 24 hours.</p>
              <button type="button" onClick={() => setOpen(false)} className="mt-4 text-sm font-semibold text-teal hover:underline">Close</button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-3 p-4">
              {error && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">{error}</p>}
              <div className="grid grid-cols-2 gap-3">
                <label className="sr-only" htmlFor="floating-inquiry-name">Name</label>
                <input id="floating-inquiry-name" name="name" value={form.name} onChange={update} required placeholder="Name *" className="min-w-0 rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-teal focus:ring-2 focus:ring-teal/20" />
                <label className="sr-only" htmlFor="floating-inquiry-email">Business email</label>
                <input id="floating-inquiry-email" name="email" type="email" value={form.email} onChange={update} required placeholder="Business email *" className="min-w-0 rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-teal focus:ring-2 focus:ring-teal/20" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <label className="sr-only" htmlFor="floating-inquiry-company">Company</label>
                <input id="floating-inquiry-company" name="company" value={form.company} onChange={update} placeholder="Company" className="min-w-0 rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-teal focus:ring-2 focus:ring-teal/20" />
                <label className="sr-only" htmlFor="floating-inquiry-quantity">Quantity</label>
                <input id="floating-inquiry-quantity" name="quantity" value={form.quantity} onChange={update} placeholder="Quantity" className="min-w-0 rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-teal focus:ring-2 focus:ring-teal/20" />
              </div>
              <label className="sr-only" htmlFor="floating-inquiry-phone">WhatsApp</label>
              <input id="floating-inquiry-phone" name="phone" value={form.phone} onChange={update} placeholder="WhatsApp (optional)" className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-teal focus:ring-2 focus:ring-teal/20" />
              <label className="sr-only" htmlFor="floating-inquiry-message">Requirement</label>
              <textarea id="floating-inquiry-message" name="message" value={form.message} onChange={update} required rows={3} placeholder="Requirements, destination, or questions *" className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-teal focus:ring-2 focus:ring-teal/20" />
              <button type="submit" disabled={status === 'loading'} className="btn-primary w-full py-3 text-sm disabled:cursor-not-allowed disabled:opacity-60">
                {status === 'loading' ? 'Sending...' : 'Request a Quote'}
              </button>
              <p className="px-1 text-center text-[0.68rem] leading-relaxed text-gray-400">By submitting, you agree to our <a className="underline hover:text-teal" href="/privacy">Privacy Policy</a>.</p>
            </form>
          )}
        </div>
      )}
    </aside>
  );
}
