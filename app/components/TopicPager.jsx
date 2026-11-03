import Link from 'next/link';

function topicHref(slug, page) {
  return page === 1 ? `/news/category/${slug}` : `/news/category/${slug}/page/${page}`;
}

// Same chip styling as NewsPager so the archive and the topic hubs read as one system.
export default function TopicPager({ slug, current, pages, total, start, end, position = 'top' }) {
  if (pages <= 1) return null;
  const numbers = Array.from({ length: pages }, (_, i) => i + 1);
  return (
    <nav
      className={position === 'top' ? 'mb-7 border-b border-[#dbe3dd] pb-5' : 'mt-10 border-t border-[#dbe3dd] pt-6'}
      aria-label={`Topic pages, ${position}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-[0.66rem] font-extrabold uppercase tracking-[0.12em] text-[#278a36]">Pages</span>
        {numbers.map((n) => (
          <Link
            key={n}
            href={topicHref(slug, n)}
            aria-current={n === current ? 'page' : undefined}
            className={`border px-3 py-2 text-xs font-bold transition-colors ${n === current ? 'border-[#152019] bg-[#152019] text-white' : 'border-[#dbe3dd] bg-white text-[#526158] hover:border-[#3ab54a] hover:text-[#278a36]'}`}
          >
            {n}
          </Link>
        ))}
        {current > 1 && (
          <Link
            href={topicHref(slug, current - 1)}
            rel="prev"
            className="ml-1 border border-[#dbe3dd] bg-white px-3 py-2 text-xs font-bold text-[#526158] transition-colors hover:border-[#3ab54a] hover:text-[#278a36]"
          >
            ← Previous
          </Link>
        )}
        {current < pages && (
          <Link
            href={topicHref(slug, current + 1)}
            rel="next"
            className="ml-1 border border-[#dbe3dd] bg-white px-3 py-2 text-xs font-bold text-[#526158] transition-colors hover:border-[#3ab54a] hover:text-[#278a36]"
          >
            Next →
          </Link>
        )}
      </div>
      <p className="mt-3 text-xs text-[#657069]">
        Articles {start}–{end} of {total} · page {current} of {pages}
      </p>
    </nav>
  );
}
