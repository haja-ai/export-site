import { notFound } from 'next/navigation';
import { newsArticles } from '@/lib/news';
import { NEWS_CATEGORIES, CATEGORY_BY_SLUG } from '@/lib/news-taxonomy';
import TopicArchive from '@/app/components/TopicArchive';

export const dynamicParams = false;

export function generateStaticParams() {
  return NEWS_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = CATEGORY_BY_SLUG[slug];
  if (!category) return { title: 'Topic not found' };
  return {
    title: { absolute: category.title },
    description: category.description,
    alternates: { canonical: `https://www.semwheelchair.com/news/category/${category.slug}` },
    openGraph: {
      title: category.title,
      description: category.description,
      url: `https://www.semwheelchair.com/news/category/${category.slug}`,
      type: 'website',
    },
  };
}

export default async function NewsCategoryPage({ params }) {
  const { slug } = await params;
  const category = CATEGORY_BY_SLUG[slug];
  if (!category) notFound();
  return <TopicArchive all={newsArticles} category={category} page={1} />;
}
