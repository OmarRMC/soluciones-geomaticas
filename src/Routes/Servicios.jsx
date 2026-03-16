import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import style from "../css/ContanerServicio.module.css";
import CardsDefiniciones from "../Components/CardsDefiniciones";

function Servicios() {
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, []);

    return (
        <>
            <Helmet>
                <title>Servicios | Soluciones Geomaticas</title>
                <meta name="description" content="Servicios profesionales de topografia, geodesia, fotogrametria con drones y sistemas de informacion geografica (SIG). Soluciones precisas para proyectos de ingenieria en Bolivia." />
                <link rel="canonical" href="https://soluciones-geomaticas.web.app/servicios" />
                <meta property="og:title" content="Servicios | Soluciones Geomaticas" />
                <meta property="og:description" content="Topografia, geodesia, fotogrametria con drones y SIG. Servicios profesionales en Bolivia." />
                <meta property="og:url" content="https://soluciones-geomaticas.web.app/servicios" />
                <meta property="og:type" content="website" />
            </Helmet>
            <div className={style.banner}>
                <h1 className={style.bannerTitle}>Nuestros Servicios</h1>
                <p className={style.breadcrumb}>inicio / servicios</p>
            </div>

            <main className={style.contanerServicio}>
                <div className={style.introSection}>
                    <p className={style.introText}>
                        En Soluciones Geomaticas, ofrecemos servicios especializados en Topografia y Geomatica, brindando soluciones precisas para proyectos de ingenieria, construccion y medio ambiente. Nuestro equipo altamente capacitado y el uso de tecnologia avanzada nos permiten garantizar resultados confiables y eficientes.
                    </p>
                </div>

                <CardsDefiniciones />
            </main>
        </>
    );
}

export default Servicios;
