'use client';

// 区块渲染器：根据 section.type 渲染对应真实组件
// 首页从 site-sections.js 的区块数组渲染
import Link from 'next/link';
import { wheelchairs } from '@/lib/products';
import { getRecentArticles } from '@/lib/news';
import ProductCard from './ProductCard';
import WhyChooseUs from './WhyChooseUs';
import CertificatesSection from './CertificatesSection';
import IntellectualPropertySection from './IntellectualPropertySection';
import ContactForm from './ContactForm';
import { PulseFitHero } from "@/components/ui/pulse-fit-hero";

// 区块样式映射
const paddingYMap = {
  '0': 'py-0',
  'sm': 'py-8 lg:py-12',
  'md': 'py-12 lg:py-16',
  'lg': 'py-16 lg:py-24',
};
const bgMap = {
  white: 'bg-white',
  gray: 'bg-[#F8F9FA]',
  cream: 'bg-cream',
  teal: 'bg-gradient-to-r from-teal to-teal-dark',
  dark: 'bg-gray-900',
};

export default function SectionRenderer({ section, className }) {
  const c = section.content || {};
  const style = section.style || {};
  const padClass = paddingYMap[style.paddingY] || paddingYMap['lg'];
  const bgClass = bgMap[style.background] || bgMap.white;
  const wrapCls = `${padClass} ${bgClass} ${className || ''}`;

  switch (section.type) {
    case 'hero':
      return (
        <PulseFitHero
          logo="MiniElephant"
          navigation={[
            { label: "Home", href: '/' },
            { label: "Products", href: '/products' },
            { label: "About Us", href: '/about' },
            { label: "FAQ", href: '/faq' },
            { label: "News", href: '/news' },
            { label: "Contact", href: '/contact' },
          ]}
          ctaButton={{ label: 'Get a Quote', href: '/contact' }}
          title={c.title}
          subtitle={c.subtitle}
          primaryAction={{ label: c.primaryLabel || 'Browse Models', href: c.primaryHref || '/products' }}
          secondaryAction={{ label: c.secondaryLabel || 'Get a Quote', href: c.secondaryHref || '/contact' }}
          programs={c.programs || []}
          bannerImage="/images/wheelchair-banner.webp"
          bannerVideo={c.bannerVideo}
          bannerPoster={c.bannerPoster}
        />
      );

    case 'stats':
      return (
        <section className={wrapCls}>
          <div className="px-6 sm:px-8 lg:px-16">
            {c.title && (
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-10">{c.title}</h2>
            )}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {(c.stats || []).map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-teal">{s.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case 'productGrid': {
      const featured = (c.productSlugs || [])
        .map(slug => wheelchairs.find(w => w.slug === slug))
        .filter(Boolean);
      return (
        <section className={wrapCls}>
          <div className="px-6 sm:px-8 lg:px-16">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 mb-10">
              <div>
                {c.badge && (
                  <span className="text-teal font-semibold text-sm uppercase tracking-widest">{c.badge}</span>
                )}
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">{c.title}</h2>
                {c.description && (
                  <p className="text-gray-500 max-w-xl mt-3">{c.description}</p>
                )}
              </div>
              {c.viewAllLabel && (
                <Link href={c.viewAllHref || '/products'} className="text-teal font-semibold hover:text-teal-dark inline-flex items-center gap-1 shrink-0">
                  {c.viewAllLabel}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featured.map((product, i) => (
                <ProductCard key={product.slug} product={product} index={i} />
              ))}
            </div>
          </div>
        </section>
      );
    }

    case 'features':
      return <WhyChooseUs advantages={(c.items || []).map((item, i) => ({ ...item, icon: i }))} title={c.title} description={c.description} badge={c.badge} className={wrapCls} />;

    case 'textImage':
      return (
        <section className={wrapCls}>
          <div className="px-6 sm:px-8 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                {c.badge && (
                  <span className="text-teal font-semibold text-sm uppercase tracking-widest">{c.badge}</span>
                )}
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">{c.title}</h2>
                {(c.paragraphs || []).map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-6">{p}</p>
                ))}
                {c.linkLabel && (
                  <Link href={c.linkHref || '/about'} className="text-teal font-semibold hover:text-teal-dark inline-flex items-center gap-1">
                    {c.linkLabel}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {(c.stats || []).map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                    <div className="text-2xl font-bold text-teal mb-1">{item.value}</div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );

    case 'cta':
      return (
        <section className={wrapCls}>
          <div className="px-6 sm:px-8 lg:px-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{c.title}</h2>
            {c.description && (
              <p className="text-teal-light/80 max-w-xl mx-auto mb-8">{c.description}</p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {c.buttonLabel && (
                <Link href={c.buttonHref || '/contact'} className="inline-flex items-center px-8 py-4 bg-white text-teal font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  {c.buttonLabel}
                </Link>
              )}
              {c.secondaryLabel && (
                <Link href={c.secondaryHref || '/products'} className="inline-flex items-center px-8 py-4 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  {c.secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </section>
      );

    case 'text':
      return (
        <section className={wrapCls}>
          <div className="px-6 sm:px-8 lg:px-16 max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{c.title}</h2>
            {(c.paragraphs || []).map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">{p}</p>
            ))}
          </div>
        </section>
      );

    case 'spacer':
      return <div style={{ height: (c.height || 64), background: bgClass === 'bg-white' ? '#fff' : undefined }} />;

    case 'twoCol':
      return (
        <section className={wrapCls}>
          <div className="px-6 sm:px-8 lg:px-16 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{c.leftTitle}</h3>
              <p className="text-gray-600 leading-relaxed">{c.leftText}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{c.rightTitle}</h3>
              <p className="text-gray-600 leading-relaxed">{c.rightText}</p>
            </div>
          </div>
        </section>
      );

    case 'companyInfo':
      return (
        <section className={wrapCls}>
          <div className="px-6 sm:px-8 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                {c.badge && (
                  <span className="text-teal font-semibold text-sm uppercase tracking-widest">{c.badge}</span>
                )}
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 mt-2">{c.title}</h2>
                {(c.paragraphs || []).map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">{p}</p>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {(c.stats || []).map((item, i) => (
                  <div key={i} className="bg-cream rounded-xl p-6 border border-gray-100 text-center">
                    <div className="text-2xl font-bold text-teal mb-1">{item.value}</div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );

    case 'certificates':
      return <CertificatesSection />;

    case 'intellectualProperty':
      return <IntellectualPropertySection />;

    case 'newsGrid': {
      const articles = getRecentArticles(c.count || 3);
      return (
        <section className={wrapCls}>
          <div className="px-6 sm:px-8 lg:px-16">
            <div className="flex items-end justify-between mb-8">
              <div>
                {c.badge && (
                  <span className="text-teal font-semibold text-sm uppercase tracking-widest">{c.badge}</span>
                )}
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2">{c.title}</h2>
              </div>
              {c.viewAllLabel && (
                <Link href={c.viewAllHref || '/news'} className="text-teal font-semibold text-sm hover:text-teal-dark transition-colors inline-flex items-center gap-1 shrink-0">
                  {c.viewAllLabel}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link key={article.slug} href={`/news/${article.slug}`}
                  className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-teal/20 transition-all group">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] bg-teal/10 text-teal px-2 py-0.5 rounded-full font-medium">{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal transition-colors line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{article.summary}</p>
                  <time className="text-xs text-gray-400 mt-3 block">{article.date}</time>
                </Link>
              ))}
            </div>
          </div>
        </section>
      );
    }

    case 'faqList':
      return (
        <section className={wrapCls}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {(c.faqs || []).map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden mb-3">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors list-none">
                  <span className="text-gray-900 font-medium pr-4">{faq.q}</span>
                  <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      );

    case 'contactInfo':
      return (
        <section className={wrapCls}>
          <div className="px-6 sm:px-8 lg:px-16 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              {c.badge && <span className="text-teal font-semibold text-sm uppercase tracking-widest">{c.badge}</span>}
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">{c.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {c.email && (
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">Email</div>
                  <a href={`mailto:${c.email}`} className="text-teal font-semibold hover:text-teal-dark">{c.email}</a>
                </div>
              )}
              {c.phone && (
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">Phone</div>
                  <a href={`tel:${c.phone}`} className="text-teal font-semibold hover:text-teal-dark">{c.phone}</a>
                </div>
              )}
              {c.whatsapp && (
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">WhatsApp</div>
                  <a href={`https://wa.me/${c.whatsapp.replace(/[^0-9]/g, '')}`} className="text-teal font-semibold hover:text-teal-dark">{c.whatsapp}</a>
                </div>
              )}
              {c.hours && (
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">Working Hours</div>
                  <div className="text-gray-800 font-medium">{c.hours}</div>
                </div>
              )}
              {c.address && (
                <div className="bg-white rounded-xl p-6 border border-gray-200 md:col-span-2">
                  <div className="text-sm text-gray-500 mb-1">Address</div>
                  <div className="text-gray-800">{c.address}</div>
                </div>
              )}
            </div>
          </div>
        </section>
      );

    case 'contactForm':
      return (
        <section className={wrapCls}>
          <div className="px-6 sm:px-8 lg:px-16 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{c.title}</h2>
              {c.description && <p className="text-gray-500 max-w-xl mx-auto">{c.description}</p>}
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </section>
      );

    case 'productCatalog':
      return (
        <section className={wrapCls}>
          <div className="px-6 sm:px-8 lg:px-16">
            <div className="text-center mb-12">
              {c.badge && <span className="text-teal font-semibold text-sm uppercase tracking-widest">{c.badge}</span>}
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">{c.title}</h2>
              {c.description && <p className="text-gray-500 max-w-2xl mx-auto">{c.description}</p>}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {wheelchairs.map((product, i) => (
                <ProductCard key={product.slug} product={product} index={i} />
              ))}
            </div>
          </div>
        </section>
      );

    case 'quote':
      return (
        <section className={wrapCls}>
          <div className="px-6 sm:px-8 lg:px-16 max-w-3xl mx-auto text-center">
            <p className="text-xl lg:text-2xl text-gray-700 italic leading-relaxed">"{c.text}"</p>
            {c.author && <div className="text-gray-500 font-semibold mt-4">— {c.author}</div>}
          </div>
        </section>
      );

    default:
      return null;
  }
}
