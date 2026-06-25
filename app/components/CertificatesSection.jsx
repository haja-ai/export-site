'use client';

import { useState } from 'react';

const certificates = [
  {
    id: 'ce',
    name: 'CE Marking',
    desc: 'European conformity for medical devices, Regulation (EU) 2017/745',
    image: '/images/cert-ce.webp',
    fullSize: '/images/cert-ce.webp',
  },
  {
    id: 'iso',
    name: 'ISO 13485',
    desc: 'Medical devices quality management system certification',
    image: '/images/cert-iso13485-2.webp',
    fullSize: '/images/cert-iso13485-2.webp',
  },
  {
    id: 'fda',
    name: 'FDA Registration',
    desc: 'US Food and Drug Administration establishment registration',
    image: '/images/cert-fda.jpg',
    fullSize: '/images/cert-fda.jpg',
  },
];

export default function CertificatesSection() {
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Quality Certifications
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Our products meet international standards for medical devices and mobility equipment.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certificates.map((cert) => (
              <button
                key={cert.id}
                onClick={() => setExpanded(expanded === cert.id ? null : cert.id)}
                className="group text-left bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-teal/30 transition-all duration-300"
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
            ))}
          </div>
        </div>
      </section>

      {/* Full-size modal */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setExpanded(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setExpanded(null)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm"
            >
              Close ✕
            </button>
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
