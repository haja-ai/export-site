import Link from 'next/link';

export const metadata = {
  title: 'Fauteuils Roulants Électriques pour Grossistes',
  description:
    'MiniElephant fabrique des fauteuils roulants électriques pliables MiniRedone pour distributeurs, importateurs et acheteurs OEM/ODM.',
  alternates: {
    canonical: 'https://www.semwheelchair.com/fr',
    languages: {
      'en-US': 'https://www.semwheelchair.com/',
      'es': 'https://www.semwheelchair.com/es',
      'fr': 'https://www.semwheelchair.com/fr',
    },
  },
  openGraph: {
    title: 'Fauteuils Roulants Électriques pour Grossistes | MiniElephant',
    description: 'Gamme MiniRedone pour distributeurs, importateurs et projets OEM/ODM.',
    url: 'https://www.semwheelchair.com/fr',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: 'https://www.semwheelchair.com/og-image.jpg', width: 1200, height: 630, alt: 'MiniElephant fauteuils roulants électriques pliables' }],
  },
};

const facts = [
  ['Marque', 'MiniElephant'],
  ['Gamme de produits', 'MiniRedone'],
  ['Entreprise', 'Jiaxing Small Elephant Medical Technology Co., Ltd.'],
  ['Produit', 'Fauteuils roulants électriques pliables pour exportation B2B'],
  ['Configuration courante', 'Deux moteurs de 350 W et batterie LiFePO₄ de 16 Ah ; confirmer la configuration finale avant l’achat'],
];

export default function FrenchPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200 px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
          <Link href="/" aria-label="Accueil MiniElephant"><img src="/logo-black.png" alt="MiniElephant" className="h-12 w-auto" /></Link>
          <nav className="flex gap-4 text-sm" aria-label="Sélecteur de langue">
            <Link href="/" className="hover:text-teal-600">English</Link>
            <Link href="/es" className="hover:text-teal-600">Español</Link>
            <span className="font-semibold text-teal-600">Français</span>
          </nav>
        </div>
      </header>
      <section className="bg-gray-950 text-white px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-teal-300 text-sm font-semibold uppercase tracking-[0.2em]">MiniElephant / MiniRedone</p>
          <h1 className="mt-4 max-w-4xl text-4xl md:text-6xl font-bold tracking-tight">Fauteuils roulants électriques pliables pour acheteurs B2B</h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300 leading-relaxed">MiniElephant présente la gamme MiniRedone aux distributeurs, importateurs, détaillants de mobilité et projets OEM/ODM. Comparez les modèles et demandez un devis pour votre marché.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/products" className="rounded-full bg-teal-500 px-6 py-3 font-semibold text-white hover:bg-teal-400">Voir les modèles</Link>
            <Link href="/contact" className="rounded-full border border-white/40 px-6 py-3 font-semibold hover:bg-white hover:text-gray-950">Demander un devis</Link>
          </div>
        </div>
      </section>
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold">Informations officielles sur l’entreprise et les produits</h2>
          <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">Cette page résume les informations publiques de MiniElephant. Le poids, l’autonomie, les documents de conformité, le MOQ, le délai et la garantie doivent être confirmés pour la configuration et le pays de destination choisis.</p>
          <dl className="mt-8 grid gap-4 md:grid-cols-2">
            {facts.map(([term, value]) => <div key={term} className="rounded-2xl border border-gray-200 p-5"><dt className="text-sm font-semibold uppercase tracking-wide text-gray-500">{term}</dt><dd className="mt-2 text-gray-900 leading-relaxed">{value}</dd></div>)}
          </dl>
        </div>
      </section>
      <section className="bg-gray-50 px-6 py-14">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
          <Link href="/products" className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"><h2 className="font-bold">Comparer les modèles</h2><p className="mt-2 text-sm text-gray-600">Consultez les spécifications des 10 modèles MiniRedone.</p></Link>
          <Link href="/about" className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"><h2 className="font-bold">Entreprise et documents</h2><p className="mt-2 text-sm text-gray-600">Découvrez l’entreprise et demandez les documents applicables à votre marché.</p></Link>
          <Link href="/contact" className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"><h2 className="font-bold">Contact B2B</h2><p className="mt-2 text-sm text-gray-600">Indiquez votre pays, quantité, modèle et besoins OEM/ODM.</p></Link>
        </div>
      </section>
    </main>
  );
}
