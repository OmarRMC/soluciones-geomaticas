import BlogCard from './BlogCard';
import style from '../../css/BlogArticle.module.css';

function RelatedArticles({ articles }) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className={style.related}>
      <div className={style.relatedInner}>
        <h2 className={style.relatedTitle}>Artículos relacionados</h2>
        <div className={style.relatedGrid}>
          {articles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedArticles;
