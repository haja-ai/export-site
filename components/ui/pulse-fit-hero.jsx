'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function PulseFitHero({
  logo = "PulseFit",
  navigation = [
    { label: "Features" },
    { label: "Programs", hasDropdown: true },
    { label: "Testimonials" },
    { label: "Pricing" },
    { label: "Contact" },
  ],
  ctaButton,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  disclaimer,
  socialProof,
  programs = [],
  bannerImage,
  bannerVideo,
  bannerPoster,
  className,
  children,
}) {
  const titleRef = useRef(null);
  const productsRef = useRef(null);

  const { scrollYProgress: titleProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });
  const titleOpacity = useTransform(titleProgress, [0, 0.25, 0.6, 1], [0, 1, 1, 0]);
  const titleY = useTransform(titleProgress, [0, 0.25, 0.6, 1], [60, 0, 0, -40]);

  const { scrollYProgress: productsProgress } = useScroll({
    target: productsRef,
    offset: ["start end", "end start"],
  });
  const productsOpacity = useTransform(productsProgress, [0, 0.2, 0.65, 1], [0, 1, 1, 0]);
  const productsY = useTransform(productsProgress, [0, 0.2, 0.65, 1], [70, 0, 0, -40]);

  return (
    <>
            {/* Header / nav */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="sticky top-0 left-0 right-0 z-50 flex flex-row justify-between items-center px-8 lg:px-16"
          style={{ paddingTop: "16px", paddingBottom: "16px", background: "#FFFFFF", borderBottom: "1px solid #e5e7eb" }}
        >
          <Link href="/" style={{ textDecoration: 'none' }} className="flex items-center">
            <img src="/logo-black.png" alt="MiniElephant Electric Wheelchair" style={{ height: "56px", width: "auto" }} />
          </Link>

          <nav className="hidden lg:flex flex-row items-center gap-10" aria-label="Main navigation">
            {navigation.map((item, index) => (
              item.href ? (
                <Link
                  key={index}
                  href={item.href}
                  className="flex flex-row items-center gap-1 hover:opacity-70 hover:scale-110 transition-all duration-200"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "20px", fontWeight: 600, color: "#1a1a1a", textDecoration: 'none' }}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={item.onClick}
                  className="flex flex-row items-center gap-1 hover:opacity-70 hover:scale-110 transition-all duration-200"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "18px", fontWeight: 400, color: "#1a1a1a" }}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              )
            ))}
          </nav>

          {ctaButton && (
            ctaButton.href ? (
              <Link
                href={ctaButton.href}
                className="px-6 py-3 rounded-full transition-all hover:scale-105 hidden sm:inline-block"
                style={{
                  background: "#FFFFFF", border: "1px solid #e2e8f0",
                  fontFamily: "Inter, sans-serif", fontSize: "17px", fontWeight: 500,
                  color: "#1a1a1a", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                  textDecoration: 'none',
                }}
              >
                {ctaButton.label}
              </Link>
            ) : (
              <button
                onClick={ctaButton.onClick}
                className="px-6 py-3 rounded-full transition-all hover:scale-105 hidden sm:inline-block"
                style={{
                  background: "#FFFFFF", border: "1px solid #e2e8f0",
                  fontFamily: "Inter, sans-serif", fontSize: "17px", fontWeight: 500,
                  color: "#1a1a1a", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                }}
              >
                {ctaButton.label}
              </button>
            )
          )}
        </motion.header>
    <div className="relative">
      {/* ===== Sticky full-screen video/image hero — stays pinned while content scrolls over ===== */}
      <div
        className="sticky top-[88px] h-[calc(100vh-88px)] w-full overflow-hidden"
        style={{ zIndex: 0 }}
        role="banner"
        aria-label="Hero section"
      >
        {/* Background video */}
        {bannerVideo ? (
          <video
            src={bannerVideo}
            poster={bannerPoster}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          bannerImage && (
            <img
              src={bannerImage}
              alt={title || "MiniElephant Electric Wheelchair Banner"}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )
        )}

        {/* Light overlay: transparent top (landmarks visible), white toward bottom for readability */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: bannerVideo
            ? `linear-gradient(180deg,
                rgba(255,255,255,0.04) 0%,
                rgba(255,255,255,0.10) 30%,
                rgba(255,255,255,0.42) 55%,
                rgba(255,255,255,0.78) 80%,
                rgba(255,255,255,0.97) 100%)`
            : `linear-gradient(180deg,
                rgba(255,255,255,0.62) 0%,
                rgba(255,255,255,0.48) 38%,
                rgba(255,255,255,0.80) 72%,
                #FFFFFF 100%)`,
        }} />

        {/* Top scrim for the nav */}
        <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none" style={{
          height: "200px",
          background: "linear-gradient(180deg, rgba(17,24,39,0.85) 0%, rgba(17,24,39,0.5) 30%, rgba(17,24,39,0.12) 65%, rgba(17,24,39,0) 100%)",
        }} />



        {/* Scroll-down cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none">
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.9)", letterSpacing: "0.08em" }}>
            SCROLL
          </span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* ===== Content that scrolls UP over the pinned video ===== */}
      <div className="relative" style={{ zIndex: 10 }}>
        {children ? (
          <div className="w-full">{children}</div>
        ) : (
          <>
            {/* Title / subtitle / buttons — fade in over the video */}
            <motion.div
              ref={titleRef}
              style={{
                opacity: titleOpacity,
                y: titleY,
                paddingTop: "22vh", paddingBottom: "10vh", gap: "28px",
              }}
              className="flex flex-col items-center text-center px-6 sm:px-8 lg:px-16"
            >
              <motion.h1 className="text-[1.9rem] sm:text-[2.4rem] lg:text-[3.2rem]" style={{
                fontFamily: "Inter, sans-serif", fontWeight: 800,
                lineHeight: "1.12", color: "#FFFFFF", letterSpacing: "-0.02em", maxWidth: "920px",
                fontSize: "clamp(1.75rem, 4.2vw, 3.4rem)",
                textShadow: "0 2px 16px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.65)",
              }}>
                {title}
              </motion.h1>

              <motion.p className="text-[1.0625rem] lg:text-[1.125rem]" style={{
                fontFamily: "Inter, sans-serif", fontWeight: 500,
                lineHeight: "1.7", color: "rgba(255,255,255,0.92)", maxWidth: "720px",
                fontSize: "clamp(0.95rem, 1.6vw, 1.2rem)",
                textShadow: "0 1px 10px rgba(0,0,0,0.55)",
              }}>
                {subtitle}
              </motion.p>

              {(primaryAction || secondaryAction) && (
                <motion.div className="flex flex-col sm:flex-row items-center gap-4">
                  {primaryAction && (
                    primaryAction.href ? (
                      <Link href={primaryAction.href} className="flex flex-row items-center gap-2 px-8 py-4 rounded-full transition-all hover:scale-105"
                        style={{ background: "#1a1a1a", fontFamily: "Inter, sans-serif", fontSize: "18px", fontWeight: 500, color: "#FFFFFF", boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)", textDecoration: 'none' }}>
                        {primaryAction.label}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 10H13M13 10L10 7M13 10L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </Link>
                    ) : (
                      <button onClick={primaryAction.onClick} className="flex flex-row items-center gap-2 px-8 py-4 rounded-full transition-all hover:scale-105"
                        style={{ background: "#1a1a1a", fontFamily: "Inter, sans-serif", fontSize: "18px", fontWeight: 500, color: "#FFFFFF", boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)" }}>
                        {primaryAction.label}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 10H13M13 10L10 7M13 10L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </button>
                    )
                  )}
                  {secondaryAction && (
                    secondaryAction.href ? (
                      <Link href={secondaryAction.href} className="px-8 py-4 rounded-full transition-all hover:scale-105"
                        style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.7)", fontFamily: "Inter, sans-serif", fontSize: "18px", fontWeight: 600, color: "#FFFFFF", textDecoration: 'none', backdropFilter: "blur(4px)" }}>
                        {secondaryAction.label}
                      </Link>
                    ) : (
                      <button onClick={secondaryAction.onClick} className="px-8 py-4 rounded-full transition-all hover:scale-105"
                        style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.7)", fontFamily: "Inter, sans-serif", fontSize: "18px", fontWeight: 600, color: "#FFFFFF", backdropFilter: "blur(4px)" }}>
                        {secondaryAction.label}
                      </button>
                    )
                  )}
                </motion.div>
              )}

              {disclaimer && (
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#718096", fontStyle: "italic" }}>
                  {disclaimer}
                </motion.p>
              )}
            </motion.div>

            {/* Product cards — fade in one by one over the video */}
            {programs.length > 0 && (
              <motion.div
                ref={productsRef}
                style={{ opacity: productsOpacity, y: productsY }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-6 sm:px-8 lg:px-16"
              >
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden"
                    style={{ borderRadius: "20px", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)", aspectRatio: '3/4' }}
                  >
                    {program.href ? (
                      <Link href={program.href} style={{ textDecoration: 'none', display: 'block' }} className="w-full h-full relative overflow-hidden group">
                        <img src={program.image} alt={program.title} loading={index < 2 ? "eager" : "lazy"} fetchPriority={index < 2 ? "high" : "auto"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)" }} />
                        <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1.5">
                          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{program.category}</span>
                          <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "20px", fontWeight: 600, color: "#FFFFFF" }}>{program.title}</h3>
                        </div>
                      </Link>
                    ) : (
                      <div onClick={program.onClick} className="w-full h-full cursor-pointer relative overflow-hidden group">
                        <img src={program.image} alt={program.title} loading={index < 2 ? "eager" : "lazy"} fetchPriority={index < 2 ? "high" : "auto"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)" }} />
                        <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1.5">
                          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{program.category}</span>
                          <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "20px", fontWeight: 600, color: "#FFFFFF" }}>{program.title}</h3>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
    </>
  );
}
