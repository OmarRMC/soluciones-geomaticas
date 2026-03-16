import style from "../../css/Geodesia.module.css"
import galeria from "../../css/GaleriaCarousel.module.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import geo from '../../Assets/img/services/ESTA.jpg';
import GaleriaCarousel from '../GaleriaCarousel';

import img1 from '../../Assets/servicios/topografia/uno.jpg';
import img2 from '../../Assets/servicios/topografia/dos.jpg';
import img3 from '../../Assets/servicios/topografia/tres.jpg';
import img4 from '../../Assets/servicios/topografia/cuatro.jpg';
import img5 from '../../Assets/servicios/topografia/cinco.jpg';
import img6 from '../../Assets/servicios/topografia/saeis.jpg';

const galeriaImages = [
    { src: img1, alt: "Topografia - Trabajo de campo 1" },
    { src: img2, alt: "Topografia - Trabajo de campo 2" },
    { src: img3, alt: "Topografia - Trabajo de campo 3" },
    { src: img4, alt: "Topografia - Trabajo de campo 4" },
    { src: img5, alt: "Topografia - Trabajo de campo 5" },
    { src: img6, alt: "Topografia - Trabajo de campo 6" },
];

function Topografia() {
    return (
        <div className={style.container_servicio}>
            <section className={style.descripcion}>
                <h4>Relevamiento</h4>
                <p>Contamos con un equipo de profesionales altamente capacitados y con amplia experiencia en trabajo de campo. Disponemos de equipos topográficos y geodésicos certificados y calibrados, ideales para garantizar la máxima precisión y eficiencia en cada proyecto.</p>
                <div className={style.container_actividades}>
                    <div className={style.actividades}>
                        <picture>
                            <img src={geo} alt="image" />
                        </picture>
                        <div>
                            <h4>Nuestros Servicios</h4>
                            <ul>
                                <li><VerifiedIcon /> Levantamiento Topográfico Georreferenciado </li>
                                <li><VerifiedIcon /> Replanteo y Estacado Predio</li>
                                <li><VerifiedIcon /> División y Partición de lotes  </li>
                                <li><VerifiedIcon /> Diseño de Urbanización</li>
                                <li><VerifiedIcon /> Nivelación</li>
                                <li><VerifiedIcon /> Perfiles y Razantes </li>
                                <li><VerifiedIcon /> Cálculo de Volúmenes </li>
                                <li><VerifiedIcon /> Curvas de Nivel </li>
                                <li><VerifiedIcon /> Asesorías</li>

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
                    <a href="https://api.whatsapp.com/send?phone=+59163385750&text=%E2%9C%94%20Soluciones%20Geomaticas%20-%20Consulta%20Topografia" target="_blank" rel="noopener noreferrer" className={style.ctaBtnPrimary}>
                        <i className="fa-brands fa-whatsapp"></i> WhatsApp
                    </a>
                    <a href="mailto:lacienciageomatica@gmail.com?subject=Consulta Topografia - Soluciones Geomaticas" className={style.ctaBtnOutline}>
                        <i className="fa-regular fa-envelope"></i> Email
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Topografia;