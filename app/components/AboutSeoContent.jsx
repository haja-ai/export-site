import Link from 'next/link';

const faqs = [
  {
    q: 'Is MiniElephant an electric wheelchair manufacturer or a trading company?',
    a: 'MiniElephant is the brand of Jiaxing Small Elephant Medical Technology Co., Ltd, a manufacturer based in Jiashan County, Jiaxing City, Zhejiang Province, China. The MiniRedone folding electric wheelchair family is produced in-house on a one-piece magnesium alloy die-cast frame platform.',
  },
  {
    q: 'What products does the factory build?',
    a: 'Ten MiniRedone folding electric wheelchair models share one platform but differ in seat style, wheel configuration and folded size. Standard specification includes dual 350W brushless hub motors, a 16Ah LiFePO4 battery, a 150 kg maximum load and approximately 30 km of range per charge.',
  },
  {
    q: 'Which certificates can a buyer review?',
    a: 'This page lists the documents held today: a Saudi SFDA medical device marketing authorization, CE and ISO records, a United States facility registration and device listing reference, two trademarks and sixteen patent files. Buyers can request the current copies for a specific model and destination market.',
  },
  {
    q: 'Can the factory support OEM and private label orders?',
    a: 'Yes. OEM and ODM projects are supported, including logo printing, label and manual adaptation, packaging changes and configuration selection. Share the model, artwork and target quantity with the export team for a written quotation.',
  },
  {
    q: 'What documentation is provided with an export order?',
    a: 'Commercial invoice, packing list, bill of lading, certificate of origin, specification sheet, and the battery transport documents that apply to the configuration shipped. Model-specific conformity documents are supplied when the destination market requires them.',
  },
];

export default function AboutSeoContent() {
  return (
    <>
      <section className="border-t border-[#dbe3dd] bg-white px-6 py-14 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[#1f2a24]">Who MiniElephant is</h2>
          <p className="mt-4 text-[#4a5750] leading-relaxed">
            MiniElephant is the export brand of Jiaxing Small Elephant Medical Technology Co., Ltd, an electric
            wheelchair manufacturer in Jiashan County, Zhejiang Province, China. The company designs and assembles the
            MiniRedone folding electric wheelchair family and supplies distributors, importers and OEM buyers rather
            than selling directly to end users.
          </p>
          <p className="mt-4 text-[#4a5750] leading-relaxed">
            Buyers usually arrive with two questions: can this factory actually build the product, and can it prove
            that in writing. The credentials on this page answer the second question. The production description below
            answers the first.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[#1f2a24]">What the factory builds</h2>
          <p className="mt-4 text-[#4a5750] leading-relaxed">
            Every MiniRedone model is an electric wheelchair built on a one-piece magnesium alloy die-cast frame. The
            die-cast approach removes welded joints from the load path, which is the main structural difference from a
            conventional steel or aluminium tube frame. Drive comes from two 350W brushless hub motors, energy from a
            16Ah LiFePO4 battery mounted inside the frame, and the platform is rated for a 150 kg maximum load with
            approximately 30 km of range per charge.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ['10', 'MiniRedone models on one platform'],
              ['150 kg', 'Maximum rated load'],
              ['2 x 350W', 'Brushless hub motors'],
            ].map(([value, label]) => (
              <div key={label} className="border border-[#dbe3dd] bg-[#f4f7f4] p-5">
                <div className="text-2xl font-bold text-[#278a36]">{value}</div>
                <div className="mt-1 text-sm text-[#4a5750]">{label}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[#4a5750] leading-relaxed">
            Model differences sit in the seating system, wheel set and folded dimensions rather than in the drive
            platform, so a distributor can carry one spare parts logic across a range. Current specifications for each
            model are published on the <Link href="/products" className="text-[#278a36] underline">product pages</Link>.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[#1f2a24]">How documents are issued</h2>
          <p className="mt-4 text-[#4a5750] leading-relaxed">
            Certification work is market-specific, so the export team issues documents against a named model and a
            named destination. A buyer evaluating a first order is usually asked for the destination country, the model
            and whether the shipment is a sample or a container order. The team then confirms which records already
            exist, which require an application, and what the lead time looks like before the order is placed.
          </p>
          <p className="mt-4 text-[#4a5750] leading-relaxed">
            The United States record on this page is a facility registration and device listing reference, not a
            marketing approval, and it should be read that way. Buyers who need to confirm how a market treats an
            electric wheelchair can start from our
            <Link href="/news/electric-wheelchair-import-compliance-document-checklist" className="text-[#278a36] underline"> import compliance document checklist</Link>
            and the
            <Link href="/news/electric-wheelchair-certification-guide-2026-b2b" className="text-[#278a36] underline"> CE, FDA and ISO overview</Link>,
            then confirm the requirement with their own customs broker or regulatory consultant.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[#1f2a24]">Before you place a first order</h2>
          <p className="mt-4 text-[#4a5750] leading-relaxed">
            Most distributor relationships start with a sample unit, a specification comparison and a factory review
            rather than with a container. Our
            <Link href="/news/electric-wheelchair-factory-audit-checklist-buyers" className="text-[#278a36] underline"> factory audit checklist</Link>
            and
            <Link href="/news/electric-wheelchair-sample-evaluation-checklist-importers" className="text-[#278a36] underline"> sample evaluation checklist</Link>
            describe what to inspect and what to record, and the
            <Link href="/contact" className="text-[#278a36] underline"> export team</Link>
            answers document and configuration questions directly.
          </p>
        </div>
      </section>

      <section className="border-t border-[#dbe3dd] bg-[#f4f7f4] px-6 py-14 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[#1f2a24]">Frequently asked questions</h2>
          <dl className="mt-6 space-y-6">
            {faqs.map((item) => (
              <div key={item.q}>
                <dt className="font-semibold text-[#1f2a24]">{item.q}</dt>
                <dd className="mt-2 text-[#4a5750] leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
