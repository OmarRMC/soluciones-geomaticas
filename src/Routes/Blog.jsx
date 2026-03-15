import { useEffect } from "react";
import bannerStyle from '../css/ContanerServicio.module.css';

function Blog() {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <>
      <div className={bannerStyle.banner}>
        <h1 className={bannerStyle.bannerTitle}>Blog</h1>
        <p className={bannerStyle.breadcrumb}>inicio / blog</p>
      </div>

      <div style={{
        textAlign: 'center',
        padding: '80px 20px',
        maxWidth: '600px',
        margin: '0 auto',
      }}>
        <i className="fa-solid fa-newspaper" style={{
          fontSize: '3.5rem',
          color: 'var(--primary, #2EA3F2)',
          marginBottom: '20px',
          display: 'block',
        }}></i>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'var(--heading, #1a1a2e)',
          marginBottom: '12px',
        }}>Blog en Construccion</h2>
        <p style={{
          fontSize: '1rem',
          color: 'var(--body, #5a6370)',
          lineHeight: 1.7,
        }}>
          Estamos preparando contenido de calidad sobre topografia, geodesia, fotogrametria y SIG. Pronto encontraras articulos, guias y novedades del sector.
        </p>
      </div>
    </>
  );
}

export default Blog;
