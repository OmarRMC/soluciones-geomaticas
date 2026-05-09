import { useEffect, useState } from 'react';
import style from '../../css/BlogArticle.module.css';

// Lee los <h2 id="..."> dentro del contenedor `containerRef` y los lista
// como anclas. Marca el activo según el scroll.
function ArticleTOC({ containerRef }) {
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!containerRef?.current) return;

    const headings = Array.from(
      containerRef.current.querySelectorAll('h2[id]')
    );
    setItems(
      headings.map((h) => ({
        id: h.id,
        text: h.textContent || '',
      }))
    );

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.target.offsetTop - b.target.offsetTop);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [containerRef]);

  if (items.length === 0) return null;

  return (
    <nav className={style.toc} aria-label="Tabla de contenidos">
      <p className={style.tocTitle}>En este artículo</p>
      <ul className={style.tocList}>
        {items.map((item) => (
          <li
            key={item.id}
            className={`${style.tocItem} ${
              activeId === item.id ? style.tocItemActive : ''
            }`}
          >
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ArticleTOC;
