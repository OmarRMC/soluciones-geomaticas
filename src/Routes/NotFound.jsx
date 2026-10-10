import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import style from '../css/BlogArticle.module.css';

function NotFound({ title = 'Página no encontrada', message = 'La página que buscas no existe o fue movida.', backTo = '/', backLabel = 'Volver al inicio' }) {
  return (
    <>
      <Helmet>
        <title>{title} | Soluciones Geom&aacute;ticas</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className={style.notFound}>
        <h2>{title}</h2>
        <p>{message}</p>
        <Link to={backTo} className={style.notFoundBtn}>
          {backLabel}
        </Link>
      </div>
    </>
  );
}

export default NotFound;
