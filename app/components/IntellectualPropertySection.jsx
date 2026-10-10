'use client';

import { useState, useRef, useEffect } from 'react';
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
  { v: '16', l: 'Patent Documents Shown' },
  { v: '2', l: 'Registered Trademarks' },
  { v: '10', l: 'MiniRedone Models' },
];

export default function IntellectualPropertySection() {
  const [active, setActive] = useState(null);
  const scrollRef = useRef(null);
  const reduce = useReducedMotion();

  // Auto-scroll patent carousel
  useEffect(() => {
    if (reduce || !scrollRef.current) return;
    const el = scrollRef.current;
    let direction = 1;
    const interval = setInterval(() => {
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 5) direction = -1;
      if (el.scrollLeft <= 5) direction = 1;
      el.scrollLeft += direction * 1.5;
    }, 40);
    return () => clearInterval(interval);
  }, [reduce]);

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
      <section className="border-y border-[#dbe3dd] bg-[#17231b] py-20 text-white lg:py-28">
        <div className="px-6 sm:px-8 lg:px-16">
          <motion.div {...fade} className="grid gap-8 border-b border-white/15 pb-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-[9vw]">
            <div>
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#74cf80]">Intellectual property archive</p>
              <h2 className="mt-3 text-[clamp(2.35rem,4vw,4.4rem)] font-extrabold leading-[1.01] tracking-[-0.06em]">Two trademarks. Sixteen patent files.</h2>
            </div>
            <p className="self-end text-base leading-8 text-slate-300">These company archive documents remain visible for buyer review. Select a trademark or patent file to inspect the full document, and request the exact registration scope and ownership details for your project.</p>
          </motion.div>

          {/* Registered Trademarks */}
          <motion.div {...fade} className="mb-16 mt-12">
            <h3 className="text-lg font-semibold text-slate-200 mb-5">Registered Trademarks</h3>
            <div className="grid grid-cols-2 gap-5 max-w-md">
              {trademarks.map((tm) => (
                <button
                  key={tm.id}
                  onClick={() => setActive(tm)}
                  className="group border border-white/15 bg-white/[0.035] text-left transition-colors duration-300 hover:border-[#3ab54a] hover:bg-white/[0.07]"
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
              <span className="hidden text-xs text-slate-400 sm:inline">Select a document to enlarge</span>
            </div>
            <div className="grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
              {patents.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActive(p)}
                  className="group border-b border-r border-white/15 bg-white/[0.035] p-3 text-left transition-colors duration-300 hover:border-[#3ab54a] hover:bg-white/[0.07] sm:p-4"
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
                    <div className="text-[0.6875rem] text-slate-300 leading-snug line-clamp-2">{p.name}</div>
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
