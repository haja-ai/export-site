# -*- coding: utf-8 -*-
"""Build article JS object, append to news.js before final ];, validate."""
import re

news_path = r"C:\Users\Administrator\Desktop\export-site\lib\news.js"
draft_path = r"C:\Users\Administrator\Desktop\export-site\scripts\_draft_final.txt"

with open(news_path, encoding="utf-8") as f:
    src = f.read()
with open(draft_path, encoding="utf-8") as f:
    content = f.read().strip("\n")  # strip trailing newline; keep leading

# Safety checks on content
assert "`" not in content, "content contains backticks!"
assert '"""' not in content, "content contains triple quotes!"
print("content chars:", len(content))
print("content has double quotes:", '"' in content)
print("content has apostrophes:", "'" in content)

slug = "electric-wheelchair-brakes-comparison-b2b"

article = f'''
  // ===== 2026-08-10: Electric Wheelchair Brakes Comparison =====
  {{
    slug: '{slug}',
    bannerImage: '/images/news/{slug}-banner.webp',
    title: 'Electric Wheelchair Brakes: Electromagnetic vs Manual vs Regenerative',
    date: '2026-08-10',
    summary:
      'Electromagnetic, manual, and regenerative braking systems each change the safety profile, maintenance cost, and warranty risk of an electric wheelchair. This comparison covers holding capability, fail-safe behavior, and factory inspection checks so B2B importers can spec the right brake configuration for their market.',
    tags: ['Brake Systems', 'Safety', 'Comparison', 'B2B Import'],
    source: 'MiniElephant Official',
    sourceUrl: 'https://www.semwheelchair.com/news/{slug}',
    content: `
{content}
`,
  }},
'''

insert_pos = src.rfind("\n];")
print("insert_pos:", insert_pos)
new_src = src[:insert_pos] + "\n" + article + src[insert_pos:]

with open(news_path, "w", encoding="utf-8", newline="") as f:
    f.write(new_src)

# Diagnostics
print("stray double-comma '  },,' count:", new_src.count("  },,"))
print("done. new file size:", len(new_src))
