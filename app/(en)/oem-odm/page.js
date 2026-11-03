import Link from 'next/link';

const TITLE = 'Electric Wheelchair OEM and ODM Private Label Programme';
const DESCRIPTION =
  'MiniElephant OEM and ODM electric wheelchair programmes: what can be customised, what stays fixed for safety, sampling, tooling, packaging and certification support.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: 'https://www.semwheelchair.com/oem-odm' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.semwheelchair.com/oem-odm',
    type: 'website',
  },
};

const STEPS = [
  ['1. Brief', 'Target market, models of interest, expected annual volume and the brand or label you intend to sell under.'],
  ['2. Specification freeze', 'We confirm what is fixed on the platform and what is open for change, then write the configuration down before any sample is built.'],
  ['3. Sample', 'A sample is built against the frozen specification. Where a change touches a safety-critical part, it is agreed in advance rather than discovered at the sample stage.'],
  ['4. Validation', 'You test the sample in your market. We document what was tested and record the approved configuration as the reference for production.'],
  ['5. Branding and packaging', 'Label content, manual, carton print and inner protection are agreed and proofed before the run. Nothing is printed from a verbal instruction.'],
  ['6. Pilot run', 'A small production batch is inspected against the approved configuration before the full quantity is committed.'],
  ['7. Series production', 'The run is produced to the frozen configuration and inspected before shipment, with the inspection record travelling with the order.'],
];

const CAN_CHANGE = [
  ['Frame finish', 'Colour and coating system, subject to the corrosion requirement of your market.'],
  ['Upholstery', 'Material, colour and stitching within the seat geometry already tooled.'],
  ['Controls', 'Joystick and controller options available on the platform, with the matching harness.'],
  ['Branding', 'Label plate, printed manual, carton print and model naming.'],
  ['Packaging', 'Carton specification, inner protection and pallet arrangement for your logistics chain.'],
  ['Accessories', 'Selection from the accessory range, fitted at production rather than shipped loose where possible.'],
];

const FIXED = [
  'Frame platform geometry and the folding mechanism, unless a new tooling programme is agreed.',
  'Motor and battery architecture: voltage, capacity, controller pairing and brake logic are validated as a system.',
  'Any part that appears in the declaration of conformity for the models already covered.',
  'Load rating and stability envelope, which are established by test rather than by request.',
];

export default function OemOdmPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-[#dbe3dd] bg-[#f4f7f4] px-6 py-14 sm:px-8 lg:px-16 lg:py-20">
        <nav className="mb-6 flex items-center gap-2 text-sm text-[#657069]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#278a36]">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#152019]">OEM / ODM</span>
        </nav>
        <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Private label programme</p>
        <h1 className="mt-3 max-w-4xl text-[clamp(2.2rem,4.2vw,4rem)] font-extrabold leading-[1] tracking-[-0.06em] text-[#152019]">
          OEM and ODM electric wheelchairs, with the limits stated up front.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#526158]">
          OEM here means our MiniRedone platform built under your brand. ODM means a configuration adapted for your market
          within that platform. Both are real programmes with real constraints: some parts can change freely, some need
          re-validation, and a few cannot change at all without a new tooling or certification programme. This page sets out
          which is which before you spend money on a sample.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex bg-[#3ab54a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#278a36]">
            Discuss a private label project
          </Link>
          <Link href="/products" className="inline-flex border border-[#152019] px-6 py-3 text-sm font-bold text-[#152019] transition-colors hover:bg-[#152019] hover:text-white">
            Review the ten models
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[7vw]">
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Process</p>
            <h2 className="mt-2 text-[clamp(1.7rem,2.6vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.05em] text-[#152019]">
              Seven steps, each with a written output.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#526158]">
              The failure mode in private label projects is a verbal instruction that becomes a production assumption. Every
              step below ends with a document you can hold us to: a specification, an approved sample reference, a printed
              proof, an inspection record.
            </p>
          </div>
          <ol className="border-t border-[#dbe3dd]">
            {STEPS.map(([name, text]) => (
              <li key={name} className="grid gap-2 border-b border-[#dbe3dd] py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <p className="text-sm font-extrabold text-[#152019]">{name}</p>
                <p className="text-sm leading-6 text-[#526158]">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-[#dbe3dd] bg-[#f4f7f4] px-6 py-16 sm:px-8 lg:px-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-[6vw]">
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Open for change</p>
            <h2 className="mt-2 text-[clamp(1.5rem,2.3vw,2.1rem)] font-extrabold leading-[1.06] tracking-[-0.045em] text-[#152019]">
              What a private label can change.
            </h2>
            <div className="mt-6 border-t border-[#dbe3dd]">
              {CAN_CHANGE.map(([name, text]) => (
                <div key={name} className="border-b border-[#dbe3dd] py-4">
                  <p className="text-sm font-extrabold text-[#152019]">{name}</p>
                  <p className="mt-1 text-sm leading-6 text-[#526158]">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#c2410c]">Fixed by design</p>
            <h2 className="mt-2 text-[clamp(1.5rem,2.3vw,2.1rem)] font-extrabold leading-[1.06] tracking-[-0.045em] text-[#152019]">
              What cannot be changed on request.
            </h2>
            <ul className="mt-6 border-t border-[#dbe3dd]">
              {FIXED.map((text) => (
                <li key={text} className="flex gap-3 border-b border-[#dbe3dd] py-4 text-sm leading-6 text-[#526158]">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#c2410c]" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-[#526158]">
              A change to a fixed item is not refused forever. It becomes a separate engineering and validation project with
              its own cost, timeline and, where relevant, its own certification consequences. We will quote it instead of
              pretending it is a colour change.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#dbe3dd] px-6 py-16 sm:px-8 lg:px-16 lg:py-20">
        <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Commercial terms</p>
        <h2 className="mt-2 max-w-3xl text-[clamp(1.7rem,2.6vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.05em] text-[#152019]">
          Quantity, sampling and tooling, without invented numbers.
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {[
            ['Minimum order quantity', 'Confirms per model, per finish and per customisation. A colour change and a new upholstery tool carry different minimums. Request the current figure in writing for the configuration you are considering rather than assuming a number from another project.'],
            ['Sampling', 'A pre-production sample is built against the frozen specification. Sample lead time is confirmed in writing once the specification is agreed, because it depends on which parts are non-standard.'],
            ['Tooling', 'New tooling is only quoted where geometry changes. Cost, ownership and whether the tool travels with a future supplier are agreed in writing before the tool is cut.'],
            ['Certification support', 'We supply the documents we hold and coordinate the testing that a market requires. Under a private label, the question of who is the legal manufacturer for the declaration must be settled in the contract, not after the first shipment.'],
          ].map(([name, text]) => (
            <div key={name} className="border border-[#dbe3dd] p-5 sm:p-6">
              <p className="text-sm font-extrabold text-[#152019]">{name}</p>
              <p className="mt-2 text-sm leading-6 text-[#526158]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#dbe3dd] bg-[#f4f7f4] px-6 py-16 sm:px-8 lg:px-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-[7vw]">
          <div>
            <h2 className="text-[clamp(1.5rem,2.3vw,2.1rem)] font-extrabold leading-[1.06] tracking-[-0.045em] text-[#152019]">
              Brand and design protection.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#526158]">
              A private label programme is built on the understanding that the configuration, drawings and packaging developed
              for your project are not resold under another name. If a mould or tool is paid for by you, its ownership is
              written into the agreement. If you need a non-disclosure agreement before sharing drawings, say so in the first
              message and we will start there.
            </p>
          </div>
          <div>
            <h2 className="text-[clamp(1.5rem,2.3vw,2.1rem)] font-extrabold leading-[1.06] tracking-[-0.045em] text-[#152019]">
              What to send in the first message.
            </h2>
            <ul className="mt-5 border-t border-[#dbe3dd] text-sm">
              {[
                'The model or models you are starting from',
                'Target market and the certification you must hold there',
                'Your brand name as it will appear on the label and manual',
                'The changes you want, separated into cosmetic and functional',
                'Expected first order quantity and annual volume',
              ].map((item) => (
                <li key={item} className="border-b border-[#dbe3dd] py-3 text-[#526158]">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-[#dbe3dd] pt-6">
          <p className="text-sm font-bold text-[#152019]">Related reading</p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ['electric-wheelchair-oem-private-label-guide', 'OEM private label guide: labels, manuals and declarations'],
              ['oem-odm-electric-wheelchair-customization-guide', 'OEM and ODM customisation: what changes and what does not'],
              ['electric-wheelchair-quality-agreement-acceptance-criteria', 'Quality agreement and acceptance criteria'],
              ['electric-wheelchair-purchase-order-checklist-importers', 'Purchase order checklist for importers'],
            ].map(([slug, label]) => (
              <li key={slug}>
                <Link href={`/news/${slug}`} className="font-semibold text-[#278a36] hover:underline">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[#dbe3dd] bg-[#152019] px-6 py-14 text-white sm:px-8 lg:px-16">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-[clamp(1.5rem,2.3vw,2.1rem)] font-extrabold tracking-[-0.04em]">Start with the specification, not the price.</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
              Send the model, the market and the changes you have in mind. We will reply with what is open, what needs
              validation, and what the programme would require.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex bg-[#3ab54a] px-6 py-3 text-sm font-bold text-white hover:bg-[#278a36]">Request a programme review</Link>
            <Link href="/certifications" className="inline-flex border border-white/40 px-6 py-3 text-sm font-bold text-white hover:bg-white hover:text-[#152019]">Certification files</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
