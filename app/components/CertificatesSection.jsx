'use client';

import { useState } from 'react';

const certificates = [
  {
    id: 'sfda-mdma',
    name: 'Saudi SFDA Medical Device Marketing Authorization',
    desc: 'Authorization No. MDMA-2-2026-4108 · Issuing date 25/8/2026 · Expiry date 25/8/2029',
    pdf: '/certificates/MDMA-2-2026-4108.pdf',
    preview: '/certificates/MDMA-2-2026-4108-preview.webp',
    type: 'pdf',
  },
  {
    id: 'ce',
    name: 'CE Marking',
    desc: 'European conformity document preview',
    image: '/images/cert-ce.webp',
    fullSize: '/images/cert-ce.webp',
    type: 'image',
  },
  {
    id: 'iso',
    name: 'ISO 13485',
    desc: 'Medical devices quality management system certification',
    image: '/images/cert-iso13485-2.webp',
    fullSize: '/images/cert-iso13485-2.webp',
    type: 'image',
  },
  {
    id: 'fda',
    name: 'FDA Registration',
    desc: 'US Food and Drug Administration establishment registration',
    image: '/images/cert-fda.webp',
    fullSize: '/images/cert-fda.webp',
    type: 'image',
  },
];

export default function CertificatesSection() {
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <section className="py-16 lg:py-20 bg-cream">
        <div className="px-6 sm:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Quality Certifications & Authorizations</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Document previews and authorizations available for buyer review. Please request the exact scope and validity for your market before ordering.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group text-left bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-teal/30 transition-all duration-300"
              >
                {cert.type === 'pdf' ? (
                  <a href={cert.pdf} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="aspect-[3/4] bg-gray-50 flex items-center justify-center p-3 overflow-hidden">
                      <img
                        src={cert.preview}
                        alt={`${cert.name} document preview`}
                        className="w-full h-full object-contain border-2 border-red-500 rounded-sm shadow-sm group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-1">{cert.name}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{cert.desc}</p>
                      <p className="text-xs text-red-600 mt-2 font-medium">Open full certificate PDF ↗</p>
                    </div>
                  </a>
                ) : (
                  <button
                    onClick={() => setExpanded(expanded === cert.id ? null : cert.id)}
                    className="w-full text-left"
                  >
                    <div className="aspect-[3/4] bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-1">{cert.name}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{cert.desc}</p>
                    </div>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {expanded && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setExpanded(null)}>
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setExpanded(null)} className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm">Close ✕</button>
            <img
              src={certificates.find((c) => c.id === expanded)?.fullSize}
              alt={certificates.find((c) => c.id === expanded)?.name}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
