import style from "../../css/Geodesia.module.css"
import galeria from "../../css/GaleriaCarousel.module.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import geo from '../../Assets/img/services/mavic.jpg';
import GaleriaCarousel from '../GaleriaCarousel';

import img1 from '../../Assets/servicios/fotogrametria/uno.jpg';
import img2 from '../../Assets/servicios/fotogrametria/dos.jpg';

const galeriaImages = [
    { src: img1, alt: "Fotogrametria - Mapeo aéreo 1" },
    { src: img2, alt: "Fotogrametria - Mapeo aéreo 2" },
];

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

            <section className={galeria.galeria}>
                <h3>Galeria</h3>
                <div className={galeria.container_galeria}>
                    <GaleriaCarousel images={galeriaImages} />
                </div>
            </section>

            <section className={style.ctaService}>
                <h3>¿Necesitas este servicio?</h3>
                <p>Solicita una cotizacion sin compromiso</p>
                <div className={style.ctaButtons}>
                    <a href="https://api.whatsapp.com/send?phone=+59163385750&text=%E2%9C%94%20Soluciones%20Geomaticas%20-%20Consulta%20Fotogrametria" target="_blank" rel="noopener noreferrer" className={style.ctaBtnPrimary}>
                        <i className="fa-brands fa-whatsapp"></i> WhatsApp
                    </a>
                    <a href="mailto:lacienciageomatica@gmail.com?subject=Consulta Fotogrametria - Soluciones Geomaticas" className={style.ctaBtnOutline}>
                        <i className="fa-regular fa-envelope"></i> Email
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Fotogrametria;