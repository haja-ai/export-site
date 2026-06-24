'use client';

import Link from 'next/link';
import { motion } from "framer-motion";
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
  className,
  children,
}) {
  return (
    <section
      className={cn(
        "relative w-full min-h-screen flex flex-col overflow-hidden",
        className
      )}
      style={{
        background: "linear-gradient(180deg, #E8F0FF 0%, #F5F9FF 50%, #FFFFFF 100%)",
      }}
      role="banner"
      aria-label="Hero section"
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex flex-row justify-between items-center px-8 lg:px-16"
        style={{ paddingTop: "32px", paddingBottom: "32px" }}
      >
        {/* Logo — link to home */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "24px", color: "#1a1a1a" }}>
            {logo}
          </div>
        </Link>

        {/* Navigation — use Next.js Link instead of button+onClick for SEO crawlability */}
        <nav className="hidden lg:flex flex-row items-center gap-8" aria-label="Main navigation">
          {navigation.map((item, index) => (
            item.href ? (
              <Link
                key={index}
                href={item.href}
                className="flex flex-row items-center gap-1 hover:opacity-70 transition-opacity"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, color: "#4a5568", textDecoration: 'none' }}
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
                className="flex flex-row items-center gap-1 hover:opacity-70 transition-opacity"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, color: "#4a5568" }}
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

        {/* CTA Button */}
        {ctaButton && (
          ctaButton.href ? (
            <Link
              href={ctaButton.href}
              className="px-6 py-3 rounded-full transition-all hover:scale-105 hidden sm:inline-block"
              style={{
                background: "#FFFFFF", border: "1px solid #e2e8f0",
                fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 500,
                color: "#1a1a1a", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                textDecoration: 'none',
              }}
            >
              {ctaButton.label}
            </Link>
          ) : (
            <button
              onClick={ctaButton.onClick}
              className="px-6 py-3 rounded-full transition-all hover:scale-105"
              style={{
                background: "#FFFFFF", border: "1px solid #e2e8f0",
                fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 500,
                color: "#1a1a1a", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
              }}
            >
              {ctaButton.label}
            </button>
          )
        )}
      </motion.header>

      {/* Banner floating behind text */}
      {bannerImage && (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ top: "120px" }}>
          <div className="w-full h-full relative">
            <img
              src={bannerImage}
              alt=""
              className="w-full h-full object-cover object-top opacity-30"
            />
            <div className="absolute inset-0" style={{
              background: "linear-gradient(180deg, rgba(232,240,255,0.8) 0%, rgba(232,240,255,0) 40%, rgba(255,255,255,0) 60%, #FFFFFF 100%)",
            }} />
          </div>
        </div>
      )}

      {/* Main Content */}
      {children ? (
        <div className="relative z-10 flex-1 flex items-center justify-center w-full">{children}</div>
      ) : (
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center max-w-4xl"
            style={{ gap: "32px" }}
          >
            <h1 style={{
              fontFamily: "Inter, sans-serif", fontWeight: 700,
              fontSize: "clamp(36px, 6vw, 72px)", lineHeight: "1.1",
              color: "#1a1a1a", letterSpacing: "-0.02em",
            }}>
              {title}
            </h1>

            <p style={{
              fontFamily: "Inter, sans-serif", fontWeight: 400,
              fontSize: "clamp(16px, 2vw, 20px)", lineHeight: "1.6",
              color: "#4a5568", maxWidth: "600px",
            }}>
              {subtitle}
            </p>

            {(primaryAction || secondaryAction) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                {primaryAction && (
                  primaryAction.href ? (
                    <Link
                      href={primaryAction.href}
                      className="flex flex-row items-center gap-2 px-8 py-4 rounded-full transition-all hover:scale-105"
                      style={{
                        background: "#1a1a1a", fontFamily: "Inter, sans-serif",
                        fontSize: "18px", fontWeight: 500, color: "#FFFFFF",
                        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
                        textDecoration: 'none',
                      }}
                    >
                      {primaryAction.label}
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 10H13M13 10L10 7M13 10L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  ) : (
                    <button
                      onClick={primaryAction.onClick}
                      className="flex flex-row items-center gap-2 px-8 py-4 rounded-full transition-all hover:scale-105"
                      style={{
                        background: "#1a1a1a", fontFamily: "Inter, sans-serif",
                        fontSize: "18px", fontWeight: 500, color: "#FFFFFF",
                        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      {primaryAction.label}
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 10H13M13 10L10 7M13 10L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  )
                )}
                {secondaryAction && (
                  secondaryAction.href ? (
                    <Link
                      href={secondaryAction.href}
                      className="px-8 py-4 rounded-full transition-all hover:scale-105"
                      style={{
                        background: "transparent", border: "1px solid #cbd5e0",
                        fontFamily: "Inter, sans-serif", fontSize: "18px", fontWeight: 500, color: "#1a1a1a",
                        textDecoration: 'none',
                      }}
                    >
                      {secondaryAction.label}
                    </Link>
                  ) : (
                    <button
                      onClick={secondaryAction.onClick}
                      className="px-8 py-4 rounded-full transition-all hover:scale-105"
                      style={{
                        background: "transparent", border: "1px solid #cbd5e0",
                        fontFamily: "Inter, sans-serif", fontSize: "18px", fontWeight: 500, color: "#1a1a1a",
                      }}
                    >
                      {secondaryAction.label}
                    </button>
                  )
                )}
              </motion.div>
            )}

            {disclaimer && (
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#718096", fontStyle: "italic" }}
              >
                {disclaimer}
              </motion.p>
            )}

            {socialProof && (
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-row items-center gap-3"
              >
                <div className="flex flex-row -space-x-2">
                  {socialProof.avatars.map((avatar, index) => (
                    <img key={index} src={avatar} alt={`User ${index + 1}`}
                      className="rounded-full border-2 border-white"
                      style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                  ))}
                </div>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 500, color: "#4a5568" }}>
                  {socialProof.text}
                </span>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}

      {/* Program Cards Carousel */}
      {programs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-10 w-full overflow-hidden"
          style={{ paddingTop: "60px", paddingBottom: "60px" }}
        >
          <div className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{ width: "150px", background: "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)" }} />
          <div className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{ width: "150px", background: "linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)" }} />

          <motion.div
            className="flex items-center"
            animate={{ x: [0, -((programs.length * 380) / 2)] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: programs.length * 3, ease: "linear" } }}
            style={{ gap: "24px", paddingLeft: "24px" }}
          >
            {[...programs, ...programs].map((program, index) => (
              program.href ? (
                <Link
                  key={index}
                  href={program.href}
                  className="flex-shrink-0 relative overflow-hidden"
                  style={{ width: "356px", height: "480px", borderRadius: "24px", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)", textDecoration: 'none', display: 'block' }}
                >
                  <img src={program.image} alt={program.title} loading={index < 2 ? "eager" : "lazy"} fetchPriority={index < 2 ? "high" : "auto"} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      {program.category}
                    </span>
                    <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "24px", fontWeight: 600, color: "#FFFFFF" }}>
                      {program.title}
                    </h3>
                  </div>
                </Link>
              ) : (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  onClick={program.onClick}
                  className="flex-shrink-0 cursor-pointer relative overflow-hidden"
                  style={{ width: "356px", height: "480px", borderRadius: "24px", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)" }}
                >
                  <img src={program.image} alt={program.title} loading={index < 2 ? "eager" : "lazy"} fetchPriority={index < 2 ? "high" : "auto"} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      {program.category}
                    </span>
                    <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "24px", fontWeight: 600, color: "#FFFFFF" }}>
                      {program.title}
                    </h3>
                  </div>
                </motion.div>
              )
            ))}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
