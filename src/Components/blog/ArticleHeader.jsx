import style from '../../css/BlogArticle.module.css';
import { formatDate } from '../../utils/blog';

function ArticleHeader({ article }) {
  const { title, excerpt, cover, category, author, date, readingTime } = article;

  const headerStyle = cover
    ? { backgroundImage: `url(${cover})` }
    : undefined;

  return (
    <header
      className={`${style.header} ${cover ? style.headerWithCover : ''}`}
      style={headerStyle}
    >
      <div className={style.headerOverlay}></div>
      <div className={style.headerInner}>
        {category && <span className={style.headerCategory}>{category}</span>}
        <h1 className={style.headerTitle}>{title}</h1>
        {excerpt && <p className={style.headerExcerpt}>{excerpt}</p>}

        <div className={style.headerMeta}>
          {author && (
            <span>
              <i className="fa-regular fa-user"></i>
              {author}
            </span>
          )}
          {date && (
            <span>
              <i className="fa-regular fa-calendar"></i>
              {formatDate(date)}
            </span>
          )}
          {readingTime && (
            <span>
              <i className="fa-regular fa-clock"></i>
              {readingTime} min de lectura
            </span>
          )}
        </div>
      </div>
      <div className={style.headerBreadcrumb}></div>
    </header>
  );
}

export default ArticleHeader;
