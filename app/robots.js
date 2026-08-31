export default function robots() {
  const aiAndSearchAgents = [
    'GPTBot',
    'ChatGPT-User',
    'OAI-SearchBot',
    'ClaudeBot',
    'Claude-Web',
    'anthropic-ai',
    'Google-Extended',
    'PerplexityBot',
    'CCBot',
    'MistralAI-User',
    'DuckAssistBot',
    'Diffbot',
    'cohere-ai',
    'Amazonbot',
    'Meta-ExternalAgent',
    'FacebookBot',
    'Applebot',
    'Applebot-Extended',
    'bingbot',
    'Bytespider',
    'Baiduspider',
    'Baiduspider-render',
    'YisouSpider',
    '360Spider',
    'Sogou web spider',
    'Sogou inst spider',
  ];

  return {
    rules: [
      // Public website content is open to search and AI retrieval.
      ...aiAndSearchAgents.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/', '/admin/'],
      })),
      // Keep private tools and APIs out of crawlers without blocking public content.
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: 'https://www.semwheelchair.com/sitemap.xml',
  };
}
