import style from "../../css/Geodesia.module.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import geo from '../../Assets/img/services/GNSS.png';
function Geodesia() {
    return (
        <div className={style.container_servicio}>
            <section className={style.descripcion}>
                <h4>Asesorías y Estudios Geodésicos</h4>
                <p>Reconocemos que los requerimientos de nuestros clientes pueden variar ampliamente. Por eso, en GeoScien Servicios Geomáticos proporcionamos una extensa gama de servicios, incluyendo asesorías expertas y servicios geodésicos, llevados a cabo por nuestro equipo de profesionales especializados. Nos esforzamos por ofrecer soluciones precisas y adaptadas a cada situación particular.</p>
                <div className={style.container_actividades}>
                    <div className={style.actividades}>
                        <picture>
                            <img src={geo} alt="image" />
                        </picture>
                        <div>
                            <h4>Nuestros Servicios</h4>
                            <ul>
                                <li><VerifiedIcon /> Construcción de redes geodésicas</li>
                                <li><VerifiedIcon /> Poligonales GNSS</li>
                                <li><VerifiedIcon /> Desarrollo de modelos geoidales locales</li>
                                <li><VerifiedIcon /> Levantamientos con tecnología GNSS, RTK - NTRIP - EST </li>
                                <li><VerifiedIcon /> Establecimiento de parámetros de transformación</li>
                                <li><VerifiedIcon /> Cálculos y programas de transformación de UTM - LTM - PTL</li>
                                <li><VerifiedIcon /> Inspecciones Técnicas</li>
                                <li><VerifiedIcon /> Asesorías</li>
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

export default Geodesia;