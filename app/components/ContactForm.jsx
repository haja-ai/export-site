'use client';

import { useState } from 'react';
import { wheelchairs } from '@/lib/products';

const customerTypes = [
  'Distributor',
  'Importer',
  'Clinic or healthcare provider',
  'Caregiver or individual user',
  'OEM/ODM buyer',
  'Other',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    whatsapp: '',
    customerType: '',
    product: '',
    quantity: '',
    oemodm: '',
    targetMarket: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          country: formData.country,
          phone: formData.whatsapp,
          product: formData.product,
          quantity: formData.quantity,
          message: `${formData.message}\n\nCustomer type: ${formData.customerType || 'N/A'}\nOEM/ODM: ${formData.oemodm || 'N/A'}\nTarget market: ${formData.targetMarket || 'N/A'}`,
        }),
      });
      if (!res.ok) throw new Error('API returned ' + res.status);
      setSubmitted(true);
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'generate_lead', {
          event_category: 'inquiry',
          event_label: formData.product || 'general',
          value: 1,
        });
      }
    } catch (err) {
      setError(err.message || 'Submit failed');
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'inquiry_error', {
          event_category: 'inquiry',
          event_label: err.message || 'unknown',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Thank you. Our export team will reply within 24 hours.</h3>
        <p className="text-gray-500">For urgent requests, please contact us on WhatsApp.</p>
      </div>
    );
  }

  const inputClass = 'w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-colors';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
          <input type="text" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Your company" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Country / Region</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} className={inputClass} placeholder="e.g. United States" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="you@company.com" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
          <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className={inputClass} placeholder="+1 234 567 8900" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Customer Type</label>
          <select name="customerType" value={formData.customerType} onChange={handleChange} className={`${inputClass} bg-white`}>
            <option value="">Select customer type...</option>
            {customerTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Interested Model</label>
          <select name="product" value={formData.product} onChange={handleChange} className={`${inputClass} bg-white`}>
            <option value="">Select a model...</option>
            <optgroup label="MiniRedone Series">
              {wheelchairs.map((p) => <option key={p.slug} value={p.name}>{p.name}</option>)}
            </optgroup>
            <option value="Multiple / Not Sure">Multiple / Not Sure</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Quantity</label>
          <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} className={inputClass} placeholder="e.g. 100 units" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">OEM/ODM Requirement</label>
          <input type="text" name="oemodm" value={formData.oemodm} onChange={handleChange} className={inputClass} placeholder="Logo / packaging / color / specs" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Target Market</label>
          <input type="text" name="targetMarket" value={formData.targetMarket} onChange={handleChange} className={inputClass} placeholder="e.g. EU / Middle East / US" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message / Requirements <span className="text-red-500">*</span></label>
        <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-colors resize-y" placeholder="Tell us about your requirements, target market, or any specific questions..." />
      </div>

      <button type="submit" disabled={loading} className="btn-primary w-full py-3 text-base disabled:opacity-50">
        {loading ? 'Sending...' : 'Request a Wholesale Quote'}
      </button>
    </form>
  );
}
