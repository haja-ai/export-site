// Renders the article body Markdown subset, including real multi-column tables.
// Table rows are grouped into blocks so a 2..6 column table renders as a table instead of
// leaking raw pipe/separator characters into the page.
const COL_CLASS = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
};

const MIN_WIDTH = {
  1: '',
  2: '',
  3: '',
  4: 'min-w-[560px]',
  5: 'min-w-[640px]',
  6: 'min-w-[720px]',
};

const SEPARATOR = /^\|?[\s:|-]*-{2,}[\s:|-]*\|?$/;

function isTableRow(line) {
  const t = line.trim();
  return t.startsWith('|') && t.endsWith('|') && t.length > 2;
}

function splitCells(line) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((c) => c.trim());
}

function inlineHtml(text) {
  let html = String(text || '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, label, href) =>
    href.startsWith('/')
      ? '<a href="' + href + '" class="text-teal hover:underline">' + label + '</a>'
      : '<a href="' + href + '" target="_blank" rel="noopener" class="text-teal hover:underline">' + label + '</a>'
  );
  return html;
}

function buildBlocks(content) {
  const lines = String(content || '').replace(/\r\n?/g, '\n').split('\n');
  const blocks = [];
  let i = 0;
  const BULLET = /^\s*[-*]\s+(.*)$/;
  const NUMBERED = /^\s*\d+[.)]\s+(.*)$/;
  while (i < lines.length) {
    const bullet = lines[i].match(BULLET);
    const numbered = lines[i].match(NUMBERED);
    if (bullet || numbered) {
      const ordered = Boolean(numbered);
      const items = [];
      while (i < lines.length) {
        const m = lines[i].match(ordered ? NUMBERED : BULLET);
        if (!m && lines[i].trim() === '') {
          // allow a single blank line inside a list, but stop at a double blank
          if (lines[i + 1] && lines[i + 1].trim() === '') break;
          if (lines[i + 1] && (ordered ? NUMBERED.test(lines[i + 1]) : BULLET.test(lines[i + 1]))) { i += 1; continue; }
          break;
        }
        if (!m) break;
        items.push(m[1]);
        i += 1;
      }
      if (items.length) blocks.push({ type: ordered ? 'ol' : 'ul', items, key: 'l' + blocks.length });
      continue;
    }
    if (isTableRow(lines[i])) {
      const rows = [];
      while (i < lines.length && isTableRow(lines[i])) {
        const line = lines[i].trim();
        if (!SEPARATOR.test(line)) {
          const cells = splitCells(line);
          if (cells.some((c) => c.length > 0)) rows.push(cells);
        }
        i += 1;
      }
      if (rows.length) blocks.push({ type: 'table', rows, key: 't' + blocks.length });
      continue;
    }
    blocks.push({ type: 'line', text: lines[i], key: 'l' + blocks.length });
    i += 1;
  }
  return blocks;
}

function Table({ rows }) {
  const width = Math.max(...rows.map((r) => r.length));
  const cols = Math.min(Math.max(width, 1), 6);
  const [head, ...body] = rows;
  const grid = COL_CLASS[cols] || 'grid-cols-3';
  const minWidth = MIN_WIDTH[cols] || '';
  return (
    <div className="-mx-4 my-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <div className={minWidth}>
        <div className={'grid ' + grid + ' gap-3 border-b-2 border-gray-300 py-2 text-sm font-semibold text-gray-800'}>
          {head.map((cell, j) => (
            <span key={j} dangerouslySetInnerHTML={{ __html: inlineHtml(cell) }} />
          ))}
        </div>
        {body.map((row, r) => (
          <div
            key={r}
            className={
              'grid ' + grid + ' gap-3 border-b border-gray-100 py-2 text-sm ' + (r % 2 ? 'bg-gray-50/60' : '')
            }
          >
            {Array.from({ length: cols }).map((_, j) => (
              <span
                key={j}
                className={j === 0 ? 'font-medium text-gray-800' : 'text-gray-600'}
                dangerouslySetInnerHTML={{ __html: inlineHtml(row[j] || '') }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function NewsBody({ content }) {
  const blocks = buildBlocks(content);
  return (
    <>
      {blocks.map((block) => {
        if (block.type === 'table') return <Table key={block.key} rows={block.rows} />;
        if (block.type === 'ul' || block.type === 'ol') {
          const Tag = block.type === 'ul' ? 'ul' : 'ol';
          return (
            <Tag key={block.key} className={block.type === 'ul' ? 'list-disc pl-6 my-4 space-y-2' : 'list-decimal pl-6 my-4 space-y-2'}>
              {block.items.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: inlineHtml(item) }} />
              ))}
            </Tag>
          );
        }
        const line = block.text;
        if (line.startsWith('## ')) return <h2 key={block.key}>{line.slice(3)}</h2>;
        if (line.startsWith('### ')) return <h3 key={block.key}>{line.slice(4)}</h3>;
        if (line.startsWith('#### ')) return <h4 key={block.key}>{line.slice(5)}</h4>;
        if (line.startsWith('> '))
          return (
            <blockquote key={block.key} className="border-l-4 border-teal pl-4 italic text-gray-600 my-4">
              <p>{line.slice(2)}</p>
            </blockquote>
          );
        const html = inlineHtml(line);
        if (!html.trim()) return <br key={block.key} />;
        return <p key={block.key} dangerouslySetInnerHTML={{ __html: html }} />;
      })}
    </>
  );
}
