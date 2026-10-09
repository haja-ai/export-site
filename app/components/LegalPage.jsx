import PulseFitPage from './PulseFitPage';

export default function LegalPage({ badge, title, description, lastUpdated, children }) {
  return (
    <PulseFitPage
      bannerImage="/images/banner-contact.webp"
      badge={badge}
      title={title}
      description={description}
    >
      <article className="bg-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
          <p className="text-sm text-gray-500 border-b border-gray-100 pb-6 mb-8">Last updated: {lastUpdated}</p>
          <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-a:text-teal prose-a:font-medium">
            {children}
          </div>
        </div>
      </article>
    </PulseFitPage>
  );
}
