import style from '../css/BrandText.module.css';

/**
 * Bloque de marca: "ScienBo" + tagline "SOLUCIONES GEOMATICAS",
 * con un círculo decorativo naranja detrás del título.
 *
 * Props:
 *   size:    'small' (header) | 'large' (footer). Default 'small'.
 *   variant: 'dark' (texto oscuro sobre claro) | 'light' (texto claro sobre oscuro). Default 'dark'.
 */
function BrandText({ size = 'small', variant = 'dark', className, circle = false, textSolucionesGeo = false }) {
  const sizeClass = size === 'large' ? style.large : style.small;
  const variantClass = variant === 'light' ? style.light : style.dark;

  return (
    <div className={`${style.brand} ${sizeClass} ${variantClass} ${className ?? ''}`}>
      <div className={style.titleWrap}>
        {circle && <span className={style.circle} aria-hidden="true" />}
        <span className={style.title}>ScienBo</span>
      </div>
      {textSolucionesGeo && <span className={style.tagline}>Soluciones Geomaticas</span>}
    </div>
  );
}

export default BrandText;
