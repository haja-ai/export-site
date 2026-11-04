import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SOLUTION_BY_SLUG, SOLUTION_SLUGS, SOLUTION_CTA } from '@/lib/solutions';
import { newsArticles } from '@/lib/news';

export const dynamicParams = false;

export function generateStaticParams() {
  return SOLUTION_SLUGS.map((slug) => ({ slug }));
}

const ARTICLE_TITLES = new Map(newsArticles.map((article) => [article.slug, article.title]));

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = SOLUTION_BY_SLUG[slug];
  if (!solution) return { title: 'Page Not Found' };

  const url = `https://www.semwheelchair.com/solutions/${slug}`;
  return {
    title: { absolute: solution.metaTitle },
    description: solution.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: solution.metaTitle,
      description: solution.metaDescription,
      url,
      type: 'website',
      images: [{ url: 'https://www.semwheelchair.com/og-image.jpg', width: 1200, height: 630, alt: solution.h1 }],
    },
  };
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const solution = SOLUTION_BY_SLUG[slug];
  if (!solution) notFound();

  const url = `https://www.semwheelchair.com/solutions/${slug}`;
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.semwheelchair.com/' },
      { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://www.semwheelchair.com/products' },
      { '@type': 'ListItem', position: 3, name: solution.eyebrow, item: url },
    ],
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, '\\u003c') }}
      />

      <section className="border-b border-[#dbe3dd] bg-[#f4f7f4] px-6 py-14 sm:px-8 lg:px-16 lg:py-20">
        <nav className="mb-6 flex items-center gap-2 text-sm text-[#657069]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#278a36]">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/products" className="hover:text-[#278a36]">Solutions</Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#152019]">{solution.eyebrow}</span>
        </nav>
        <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">{solution.eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-[clamp(2.1rem,4vw,3.7rem)] font-extrabold leading-[1.02] tracking-[-0.055em] text-[#152019]">
          {solution.h1}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#526158]">{solution.lead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex bg-[#3ab54a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#278a36]">
            Request a quotation
          </Link>
          <Link href="/wholesale" className="inline-flex border border-[#152019] px-6 py-3 text-sm font-bold text-[#152019] transition-colors hover:bg-[#152019] hover:text-white">
            Wholesale terms
          </Link>
        </div>
      </section>

      {solution.sections.map((section) => (
        <section key={section.h2} className="border-b border-[#dbe3dd] px-6 py-12 sm:px-8 lg:px-16 lg:py-16">
          <div className="max-w-3xl">
            <h2 className="text-[clamp(1.4rem,2.2vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.045em] text-[#152019]">
              {section.h2}
            </h2>
            {section.paras.map((para) => (
              <p key={para.slice(0, 40)} className="mt-5 text-base leading-8 text-[#526158]">{para}</p>
            ))}
          </div>
        </section>
      ))}

      <section className="border-b border-[#dbe3dd] bg-[#f4f7f4] px-6 py-12 sm:px-8 lg:px-16 lg:py-16">
        <div className="max-w-5xl">
          <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Decision table</p>
          <h2 className="mt-2 text-[clamp(1.4rem,2.2vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.045em] text-[#152019]">
            {solution.table.caption}
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <thead>
                <tr>
                  {solution.table.columns.map((column) => (
                    <th key={column} scope="col" className="border-b border-[#c9d5cc] pb-3 pr-6 text-xs font-extrabold uppercase tracking-[0.12em] text-[#152019]">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {solution.table.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => (
                      <td
                        key={`${row[0]}-${index}`}
                        className={`border-b border-[#dbe3dd] py-4 pr-6 align-top leading-6 ${index === 0 ? 'font-bold text-[#152019]' : 'text-[#526158]'}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dbe3dd] px-6 py-12 sm:px-8 lg:px-16 lg:py-16">
        <div className="max-w-4xl">
          <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Read next</p>
          <h2 className="mt-2 text-[clamp(1.4rem,2.2vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.045em] text-[#152019]">
            The guides behind this page
          </h2>
          <ul className="mt-8 border-t border-[#dbe3dd]">
            {solution.links.map((link) => (
              <li key={link.slug} className="border-b border-[#dbe3dd] py-5">
                <Link href={`/news/${link.slug}`} className="text-base font-bold text-[#152019] transition-colors hover:text-[#278a36]">
                  {ARTICLE_TITLES.get(link.slug) || link.slug}
                </Link>
                <p className="mt-2 text-sm leading-6 text-[#526158]">{link.note}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 border border-[#dbe3dd] p-6">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Product to start from</p>
            <p className="mt-3 text-sm leading-7 text-[#526158]">
              <Link href={`/products/${solution.product.slug}`} className="font-bold text-[#152019] underline decoration-[#3ab54a] decoration-2 underline-offset-4 hover:text-[#278a36]">
                {solution.product.name}
              </Link>{' '}
              \u2014 {solution.product.why}. Compare it with the other models on the{' '}
              <Link href="/products" className="font-bold text-[#152019] underline decoration-[#3ab54a] decoration-2 underline-offset-4 hover:text-[#278a36]">
                full product list
              </Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-16 lg:py-20">
        <div className="max-w-4xl border border-[#dbe3dd] p-8 lg:p-10">
          <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Next step</p>
          <h2 className="mt-3 text-[clamp(1.5rem,2.4vw,2.2rem)] font-extrabold leading-[1.08] tracking-[-0.05em] text-[#152019]">
            Quote the model against your own numbers.
          </h2>
          <p className="mt-4 text-base leading-8 font-semibold text-[#152019]">{SOLUTION_CTA}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex bg-[#3ab54a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#278a36]">
              Contact the export team
            </Link>
            <Link href="/certifications" className="inline-flex border border-[#152019] px-6 py-3 text-sm font-bold text-[#152019] transition-colors hover:bg-[#152019] hover:text-white">
              See the documents
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
