import Link from 'next/link';
import { solutions } from '@/lib/solutions';

const BLURB = {
  'airport-travel': 'Folded package, the built-in 16Ah LiFePO4 pack and what to confirm with the carrier before the ticket is issued.',
  'home-indoor': 'Door width, turning space and thresholds \u2014 the three measurements that choose the model for a house.',
  'senior-care-facilities': 'One configuration per site, a spares kit that keeps chairs in service, and a staff handover that sticks.',
};

export default function SolutionsLinks({ id = 'solutions', eyebrow = 'Solutions by use case', title = 'Start from the place the chair will be used.', tone = 'plain' }) {
  return (
    <section id={id} className={`border-t border-[#dbe3dd] px-6 py-16 sm:px-8 lg:px-16 lg:py-20 ${tone === 'muted' ? 'bg-[#f4f7f4]' : 'bg-white'}`}>
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#dbe3dd] pb-5">
        <div>
          <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">{eyebrow}</p>
          <h2 className="mt-2 max-w-3xl text-[clamp(1.7rem,2.6vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.05em] text-[#152019]">
            {title}
          </h2>
        </div>
        <Link href="/contact" className="text-sm font-bold text-[#278a36] hover:underline">
          Ask about your site →
        </Link>
      </div>
      <div className="grid border-l border-[#dbe3dd] sm:grid-cols-3">
        {solutions.map((item) => (
          <Link
            key={item.slug}
            href={`/solutions/${item.slug}`}
            className="group border-b border-r border-[#dbe3dd] px-5 py-6 transition-colors hover:bg-[#f8fbf8]"
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#278a36]">{item.eyebrow}</p>
            <p className="mt-3 text-sm leading-6 text-[#526158]">{BLURB[item.slug]}</p>
            <span className="mt-4 inline-flex text-sm font-bold text-[#152019] group-hover:text-[#278a36]">
              Open the guide <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
