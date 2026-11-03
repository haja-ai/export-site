import Link from 'next/link';

function pageHref(page) {
  return page === 1 ? '/news' : `/news/page/${page}`;
}

export default function NewsPager({ current, pages }) {
  if (pages <= 1) return null;
  const numbers = Array.from({ length: pages }, (_, i) => i + 1);
  return (
    <nav className="mt-10 border-t border-[#dbe3dd] pt-6" aria-label="News pagination">
      <div className="flex flex-wrap items-center gap-2">
        {current > 1 && (
          <Link
            href={pageHref(current - 1)}
            rel="prev"
            className="border border-[#dbe3dd] bg-white px-3 py-2 text-xs font-bold text-[#526158] transition-colors hover:border-[#3ab54a] hover:text-[#278a36]"
          >
            ← Previous
          </Link>
        )}
        {numbers.map((n) => (
          <Link
            key={n}
            href={pageHref(n)}
            aria-current={n === current ? 'page' : undefined}
            className={`border px-3 py-2 text-xs font-bold transition-colors ${n === current ? 'border-[#152019] bg-[#152019] text-white' : 'border-[#dbe3dd] bg-white text-[#526158] hover:border-[#3ab54a] hover:text-[#278a36]'}`}
          >
            {n}
          </Link>
        ))}
        {current < pages && (
          <Link
            href={pageHref(current + 1)}
            rel="next"
            className="border border-[#dbe3dd] bg-white px-3 py-2 text-xs font-bold text-[#526158] transition-colors hover:border-[#3ab54a] hover:text-[#278a36]"
          >
            Next →
          </Link>
        )}
      </div>
      <p className="mt-4 text-xs text-[#657069]">
        Page {current} of {pages}. Every page is a stable URL you can bookmark or crawl.
      </p>
    </nav>
  );
}
