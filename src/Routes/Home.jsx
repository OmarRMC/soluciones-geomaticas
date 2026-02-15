import { useEffect } from "react";
import CardsDefiniciones from "../Components/CardsDefiniciones";
import Slider from "../Components/Slider";
import GeoScien from "../Components/GeoScien";
import StatsCounter from "../Components/StatsCounter";
import style from '../css/Home.module.css';

function Home() {
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, []);

    return (
        <>
            {/* Hero Slider */}
            <Slider />

            {/* Sobre Nosotros + Valores + Equipo */}
            <GeoScien />

            {/* Estadisticas */}
            <StatsCounter />

            {/* Servicios */}
            <section className={style.section}>
                <div className={style.sectionHeader}>
                    <h2 className={style.sectionTitle}>Nuestros Servicios</h2>
                    <p className={style.sectionSubtitle}>
                        Ofrecemos servicios especializados en Topografia y Geomatica, brindando soluciones precisas para proyectos de ingenieria, construccion y medio ambiente.
                    </p>
                </div>
                <CardsDefiniciones />
            </section>

            {/* CTA Contacto + Mapa */}
            <section className={style.ctaSection}>
                <div className={style.ctaContainer}>
                    {/* Izquierda: texto + botones */}
                    <div className={style.ctaLeft}>
                        <span className={style.ctaTag}>
                            <i className="fa-solid fa-location-dot"></i> Contacto
                        </span>
                        <h2 className={style.ctaTitle}>¿Tienes un proyecto en mente?</h2>
                        <p className={style.ctaText}>
                            Nuestro equipo esta listo para ayudarte. Desde levantamientos topograficos hasta analisis SIG, ofrecemos soluciones a medida para cada necesidad.
                        </p>
                        <div className={style.ctaInfo}>
                            <div className={style.ctaInfoItem}>
                                <i className="fa-solid fa-map-marker-alt"></i>
                                <span>Calle Mercado Esq. Loayza, Edif. Paladium, La Paz</span>
                            </div>
                            <div className={style.ctaInfoItem}>
                                <i className="fa-solid fa-phone"></i>
                                <span>+591 63385750</span>
                            </div>
                            <div className={style.ctaInfoItem}>
                                <i className="fa-solid fa-envelope"></i>
                                <span>lacienciageomatica@gmail.com</span>
                            </div>
                        </div>
                        <div className={style.ctaButtons}>
                            <a
                                href="https://api.whatsapp.com/send?phone=+59163385750&text=%E2%9C%94%20Soluciones%20Geomaticas%20-%20Consulta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={style.ctaBtnPrimary}
                            >
                                <i className="fa-brands fa-whatsapp"></i> Escribenos
                            </a>
                            <a
                                href="mailto:lacienciageomatica@gmail.com?subject=Consulta - Soluciones Geomaticas"
                                className={style.ctaBtnOutline}
                            >
                                <i className="fa-regular fa-envelope"></i> Email
                            </a>
                        </div>
                    </div>

                    {/* Derecha: Google Maps */}
                    <div className={style.ctaRight}>
                        <div className={style.mapWrapper}>
                            <iframe
                                title="Ubicacion Soluciones Geomaticas"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956.2804044498678!2d-68.13780939570313!3d-16.49551600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf0d2b4a18f1%3A0x57648bb8e89132b8!2sCalle%20Mercado%20Esq.%20Loayza%2C%20Edif.%20Paladium%2C%20La%20Paz!5e0!3m2!1ses!2sbo!4v1710000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '10px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <a
                            href="https://maps.app.goo.gl/SiTXuu7aztZPTaiK9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={style.mapLink}
                        >
                            <i className="fa-solid fa-diamond-turn-right"></i> Ver en Google Maps
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
