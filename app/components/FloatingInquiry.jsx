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
  const [open, setOpen] = useState(Boolean(product));
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

  const title = product ? `Get a quote for ${product}` : 'Request a quote';

  return (
    <aside
      className="fixed bottom-5 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-[22rem]"
      aria-label="Quick B2B inquiry"
    >
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="ml-auto block border border-[#2c8e39] bg-[#3ab54a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2c9a3c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3ab54a] focus-visible:ring-offset-2"
          aria-label="Open quick inquiry form"
        >
          Get a Quote
        </button>
      ) : (
        <div className="border border-[#dce4df] bg-white shadow-[0_12px_30px_rgba(24,33,29,0.10)]">
          <div className="flex items-start justify-between gap-5 border-b border-[#dce4df] px-5 py-4">
            <div>
              <h2 className="text-base font-semibold tracking-[-0.01em] text-[#18211d]">{title}</h2>
              <p className="mt-1 max-w-[17rem] text-xs leading-5 text-[#64706a]">Tell us your model and market. Our export team will reply within 24 hours.</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="-mr-1 -mt-1 flex h-7 w-7 shrink-0 items-center justify-center border border-transparent text-[#64706a] transition-colors hover:border-[#dce4df] hover:text-[#18211d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3ab54a]" aria-label="Minimize quick inquiry form">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18 12H6" /></svg>
            </button>
          </div>

          {status === 'success' ? (
            <div className="px-5 py-8">
              <h3 className="text-base font-semibold text-[#18211d]">Inquiry received</h3>
              <p className="mt-2 text-sm leading-6 text-[#64706a]">Thank you. We will review your request and reply within 24 hours.</p>
              <button type="button" onClick={() => setOpen(false)} className="mt-5 text-sm font-semibold text-[#2c8e39] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3ab54a]">Close</button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-3 px-5 py-4">
              {error && <p role="alert" className="border-l-2 border-red-600 bg-red-50 px-3 py-2 text-xs leading-5 text-red-700">{error}</p>}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs font-medium text-[#45514b]" htmlFor="floating-inquiry-name">Name <span className="text-[#3ab54a]">*</span></label>
                  <input id="floating-inquiry-name" name="name" value={form.name} onChange={update} required placeholder="Your name" className="min-w-0 w-full border border-[#dce4df] bg-white px-3 py-2.5 text-sm text-[#18211d] outline-none transition-colors placeholder:text-[#8d9791] focus:border-[#3ab54a] focus:ring-1 focus:ring-[#3ab54a]" />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-[#45514b]" htmlFor="floating-inquiry-email">Business email <span className="text-[#3ab54a]">*</span></label>
                  <input id="floating-inquiry-email" name="email" type="email" value={form.email} onChange={update} required placeholder="name@company.com" className="min-w-0 w-full border border-[#dce4df] bg-white px-3 py-2.5 text-sm text-[#18211d] outline-none transition-colors placeholder:text-[#8d9791] focus:border-[#3ab54a] focus:ring-1 focus:ring-[#3ab54a]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs font-medium text-[#45514b]" htmlFor="floating-inquiry-company">Company</label>
                  <input id="floating-inquiry-company" name="company" value={form.company} onChange={update} placeholder="Company name" className="min-w-0 w-full border border-[#dce4df] bg-white px-3 py-2.5 text-sm text-[#18211d] outline-none transition-colors placeholder:text-[#8d9791] focus:border-[#3ab54a] focus:ring-1 focus:ring-[#3ab54a]" />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-[#45514b]" htmlFor="floating-inquiry-quantity">Quantity</label>
                  <input id="floating-inquiry-quantity" name="quantity" value={form.quantity} onChange={update} placeholder="Estimated qty." className="min-w-0 w-full border border-[#dce4df] bg-white px-3 py-2.5 text-sm text-[#18211d] outline-none transition-colors placeholder:text-[#8d9791] focus:border-[#3ab54a] focus:ring-1 focus:ring-[#3ab54a]" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-[#45514b]" htmlFor="floating-inquiry-phone">WhatsApp</label>
                <input id="floating-inquiry-phone" name="phone" value={form.phone} onChange={update} placeholder="Optional" className="w-full border border-[#dce4df] bg-white px-3 py-2.5 text-sm text-[#18211d] outline-none transition-colors placeholder:text-[#8d9791] focus:border-[#3ab54a] focus:ring-1 focus:ring-[#3ab54a]" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-[#45514b]" htmlFor="floating-inquiry-message">Requirements <span className="text-[#3ab54a]">*</span></label>
                <textarea id="floating-inquiry-message" name="message" value={form.message} onChange={update} required rows={3} placeholder="Model, destination, or requirements" className="w-full resize-none border border-[#dce4df] bg-white px-3 py-2.5 text-sm text-[#18211d] outline-none transition-colors placeholder:text-[#8d9791] focus:border-[#3ab54a] focus:ring-1 focus:ring-[#3ab54a]" />
              </div>
              <button type="submit" disabled={status === 'loading'} className="w-full bg-[#3ab54a] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2c9a3c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3ab54a] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60">
                {status === 'loading' ? 'Sending inquiry...' : 'Send inquiry'}
              </button>
              <p className="pt-0.5 text-[0.68rem] leading-4 text-[#7a857f]">By submitting, you agree to our <a className="underline underline-offset-2 hover:text-[#2c8e39]" href="/privacy">Privacy Policy</a>.</p>
            </form>
          )}
        </div>
      )}
    </aside>
  );
}
