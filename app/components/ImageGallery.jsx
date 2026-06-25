'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function ImageGallery({ images, alt }) {
  const [active, setActive] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 flex items-center justify-center">
        <div className="text-center">
          <svg className="w-24 h-24 mx-auto text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
            <circle cx="12" cy="5" r="2.5" />
            <path d="M5 22l3-9h8l3 9" />
            <path d="M8 13c0 3.3 2.7 6 6 6s6-2.7 6-6" />
            <path d="M4 13h4" />
            <path d="M16 13h4" />
          </svg>
          <p className="text-sm text-gray-400 mt-3">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Main image */}
      <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden mb-3">
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={images[active]}
            alt={`${alt} - Product view ${active + 1} | MiniElephant Electric Wheelchair`}
            width={800}
            height={600}
            className="w-full h-full object-contain"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            loading="eager"
            fetchPriority={active === 0 ? "high" : "high"}
            decoding="async"
          />
        </AnimatePresence>
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-20 h-16 shrink-0 rounded-lg border-2 overflow-hidden transition-all ${
                i === active
                  ? 'border-teal ring-1 ring-teal'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <img
                src={img}
                alt={`${alt} - Angle ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
