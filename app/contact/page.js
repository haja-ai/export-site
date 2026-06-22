'use client';

import { useState } from 'react';
import Link from 'next/link';
import { wheelchairs } from '@/lib/products';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: '', email: '', company: '', country: '', phone: '',
          product: '', quantity: '', message: '',
        });
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to submit. Please try again.');
      }
    } catch {
      alert('Network error. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-cream">
        <div className="text-center max-w-lg mx-auto px-4 py-16">
          <div className="w-20 h-20 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Your inquiry has been received successfully. Our team will review
            your requirements and get back to you within 24 hours.
          </p>
          <Link href="/" className="btn-primary px-8 py-3">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Contact & Inquiry</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Submit your inquiry below and our export team will respond within 24
            hours. For urgent matters, please call or email us directly.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 border border-gray-100 space-y-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg">Contact Information</h3>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal/5 flex items-center justify-center shrink-0 text-teal">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <a href="mailto:johnson@semwheelchair.com" className="text-sm text-teal hover:underline">
                      johnson@semwheelchair.com
                    </a>

                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal/5 flex items-center justify-center shrink-0 text-teal">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Phone / WhatsApp</p>
                    <a href="tel:+8613819098967" className="text-sm text-teal hover:underline">
                      +86 13819098967
                    </a>
                    <p className="text-xs text-gray-500 mt-0.5">Contact: Johnson</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal/5 flex items-center justify-center shrink-0 text-teal">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Address</p>
                    <p className="text-sm text-gray-500">
                      No. 18 Zhenzhong East Road<br />
                      Jiashan County, Jiaxing City<br />
                      Zhejiang Province, China
                    </p>
                  </div>
                </div>

                <hr className="border-gray-100" />

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Connect With Us</h4>
                  <div className="flex gap-3">
                    <a href="https://wa.me/8613819098967" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-teal/5 flex items-center justify-center text-teal hover:bg-teal hover:text-white transition-all">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <hr className="border-gray-100" />

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Quick Links</h4>
                  <ul className="space-y-1.5">
                    {wheelchairs.slice(0, 5).map((p) => (
                      <li key={p.slug}>
                        <Link href={`/products/${p.slug}`} className="text-sm text-gray-500 hover:text-teal transition-colors">
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 lg:p-8 border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Submit Your Inquiry
                </h2>
                <p className="text-sm text-gray-500 mb-8">
                  Fill out the form below and we&apos;ll get back to you with a
                  customized quotation and product recommendations.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text"
                        className={`form-input ${errors.name ? 'border-red-300 ring-2 ring-red-50' : ''}`}
                        placeholder="John Smith"
                        value={formData.name} onChange={handleChange} />
                      {errors.name && <p className="form-error">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email"
                        className={`form-input ${errors.email ? 'border-red-300 ring-2 ring-red-50' : ''}`}
                        placeholder="john@company.com"
                        value={formData.email} onChange={handleChange} />
                      {errors.email && <p className="form-error">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label" htmlFor="company">Company Name</label>
                      <input id="company" name="company" type="text" className="form-input"
                        placeholder="Your Company Ltd."
                        value={formData.company} onChange={handleChange} />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="country">Country / Region</label>
                      <input id="country" name="country" type="text" className="form-input"
                        placeholder="United States"
                        value={formData.country} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" className="form-input"
                        placeholder="+1 555 123 4567"
                        value={formData.phone} onChange={handleChange} />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="product">Product Interest</label>
                      <select id="product" name="product" className="form-input"
                        value={formData.product} onChange={handleChange}>
                        <option value="">Select a product...</option>
                        <optgroup label="MiniRedone Series">
                          {wheelchairs.map((p) => (
                            <option key={p.slug} value={p.name}>{p.name}</option>
                          ))}
                        </optgroup>
                        <option value="Multiple">Multiple / Not Sure</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="quantity">Estimated Quantity</label>
                    <input id="quantity" name="quantity" type="text" className="form-input"
                      placeholder="e.g., 100 units, MOQ inquiry, etc."
                      value={formData.quantity} onChange={handleChange} />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="message">Message / Requirements *</label>
                    <textarea id="message" name="message" rows={5}
                      className={`form-input resize-none ${errors.message ? 'border-red-300 ring-2 ring-red-50' : ''}`}
                      placeholder="Please describe your requirements: product specifications, quantity, delivery timeline, customization needs, target market, etc."
                      value={formData.message} onChange={handleChange} />
                    {errors.message && <p className="form-error">{errors.message}</p>}
                  </div>

                  <button type="submit" disabled={submitting}
                    className="btn-primary text-base px-8 py-4 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : 'Submit Inquiry'}
                  </button>

                  <p className="text-xs text-gray-400 mt-4">
                    By submitting this form, you agree to our privacy policy. We
                    will never share your information with third parties.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
