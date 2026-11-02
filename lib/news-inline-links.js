// Injects contextual internal links into an article body at render time.
// Targets come from the news library ranked by tag overlap; a target is only used when
// one of its keyword phrases already appears in the body, so the anchor reads naturally.
const SLUG_STOP = new Set([
  'electric', 'wheelchair', 'wheelchairs', 'b2b', 'guide', 'guides', 'tips',
  '2024', '2025', '2026', 'the', 'and', 'for', 'with', 'to', 'in', 'of', 'a',
  'an', 'on', 'by', 'vs', 'from', 'at', 'how', 'what', 'why',
]);

const MD_LINK = /\[[^\]]*\]\([^)]*\)/g;
const MAX_ARTICLE_LINKS = 3;
const MIN_PHRASE = 7;
const PRODUCT_ANCHORS = ['folding electric wheelchair', 'foldable electric wheelchair', 'electric wheelchair models', 'electric wheelchairs'];

function slugPhrases(slug) {
  const tokens = String(slug || '').split('-').filter((t) => t && !SLUG_STOP.has(t));
  const out = new Set();
  const maxLen = Math.min(3, tokens.length);
  for (let n = maxLen; n >= 2; n -= 1) {
    for (let i = 0; i + n <= tokens.length; i += 1) out.add(tokens.slice(i, i + n).join(' '));
  }
  return Array.from(out).sort((a, b) => b.length - a.length);
}

function maskLinks(text) {
  return text.replace(MD_LINK, (match) => ' '.repeat(match.length));
}

let indexCache = null;

export function buildLinkIndex(all) {
  if (indexCache && indexCache.source === all) return indexCache.entries;
  const entries = (all || [])
    .filter((a) => a && a.slug && a.title)
    .map((a) => ({ slug: a.slug, title: a.title, date: String(a.date || ''), tags: a.tags || [], phrases: slugPhrases(a.slug) }));
  indexCache = { source: all, entries };
  return entries;
}

function relevance(entry, article) {
  const tags = new Set(article.tags || []);
  return (entry.tags || []).filter((t) => tags.has(t)).length;
}

// products: [{ slug, name }] - name is the display name such as "MiniRedone-III".
export function addContextualLinks(content, article, all, products) {
  const lines = String(content || '').split('\n');
  const masked = lines.map(maskLinks);
  const entries = buildLinkIndex(all);
  const injected = [];
  const linked = new Set();
  let productLinked = false;

  const tryLink = (href, phrases) => {
    for (const phrase of phrases) {
      if (!phrase || phrase.length < MIN_PHRASE) continue;
      const needle = phrase.toLowerCase();
      for (let i = 0; i < lines.length; i += 1) {
        const raw = lines[i];
        if (!raw || raw.startsWith('#') || raw.trimStart().startsWith('|') || raw.trimStart().startsWith('>')) continue;
        const hay = masked[i].toLowerCase();
        let from = 0;
        let idx = hay.indexOf(needle, from);
        while (idx !== -1) {
          const before = hay[idx - 1];
          const after = hay[idx + phrase.length];
          if ((!before || !/[a-z0-9]/.test(before)) && (!after || !/[a-z0-9]/.test(after))) {
            const original = raw.slice(idx, idx + phrase.length);
            lines[i] = raw.slice(0, idx) + '[' + original + '](' + href + ')' + raw.slice(idx + phrase.length);
            masked[i] = maskLinks(lines[i]);
            injected.push({ anchor: original, href });
            return true;
          }
          from = idx + 1;
          idx = hay.indexOf(needle, from);
        }
      }
    }
    return false;
  };

  const ranked = entries
    .filter((e) => e.slug !== article.slug)
    .map((e) => ({ ...e, score: relevance(e, article) }))
    .filter((e) => e.phrases.length > 0)
    .sort((a, b) => b.score - a.score || b.date.localeCompare(a.date));

  for (const entry of ranked) {
    if (linked.size >= MAX_ARTICLE_LINKS) break;
    if (tryLink('/news/' + entry.slug, entry.phrases)) linked.add(entry.slug);
  }

  const catalogue = (products || []).slice().sort((a, b) => (b.name || '').length - (a.name || '').length);
  for (const product of catalogue) {
    if (productLinked) break;
    const name = String(product.name || '');
    const variants = [name, name.replace(/-/g, ' '), name.replace(/-/g, '')].filter(Boolean);
    productLinked = tryLink('/products/' + product.slug, variants);
  }

  if (!productLinked) productLinked = tryLink('/products', PRODUCT_ANCHORS);

  return { content: lines.join('\n'), injected, productLinked };
}
