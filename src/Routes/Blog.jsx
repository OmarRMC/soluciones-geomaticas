import { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
        <title>Blog | Soluciones Geom&aacute;ticas</title>
        <meta
          name="description"
          content="Art&iacute;culos, gu&iacute;as y novedades sobre topograf&iacute;a, geodesia, fotogrametr&iacute;a con drones y sistemas de informaci&oacute;n geogr&aacute;fica. Blog de Soluciones Geom&aacute;ticas, Bolivia."
        />
        <meta
          name="keywords"
          content="blog topograf&iacute;a, blog geodesia, fotogrametr&iacute;a drones, SIG Bolivia, art&iacute;culos geom&aacute;tica"
        />
        <link rel="canonical" href="https://soluciones-geomaticas.web.app/blog" />
        <meta property="og:title" content="Blog | Soluciones Geom&aacute;ticas" />
        <meta
          property="og:description"
          content="Art&iacute;culos y novedades sobre topograf&iacute;a, geodesia, fotogrametr&iacute;a y SIG en Bolivia."
        />
        <meta property="og:url" content="https://soluciones-geomaticas.web.app/blog" />
        <meta property="og:type" content="website" />
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
