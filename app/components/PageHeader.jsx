'use client';

import { motion } from "framer-motion";

export default function PageHeader({ badge, title, description }) {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-20"
      style={{
        background: "linear-gradient(180deg, #E8F0FF 0%, #F5F9FF 50%, #FFFFFF 100%)",
      }}
    >
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #14B8A6 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {badge && (
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-teal mb-3">
              {badge}
            </span>
          )}
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
