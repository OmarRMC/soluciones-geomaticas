import Zoom from '@mui/material/Zoom';
import BlogCard from './BlogCard';
import style from '../../css/Blog.module.css';

function BlogGrid({ articles }) {
  if (!articles || articles.length === 0) {
    return (
      <div className={style.empty}>
        <i className={`fa-solid fa-newspaper ${style.emptyIcon}`}></i>
        <h2 className={style.emptyTitle}>Próximamente</h2>
        <p className={style.emptyText}>
          Estamos preparando contenido de calidad sobre topografía, geodesia,
          fotogrametría y SIG. Vuelve pronto.
        </p>
      </div>
    );
  }

  return (
    <section className={style.grid}>
      {articles.map((article, pos) => (
        <Zoom
          key={article.slug}
          in
          style={{ transitionDelay: `${100 * pos}ms` }}
        >
          <div>
            <BlogCard article={article} />
          </div>
        </Zoom>
      ))}
    </section>
  );
}

export default BlogGrid;
