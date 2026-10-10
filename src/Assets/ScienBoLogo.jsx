import logoUrl from './logos/logo-scienbov1.png';

/**
 * ScienBo Logo - imagen oficial.
 *
 * Uso:
 *   <ScienBoLogo width={45} />
 *   <ScienBoLogo width={120} className="..." />
 */
function ScienBoLogo({ className, style, width, height, alt }) {
  return (
    <img
      src={logoUrl}
      alt={alt ?? 'ScienBo - Soluciones Geomáticas'}
      width={width}
      height={height}
      className={className}
      style={style}
    />
  );
}

export default ScienBoLogo;
