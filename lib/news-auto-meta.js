// Fits article metadata into Google's SERP width: titles <= 60, descriptions <= 165.
// Articles whose own title/summary already fit are returned unchanged.
const TITLE_MAX = 60;
const DESC_MAX = 165;
const DESC_MIN = 120;

// Words that must never end a truncated title/description.
const DANGLING = /(?:^|\s)(and|or|for|with|to|in|of|the|a|an|on|by|from|vs|at|as|per|b2b|complete|ultimate|essential|practical|detailed|comprehensive|your|our|its|this|that|these|those|including|such|than|more|most|very|what|which|how|why|when|where|who|must|need|needs|buyer|buyers|distributor|distributors|importer|importers|dealer|dealers|reliable|solid|standard|while|because|but|so|as|if|unless|although|since|until|where|whether|after|before)\s*$/i;
const TAIL_PUNCT = /[\s,;:.\-–—]+$/;

function stripDangling(input) {
  let out = String(input || '');
  for (let i = 0; i < 5; i += 1) {
    const next = out.replace(DANGLING, '').replace(TAIL_PUNCT, '');
    if (next === out) break;
    out = next;
  }
  return out.trim();
}

function clipWords(text, max) {
  if (text.length <= max) return text;
  const slice = text.slice(0, max + 1);
  const space = slice.lastIndexOf(' ');
  return stripDangling(space > 0 ? slice.slice(0, space) : slice);
}

const TITLE_BREAKS = [
  ', ', ' and ', ' or ', ' vs ', ' for ', ' in ', ' to ', ' of ', ' with ', ' — ',
  ' without ', ' after ', ' before ', ' that ', ' when ', ' what ', ' which ',
  ' how ', ' why ', ' where ', ' who ', ' must ', ' a ', ' an ', ' b2b ',
];

const KEYWORD = /electric\s?wheel\s?chairs?/i;

function clipOnBreak(text, budget) {
  if (text.length <= budget) return stripDangling(text);

  let best = 0;
  for (const brk of TITLE_BREAKS) {
    let idx = text.indexOf(brk);
    while (idx !== -1) {
      if (idx > best && idx <= budget) best = idx;
      idx = text.indexOf(brk, idx + 1);
    }
  }

  const onBreak = best >= 8 ? stripDangling(text.slice(0, best)) : '';
  if (!onBreak) return clipWords(text, budget);

  // Never let the trim drop the head keyword when a plain word cut could keep it.
  const wordCut = clipWords(text, budget);
  if (KEYWORD.test(wordCut) && !KEYWORD.test(onBreak)) return wordCut;
  return onBreak;
}

export function fitTitle(rawTitle) {
  const raw = String(rawTitle || '').replace(/\s+/g, ' ').trim();
  if (raw.length <= TITLE_MAX) return raw;

  // Titles follow "Electric Wheelchair Topic: Subtitle" - keep the head, shrink the subtitle.
  const sep = raw.indexOf(': ');
  if (sep > 0) {
    const head = stripDangling(raw.slice(0, sep));
    const budget = TITLE_MAX - head.length - 2;
    if (head.length <= 46 && budget >= 8) {
      const tail = clipOnBreak(raw.slice(sep + 2), budget);
      if (tail.length >= 8) return head + ': ' + tail;
    }
    if (head.length <= TITLE_MAX) return head;
  }

  const noParens = raw.replace(/\s*\([^)]*\)/g, '');
  if (noParens.length <= TITLE_MAX) return stripDangling(noParens);
  return clipOnBreak(noParens, TITLE_MAX);
}

function stripMarkdown(text) {
  return String(text || '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .replace(/^#+\s*/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function splitSentences(text) {
  const found = String(text).match(/[^.!?]+[.!?]+/g);
  return found && found.length ? found.map((s) => s.trim()).filter(Boolean) : [];
}

// Accumulates whole sentences while they still fit, so the description never ends mid-clause.
function accumulate(text, minLength) {
  const clean = stripMarkdown(text);
  if (!clean) return null;
  if (clean.length <= DESC_MAX) return clean.length >= minLength ? clean : null;
  const sentences = splitSentences(clean);
  let out = '';
  for (const sentence of sentences) {
    const next = out ? out + ' ' + sentence : sentence;
    if (next.length > DESC_MAX) break;
    out = next;
    if (out.length >= minLength) return out;
  }
  return null;
}

const SUBORDINATE = /,\s+(while|because|but|so|which|that|as|if|since|although|whereas|and|or|with|without|including|driven by|based on|depending on|making|allowing|ensuring|requiring)\b[\s\S]*$/i;

function firstProse(content) {
  const lines = String(content || '').split('\n');
  const picked = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith('#') || trimmed.startsWith('|') || trimmed.startsWith('>') || trimmed.startsWith('- ') || /^\d+\.\s/.test(trimmed)) continue;
    picked.push(trimmed);
    if (picked.join(' ').length > 420) break;
  }
  return picked.join(' ');
}

export function fitDescription(article) {
  const summary = stripMarkdown(article && article.summary);
  if (summary.length <= DESC_MAX) return summary;

  const fromSummary = accumulate(summary, DESC_MIN);
  if (fromSummary) return fromSummary;

  const fromBody = accumulate(firstProse(article && article.content), 115);
  if (fromBody) return fromBody;

  const shorter = accumulate(summary, 95);
  if (shorter) return shorter;

  const window = summary.slice(0, DESC_MAX);
  const space = window.lastIndexOf(' ');
  const trimmed = space > 0 ? window.slice(0, space) : window;
  const withoutClause = trimmed.replace(SUBORDINATE, '');
  const stable = withoutClause.length >= 108 ? withoutClause : trimmed;
  return stripDangling(stable).replace(/[,;:\-–—\s]+$/, '') + '.';
}

export function autoMeta(article) {
  return {
    title: fitTitle(article && article.title),
    description: fitDescription(article),
  };
}
