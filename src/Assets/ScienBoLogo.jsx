/**
 * ScienBo Logo como componente SVG.
 * El color se controla via la prop `color` o via CSS `color` en el contenedor padre.
 * Usa `currentColor` internamente, por lo que hereda el color del CSS.
 *
 * Uso:
 *   <ScienBoLogo color="#F5B800" width={45} />
 *   <ScienBoLogo color="var(--primary)" width={120} />
 */
function ScienBoLogo({ color, className, style, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 260"
      width={width}
      height={height ?? (width ? undefined : '100%')}
      className={className}
      style={{ color: color, ...style }}
      role="img"
      aria-label="ScienBo"
    >
      <title>ScienBo - Soluciones Geomaticas</title>
      <defs>
        <clipPath id="scienbo-globe-clip">
          <circle cx="100" cy="95" r="80" />
        </clipPath>
      </defs>

      {/* Círculo exterior del globo */}
      <circle
        cx="100" cy="95" r="80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Líneas de latitud (horizontal) — recortadas al globo */}
      <g fill="none" stroke="currentColor" strokeWidth="1.2" clipPath="url(#scienbo-globe-clip)">
        {/* ~58°N */}
        <ellipse cx="100" cy="27" rx="42" ry="11" />
        {/* ~29°N */}
        <ellipse cx="100" cy="61" rx="70" ry="18" />
        {/* Ecuador */}
        <ellipse cx="100" cy="95" rx="80" ry="20" />
        {/* ~29°S */}
        <ellipse cx="100" cy="129" rx="70" ry="18" />
        {/* ~58°S */}
        <ellipse cx="100" cy="163" rx="42" ry="11" />
      </g>

      {/* Meridianos (vertical) — recortados al globo */}
      <g fill="none" stroke="currentColor" strokeWidth="1.2" clipPath="url(#scienbo-globe-clip)">
        {/* Meridiano ~35° */}
        <ellipse cx="100" cy="95" rx="46" ry="80" />
        {/* Meridiano ~63° */}
        <ellipse cx="100" cy="95" rx="71" ry="80" />
      </g>

      {/* ── Texto "ScienBo" ─────────────────────────────────────────
          Dividido en 3 trozos para poder poner el símbolo wifi
          sobre la "i" en lugar del punto.
          Posiciones calculadas para Georgia Bold 42px centrado en x=100.
      ─────────────────────────────────────────────────────────────── */}
      <text
        y="245"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="42"
        fontWeight="bold"
        fill="currentColor"
      >
        {/* "Sc" */}
        <tspan x="18">Sc</tspan>
        {/* "i" sin punto (ı = i sin punto, U+0131) */}
        <tspan x="70">ı</tspan>
        {/* "enBo" */}
        <tspan x="83">enBo</tspan>
      </text>

      {/* ── Símbolo wifi encima de la "i" ───────────────────────────
          Centro aproximado de la "ı": x≈76, base del símbolo y≈212
      ─────────────────────────────────────────────────────────────── */}
      {/* Punto central */}
      <circle cx="76" cy="214" r="2.2" fill="currentColor" />

      {/* Arco pequeño */}
      <path
        d="M 71.2,210.2 A 4.8,4.8 0 0,1 80.8,210.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Arco mediano */}
      <path
        d="M 68.5,207.4 A 7.5,7.5 0 0,1 83.5,207.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Arco grande */}
      <path
        d="M 65.8,204.6 A 10.2,10.2 0 0,1 86.2,204.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default ScienBoLogo;
