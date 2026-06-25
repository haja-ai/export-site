'use client';

import { useEffect, useState, useRef } from 'react';

export default function AnimatedStats() {
  const [counts, setCounts] = useState({ c: 0, u: 0, y: 0 });
  const ref = useRef(null);
  const started = useRef(false);

  const stats = [
    { key: 'c', label: 'Countries Exported', target: 50, suffix: '+' },
    { key: 'u', label: 'Happy Users', target: 100, suffix: 'K+' },
    { key: 'y', label: 'Years Experience', target: 10, suffix: '+' },
    { key: 'iso', label: 'ISO Certified', display: 'Yes' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 30;
          const interval = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setCounts({
              c: Math.min(Math.round(50 * progress), 50),
              u: Math.min(Math.round(100 * progress), 100),
              y: Math.min(Math.round(10 * progress), 10),
            });
            if (step >= steps) clearInterval(timer);
          }, interval);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-12 lg:py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="animate-fade-in-up">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat.display || (counts[stat.key] || 0) + stat.suffix}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
