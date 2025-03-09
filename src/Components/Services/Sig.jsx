import style from "../../css/Geodesia.module.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import geo from '../../Assets/img/services/SIG.gif';

function Sig() {
    return (
        <div className={style.container_servicio}>
            <section className={style.descripcion}>
                <h4>Captura de Datos,Análisis y Despliegue</h4>
                <p>Ofrecemos servicios especializados en el análisis de datos hidrológicos y la elaboración de mapas utilizando avanzadas herramientas de sistemas de información geográfica (SIG). Nuestro equipo de expertos te ayudará a comprender y gestionar tus recursos hídricos de forma sostenible y responsable. Desde la toma de decisiones estratégicas hasta la planificación de infraestructuras y la conservación ambiental, proporcionamos la información detallada y precisa que necesitas para garantizar la sostenibilidad y el uso eficiente de los recursos hídricos a largo plazo.</p>
                <div className={style.container_actividades}>
                    <div className={style.actividades}>
                        <picture>
                            <img src={geo} alt="image" />
                        </picture>
                        <div>
                            <h4>Nuestros Servicios</h4>
                            <ul>
                                <li><VerifiedIcon /> Análisis de datos hidrológicos </li>
                                <li><VerifiedIcon /> Análisis de la cuenca hidrológica </li>
                                <li><VerifiedIcon /> Modelación hidrológica </li>
                                <li><VerifiedIcon /> Crea mapas y escenas en 3D </li>
                                <li><VerifiedIcon /> Mapas de Planificación Territorial </li>
                                <li><VerifiedIcon /> Mapas de Pendientes </li>
                                <li><VerifiedIcon /> Mapas de Uso y Cobertura del Suelo</li>
                                <li><VerifiedIcon /> Mapas de Erosión del Suelo</li>
                                <li><VerifiedIcon /> Mapas de Evaluación de Peligros</li>
                                <li><VerifiedIcon /> Mapas Hidrológicos </li>
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

export default Sig;