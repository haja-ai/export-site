// Topic taxonomy for the news library.
// Deterministic slug-token scoring so every article belongs to exactly one
// crawlable category page without editing article bodies. Ties resolve by the
// category order declared in NEWS_CATEGORIES (earlier wins).

export const PER_PAGE = 10;

export const NEWS_CATEGORIES = [
  {
    slug: 'compliance-certification',
    label: 'Compliance & Certification',
    title: 'Electric Wheelchair Compliance and Certification Guides',
    description:
      'CE, ISO 13485, ISO 7176 test reports, SFDA and FDA records, HS codes, import documents and factory audits for electric wheelchair buyers.',
    blurb: 'Market access, documents and audits: what a buyer must hold before an electric wheelchair shipment clears customs.',
  },
  {
    slug: 'shipping-logistics',
    label: 'Shipping & Logistics',
    title: 'Electric Wheelchair Shipping, Freight and Packaging Guides',
    description:
      'Container loading, carton and crate specification, battery shipping documents, Incoterms and warehouse handling for folding electric wheelchair orders.',
    blurb: 'From factory gate to destination warehouse: packing, container plans and the paperwork that travels with the units.',
  },
  {
    slug: 'dealer-operations',
    label: 'Dealer & Distributor Operations',
    title: 'Electric Wheelchair Dealer and Distributor Operations',
    description:
      'Distribution agreements, warranty process, spare parts planning, dealer training, rental fleets and after-sales service for electric wheelchair channels.',
    blurb: 'Running the channel: agreements, warranty evidence, spare parts, training and service economics.',
  },
  {
    slug: 'product-technology',
    label: 'Product & Technology',
    title: 'Electric Wheelchair Product and Technology Explainers',
    description:
      'Motors, batteries, controllers, brakes, frames, folding mechanisms, tyres and range: how MiniRedone folding electric wheelchair components are built.',
    blurb: 'How the machine works: motors, packs, controllers, brakes, frames and the folding mechanism.',
  },
  {
    slug: 'market-insights',
    label: 'Market & Industry Insights',
    title: 'Electric Wheelchair Market and Industry Insights',
    description:
      'Regional demand, funding and reimbursement schemes, tender requirements and market entry notes for electric wheelchair distributors and importers.',
    blurb: 'Where demand comes from and how public buyers and funding schemes shape electric wheelchair specifications.',
  },
  {
    slug: 'buying-guides',
    label: 'Buying Guides',
    title: 'Electric Wheelchair Buying Guides for B2B Buyers',
    description:
      'Specification, model comparison, application matching, inspection and cost of ownership guidance for electric wheelchair buyers and importers.',
    blurb: 'How to compare models, match an application, inspect a shipment and calculate cost of ownership.',
  },
  {
    slug: 'company-news',
    label: 'Company News',
    title: 'MiniElephant Company News and Trade Show Notes',
    description:
      'MiniElephant factory news, exhibition participation, new model launches and company updates for distributors and OEM/ODM partners.',
    blurb: 'Factory updates, exhibitions, new model launches and company announcements.',
  },
];

export const CATEGORY_BY_SLUG = Object.fromEntries(NEWS_CATEGORIES.map((c) => [c.slug, c]));

// Slug tokens are split on '-', so matching is exact-token, not substring.
// That avoids traps like "support" matching "port" or "importers" matching "port".
const KEYWORDS = {
  'compliance-certification': [
    'certification', 'certifications', 'certified', 'certificate', 'compliance', 'compliant', 'mdr', 'ce',
    'iso', '7176', '13485', 'fda', 'sfda', 'registration', 'listing', 'regulatory', 'regulation',
    'audit', 'audits', 'inspection', 'inspections', 'hs', 'customs', 'tariff', 'classification',
    'documents', 'document', 'dossier', 'quality', 'validation', 'diligence', 'supplier',
    'qc', 'criteria', 'standard', 'standards', 'homologation', 'label', 'labelling', 'control',
  ],
  'shipping-logistics': [
    'shipping', 'shipment', 'container', 'containers', 'freight', 'logistics', 'packaging', 'carton',
    'crate', 'pallet', 'transport', 'transportation', 'transit', 'warehouse', 'loading', 'delivery',
    'incoterms', 'dap', 'dpu', 'fob', 'cif', 'consolidation', 'air', 'sea', 'port', 'ports', 'carrier',
    'shipping-documentation',
  ],
  'dealer-operations': [
    'dealer', 'dealers', 'distributor', 'distributors', 'distribution', 'reseller', 'resellers', 'channel',
    'agreement', 'agreements', 'warranty', 'service', 'sla', 'spare', 'parts', 'stocking', 'inventory',
    'training', 'demo', 'demonstration', 'onboarding', 'marketing', 'lead', 'leads', 'generation',
    'tender', 'procurement', 'depot', 'repair', 'rma', 'rental', 'rentals', 'fleet', 'fleets',
    'pricing', 'wholesale', 'payment', 'payments', 'terms', 'contract', 'contracts', 'business',
    'launch', 'start', 'operations', 'after', 'sales', 'showroom',
  ],
  'product-technology': [
    'motor', 'motors', 'battery', 'batteries', 'controller', 'controllers', 'joystick', 'joysticks',
    'brake', 'brakes', 'braking', 'tire', 'tires', 'tyre', 'tyres', 'frame', 'frames', 'folding',
    'fold', 'suspension', 'seat', 'seats', 'seating', 'cushion', 'cushions', 'charging', 'charger',
    'chargers', 'hub', 'torque', 'climbing', 'climb', 'terrain', 'wheel', 'wheels', 'caster', 'anti',
    'tip', 'footrest', 'footrests', 'armrest', 'armrests', 'headrest', 'range', 'storage', 'speed',
    'clearance', 'turning', 'radius', 'recline', 'reclining', 'tilt', 'space', 'drive', 'drives',
    'weight', 'capacity', 'water', 'resistance', 'magnesium', 'alloy', 'maintenance',
    'serviceability', 'modular', 'integrated', 'accessories', 'configuration', 'safety', 'features',
    'app', 'smart', 'upholstery', 'comfort', 'recycling', 'indoor', 'outdoor', 'winter', 'cold',
    'weather', 'noise', 'vibration', 'slope', 'stability', 'diagnostics', 'fault', 'codes', 'firmware',
    'geometry', 'ergonomics', 'posture', 'support', 'mechanism', 'obstacle', 'height',
  ],
  'market-insights': [
    'market', 'markets', 'trends', 'industry', 'innovation', 'region', 'regional', 'country',
    'southeast', 'asia', 'south', 'america', 'middle', 'east', 'africa', 'europe', 'gulf', 'saudi',
    'india', 'brazil', 'mexico', 'japan', 'australia', 'demand', 'reimbursement', 'funding', 'ndis',
    'medicare', 'insurance', 'competition', 'opportunity',
  ],
  'company-news': [
    'launches', 'recap', 'exhibition', 'fair', 'trade', 'award', 'anniversary', 'company', 'team',
  ],
};

// Explicit overrides for slugs whose words legitimately sit across two topics.
const OVERRIDES = {
  'electric-wheelchair-caster-wheel-comparison-b2b': 'product-technology',
  'electric-wheel-chair-specification-sheet-checklist-importers': 'buying-guides',
  'electric-wheelchair-trade-show-guide': 'company-news',
  'electric-wheelchair-rehacare-2025-exhibition-recap': 'company-news',
  'minielephant-launches-miniredone-series': 'company-news',
  'electric-wheelchair-showroom-display-guide-distributors': 'dealer-operations',
  'electric-wheelchair-fault-codes-diagnostics-dealer-guide': 'dealer-operations',
  'electric-wheelchair-firmware-factory-vs-dealer-updates': 'dealer-operations',
  'electric-wheelchair-motor-comparison-distributors': 'dealer-operations',
  'electric-wheelchair-oem-private-label-guide': 'compliance-certification',
  'electric-wheelchair-oem-vs-aftermarket-parts-comparison-b2b': 'dealer-operations',
  'oem-odm-electric-wheelchair-customization-guide': 'buying-guides',
  'electric-wheelchair-lithium-battery-shipping-guide': 'shipping-logistics',
  'electric-wheelchair-battery-shipping-documentation-guide': 'shipping-logistics',
  'electric-wheelchair-air-travel-guide-b2b': 'shipping-logistics',
  'electric-wheelchair-air-travel-readiness-guide': 'shipping-logistics',
  'electric-wheelchair-quotations-dap-vs-dpu-delivery-review': 'shipping-logistics',
  'electric-wheelchair-ramp-slope-access-guide-b2b': 'buying-guides',
  'electric-wheelchair-braking-system-checklist-b2b': 'product-technology',
  'electric-wheelchair-braking-systems-b2b-guide': 'product-technology',
  'electric-wheelchair-medicare-insurance-reimbursement-guide': 'market-insights',
  'ndis-electric-wheelchair-funding-guide-b2b': 'market-insights',
  'electric-wheelchair-market-trends-2026-b2b': 'market-insights',
  'electric-wheelchair-manufacturer-reliability-guide': 'buying-guides',
  'electric-wheelchair-manufacturer-china-b2b-guide': 'buying-guides',
  'electric-wheelchair-cost-of-ownership-comparison-b2b': 'buying-guides',
  'electric-wheelchair-pricing-strategy-b2b-importers': 'buying-guides',
  'electric-wheelchair-wholesale-pricing-guide': 'buying-guides',
  'electric-wheelchair-tender-specification-guide': 'buying-guides',
  'shipping-importing-electric-wheelchairs-b2b': 'shipping-logistics',
  'electric-wheelchair-export-shipping-logistics-b2b-guide': 'shipping-logistics',
  'folding-electric-wheelchair-b2b-logistics': 'shipping-logistics',
};

const STOP = new Set(['electric', 'wheelchair', 'wheelchairs', 'b2b', '2026', '2025', 'and', 'the', 'a', 'an', 'of']);

function tokens(article) {
  const slug = String(article.slug || '').toLowerCase();
  const tagWords = (article.tags || []).join('-').toLowerCase();
  return new Set(
    `${slug}-${tagWords}`
      .split(/[^a-z0-9]+/)
      .filter((t) => t && !STOP.has(t)),
  );
}

export function categoryOf(article) {
  if (OVERRIDES[article.slug]) return OVERRIDES[article.slug];
  if ((article.category || '') === 'company-life') return 'company-news';
  const toks = tokens(article);
  let best = null;
  let bestScore = 0;
  for (const cat of NEWS_CATEGORIES) {
    let score = 0;
    for (const kw of KEYWORDS[cat.slug] || []) {
      if (toks.has(kw)) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = cat.slug;
    }
  }
  if (best && bestScore > 0) return best;
  return 'buying-guides';
}

export function sortByDateDesc(list) {
  return [...list].sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
}

export function paginate(list, page, perPage = PER_PAGE) {
  const total = list.length;
  const pages = Math.max(1, Math.ceil(total / perPage));
  const current = Math.min(Math.max(1, page), pages);
  const start = (current - 1) * perPage;
  return { items: list.slice(start, start + perPage), current, pages, total };
}

export function articlesInCategory(all, slug) {
  return sortByDateDesc(all.filter((a) => categoryOf(a) === slug));
}

export function categoryCounts(all) {
  const counts = Object.fromEntries(NEWS_CATEGORIES.map((c) => [c.slug, 0]));
  for (const a of all) counts[categoryOf(a)] += 1;
  return counts;
}
