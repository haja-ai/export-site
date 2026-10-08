'use client';

import { useEffect } from 'react';

const BASE_FONT_SIZE = 16;
const MAX_COMPENSATION = 4;

/**
 * Keeps the public site composition readable when a desktop browser is zoomed
 * out. CSS has a 16px fallback; this only compensates when browser zoom makes
 * devicePixelRatio drop below 1 (75%, 50%, 25%).
 */
export default function BrowserZoomCompensator() {
  useEffect(() => {
    const applyScale = () => {
      const ratio = window.devicePixelRatio || 1;
      const scale = ratio < 1 ? Math.min(MAX_COMPENSATION, 1 / ratio) : 1;
      document.documentElement.style.fontSize = `${BASE_FONT_SIZE * scale}px`;
      document.documentElement.style.setProperty('--browser-zoom-compensation', String(scale));
    };

    applyScale();
    window.addEventListener('resize', applyScale, { passive: true });
    return () => {
      window.removeEventListener('resize', applyScale);
      document.documentElement.style.fontSize = '';
      document.documentElement.style.removeProperty('--browser-zoom-compensation');
    };
  }, []);

  return null;
}
