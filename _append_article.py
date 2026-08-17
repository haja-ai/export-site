# -*- coding: utf-8 -*-
# Append article to lib/news.js using string replacement (NOT patch)
# Uses __SLUG__ / __CONTENT__ placeholders to avoid '''-in-string issues.

SLUG = "electric-wheelchair-vs-manual-wheelchair-b2b-guide"

with open("_draft_article.txt", "r", encoding="utf-8") as f:
    content = f.read().strip()

article = '''  {
    slug: '__SLUG__',
    bannerImage: '/images/news/__SLUG__-banner.webp',
    title: 'Electric Wheelchair vs Manual Wheelchair: 2026 B2B Buyer Guide',
    date: '2026-08-17',
    summary:
      'Electric wheelchairs and manual wheelchairs serve different end users, cost structures, and logistics profiles, and most B2B distributors need both in their catalog. This data-driven comparison covers weight, speed, range, total cost of ownership, caregiver load, and a four-step decision framework for stocking the right mix.',
    tags: ['Electric Wheelchair', 'Manual Wheelchair', 'Comparison', 'B2B Guide'],
    source: 'MiniElephant Official',
    sourceUrl: 'https://www.semwheelchair.com/news/__SLUG__',
    content: `
__CONTENT__
`,
  },'''

article = article.replace('__SLUG__', SLUG).replace('__CONTENT__', content)

src_path = "lib/news.js"
src = open(src_path, encoding="utf-8").read()
insert_pos = src.rfind('\n];')
if insert_pos == -1:
    raise SystemExit("ERROR: array close not found")
new_content = src[:insert_pos] + '\n' + article + src[insert_pos:]

with open(src_path, "w", encoding="utf-8", newline="") as f:
    f.write(new_content)

# sanity checks
src2 = open(src_path, encoding="utf-8").read()
print("opens:", src2.count('\n    content: `\n'))
print("closes:", src2.count('`,\n'))
print("stray },,:", src2.count('  },,'))
print("slug count:", src2.count("slug: '"))
print("done")
