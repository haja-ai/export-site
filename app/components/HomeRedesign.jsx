import Link from 'next/link';
import FloatingInquiry from './FloatingInquiry';

const models = [
  { index: '02', name: 'MiniRedone-II', href: '/products/miniredone-ii' },
  { index: '03', name: 'MiniRedone-III', href: '/products/miniredone-iii' },
  { index: 'ALL', name: 'View the full series', href: '/products' },
];

const mapUrl = 'https://www.google.com/maps?q=30.872216,120.947645&z=18&output=embed';
const mapLink = 'https://www.google.com/maps/search/?api=1&query=30.872216%2C120.947645';

export default function HomeRedesign() {
  return (
    <div className="bg-white text-[#152019]">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/25 text-white">
        <div className="flex h-[4.875rem] items-center justify-between gap-6 px-6 sm:px-8 lg:px-16">
          <Link href="/" aria-label="MiniElephant home" className="flex shrink-0 items-center">
            <img src="/logo-white.png" alt="MiniElephant" className="h-14 w-auto object-contain object-left" />
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex" aria-label="Main navigation">
            <Link href="/" aria-current="page" className="border-b border-white pb-1 transition-opacity hover:opacity-70">Home</Link>
            <Link href="/products" className="transition-opacity hover:opacity-70">Products</Link>
            <Link href="#company" className="transition-opacity hover:opacity-70">Company</Link>
            <Link href="#location" className="transition-opacity hover:opacity-70">Location</Link>
            <Link href="/news" className="transition-opacity hover:opacity-70">News</Link>
            <Link href="/contact" className="transition-opacity hover:opacity-70">Contact</Link>
          </nav>
          <Link href="/contact" className="border border-white/75 px-4 py-2 text-xs font-bold transition-colors hover:bg-white hover:text-[#152019] sm:px-5 sm:text-sm">Get a Quote</Link>
        </div>
      </header>

      <section className="relative flex min-h-[46rem] items-end overflow-hidden bg-[#1d2b23] text-white">
        <img src="/images/factory-aerial-poster.webp" alt="MiniElephant manufacturing location in Jiaxing" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        <video autoPlay muted loop playsInline preload="metadata" poster="/images/factory-aerial-poster.webp" className="absolute inset-0 h-full w-full object-cover">
          <source src="/videos/factory-aerial.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,23,16,0.80),rgba(10,23,16,0.49)_48%,rgba(10,23,16,0.13)),linear-gradient(0deg,rgba(9,18,13,0.52),transparent_48%)]" />
        <div className="relative z-10 w-full px-6 pb-16 pt-36 sm:px-8 lg:px-16 lg:pb-20">
          <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.9fr)] lg:gap-[8vw]">
            <div>
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#a5e7ad]">MiniElephant electric wheelchair manufacturer</p>
              <h1 className="mt-4 max-w-5xl text-[clamp(3.35rem,6vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.075em]">Comfort, engineered<br />for every journey.</h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg">MiniRedone folding electric wheelchairs for distributors, importers and OEM projects that value a premium, considered product experience.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#models" className="bg-[#3ab54a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#278a36]">Explore the series</Link>
                <Link href="/contact" className="border border-white/75 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#152019]">Get a Quote</Link>
              </div>
            </div>
            <aside className="border-l border-white/45 pb-1 pl-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-white">Jiaxing, Zhejiang</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-white/82">Jiaxing Small Elephant Medical Technology Co., Ltd. Developing the MiniRedone electric wheelchair series in China.</p>
              <Link href="#location" className="mt-4 inline-block border-b border-[#3ab54a] pb-1 text-sm font-bold">View company location</Link>
            </aside>
          </div>
        </div>
      </section>

      <section id="company" className="grid gap-8 border-b border-[#dbe3dd] px-6 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[9vw] lg:px-16 lg:py-28">
        <div>
          <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.13em] text-[#278a36]">The company behind the product</p>
          <h2 className="mt-3 max-w-xl text-[clamp(2.35rem,4vw,4.5rem)] font-extrabold leading-[1.01] tracking-[-0.06em]">Built around the way people really move.</h2>
        </div>
        <div className="pt-2 text-[1.04rem] leading-8 text-[#657069] lg:pt-7">MiniElephant is the electric wheelchair brand of Jiaxing Small Elephant Medical Technology Co., Ltd. We focus on premium folding mobility products with a calm, comfortable experience and a precise engineering foundation. Every B2B project starts with the actual configuration, the target market and the buyer requirements.
          <div className="mt-10 grid grid-cols-3 border-t border-[#dbe3dd]">
            {[['MiniRedone', 'Premium folding electric wheelchair series'], ['Jiaxing', 'Based in Zhejiang Province, China'], ['B2B', 'For distributors, importers and OEM projects']].map(([value, label]) => <div key={value} className="mr-4 border-r border-[#dbe3dd] pt-4 last:mr-0 last:border-r-0"><b className="block text-xl tracking-[-0.04em] text-[#152019]">{value}</b><span className="mt-1 block text-[0.7rem] leading-5">{label}</span></div>)}
          </div>
        </div>
      </section>

      <section id="models" className="px-6 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mb-9 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div><p className="text-[0.68rem] font-extrabold uppercase tracking-[0.13em] text-[#278a36]">MiniRedone product platform</p><h2 className="mt-3 text-[clamp(2.35rem,4vw,4.5rem)] font-extrabold leading-[1.01] tracking-[-0.06em]">One platform. A considered range.</h2></div>
          <p className="max-w-sm text-sm leading-6 text-[#657069]">Clear product information, real product imagery and configurations that can be discussed for each B2B project.</p>
        </div>
        <div className="grid border-y border-[#dbe3dd] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="min-h-[25rem] bg-[#f4f7f4] lg:min-h-[32.5rem]"><img src="/images/miniredone-i.webp" alt="MiniRedone-I folding electric wheelchair" className="h-full w-full object-cover" /></div>
          <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-[clamp(2rem,4.5vw,4.4rem)]"><div><p className="text-[0.68rem] font-extrabold uppercase tracking-[0.13em] text-[#278a36]">Featured model</p><h3 className="mt-4 text-5xl font-extrabold leading-none tracking-[-0.06em]">MiniRedone-I</h3><p className="mt-5 max-w-sm text-sm leading-7 text-[#657069]">A factory-direct folding electric wheelchair based on a one-piece magnesium alloy frame platform. The listed configuration is a starting point for a product conversation.</p><div className="mt-7 grid grid-cols-2 border-t border-[#dbe3dd]">{[['Frame', 'Magnesium alloy'], ['Motors', 'Dual 350W'], ['Battery', '16Ah LiFePO₄'], ['Maximum load', '150 KG']].map(([label, value]) => <div key={label} className="border-b border-[#dbe3dd] py-3"><span className="block text-[0.63rem] uppercase tracking-[0.1em] text-[#657069]">{label}</span><b className="text-sm">{value}</b></div>)}</div></div><Link href="/products/miniredone-i" className="mt-8 inline-block self-start border border-[#152019] px-5 py-3 text-sm font-bold transition-colors hover:bg-[#152019] hover:text-white">Discuss this model</Link></div>
        </div>
        <div className="grid border-b border-[#dbe3dd] sm:grid-cols-3">{models.map((model) => <Link key={model.name} href={model.href} className="min-h-24 border-b border-[#dbe3dd] p-5 transition-colors hover:bg-[#f4f7f4] sm:border-b-0 sm:border-r sm:last:border-r-0"><span className="block text-[0.68rem] font-extrabold tracking-[0.1em] text-[#278a36]">{model.index}</span><b className="mt-2 block text-base">{model.name}</b></Link>)}</div>
      </section>

      <section className="bg-[#f4f7f4] px-6 py-20 sm:px-8 lg:px-16 lg:py-28"><div className="grid gap-8 lg:grid-cols-2 lg:gap-[8vw]"><div><p className="text-[0.68rem] font-extrabold uppercase tracking-[0.13em] text-[#278a36]">Our product approach</p><h2 className="mt-3 max-w-xl text-[clamp(2.35rem,4vw,4.5rem)] font-extrabold leading-[1.01] tracking-[-0.06em]">Premium comfort is not an added feature.</h2></div><p className="pt-2 text-base leading-8 text-[#657069] lg:pt-7">It is part of the structure, seating, drive behavior and daily interaction. The visual language follows the same principle: clean, considered and confident enough to let the product speak.</p></div><div className="mt-12 grid border-t border-[#dbe3dd] sm:grid-cols-3">{[['Comfort', 'Seating and ride experience stay central to product conversations.'], ['Engineering', 'Materials, motors and configurations are presented with clear information.'], ['Partnership', 'Wholesale, private-label and market requirements are reviewed project by project.']].map(([title, copy]) => <article key={title} className="border-b border-[#dbe3dd] py-5 sm:mr-6 sm:border-b-0 sm:border-r sm:pr-6 sm:last:mr-0 sm:last:border-r-0"><b className="text-base">{title}</b><p className="mt-2 text-sm leading-6 text-[#657069]">{copy}</p></article>)}</div></section>

      <section id="location" className="grid gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-[7vw] lg:px-16 lg:py-28">
        <div><p className="text-[0.68rem] font-extrabold uppercase tracking-[0.13em] text-[#278a36]">Visit our location</p><h2 className="mt-3 text-[clamp(2.35rem,4vw,4.3rem)] font-extrabold leading-[1.02] tracking-[-0.06em]">Located in Jiaxing, Zhejiang.</h2><p className="mt-6 text-base leading-8 text-[#657069]">Our company is based in Jiashan County, Jiaxing City, Zhejiang Province, China. The map uses the verified company coordinates.</p><div className="mt-8 border-t border-[#dbe3dd] text-sm"><div className="border-b border-[#dbe3dd] py-3"><span className="block text-[0.65rem] font-extrabold uppercase tracking-[0.1em] text-[#278a36]">Company</span>Jiaxing Small Elephant Medical Technology Co., Ltd.</div><div className="border-b border-[#dbe3dd] py-3"><span className="block text-[0.65rem] font-extrabold uppercase tracking-[0.1em] text-[#278a36]">Address</span>No. 18 Zhenzhong East Road (振中东路), Weitang Subdistrict, Jiashan County, Jiaxing City, Zhejiang Province, China</div></div><a href={mapLink} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex border border-[#152019] px-5 py-3 text-sm font-bold transition-colors hover:bg-[#152019] hover:text-white">Open in Google Maps ↗</a></div>
        <div className="min-h-[25rem] overflow-hidden border border-[#dbe3dd] bg-[#f4f7f4] lg:min-h-[27.5rem]"><iframe title="MiniElephant company location in Jiashan" src={mapUrl} className="h-full min-h-[25rem] w-full border-0 grayscale-[.15] saturate-[.85] lg:min-h-[27.5rem]" loading="lazy" allowFullScreen /></div>
      </section>

      <section id="contact" className="grid gap-10 border-t border-[#dbe3dd] px-6 py-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-[9vw] lg:px-16 lg:py-28"><div><p className="text-[0.68rem] font-extrabold uppercase tracking-[0.13em] text-[#278a36]">Start a B2B inquiry</p><h2 className="mt-3 text-[clamp(2.35rem,4vw,4.5rem)] font-extrabold leading-[1.01] tracking-[-0.06em]">Tell us the model and the market.</h2><p className="mt-6 max-w-xl text-base leading-8 text-[#657069]">Share your preferred configuration, expected quantity and destination. Our team will review the request and respond with the relevant next step for your project.</p><Link href="/contact" className="mt-8 inline-flex bg-[#3ab54a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#278a36]">Get a Quote</Link></div><aside className="self-center border border-[#dbe3dd] p-8"><h3 className="text-xl font-bold tracking-[-0.035em]">Speak with MiniElephant</h3><p className="mt-3 text-sm leading-6 text-[#657069]">For product information, distributor discussions and OEM or ODM project requirements.</p><dl className="mt-6 border-t border-[#dbe3dd] text-sm"><div className="flex justify-between gap-4 border-b border-[#dbe3dd] py-3"><dt className="text-[#657069]">Email</dt><dd className="text-right font-bold">johnson@semwheelchair.com</dd></div><div className="flex justify-between gap-4 border-b border-[#dbe3dd] py-3"><dt className="text-[#657069]">WhatsApp</dt><dd className="font-bold">+86 13819098967</dd></div><div className="flex justify-between gap-4 border-b border-[#dbe3dd] py-3"><dt className="text-[#657069]">Company</dt><dd className="text-right font-bold">Jiaxing Small Elephant</dd></div></dl></aside></section>
      <FloatingInquiry />
    </div>
  );
}
