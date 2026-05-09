import { Link } from 'react-router-dom';
import style from '../../css/BlogCard.module.css';
import { formatDate } from '../../utils/blog';

function BlogCard({ article }) {
  const { slug, title, excerpt, cover, category, date, readingTime } = article;

  return (
    <Link to={`/blog/${slug}`} className={style.card}>
      <div className={style.cover}>
        {cover ? (
          <img loading="lazy" src={cover} alt={title} />
        ) : (
          <div className={style.coverPlaceholder}>
            <i className="fa-solid fa-newspaper"></i>
          </div>
        )}
      </div>

      <div className={style.body}>
        {category && <span className={style.category}>{category}</span>}
        <h3 className={style.title}>{title}</h3>
        {excerpt && <p className={style.excerpt}>{excerpt}</p>}

        <div className={style.meta}>
          {date && (
            <span>
              <i className="fa-regular fa-calendar"></i>
              {formatDate(date)}
            </span>
          )}
          {readingTime && (
            <span>
              <i className="fa-regular fa-clock"></i>
              {readingTime} min
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
