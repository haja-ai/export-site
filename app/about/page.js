import Link from 'next/link';

export const metadata = {
  title: 'About Us — Xiaoxiang Wheelchair & Dongbang Motor | B2B Export',
  description:
    'Learn about Xiaoxiang Technology and Dongbang Electric Motor — our history, certifications, quality commitment, and global B2B export capabilities.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-charcoal to-teal text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Two specialized manufacturers, one unified export platform dedicated
            to quality, reliability, and partnership.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              We bridge Chinese manufacturing excellence with global demand.
              Through our two specialized brands — Xiaoxiang Wheelchair for
              electric mobility solutions and Dongbang Motor (DPG) for
              industrial electric motors — we deliver products that meet
              international quality standards at competitive prices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Xiaoxiang */}
            <div className="bg-amber-50 rounded-2xl p-8 lg:p-10 border border-amber-100">
              <h3 className="text-2xl font-bold text-charcoal mb-2">Xiaoxiang Wheelchair</h3>
              <p className="text-sm text-gray-500 mb-4">小象轮椅 · Founded 2015</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Xiaoxiang Technology Co., Ltd. specializes in the design and
                manufacture of electric wheelchairs that combine smart control
                technology with user-centric ergonomics. With over 10 years of
                R&amp;D experience, our products serve customers in 40+
                countries across Europe, Southeast Asia, and the Americas. Every
                wheelchair undergoes rigorous testing for safety, durability,
                and battery performance.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['CE Certified', 'ISO 13485', 'Battery Safety', 'Wheelchair EU'].map((cert) => (
                  <div key={cert} className="flex items-center gap-2 text-sm text-gray-600 bg-white rounded-lg px-3 py-2">
                    <svg className="w-4 h-4 text-orange-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            {/* Dongbang */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-200">
              <h3 className="text-2xl font-bold text-charcoal mb-2">Dongbang Motor (DPG)</h3>
              <p className="text-sm text-gray-500 mb-4">东邦电机 · Founded 2008</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dongbang Electric Motor Co., Ltd. (DPG) has been a trusted name
                in industrial motor manufacturing since 2008. Our product range
                spans from 0.75kW to 22kW, covering IEC frame sizes 80 to 150.
                With IE3 and IE4 premium efficiency ratings, our motors are
                widely used in pumps, fans, compressors, conveyors, and
                heavy-duty industrial equipment worldwide.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['CE Certified', 'UL Certified', 'CCC Certified', 'ISO 9001'].map((cert) => (
                  <div key={cert} className="flex items-center gap-2 text-sm text-gray-600 bg-white rounded-lg px-3 py-2">
                    <svg className="w-4 h-4 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Why B2B Partners Choose Us
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              What sets us apart in the global export market.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Factory-Direct Pricing',
                desc: 'No middlemen — you deal directly with the manufacturer. Competitive pricing with volume discounts available.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Certified Quality',
                desc: 'CE, UL, CCC, ISO 9001, ISO 13485 — our products meet the strictest international standards.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
              {
                title: 'OEM / ODM Available',
                desc: 'Custom branding, packaging, specifications, and design modifications to meet your market needs.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                ),
              },
              {
                title: 'Reliable Shipping',
                desc: 'Established logistics partnerships ensure timely delivery by sea, air, or rail to any port worldwide.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m8-1a1 1 0 01-1 1H5a1 1 0 01-1-1m14-5h2a1 1 0 011 1v3a1 1 0 01-1 1h-2M9 20a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                ),
              },
              {
                title: 'After-Sales Support',
                desc: 'Dedicated English-speaking support team for technical questions, warranty claims, and spare parts.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
              {
                title: 'Sample Service',
                desc: 'Pre-order sample evaluation available. We ship samples quickly so you can verify quality firsthand.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-4">
            Ready to Start a Partnership?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Contact our export team today. We typically respond within 24 hours.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
