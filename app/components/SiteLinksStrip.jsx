import Link from 'next/link';

const LINKS = [
  {
    href: '/certifications',
    label: 'Certifications',
    text: 'SFDA authorization, CE declaration, ISO 13485 and FDA listing records, plus the documents we can supply for due diligence.',
  },
  {
    href: '/oem-odm',
    label: 'OEM / ODM',
    text: 'Private label programmes: what can be changed, what stays fixed for safety, and how validation and documentation work.',
  },
  {
    href: '/wholesale',
    label: 'Wholesale',
    text: 'Order structures, mixed-model containers, payment options, Incoterms and the documents that ship with every order.',
  },
];

export default function SiteLinksStrip({ id = 'commercial', eyebrow = 'Buying from MiniElephant', title = 'Compliance, private label and wholesale supply.', note }) {
  return (
    <section id={id} className="border-t border-[#dbe3dd] bg-white px-6 py-16 sm:px-8 lg:px-16 lg:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#dbe3dd] pb-5">
        <div>
          <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">{eyebrow}</p>
          <h2 className="mt-2 max-w-3xl text-[clamp(1.7rem,2.6vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.05em] text-[#152019]">
            {title}
          </h2>
        </div>
        <Link href="/contact" className="text-sm font-bold text-[#278a36] hover:underline">
          Talk to the export team →
        </Link>
      </div>
      {note ? (
        <p className="mt-5 max-w-3xl text-sm font-semibold leading-6 text-[#152019]">{note}</p>
      ) : null}
      <div className="grid border-l border-[#dbe3dd] sm:grid-cols-3">
        {LINKS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group border-b border-r border-[#dbe3dd] px-5 py-6 transition-colors hover:bg-[#f8fbf8]"
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#278a36]">{item.label}</p>
            <p className="mt-3 text-sm leading-6 text-[#526158]">{item.text}</p>
            <span className="mt-4 inline-flex text-sm font-bold text-[#152019] group-hover:text-[#278a36]">
              Open page <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
