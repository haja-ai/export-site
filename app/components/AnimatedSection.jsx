'use client';

import { useState, useEffect } from 'react';

export default function AnimatedSection({ children, className = '', delay = 0 }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return (
    <div className={`animate-fade-in-up ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
