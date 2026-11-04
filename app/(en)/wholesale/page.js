import Link from 'next/link';

const TITLE = 'Electric Wheelchair Wholesale Supply for Distributors';
const DESCRIPTION =
  'Wholesale electric wheelchair supply from the MiniElephant factory. 30-unit minimum per order, mixed-model containers, Incoterms and after-sales support.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: 'https://www.semwheelchair.com/wholesale' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.semwheelchair.com/wholesale',
    type: 'website',
  },
};

const ORDER_TYPES = [
  ['Sample order', 'One or two units for a distributor evaluating a range before committing to a 30-unit order. Quoted per unit, with the freight method you choose.'],
  ['Mixed-model container', 'Several MiniRedone models in one shipment. The split is agreed before production so that packing and documents match what you sell, not what is easiest to build.'],
  ['Programme order', 'A scheduled quantity released over an agreed period. Useful where a tender, a rental fleet or a retail listing requires predictable arrivals rather than one large shipment.'],
];

export default function WholesalePage() {
  return (
    <div className="bg-white">
      <section className="border-b border-[#dbe3dd] bg-[#f4f7f4] px-6 py-14 sm:px-8 lg:px-16 lg:py-20">
        <nav className="mb-6 flex items-center gap-2 text-sm text-[#657069]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#278a36]">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#152019]">Wholesale</span>
        </nav>
        <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Factory-direct supply</p>
        <h1 className="mt-3 max-w-4xl text-[clamp(2.2rem,4.2vw,4rem)] font-extrabold leading-[1] tracking-[-0.06em] text-[#152019]">
          Wholesale electric wheelchairs, quoted against your market.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#526158]">
          We supply the ten MiniRedone folding electric wheelchair models to distributors, importers, rental operators and
          care providers. Wholesale orders start at 30 units per order. Quotes are built per order: the configuration, the
          quantity, the Incoterm and the documents your market requires all change the price. This page explains how an
          order is structured and what we need from you to quote accurately.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex bg-[#3ab54a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#278a36]">
            Request a quotation
          </Link>
          <Link href="/products" className="inline-flex border border-[#152019] px-6 py-3 text-sm font-bold text-[#152019] transition-colors hover:bg-[#152019] hover:text-white">
            Compare the models
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-16 lg:py-20">
        <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Order structures</p>
        <h2 className="mt-2 max-w-3xl text-[clamp(1.7rem,2.6vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.05em] text-[#152019]">
          Three ways buyers start.
        </h2>
        <div className="mt-8 grid border-l border-[#dbe3dd] sm:grid-cols-3">
          {ORDER_TYPES.map(([name, text]) => (
            <div key={name} className="border-b border-r border-[#dbe3dd] p-5 sm:p-6">
              <p className="text-sm font-extrabold text-[#152019]">{name}</p>
              <p className="mt-2 text-sm leading-6 text-[#526158]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#dbe3dd] bg-[#f4f7f4] px-6 py-16 sm:px-8 lg:px-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[7vw]">
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Commercial terms</p>
            <h2 className="mt-2 text-[clamp(1.7rem,2.6vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.05em] text-[#152019]">
              What we quote, and how it is decided.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#526158]">
              Wholesale orders start at 30 units per order. Above that figure the terms below still depend on the order: a
              first container to a new distributor and a scheduled programme to an established one carry different production
              plans, so payment structure, Incoterms and lead time are confirmed in writing for your case.
            </p>
          </div>
          <dl className="border-t border-[#dbe3dd]">
            {[
              ['Minimum order quantity', '30 units minimum per order. Mixed-model containers count towards that same total, so one container can split across several MiniRedone models. OEM/ODM programmes are quoted separately, because a private-label minimum depends on the change involved.'],
              ['Lead time', 'Confirmed in writing after the specification and quantity are fixed. Production scheduling, inspection and documentation all sit inside the quoted lead time rather than outside it.'],
              ['Incoterms', 'Quoted per order. Which term we can offer depends on the destination and the freight partner, so the term appears on the quotation rather than being assumed here.'],
              ['Payment', 'Options discussed per order: a deposit against production with the balance against documents, a documentary letter of credit at sight, or escrow through a service both sides accept. Longer programmes can be structured as a framework agreement with scheduled releases. The specific split is agreed in the contract, not inferred from this page.'],
              ['Price structure', 'Model, battery and controller configuration, packaging, private label work, quantity and Incoterm each move the price. A quote that does not state all five cannot be compared with another supplier’s.'],
            ].map(([name, text]) => (
              <div key={name} className="border-b border-[#dbe3dd] py-5">
                <dt className="text-sm font-extrabold text-[#152019]">{name}</dt>
                <dd className="mt-2 text-sm leading-6 text-[#526158]">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-[#dbe3dd] bg-white px-6 py-16 sm:px-8 lg:px-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[7vw]">
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Single-unit buyers</p>
            <h2 className="mt-2 text-[clamp(1.7rem,2.6vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.05em] text-[#152019]">
              We do not sell single units direct.
            </h2>
          </div>
          <div>
            <p className="text-sm leading-7 text-[#526158]">
              MiniElephant supplies distributors, importers and project buyers. A single chair is not sold directly from the
              factory, and there is no retail checkout on this site.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#526158]">
              Some markets already have a distributor who can supply and service one unit. Others do not yet. If you need a
              single chair for your own use, email us or send a WhatsApp message with your country and city, and we will point
              you to a distributor in your market where one exists — or tell you plainly when we do not have one.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex bg-[#3ab54a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#278a36]">
                Contact the export team
              </Link>
              <a href="https://wa.me/8613819098967" target="_blank" rel="noopener noreferrer" className="inline-flex border border-[#152019] px-6 py-3 text-sm font-bold text-[#152019] transition-colors hover:bg-[#152019] hover:text-white">
                WhatsApp +86 13819098967
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#dbe3dd] px-6 py-16 sm:px-8 lg:px-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-[6vw]">
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">What ships with the order</p>
            <h2 className="mt-2 text-[clamp(1.5rem,2.3vw,2.1rem)] font-extrabold leading-[1.06] tracking-[-0.045em] text-[#152019]">
              Documents and support.
            </h2>
            <ul className="mt-6 border-t border-[#dbe3dd] text-sm">
              {[
                'Commercial invoice, packing list and the transport documents for the agreed Incoterm',
                'Pre-shipment inspection record against the approved configuration',
                'Model specification sheet covering the configuration supplied',
                'Battery transport documentation required by the carrier used',
                'Warranty statement: five years on the frame, three years on controller, battery and motor',
                'Spare parts list with the parts classified by service level',
              ].map((item) => (
                <li key={item} className="flex gap-3 border-b border-[#dbe3dd] py-4 leading-6 text-[#526158]">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#3ab54a]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">After the sale</p>
            <h2 className="mt-2 text-[clamp(1.5rem,2.3vw,2.1rem)] font-extrabold leading-[1.06] tracking-[-0.045em] text-[#152019]">
              What a distributor actually needs.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#526158]">
              A wholesale price without service capability is a liability. The platform is built for field service: the
              controller can be swapped left to right, the seat and base separate for repair, and the hidden harness reduces
              the number of connectors exposed to damage. That matters when your technician is a day away from the factory.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                ['electric-wheelchair-after-sales-service-sla-guide', 'After-sales service SLA: who owns each response'],
                ['electric-wheelchair-spare-parts-stocking-guide', 'Spare parts stocking for a new distributor'],
                ['electric-wheelchair-payment-terms-comparison-b2b', 'Payment terms compared: T/T, L/C and documents'],
                ['electric-wheelchair-container-loading-guide', 'Container loading and the mixed-model plan'],
              ].map(([slug, label]) => (
                <li key={slug}>
                  <Link href={`/news/${slug}`} className="font-semibold text-[#278a36] hover:underline">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-[#dbe3dd] bg-[#f4f7f4] px-6 py-16 sm:px-8 lg:px-16 lg:py-20">
        <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">To get an accurate quote</p>
        <h2 className="mt-2 max-w-3xl text-[clamp(1.7rem,2.6vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.05em] text-[#152019]">
          Send these five things.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['Models', 'The models you are considering, or the application you need to cover.'],
            ['Quantity', 'First order quantity and expected annual volume.'],
            ['Destination', 'Country and city, so the Incoterm and freight method can be quoted.'],
            ['Brand', 'Whether the units ship under MiniElephant or your own label.'],
            ['Documents', 'The certification or registration you must hold to import and sell.'],
          ].map(([name, text]) => (
            <div key={name} className="border border-[#dbe3dd] bg-white p-5">
              <p className="text-sm font-extrabold text-[#152019]">{name}</p>
              <p className="mt-2 text-sm leading-6 text-[#526158]">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex bg-[#3ab54a] px-6 py-3 text-sm font-bold text-white hover:bg-[#278a36]">Send the five details</Link>
          <Link href="/certifications" className="inline-flex border border-[#152019] px-6 py-3 text-sm font-bold text-[#152019] hover:bg-[#152019] hover:text-white">See the documents</Link>
          <Link href="/oem-odm" className="inline-flex border border-[#152019] px-6 py-3 text-sm font-bold text-[#152019] hover:bg-[#152019] hover:text-white">Private label options</Link>
        </div>
      </section>
    </div>
  );
}
