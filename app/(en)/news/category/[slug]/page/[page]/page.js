import { notFound } from 'next/navigation';
import { newsArticles } from '@/lib/news';
import { CATEGORY_BY_SLUG, categoryPage, topicPageParams, topicPageText } from '@/lib/news-taxonomy';
import TopicArchive from '@/app/components/TopicArchive';

export const dynamicParams = false;

export function generateStaticParams() {
  return topicPageParams(newsArticles);
}

export async function generateMetadata({ params }) {
  const { slug, page } = await params;
  const category = CATEGORY_BY_SLUG[slug];
  const n = Number(page);
  if (!category) return { title: 'Topic not found' };
  const state = categoryPage(newsArticles, slug, n);
  if (!Number.isInteger(n) || n < 2 || n > state.pages) return { title: 'Topic page not found' };
  const { title, description } = topicPageText(category, state);
  const url = `https://www.semwheelchair.com/news/category/${slug}/page/${n}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: { title, description, url, type: 'website' },
  };
}

export default async function NewsCategoryPageNumbered({ params }) {
  const { slug, page } = await params;
  const category = CATEGORY_BY_SLUG[slug];
  const n = Number(page);
  if (!category) notFound();
  const state = categoryPage(newsArticles, slug, n);
  if (!Number.isInteger(n) || n < 2 || n > state.pages) notFound();
  return <TopicArchive all={newsArticles} category={category} page={n} />;
}
