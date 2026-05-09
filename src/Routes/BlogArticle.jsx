import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import ArticleHeader from '../Components/blog/ArticleHeader';
import ArticleTOC from '../Components/blog/ArticleTOC';
import ArticleShare from '../Components/blog/ArticleShare';
import RelatedArticles from '../Components/blog/RelatedArticles';
import { getArticleBySlug, getRelated } from '../utils/blog';
import style from '../css/BlogArticle.module.css';

function BlogArticle() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const bodyRef = useRef(null);

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [slug]);

  if (!article) {
    return (
      <>
        <Helmet>
          <title>Art&iacute;culo no encontrado | Soluciones Geom&aacute;ticas</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className={style.notFound}>
          <h2>Art&iacute;culo no encontrado</h2>
          <p>El art&iacute;culo que buscas no existe o fue movido.</p>
          <Link to="/blog" className={style.notFoundBtn}>
            Volver al blog
          </Link>
        </div>
      </>
    );
  }

  const { Component, title, excerpt, cover, ogImage, author, date, tags = [] } = article;
  const url = `https://soluciones-geomaticas.web.app/blog/${article.slug}`;
  const ogImageUrl = `https://soluciones-geomaticas.web.app${ogImage || cover || '/LogoTexto.png'}`;
  const related = getRelated(article.slug, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: excerpt,
    image: ogImageUrl,
    author: {
      '@type': 'Organization',
      name: author || 'Soluciones Geomáticas',
    },
    datePublished: date,
    publisher: {
      '@type': 'Organization',
      name: 'Soluciones Geomáticas',
      logo: {
        '@type': 'ImageObject',
        url: 'https://soluciones-geomaticas.web.app/LogoTexto.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <>
      <Helmet>
        <title>{title} | Soluciones Geom&aacute;ticas</title>
        <meta name="description" content={excerpt} />
        <meta name="keywords" content={tags.join(', ')} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta property="article:published_time" content={date} />
        {author && <meta property="article:author" content={author} />}
        {article.category && <meta property="article:section" content={article.category} />}
        {tags.map((t) => (
          <meta key={t} property="article:tag" content={t} />
        ))}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <ArticleHeader article={article} />

      <div className={style.layout}>
        <main className={style.content}>
          <div className={style.body} ref={bodyRef}>
            {Component ? <Component /> : null}
          </div>

          {tags.length > 0 && (
            <div className={style.tags}>
              {tags.map((t) => (
                <span key={t} className={style.tag}>
                  #{t}
                </span>
              ))}
            </div>
          )}
        </main>

        <aside className={style.sidebar}>
          <div className={style.sidebarSticky}>
            <ArticleTOC containerRef={bodyRef} />
            <ArticleShare title={title} slug={article.slug} />
          </div>
        </aside>
      </div>

      <RelatedArticles articles={related} />
    </>
  );
}

export default BlogArticle;
