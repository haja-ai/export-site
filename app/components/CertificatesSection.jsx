import Link from 'next/link';

const credentials = [
  { label: 'European Union', title: 'CE Declaration of Conformity', image: '/images/cert-ce.webp', alt: 'CE Declaration of Conformity document', note: 'Document preview' },
  { label: 'Quality management', title: 'ISO 13485 Certificate', image: '/images/cert-iso13485-1.webp', alt: 'ISO 13485 quality management certificate document', note: 'Document preview' },
  { label: 'Quality management', title: 'ISO 13485 Certificate', image: '/images/cert-iso13485-2.webp', alt: 'ISO 13485 quality management certificate document, second page', note: 'Document preview' },
  { label: 'United States', title: 'FDA Facility Registration & Device Listing Information', image: '/images/cert-fda.webp', alt: 'FDA facility registration and device listing information document', note: 'Document preview — not an FDA approval statement' },
];

export default function CertificatesSection() {
  return (
    <section className="border-y border-[#dbe3dd] bg-white py-20 lg:py-28">
      <div className="px-6 sm:px-8 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-[7vw]">
          <a href="/certificates/MDMA-2-2026-4108.pdf" target="_blank" rel="noopener noreferrer" className="relative flex min-h-[31rem] items-center justify-center border border-[#dbe3dd] bg-[#f4f7f4] p-8 transition-colors hover:bg-[#edf4ee] lg:min-h-[39rem]">
            <span className="absolute left-5 top-4 text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Primary market authorization</span>
            <img src="/certificates/MDMA-2-2026-4108-preview.webp" alt="Saudi SFDA Medical Device Marketing Authorization document preview" className="max-h-[34rem] w-full object-contain drop-shadow-[0_15px_12px_rgba(15,29,20,0.12)]" />
          </a>
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Featured authorization · Saudi Arabia</p>
            <h2 className="mt-3 max-w-3xl text-[clamp(2.6rem,4.7vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.065em] text-[#152019]">Saudi SFDA Medical Device Marketing Authorization.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#657069]">This is the lead document in the MiniElephant credentials archive: a published Saudi medical-device marketing authorization for the electric wheelchair product family.</p>
            <dl className="mt-8 max-w-2xl border-t border-[#dbe3dd] text-sm">
              <div className="grid gap-1 border-b border-[#dbe3dd] py-3 sm:grid-cols-[10.5rem_1fr]"><dt className="text-[#657069]">Authorization No.</dt><dd className="font-bold text-[#152019]">MDMA-2-2026-4108</dd></div>
              <div className="grid gap-1 border-b border-[#dbe3dd] py-3 sm:grid-cols-[10.5rem_1fr]"><dt className="text-[#657069]">Issuing date</dt><dd className="font-bold text-[#152019]">25/8/2026</dd></div>
              <div className="grid gap-1 border-b border-[#dbe3dd] py-3 sm:grid-cols-[10.5rem_1fr]"><dt className="text-[#657069]">Expiry date</dt><dd className="font-bold text-[#152019]">25/8/2029</dd></div>
              <div className="grid gap-1 border-b border-[#dbe3dd] py-3 sm:grid-cols-[10.5rem_1fr]"><dt className="text-[#657069]">Document type</dt><dd className="font-bold text-[#152019]">Medical Device Marketing Authorization</dd></div>
            </dl>
            <a href="/certificates/MDMA-2-2026-4108.pdf" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex border border-[#152019] bg-[#152019] px-5 py-3 text-sm font-bold text-white transition-colors hover:border-[#3ab54a] hover:bg-[#3ab54a]">Open authorization PDF ↗</a>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-[#dbe3dd] pt-8 lg:grid-cols-[1fr_1fr] lg:gap-[7vw]">
          <div><p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Supporting credentials</p><h2 className="mt-3 max-w-2xl text-[clamp(2rem,3.3vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.055em] text-[#152019]">Quality, registration and supporting documents.</h2></div>
          <p className="self-end text-base leading-8 text-[#657069]">These files remain available for buyer due diligence. The Saudi SFDA authorization above is the featured market-specific authorization on this page.</p>
        </div>
        <div className="mt-10 grid border-l border-t border-[#dbe3dd] sm:grid-cols-2 xl:grid-cols-4">
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