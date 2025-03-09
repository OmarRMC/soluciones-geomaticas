import style from "../../css/Geodesia.module.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import geo from '../../Assets/img/services/ESTA.jpg';
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

            <section className={style.galeria}>
                <h3>Galeria</h3>

            </section>
        </div>
    );
}

export default Topografia;