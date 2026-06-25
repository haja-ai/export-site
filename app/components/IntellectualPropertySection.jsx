'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const trademarks = [
  { id: 'tm1', image: '/images/trademark-1.webp', name: 'MiniElephant Registered Trademark', reg: 'Reg. No. 84339471' },
  { id: 'tm2', image: '/images/trademark-2.webp', name: 'MiniElephant Registered Trademark', reg: 'Reg. No. 84343727' },
];

const patents = [
  { id: 'p01', image: '/images/patent-01.webp', name: 'Smart Wheelchair Controller Mounting Structure' },
  { id: 'p02', image: '/images/patent-02.webp', name: 'Wheelchair Range Testing Equipment' },
  { id: 'p03', image: '/images/patent-03.webp', name: 'High-Load Wheelchair Support Frame' },
  { id: 'p04', image: '/images/patent-04.webp', name: 'Motor Stability Testing Device' },
  { id: 'p05', image: '/images/patent-05.webp', name: 'Reliable Wheelchair Anti-Tip Mechanism' },
  { id: 'p06', image: '/images/patent-06.webp', name: 'Lightweight Drive Wheelchair' },
  { id: 'p07', image: '/images/patent-07.webp', name: 'High-Torque Silent Motor' },
  { id: 'p08', image: '/images/patent-08.webp', name: 'High-Efficiency Brushless Motor' },
  { id: 'p09', image: '/images/patent-09.webp', name: 'Retractable Footrest for Electric Wheelchair' },
  { id: 'p10', image: '/images/patent-10.webp', name: 'Footrest Limit Structure' },
  { id: 'p11', image: '/images/patent-11.webp', name: 'Pneumatic Shock-Absorbing Wheel' },
  { id: 'p12', image: '/images/patent-12.webp', name: 'Easy-Operation Wheelchair Controller' },
  { id: 'p13', image: '/images/patent-13.webp', name: 'Integrated Armrest Control Device' },
  { id: 'p14', image: '/images/patent-14.webp', name: 'Adjustable Armrest Wheelchair' },
  { id: 'p15', image: '/images/patent-15.webp', name: 'Wheelchair Front Fork Press-Fit Jig' },
  { id: 'p16', image: '/images/patent-16.webp', name: 'Wheelchair Seat Frame Assembly Jig' },
];

const EASE = [0.16, 1, 0.3, 1];

const stats = [
  { v: '20+', l: 'Granted Patents' },
  { v: '2', l: 'Registered Trademarks' },
  { v: '100%', l: 'In-House R&D' },
];

export default function IntellectualPropertySection() {
  const [active, setActive] = useState(null);
  const reduce = useReducedMotion();

  const fade = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: EASE },
      };

  return (
    <>
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading (no eyebrow by design) */}
          <motion.div {...fade} className="max-w-2xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-slate-300 leading-relaxed">
              Every MiniRedone wheelchair is built on patented in-house engineering. Our designs are
              protected by patents and trademarks granted by the China National Intellectual Property
              Administration.
            </p>
          </motion.div>

          {/* Trust stats */}
          <motion.div {...fade} className="grid grid-cols-3 gap-4 sm:gap-10 mb-16 max-w-2xl">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="text-3xl lg:text-5xl font-bold text-teal-light">{s.v}</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>

          {/* Registered Trademarks */}
          <motion.div {...fade} className="mb-16">
            <h3 className="text-lg font-semibold text-slate-200 mb-5">Registered Trademarks</h3>
            <div className="grid grid-cols-2 gap-5 max-w-md">
              {trademarks.map((tm) => (
                <button
                  key={tm.id}
                  onClick={() => setActive(tm)}
                  className="group text-left rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-teal/50 transition-all duration-300"
                >
                  <div className="aspect-[3/4] bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={tm.image}
                      alt={tm.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <div className="text-xs text-slate-400">{tm.reg}</div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Patent certificate wall (horizontal scroll, distinct from the cert grid above) */}
          <motion.div {...fade}>
            <div className="flex items-end justify-between mb-5">
              <h3 className="text-lg font-semibold text-slate-200">Patent Certificates</h3>
              <span className="text-xs text-slate-500 hidden sm:inline">Scroll to explore →</span>
            </div>
            <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
              {patents.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActive(p)}
                  className="group snap-start shrink-0 w-44 sm:w-52 text-left rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-teal/50 transition-all duration-300"
                >
                  <div className="aspect-[3/4] bg-white overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.name} : Utility Patent Certificate`}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <div className="text-[11px] text-slate-300 leading-snug line-clamp-2">{p.name}</div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full-size modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div className="relative max-w-3xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActive(null)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm"
            >
              Close ✕
            </button>
            <img
              src={active.image}
              alt={active.name}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl bg-white"
            />
            <p className="text-center text-slate-300 text-sm mt-3">
              {active.name}
              {active.reg ? ` · ${active.reg}` : ''}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
