import { Link } from 'react-router-dom';
import style from '../../css/BlogArticle.module.css';

function DronesPrecision() {
  return (
    <>
      <p className="lead">
        La tecnología ha revolucionado la manera en que se realizan los
        levantamientos topográficos. Actualmente, el uso de drones permite
        obtener información geoespacial con mayor rapidez, precisión y seguridad
        en comparación con los métodos tradicionales. En esta investigación se
        analiza cómo la <strong>altura de vuelo</strong> y el{' '}
        <strong>tamaño de las dianas</strong> influyen directamente en la
        precisión de los resultados fotogramétricos.
      </p>

      <h2 id="investigacion">¿De qué trata la investigación?</h2>
      <p>
        La investigación titulada{' '}
        <em>
          "Análisis comparativo de levantamiento topográfico usando drones a
          diferentes alturas de vuelo y tamaños de dianas"
        </em>{' '}
        fue desarrollada en la carrera de Geodesia, Topografía y Geomática de la{' '}
        <strong>Universidad Mayor de San Andrés (UMSA)</strong>.
      </p>
      <p>
        El estudio tuvo como objetivo principal determinar cuál es la
        combinación óptima entre altura de vuelo y tamaño de diana para obtener
        la mayor precisión en levantamientos topográficos utilizando drones.
      </p>

      <h2 id="importancia">¿Por qué es importante esta investigación?</h2>
      <p>
        En proyectos de ingeniería, construcción, minería y cartografía, la
        precisión de los datos topográficos es fundamental. Un pequeño error
        puede generar grandes diferencias en cálculos de superficies, volúmenes
        o ubicación de estructuras.
      </p>
      <p>
        La investigación surge debido a que no existen suficientes estudios
        específicos sobre:
      </p>
      <ul>
        <li>El tamaño adecuado de las dianas utilizadas en fotogrametría.</li>
        <li>Cómo afecta la altura de vuelo a la precisión.</li>
        <li>Qué combinación ofrece mejores resultados métricos.</li>
      </ul>

      <h2 id="tecnologia">Tecnología utilizada</h2>

      <h3>Drone: DJI Phantom 4 Pro</h3>
      <p>
        Se utilizó el dron <strong>DJI Phantom 4 Pro</strong>, equipo
        consolidado en aplicaciones fotogramétricas profesionales. Sus
        características destacadas:
      </p>
      <ul>
        <li>Cámara de 20 MP con sensor CMOS de 1"</li>
        <li>Sistema de posicionamiento GPS / GLONASS</li>
        <li>Tiempo de vuelo aproximado de 30 minutos</li>
        <li>Capacidad de grabación 4K</li>
        <li>Alta estabilidad y precisión fotogramétrica</li>
      </ul>

      <h3>Software empleado</h3>
      <p>
        Se utilizó la suite <strong>Pix4D</strong>:
      </p>
      <ul>
        <li>
          <strong>Pix4Dcapture</strong> - planificación y ejecución de las
          misiones de vuelo.
        </li>
        <li>
          <strong>Pix4Dmapper</strong> - procesamiento fotogramétrico de las
          imágenes.
        </li>
      </ul>
      <p>
        Estos programas permitieron generar productos fotogramétricos como{' '}
        <strong>ortomosaicos</strong>, <strong>Modelos Digitales de Terreno
        (MDT)</strong>, <strong>Modelos Digitales de Superficie (MDS)</strong> y{' '}
        <strong>nubes de puntos 3D</strong>.
      </p>

      <h2 id="metodologia">Metodología de la investigación</h2>
      <p>
        La investigación se desarrolló sobre un área aproximada de{' '}
        <strong>6 hectáreas</strong> con relieve plano. Se ejecutaron{' '}
        <strong>9 misiones de vuelo</strong> combinando 3 alturas y 3 tamaños de
        diana:
      </p>

      <h3>Alturas de vuelo evaluadas</h3>
      <ul>
        <li>60 metros</li>
        <li>90 metros</li>
        <li>120 metros</li>
      </ul>

      <h3>Tamaños de dianas evaluados</h3>
      <ul>
        <li>16 × 16 cm</li>
        <li>25 × 25 cm</li>
        <li>33 × 33 cm</li>
      </ul>

      <h3>Puntos de control</h3>
      <p>Adicionalmente se establecieron:</p>
      <ul>
        <li>
          <strong>5 puntos de apoyo (PA)</strong> - para georreferenciar el
          modelo.
        </li>
        <li>
          <strong>3 puntos de control (PC)</strong> - para validar la precisión
          obtenida.
        </li>
      </ul>
      <p>
        Las coordenadas fueron obtenidas mediante la metodología{' '}
        <strong>NTRIP</strong> usando GNSS, garantizando alta precisión en los
        puntos de referencia.
      </p>

      <h3>¿Qué es el RMSE?</h3>
      <p>
        La precisión de los resultados fue evaluada utilizando el{' '}
        <strong>Error Medio Cuadrático (RMSE)</strong>. Este indicador permite
        medir qué tan cerca están las coordenadas generadas por el software
        respecto a las coordenadas reales tomadas en campo. Mientras{' '}
        <em>menor</em> sea el valor RMSE, <em>mayor</em> será la precisión del
        levantamiento.
      </p>

      <h2 id="resultados">Resultados obtenidos</h2>
      <p>Los resultados demostraron dos hallazgos clave:</p>
      <ul>
        <li>
          Los vuelos realizados a <strong>menor altura</strong> generan mejores
          precisiones.
        </li>
        <li>
          Las dianas de <strong>mayor tamaño</strong> permiten identificar mejor
          el centro durante el procesamiento.
        </li>
      </ul>

      <p>La mejor combinación encontrada fue:</p>
      <table>
        <thead>
          <tr>
            <th>Altura de vuelo</th>
            <th>Tamaño de diana</th>
            <th>Precisión (RMSE XY)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>60 m</td>
            <td>33 × 33 cm</td>
            <td>
              <strong>3.74 cm</strong>
            </td>
          </tr>
          <tr>
            <td>90 m</td>
            <td>33 × 33 cm</td>
            <td>~ 5 cm</td>
          </tr>
          <tr>
            <td>120 m</td>
            <td>33 × 33 cm</td>
            <td>~ 7 cm</td>
          </tr>
        </tbody>
      </table>
      <p>
        Esta configuración obtuvo el menor RMSE en planimetría, convirtiéndose
        en la opción más óptima para levantamientos topográficos con drones en
        áreas planas.
      </p>

      <h2 id="dianas">Importancia de las dianas</h2>
      <p>
        Las <strong>dianas</strong> son marcas visibles colocadas sobre el
        terreno para mejorar la georreferenciación de las imágenes capturadas
        por el drone. Sirven como puntos de control identificables en cada foto.
      </p>
      <p>Según la investigación:</p>
      <ul>
        <li>
          <strong>Dianas pequeñas</strong> dificultan la identificación exacta
          del centro durante el procesamiento.
        </li>
        <li>
          <strong>Dianas grandes</strong> mejoran significativamente la
          precisión final del modelo.
        </li>
        <li>
          El tamaño de la diana debe relacionarse con el <strong>GSD</strong>{' '}
          (Ground Sample Distance) y la altura de vuelo planificada.
        </li>
      </ul>

      <h2 id="aplicaciones">Aplicaciones reales</h2>
      <p>
        El uso de drones en topografía tiene aplicaciones en múltiples sectores:
      </p>
      <ul>
        <li>Ingeniería civil</li>
        <li>Minería y exploración</li>
        <li>Agricultura de precisión</li>
        <li>Cartografía y catastro</li>
        <li>Construcción y obra civil</li>
        <li>Gestión territorial</li>
        <li>Monitoreo ambiental</li>
        <li>Modelado 3D y BIM</li>
      </ul>

      <h2 id="conclusiones">Conclusiones</h2>
      <p>
        La investigación demuestra que el uso de drones representa una solución{' '}
        <strong>eficiente, moderna y precisa</strong> para levantamientos
        topográficos. Además, evidencia que la combinación correcta entre
        altura de vuelo y tamaño de diana influye directamente en la calidad de
        los productos fotogramétricos.
      </p>

      <blockquote>
        <strong>Configuración óptima identificada:</strong>
        <br />
        Altura de vuelo: <strong>60 metros</strong>
        <br />
        Tamaño de diana: <strong>33 × 33 cm</strong>
        <br />
        Precisión obtenida: <strong>3.74 cm RMSE XY</strong>
      </blockquote>

      <p>
        Estos resultados validan la importancia de una adecuada planificación
        fotogramétrica y abren nuevas posibilidades para futuras
        investigaciones en geomática y geodesia.
      </p>

      <div className={style.cta}>
        <h3 className={style.ctaTitle}>
          ¿Necesitas un levantamiento con drones?
        </h3>
        <p className={style.ctaText}>
          En Soluciones Geomáticas aplicamos esta investigación a proyectos
          reales en Bolivia. Servicios de fotogrametría con drones, control
          terrestre y procesamiento profesional.
        </p>
        <Link to="/servicio/fotogrametria" className={style.ctaButton}>
          Ver servicio de fotogrametría
        </Link>
      </div>
    </>
  );
}

export default DronesPrecision;
