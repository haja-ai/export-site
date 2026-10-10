import Link from 'next/link';
import ContactForm from './ContactForm';

const eyebrow = 'text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]';
const heading = 'mt-3 mb-7 text-[clamp(1.8rem,2.8vw,2.6rem)] font-extrabold leading-tight tracking-[-0.045em] text-[#152019]';

export function GroupedFaq({ faqs }) {
  const groups = [
    { id: 'model-configuration', title: 'Model & configuration', questions: faqs.slice(0,8) },
    { id: 'samples-ordering', title: 'Samples & ordering', questions: faqs.slice(8,13) },
    { id: 'oem-odm', title: 'OEM / ODM', questions: faqs.slice(13,16) },
    { id: 'after-sales', title: 'After-sales & parts', questions: faqs.slice(16) },
  ];
  return <>
    <main className="grid gap-10 bg-white px-6 py-14 sm:px-8 lg:grid-cols-[17.5rem_1fr] lg:gap-[7vw] lg:px-16 lg:py-20">
      <aside><nav aria-label="FAQ topics" className="lg:sticky lg:top-28">
        <p className={eyebrow}>Browse by topic</p>
        {groups.map(g => <a key={g.id} href={`#${g.id}`} className="flex justify-between border-b border-[#dbe3dd] py-5 text-sm font-bold text-[#334139] hover:text-[#278a36]">{g.title}<span aria-hidden="true">↗</span></a>)}
        <p className="mt-7 text-sm leading-7 text-[#657069]">Need an answer for a particular model or destination? Send your requirements to the export team.</p>
      </nav></aside>
      <div>{groups.map(g => <section key={g.id} id={g.id} className="mb-16 scroll-mt-28 last:mb-0">
        <p className={eyebrow}>MiniElephant buyer guidance</p><h2 className={heading}>{g.title}</h2>
        <div className="border-b border-[#dbe3dd]">{g.questions.map((faq,i) => <details key={faq.q} open={i===0} className="group border-t border-[#dbe3dd]">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-base font-bold text-[#152019] hover:text-[#278a36]">{faq.q}<span aria-hidden="true" className="text-[#278a36] group-open:rotate-45">+</span></summary>
          <p className="mb-7 max-w-3xl text-base leading-8 text-[#657069]">{faq.a}</p>
        </details>)}</div>
      </section>)}</div>
    </main>
    <section className="flex flex-col justify-between gap-6 border-t border-[#dbe3dd] bg-[#f4f7f4] px-6 py-14 sm:px-8 lg:flex-row lg:items-center lg:px-16"><div><p className={eyebrow}>A specific requirement?</p><h2 className={heading}>Talk to the export team.</h2></div><Link href="/contact" className="self-start bg-[#3ab54a] px-6 py-4 text-sm font-bold text-white hover:bg-[#278a36]">Contact the Export Team</Link></section>
  </>;
}

export function ExportContact() {
  return <>
    <main className="grid gap-10 bg-white px-6 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-[7vw] lg:px-16 lg:py-20">
      <aside><p className={eyebrow}>Your contact</p><h2 className={heading}>Johnson<br/>Export inquiries.</h2>
        <div className="mb-6 border-b border-[#dbe3dd] pb-6"><p className={eyebrow}>Email</p><a href="mailto:johnson@semwheelchair.com" className="mt-3 block break-all text-xl font-bold hover:text-[#278a36]">johnson@semwheelchair.com</a></div>
        <div className="mb-6 border-b border-[#dbe3dd] pb-6"><p className={eyebrow}>WhatsApp / telephone</p><a href="https://wa.me/8613819098967" target="_blank" rel="noopener noreferrer" className="mt-3 block text-xl font-bold hover:text-[#278a36]">+86 13819098967 ↗</a><a href="tel:+8613819098967" className="mt-3 inline-block text-sm text-[#657069] hover:underline">Call the export team</a></div>
        <div className="mb-6 border-b border-[#dbe3dd] pb-6"><p className={eyebrow}>Before you send</p><p className="mt-3 text-sm leading-7 text-[#657069]">Include your model, destination, estimated quantity and any branding or documentation needs. Exact commercial terms are confirmed in the quotation.</p></div>
        <p className="text-sm leading-7 text-[#657069]">Jiaxing Small Elephant Medical Technology Co., Ltd.</p>
      </aside>
      <section className="min-w-0 border border-[#dbe3dd] bg-[#fbfcfb] p-6 sm:p-8"><p className={eyebrow}>Inquiry details</p><h2 className={heading}>Request a wholesale quote.</h2><ContactForm /></section>
    </main>
    <section className="grid gap-8 border-t border-[#dbe3dd] bg-[#f4f7f4] px-6 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-[7vw] lg:px-16">
      <div><p className={eyebrow}>Company location</p><h2 className={heading}>Jiashan, Jiaxing.<br/>Zhejiang, China.</h2><p className="text-sm leading-7 text-[#657069]">No. 18 Zhenzhong East Road (振中东路), Weitang Subdistrict, Jiashan County, Jiaxing City, Zhejiang Province, China</p><a href="https://www.google.com/maps/search/?api=1&query=30.872216%2C120.947645" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm font-bold text-[#278a36] hover:underline">Open exact company location ↗</a></div>
      <iframe title="MiniElephant company location in Jiashan" src="https://www.google.com/maps?q=30.872216,120.947645&z=18&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full border border-[#dbe3dd]" />
    </section>
  </>;
}
