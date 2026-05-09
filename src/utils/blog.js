// Registro central de artículos del blog.
// Cada artículo es un componente JSX en src/content/blog/<Nombre>.jsx,
// importado y registrado abajo junto con sus metadatos.

import DronesPrecision from '../content/blog/DronesPrecision';

export const articles = [
  {
    slug: 'levantamiento-topografico-drones-precision-fotogrametrica',
    title: 'Levantamiento Topográfico con Drones y Precisión Fotogramétrica',
    excerpt:
      'Investigación UMSA: cómo la altura de vuelo y el tamaño de dianas influyen en la precisión RMSE de levantamientos fotogramétricos con DJI Phantom 4 Pro.',
    cover: '/blog/drones-precision/cover.svg',
    ogImage: '/blog/drones-precision/cover.jpg',
    category: 'Investigación',
    tags: [
      'drones',
      'fotogrametria',
      'topografia',
      'RMSE',
      'DJI Phantom 4 Pro',
      'Pix4D',
    ],
    author: 'Equipo ScienBo',
    date: '2026-05-09',
    readingTime: 8,
    featured: true,
    Component: DronesPrecision,
  },
];

export const CATEGORIES = [
  'Topografía',
  'Geodesia',
  'Fotogrametría',
  'SIG',
  'Investigación',
];

export function getAllArticles() {
  return [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug) || null;
}

export function getCategoriesInUse() {
  return [...new Set(articles.map((a) => a.category).filter(Boolean))];
}

export function getRelated(slug, limit = 3) {
  const current = getArticleBySlug(slug);
  if (!current) return [];

  const score = (a) => {
    if (a.slug === slug) return -1;
    let s = 0;
    if (a.category === current.category) s += 3;
    const sharedTags = (a.tags || []).filter((t) => (current.tags || []).includes(t));
    s += sharedTags.length;
    return s;
  };

  return [...articles]
    .filter((a) => a.slug !== slug)
    .map((a) => ({ a, s: score(a) }))
    .sort((x, y) => y.s - x.s || (x.a.date < y.a.date ? 1 : -1))
    .slice(0, limit)
    .map(({ a }) => a);
}

export function filterArticles({ category, query } = {}) {
  let result = getAllArticles();

  if (category && category !== 'Todas') {
    result = result.filter((a) => a.category === category);
  }

  if (query && query.trim()) {
    const re = new RegExp(query.trim(), 'i');
    result = result.filter(
      (a) =>
        re.test(a.title) ||
        re.test(a.excerpt || '') ||
        (a.tags || []).some((t) => re.test(t))
    );
  }

  return result;
}

export function formatDate(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
  ];
  return `${parseInt(d, 10)} de ${months[parseInt(m, 10) - 1]} de ${y}`;
}
