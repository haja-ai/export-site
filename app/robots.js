export default function robots() {
  return {
    rules: [
      // ============ AI 搜索引擎 ============
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'MistralAI-User', allow: '/' },
      { userAgent: 'DuckAssistBot', allow: '/' },
      { userAgent: 'Diffbot', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'Amazonbot', allow: '/' },
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
      { userAgent: 'FacebookBot', allow: '/' },
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'bingbot', allow: '/' },
      // ============ 国内 AI / 搜索引擎 ============
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'Baiduspider', allow: '/' },
      { userAgent: 'Baiduspider-render', allow: '/' },
      { userAgent: 'YisouSpider', allow: '/' },
      { userAgent: '360Spider', allow: '/' },
      { userAgent: 'Sogou web spider', allow: '/' },
      { userAgent: 'Sogou inst spider', allow: '/' },
      // ============ 兜底规则 ============
      { userAgent: '*', allow: '/', disallow: '/api/' },
    ],
    sitemap: 'https://www.semwheelchair.com/sitemap.xml',
  };
}
