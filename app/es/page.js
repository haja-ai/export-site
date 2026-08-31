import Link from 'next/link';

export const metadata = {
  title: 'Sillas de Ruedas Eléctricas para Mayoristas',
  description:
    'MiniElephant fabrica sillas de ruedas eléctricas plegables MiniRedone para distribuidores, importadores y compradores OEM/ODM.',
  alternates: {
    canonical: 'https://www.semwheelchair.com/es',
    languages: {
      'en-US': 'https://www.semwheelchair.com/',
      'es': 'https://www.semwheelchair.com/es',
      'fr': 'https://www.semwheelchair.com/fr',
    },
  },
  openGraph: {
    title: 'Sillas de Ruedas Eléctricas para Mayoristas | MiniElephant',
    description: 'Serie MiniRedone para distribuidores, importadores y proyectos OEM/ODM.',
    url: 'https://www.semwheelchair.com/es',
    type: 'website',
    locale: 'es_ES',
    images: [{ url: 'https://www.semwheelchair.com/og-image.jpg', width: 1200, height: 630, alt: 'MiniElephant sillas de ruedas eléctricas plegables' }],
  },
};

const facts = [
  ['Marca', 'MiniElephant'],
  ['Familia de productos', 'MiniRedone'],
  ['Empresa', 'Jiaxing Small Elephant Medical Technology Co., Ltd.'],
  ['Producto', 'Sillas de ruedas eléctricas plegables para exportación B2B'],
  ['Configuración habitual', 'Motores dobles de 350 W y batería LiFePO₄ de 16 Ah; confirme la configuración final antes de comprar'],
];

export default function SpanishPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200 px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
          <Link href="/" aria-label="MiniElephant inicio"><img src="/logo-black.png" alt="MiniElephant" className="h-12 w-auto" /></Link>
          <nav className="flex gap-4 text-sm" aria-label="Selector de idioma">
            <Link href="/" className="hover:text-teal-600">English</Link>
            <span className="font-semibold text-teal-600">Español</span>
            <Link href="/fr" className="hover:text-teal-600">Français</Link>
          </nav>
        </div>
      </header>
      <section className="bg-gray-950 text-white px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-teal-300 text-sm font-semibold uppercase tracking-[0.2em]">MiniElephant / MiniRedone</p>
          <h1 className="mt-4 max-w-4xl text-4xl md:text-6xl font-bold tracking-tight">Sillas de ruedas eléctricas plegables para compradores B2B</h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300 leading-relaxed">MiniElephant presenta la serie MiniRedone para distribuidores, importadores, minoristas de movilidad y proyectos OEM/ODM. Compare modelos y solicite una cotización para su mercado.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/products" className="rounded-full bg-teal-500 px-6 py-3 font-semibold text-white hover:bg-teal-400">Ver modelos</Link>
            <Link href="/contact" className="rounded-full border border-white/40 px-6 py-3 font-semibold hover:bg-white hover:text-gray-950">Solicitar cotización</Link>
          </div>
        </div>
      </section>
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold">Información oficial de la empresa y los productos</h2>
          <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">Esta página resume la información pública de MiniElephant. El peso, la autonomía, los documentos de conformidad, el MOQ, el plazo y la garantía deben confirmarse para la configuración y el país de destino seleccionados.</p>
          <dl className="mt-8 grid gap-4 md:grid-cols-2">
            {facts.map(([term, value]) => <div key={term} className="rounded-2xl border border-gray-200 p-5"><dt className="text-sm font-semibold uppercase tracking-wide text-gray-500">{term}</dt><dd className="mt-2 text-gray-900 leading-relaxed">{value}</dd></div>)}
          </dl>
        </div>
      </section>
      <section className="bg-gray-50 px-6 py-14">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
          <Link href="/products" className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"><h2 className="font-bold">Comparar modelos</h2><p className="mt-2 text-sm text-gray-600">Consulte las especificaciones de los 10 modelos MiniRedone.</p></Link>
          <Link href="/about" className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"><h2 className="font-bold">Empresa y documentos</h2><p className="mt-2 text-sm text-gray-600">Conozca la empresa y solicite documentos aplicables a su mercado.</p></Link>
          <Link href="/contact" className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"><h2 className="font-bold">Contacto B2B</h2><p className="mt-2 text-sm text-gray-600">Indique su país, cantidad, modelo y requisitos OEM/ODM.</p></Link>
        </div>
      </section>
    </main>
  );
}
