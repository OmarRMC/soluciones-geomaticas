import { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { absUrl, breadcrumbLd } from '../utils/seo';
import bannerStyle from '../css/ContanerServicio.module.css';
import style from '../css/Blog.module.css';
import Search from '../Components/Search';
import BlogGrid from '../Components/blog/BlogGrid';
import BlogFilters from '../Components/blog/BlogFilters';
import { filterArticles, getCategoriesInUse } from '../utils/blog';

function Blog() {
  const [category, setCategory] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const categories = useMemo(() => getCategoriesInUse(), []);
  const articles = useMemo(
    () => filterArticles({ category, query }),
    [category, query]
  );

  return (
    <>
      <Helmet>
        <title>Blog | Soluciones Geomáticas</title>
        <meta
          name="description"
          content="Artículos, guías y novedades sobre topografía, geodesia, fotogrametría con drones y sistemas de información geográfica. Blog de Soluciones Geomáticas, Bolivia."
        />
        <meta
          name="keywords"
          content="blog topografía, blog geodesia, fotogrametría drones, SIG Bolivia, artículos geomática"
        />
        <link rel="canonical" href="https://soluciones-geomaticas.web.app/blog" />
        <meta property="og:title" content="Blog | Soluciones Geomáticas" />
        <meta
          property="og:description"
          content="Artículos y novedades sobre topografía, geodesia, fotogrametría y SIG en Bolivia."
        />
        <meta property="og:url" content="https://soluciones-geomaticas.web.app/blog" />
        <meta property="og:type" content="website" />
          <meta property="og:image" content={absUrl('/blog/drones-precision/cover.jpg')} />
          <meta name="twitter:image" content={absUrl('/blog/drones-precision/cover.jpg')} />
          <script type="application/ld+json">
              {JSON.stringify(breadcrumbLd([{ name: 'Blog', path: '/blog' }]))}
          </script>
      </Helmet>

      <div className={bannerStyle.banner}>
        <h1 className={bannerStyle.bannerTitle}>Blog</h1>
        <p className={bannerStyle.breadcrumb}>inicio / blog</p>
      </div>

      <div className={style.toolbar}>
        <Search search={setQuery} />
        <BlogFilters
          categories={categories}
          active={category}
          onChange={setCategory}
        />
      </div>

      <BlogGrid articles={articles} />
    </>
  );
}

export default Blog;
