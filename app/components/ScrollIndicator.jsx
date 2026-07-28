'use client';

import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export default function ScrollIndicator() {
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <motion.div
      className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 0.8 }}
    >
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: EASE }}
        className="flex flex-col items-center"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/35 mb-1">Scroll</span>
        <svg width="14" height="18" viewBox="0 0 14 14" fill="none" className="text-white/30">
          <path d="M2 5L7 10L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
