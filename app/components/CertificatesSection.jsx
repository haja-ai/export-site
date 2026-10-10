import Link from 'next/link';

const credentials = [
  { label: 'European Union', title: 'CE Declaration of Conformity', image: '/images/cert-ce.webp', alt: 'CE Declaration of Conformity document', note: 'Document preview' },
  { label: 'Quality management', title: 'ISO 13485 Certificate', image: '/images/cert-iso13485-1.webp', alt: 'ISO 13485 quality management certificate document', note: 'Document preview' },
  { label: 'Quality management', title: 'ISO 13485 Certificate', image: '/images/cert-iso13485-2.webp', alt: 'ISO 13485 quality management certificate document, second page', note: 'Document preview' },
  { label: 'United States', title: 'FDA Facility Registration & Device Listing Information', image: '/images/cert-fda.webp', alt: 'FDA facility registration and device listing information document', note: 'Document preview — not an FDA approval statement' },
];

export default function CertificatesSection() {
  return (
    <section className="border-y border-[#dbe3dd] bg-[#f4f7f4] py-20 lg:py-28">
      <div className="px-6 sm:px-8 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-[9vw]">
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Credentials archive</p>
            <h2 className="mt-3 max-w-xl text-[clamp(2.35rem,4vw,4.4rem)] font-extrabold leading-[1.01] tracking-[-0.06em] text-[#152019]">Company certifications and authorizations.</h2>
            <p className="mt-6 max-w-md text-base leading-8 text-[#657069]">Our credentials archive presents the company documents available for buyer review, including quality-system, declaration, registration and market-authorization records.</p>
          </div>
          <article className="grid overflow-hidden border border-[#dbe3dd] bg-white sm:grid-cols-[0.8fr_1.2fr]">
            <a href="/certificates/MDMA-2-2026-4108.pdf" target="_blank" rel="noopener noreferrer" className="flex min-h-[26rem] items-center justify-center border-b border-[#dbe3dd] bg-white p-6 transition-colors hover:bg-[#f7faf7] sm:border-b-0 sm:border-r">
              <img src="/certificates/MDMA-2-2026-4108-preview.webp" alt="Saudi SFDA Medical Device Marketing Authorization document preview" className="max-h-[23rem] w-full object-contain" />
            </a>
            <div className="flex flex-col justify-between p-7 sm:p-10">
              <div>
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Saudi Arabia</p>
                <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.04em] text-[#152019]">Saudi SFDA Medical Device Marketing Authorization</h3>
                <dl className="mt-7 border-t border-[#dbe3dd] text-sm">
                  <div className="grid gap-1 border-b border-[#dbe3dd] py-3 sm:grid-cols-[9rem_1fr]"><dt className="text-[#657069]">Authorization No.</dt><dd className="font-bold text-[#152019]">MDMA-2-2026-4108</dd></div>
                  <div className="grid gap-1 border-b border-[#dbe3dd] py-3 sm:grid-cols-[9rem_1fr]"><dt className="text-[#657069]">Validity</dt><dd className="font-bold text-[#152019]">25/8/2026 – 25/8/2029</dd></div>
                  <div className="grid gap-1 border-b border-[#dbe3dd] py-3 sm:grid-cols-[9rem_1fr]"><dt className="text-[#657069]">Document type</dt><dd className="font-bold text-[#152019]">Medical Device Marketing Authorization</dd></div>
                </dl>
              </div>
              <a href="/certificates/MDMA-2-2026-4108.pdf" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex self-start border border-[#152019] px-5 py-3 text-sm font-bold transition-colors hover:bg-[#152019] hover:text-white">Open document PDF ↗</a>
            </div>
          </article>
        </div>

        <div className="mt-12 grid border-l border-t border-[#dbe3dd] sm:grid-cols-2 xl:grid-cols-4">
          {credentials.map((credential) => (
            <article key={`${credential.title}-${credential.image}`} className="group border-b border-r border-[#dbe3dd] bg-white p-5 transition-colors hover:bg-[#f8fbf8] sm:p-6">
              <div className="flex h-64 items-center justify-center border border-[#e5ebe6] bg-[#fbfcfb] p-3">
                <img src={credential.image} alt={credential.alt} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]" />
              </div>
              <p className="mt-5 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">{credential.label}</p>
              <h3 className="mt-2 min-h-12 text-lg font-bold leading-snug tracking-[-0.025em] text-[#152019]">{credential.title}</h3>
              <p className="mt-3 text-xs leading-5 text-[#657069]">{credential.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-[#3ab54a] bg-white px-5 py-4 text-sm leading-6 text-[#526158]">Documentation is shown for reference and buyer due diligence. Product scope, document validity and applicable market requirements should be confirmed for each project. <Link href="/contact" className="font-bold text-[#278a36] hover:underline">Contact the export team</Link> for the document package relevant to your target market.</div>
      </div>
    </section>
  );
}