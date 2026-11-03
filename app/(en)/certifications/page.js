import Link from 'next/link';

const TITLE = 'Electric Wheelchair Certifications and Compliance Files';
const DESCRIPTION =
  'Review the MiniElephant electric wheelchair credential archive: Saudi SFDA authorization MDMA-2-2026-4108, CE declaration, ISO 13485 and FDA listing records.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: 'https://www.semwheelchair.com/certifications' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.semwheelchair.com/certifications',
    type: 'website',
  },
};

const HELD = [
  {
    region: 'Saudi Arabia',
    name: 'SFDA Medical Device Marketing Authorization',
    ref: 'MDMA-2-2026-4108',
    detail: 'Issued 25 August 2026 · valid to 25 August 2029 · medical device marketing authorization for the electric wheelchair product family.',
    href: '/certificates/MDMA-2-2026-4108.pdf',
    preview: '/certificates/MDMA-2-2026-4108-preview.webp',
    action: 'Open the authorization PDF',
  },
  {
    region: 'European Union',
    name: 'CE Declaration of Conformity',
    ref: 'Document on file',
    detail: 'Declaration of conformity issued for the model range stated on the document. Scope and the standards cited are shown on the file itself.',
    href: '/images/cert-ce.webp',
    preview: '/images/cert-ce.webp',
    action: 'View the declaration',
  },
  {
    region: 'Quality management',
    name: 'ISO 13485 certificate',
    ref: 'Certificate and scope on file',
    detail: 'Quality management system certificate for medical device manufacture, two pages including the certified scope.',
    href: '/images/cert-iso13485-1.webp',
    preview: '/images/cert-iso13485-1.webp',
    action: 'View the certificate',
  },
  {
    region: 'United States',
    name: 'FDA facility registration and device listing information',
    ref: 'Registration and listing record',
    detail: 'Facility registration and device listing information only. This is not an FDA approval, clearance or endorsement, and we do not describe it as one.',
    href: '/images/cert-fda.webp',
    preview: '/images/cert-fda.webp',
    action: 'View the registration record',
  },
];

const MEANING = [
  ['SFDA marketing authorization', 'Market access for the covered device family in Saudi Arabia, for the period printed on the document.', 'Authorization for any other country, or for models outside the stated scope.'],
  ['CE declaration of conformity', 'The manufacturer’s declaration that the listed models meet the cited EU requirements, signed by the manufacturer.', 'A notified body certificate unless the document itself is one, or coverage of accessories added after issue.'],
  ['ISO 13485 certificate', 'An audited quality management system covering the certified scope of manufacture.', 'A product approval. It says nothing about the performance of a specific unit.'],
  ['FDA registration and listing', 'That a facility and device listing exist in the FDA database.', 'FDA approval, clearance, or permission to market. It is not a 510(k) clearance.'],
];

export default function CertificationsPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-[#dbe3dd] bg-[#f4f7f4] px-6 py-14 sm:px-8 lg:px-16 lg:py-20">
        <nav className="mb-6 flex items-center gap-2 text-sm text-[#657069]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#278a36]">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#152019]">Certifications</span>
        </nav>
        <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Credentials archive</p>
        <h1 className="mt-3 max-w-4xl text-[clamp(2.2rem,4.2vw,4rem)] font-extrabold leading-[1] tracking-[-0.06em] text-[#152019]">
          Electric wheelchair certifications and compliance files.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#526158]">
          Four documents are published here because they exist and can be opened: a Saudi SFDA marketing authorization, a CE
          declaration of conformity, an ISO 13485 certificate and an FDA facility registration and device listing record. Below
          them is the list of files we can supply for a specific order, and an explicit statement of what each document does
          not establish.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex bg-[#3ab54a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#278a36]">
            Request a document package
          </Link>
          <Link href="/news/category/compliance-certification" className="inline-flex border border-[#152019] px-6 py-3 text-sm font-bold text-[#152019] transition-colors hover:bg-[#152019] hover:text-white">
            Compliance guides
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-16 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#dbe3dd] pb-5">
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Documents we hold</p>
            <h2 className="mt-2 text-[clamp(1.7rem,2.6vw,2.5rem)] font-extrabold tracking-[-0.05em] text-[#152019]">
              Published files, open for review.
            </h2>
          </div>
          <p className="text-sm text-[#657069]">No document on this page is a placeholder.</p>
        </div>

        <div className="grid border-l border-[#dbe3dd] md:grid-cols-2">
          {HELD.map((doc) => (
            <article key={doc.name} className="border-b border-r border-[#dbe3dd] p-5 sm:p-7">
              <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">{doc.region}</p>
              <h3 className="mt-2 text-xl font-bold leading-snug tracking-[-0.03em] text-[#152019]">{doc.name}</h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.08em] text-[#657069]">{doc.ref}</p>
              <div className="mt-4 flex h-56 items-center justify-center border border-[#e5ebe6] bg-[#fbfcfb] p-3">
                <img src={doc.preview} alt={`${doc.name} document preview`} loading="lazy" className="h-full w-full object-contain" />
              </div>
              <p className="mt-4 text-sm leading-6 text-[#526158]">{doc.detail}</p>
              <a
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-bold text-[#278a36] hover:underline"
              >
                {doc.action} ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#dbe3dd] px-6 py-16 sm:px-8 lg:px-16 lg:py-20">
        <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Reading a certificate correctly</p>
        <h2 className="mt-2 max-w-3xl text-[clamp(1.7rem,2.6vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.05em] text-[#152019]">
          What each document establishes, and what it does not.
        </h2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-[#152019] text-left">
                <th className="py-3 pr-4 font-extrabold text-[#152019]">Document</th>
                <th className="py-3 pr-4 font-extrabold text-[#152019]">What it supports</th>
                <th className="py-3 font-extrabold text-[#152019]">What it does not establish</th>
              </tr>
            </thead>
            <tbody>
              {MEANING.map((row) => (
                <tr key={row[0]} className="border-b border-[#dbe3dd] align-top">
                  <td className="py-4 pr-4 font-semibold text-[#152019]">{row[0]}</td>
                  <td className="py-4 pr-4 leading-6 text-[#526158]">{row[1]}</td>
                  <td className="py-4 leading-6 text-[#526158]">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-t border-[#dbe3dd] bg-[#f4f7f4] px-6 py-16 sm:px-8 lg:px-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[7vw]">
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Available on request</p>
            <h2 className="mt-2 text-[clamp(1.7rem,2.6vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.05em] text-[#152019]">
              Files we can supply for a specific order.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#526158]">
              These are produced or collated per order rather than published as a standing archive. Ask for them with the model
              and destination market, and we will confirm what exists for that configuration before quoting.
            </p>
          </div>
          <div>
            <ul className="border-t border-[#dbe3dd] text-sm">
              {[
                'Model specification sheet for the exact configuration you are ordering',
                'Material and finish declaration for the frame, fasteners and upholstery',
                'Packing specification and container loading plan for the quantity quoted',
                'Pre-shipment inspection record and the checklist used for that shipment',
                'Product label and marking content required by your market, agreed before production',
                'Battery transport documentation required by the carrier for the shipping method used',
                'Declaration of conformity scope confirmation where a private label is requested',
              ].map((item) => (
                <li key={item} className="flex gap-3 border-b border-[#dbe3dd] py-4 text-[#526158]">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#3ab54a]" />
                  <span className="leading-6">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-[#526158]">
              If a document you need is not on either list, ask. If we do not hold it, we will say so rather than describe
              something we cannot produce.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#dbe3dd] px-6 py-16 sm:px-8 lg:px-16 lg:py-20">
        <h2 className="text-[clamp(1.6rem,2.4vw,2.2rem)] font-extrabold tracking-[-0.05em] text-[#152019]">
          What we will not claim
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            'We do not describe the FDA record as an approval, clearance or endorsement.',
            'We do not quote certificate numbers for documents we have not published.',
            'We do not claim market authorization for countries where the file is not held.',
            'We do not present a laboratory coupon test as a test of the finished electric wheelchair.',
          ].map((line) => (
            <p key={line} className="border-l-2 border-[#3ab54a] bg-white px-5 py-4 text-sm leading-6 text-[#526158]">
              {line}
            </p>
          ))}
        </div>
        <div className="mt-10 border-t border-[#dbe3dd] pt-6">
          <p className="text-sm font-bold text-[#152019]">Related reading</p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ['electric-wheelchair-certification-guide-2026-b2b', 'Electric wheelchair certification guide for 2026 buyers'],
              ['electric-wheelchair-ce-certification-mdr-2026-guide-b2b', 'CE certification under the MDR: what importers must hold'],
              ['electric-wheelchair-import-compliance-document-checklist', 'Import compliance document checklist'],
              ['electric-wheelchair-iso-7176-test-report-comparison-b2b', 'Reading ISO 7176 test reports in a supplier comparison'],
            ].map(([slug, label]) => (
              <li key={slug}>
                <Link href={`/news/${slug}`} className="font-semibold text-[#278a36] hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[#dbe3dd] bg-[#152019] px-6 py-14 text-white sm:px-8 lg:px-16">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-[clamp(1.5rem,2.3vw,2.1rem)] font-extrabold tracking-[-0.04em]">Need the file package for your market?</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
              Send the model, destination country and whether the order is under your brand. We will reply with the documents
              that exist for that configuration.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex bg-[#3ab54a] px-6 py-3 text-sm font-bold text-white hover:bg-[#278a36]">Contact the export team</Link>
            <Link href="/wholesale" className="inline-flex border border-white/40 px-6 py-3 text-sm font-bold text-white hover:bg-white hover:text-[#152019]">Wholesale terms</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
