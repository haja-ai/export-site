'use client';

import { motion } from "framer-motion";
import Link from 'next/link';

export default function PageHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex flex-row justify-between items-center px-8 lg:px-16"
        style={{ paddingTop: "32px", paddingBottom: "32px" }}
      >
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "24px", color: "#1a1a1a" }}>
            MiniElephant
          </span>
        </Link>
        <nav className="hidden lg:flex flex-row items-center gap-8">
          {["Home","Products","About Us","FAQ","News","Contact"].map((label) => (
            <Link key={label} href={label === "Home" ? "/" : `/${label.toLowerCase().replace(/\s+/g,'-')}`}
              style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "#4a5568", textDecoration: 'none' }}
              className="hover:opacity-70 transition-opacity"
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="px-6 py-3 rounded-full hover:scale-105 transition-all hidden sm:inline-block"
          style={{
            background: "#FFFFFF", border: "1px solid #e2e8f0",
            fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 500,
            color: "#1a1a1a", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", textDecoration: 'none',
          }}
        >
          Get a Quote
        </Link>
      </motion.header>

      {/* Hero Content — split layout: text left, image right */}
      <div className="flex-1 flex items-center px-8 lg:px-16">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-teal mb-4 block">
              MiniRedone Electric Wheelchair
            </span>
            <h1 style={{
              fontFamily: "Inter, sans-serif", fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 56px)", lineHeight: "1.1",
              color: "#1a1a1a", letterSpacing: "-0.02em",
            }}>
              Factory-Direct Electric Wheelchair
            </h1>
            <p style={{
              fontFamily: "Inter, sans-serif", fontWeight: 400,
              fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: "1.7",
              color: "#4a5568", marginTop: "20px", maxWidth: "520px",
            }}>
              Lightweight magnesium alloy frames, dual 350W motors, 30km range, 150KG load.
              Factory-direct B2B export to 50+ countries. OEM/ODM customization available.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <Link href="/products" className="px-8 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition-all"
                style={{
                  background: "#1a1a1a", fontFamily: "Inter, sans-serif",
                  fontSize: "18px", fontWeight: 500, color: "#FFFFFF",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.15)", textDecoration: 'none',
                }}
              >
                See the MiniRedone Series
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 10H13M13 10L10 7M13 10L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/contact" className="px-8 py-4 rounded-full hover:scale-105 transition-all"
                style={{
                  background: "transparent", border: "1px solid #cbd5e0",
                  fontFamily: "Inter, sans-serif", fontSize: "18px", fontWeight: 500,
                  color: "#1a1a1a", textDecoration: 'none',
                }}
              >
                Request Factory Pricing
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-5 mt-8 text-xs text-gray-400 uppercase tracking-widest">
              <span>Magnesium Alloy</span>
              <span className="text-gray-300">·</span>
              <span>30km Range</span>
              <span className="text-gray-300">·</span>
              <span>150kg Load</span>
              <span className="text-gray-300">·</span>
              <span>50+ Countries</span>
            </div>
          </motion.div>

          {/* Right: Banner Image with soft glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            {/* Soft glow behind image */}
            <div className="absolute w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full opacity-[0.08]"
              style={{ background: "radial-gradient(circle, #14B8A6 0%, transparent 70%)" }}
            />
            <img
              src="/images/wheelchair-banner.png"
              alt="MiniRedone Electric Wheelchair lineup"
              className="relative w-full h-auto max-w-lg object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
