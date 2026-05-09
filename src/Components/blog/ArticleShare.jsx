import style from '../../css/BlogArticle.module.css';

function ArticleShare({ title, slug }) {
  const url = `https://soluciones-geomaticas.web.app/blog/${slug}`;
  const text = `${title} - Soluciones Geomáticas`;

  const links = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  const copy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // ignore - el usuario puede copiar manualmente desde la barra
    }
  };

  return (
    <div className={style.share}>
      <p className={style.shareTitle}>Compartir</p>
      <div className={style.shareButtons}>
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={style.shareBtn}
          aria-label="Compartir en WhatsApp"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a
          href={links.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className={style.shareBtn}
          aria-label="Compartir en Facebook"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a
          href={links.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className={style.shareBtn}
          aria-label="Compartir en X"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={style.shareBtn}
          aria-label="Compartir en LinkedIn"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <button
          type="button"
          onClick={copy}
          className={style.shareBtn}
          aria-label="Copiar enlace"
        >
          <i className="fa-solid fa-link"></i>
        </button>
      </div>
    </div>
  );
}

export default ArticleShare;
