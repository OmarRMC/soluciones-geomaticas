import style from "../../css/Geodesia.module.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import geo from '../../Assets/img/services/mavic.jpg';
function Fotogrametria() {
    return (
        <div className={style.container_servicio}>
            <section className={style.descripcion}>
                <h4>Captura, Mapeo y Análisis</h4>
                <p>Nos especializamos en ofrecer soluciones integrales para el mapeo aéreo georreferenciado de alta precisión. Proporcionamos una amplia gama de productos y servicios que combinan tecnología avanzada de aerofotogrametría. Nuestra oferta abarca desde la captura y el mapeo hasta el análisis de datos, todo adaptado a las necesidades específicas de nuestros clientes.</p>
                <div className={style.container_actividades}>
                    <div className={style.actividades}>
                        <picture>
                            <img src={geo} alt="image" />
                        </picture>
                        <div>
                            <h4>Nuestros Servicios</h4>
                            <ul>
                                <li><VerifiedIcon /> Levantamiento Topográfico con Drones </li>
                                <li><VerifiedIcon /> Seguimientos de avance de obra </li>
                                <li><VerifiedIcon /> Inspecciones aéreas </li>
                                <li><VerifiedIcon /> Mapeo de Detección de Cambios </li>
                                <li><VerifiedIcon /> Mapas de Pendientes </li>
                                <li><VerifiedIcon /> Orotmosaico Georreferenciado</li>
                                <li><VerifiedIcon /> Nube de puntos</li>
                                <li><VerifiedIcon /> Modelo MDT, MDS y 3D</li>
                                <li><VerifiedIcon /> Cálculo de Volúmenes </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.galeria}>
                <h3>Galeria</h3>

            </section>
        </div>
    );
}

export default Fotogrametria;