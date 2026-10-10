// Utilidades SEO compartidas: URL absoluta y datos estructurados (JSON-LD).
// La organización completa se declara una sola vez en index.html con este mismo @id.

export const SITE_URL = 'https://soluciones-geomaticas.web.app';
export const ORG_ID = `${SITE_URL}/#organization`;

export const absUrl = (path = '/') => (path.startsWith('http') ? path : `${SITE_URL}${path}`);

// items: [{ name: 'Servicios', path: '/servicios' }, ...] — "Inicio" se agrega solo
export function breadcrumbLd(items) {
  const all = [{ name: 'Inicio', path: '/' }, ...items];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  };
}

export function serviceLd({ name, description, path, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType: name,
    description,
    url: absUrl(path),
    ...(image && { image: absUrl(image) }),
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Bolivia' },
  };
}
