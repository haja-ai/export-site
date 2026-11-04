import Link from 'next/link';
import { newsArticles } from '@/lib/news';

const CATEGORY_LABEL = {
  'buyer-resources': 'Buyer resources',
  'industry-innovation': 'Industry & innovation',
  'wheelchair-insights': 'Wheelchair insights',
  'company-life-events': 'Company life & events',
  'company-life': 'Company life & events',
};

function categoryLabel(category) {
  if (!category) return 'Buyer resources';
  return CATEGORY_LABEL[category] || category.replace(/-/g, ' ');
}

function excerpt(text, max) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const stop = cut.lastIndexOf('. ');
  return (stop > max * 0.55 ? cut.slice(0, stop + 1) : `${cut.replace(/[,;:\s]+$/, '')}...`).trim();
}

/**
 * Internal links from commercial pages into the News knowledge base.
 * Server component: pulls only the fields it renders, so the article list
 * never ships to the client bundle.
 */
export default function GuideLinks({
  slugs,
  id = 'guides',
  eyebrow = 'Buyer resources',
  title = 'Guides for buyers and distributors',
  intro,
  tone = 'muted',
  columns = 3,
  blurbs,
  labels,
  categoryHref,
  categoryHrefLabel = 'related',
}) {
  const items = slugs
    .map((slug) => newsArticles.find((article) => article.slug === slug))
    .filter(Boolean);

  if (items.length === 0) return null;

  const shell = tone === 'muted' ? 'bg-[#f4f7f4] border-y border-[#dbe3dd]' : 'bg-white border-t border-[#dbe3dd]';
  const grid = columns === 4
    ? 'sm:grid-cols-2 lg:grid-cols-4'
    : columns === 2
      ? 'sm:grid-cols-2'
      : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <section id={id} className={`px-6 py-20 sm:px-8 lg:px-16 lg:py-24 ${shell}`}>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.13em] text-[#278a36]">{eyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.9rem,3.1vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.05em]">{title}</h2>
        </div>
        <Link href="/news" className="border-b border-[#3ab54a] pb-1 text-sm font-bold transition-colors hover:text-[#278a36]">
          All buyer guides
        </Link>
      </div>
      {intro ? <p className="mt-5 max-w-3xl text-base leading-8 text-[#657069]">{intro}</p> : null}
      <div className={`mt-10 grid gap-px border border-[#dbe3dd] bg-[#dbe3dd] ${grid}`}>
        {items.map((article) => (
          <Link
            key={article.slug}
            href={`/news/${article.slug}`}
            className="group flex flex-col justify-between bg-white p-6 transition-colors hover:bg-[#f9fbf9]"
          >
            <div>
              <div className="flex items-center gap-3 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-[#278a36]">
                <span>Guide</span>
                <span className="h-px w-6 bg-[#dbe3dd]" />
                <span className="font-bold uppercase tracking-[0.04em] text-[#8a968d]">{(labels && labels[article.slug]) || categoryLabel(article.category)}</span>
              </div>
              <h3 className="mt-3 text-base font-bold leading-6 tracking-[-0.02em] text-[#152019] transition-colors group-hover:text-[#278a36]">
                {article.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#657069]">{(blurbs && blurbs[article.slug]) || excerpt(article.summary, 130)}</p>
            </div>
            <span className="mt-5 text-xs font-extrabold uppercase tracking-[0.1em] text-[#152019] group-hover:text-[#278a36]">Read the guide &rarr;</span>
          </Link>
        ))}
      </div>
      {categoryHref ? (
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#dbe3dd] pt-5">
          <p className="text-sm text-[#657069]">More buying, compliance and technical guides in the news archive.</p>
          <Link href={categoryHref} className="border-b border-[#3ab54a] pb-1 text-sm font-bold text-[#152019] transition-colors hover:text-[#278a36]">
            Browse all {categoryHrefLabel} articles &rarr;
          </Link>
        </div>
      ) : null}
    </section>
  );
}
