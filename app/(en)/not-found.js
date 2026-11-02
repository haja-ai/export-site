import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | MiniElephant',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="text-center max-w-md">
        <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-2">404</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-500 leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-teal text-white font-semibold rounded-lg hover:bg-teal-dark transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/products"
            className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:border-teal/40 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
