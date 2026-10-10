import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { absUrl, breadcrumbLd } from "../utils/seo";
import ogImage from "../Assets/img/topografia.jpeg";
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
                <title>Servicios | Soluciones Geomáticas</title>
                <meta name="description" content="Servicios profesionales de topografía, geodesia, fotogrametría con drones y sistemas de información geográfica (SIG). Soluciones precisas para proyectos de ingeniería en Bolivia." />
                <link rel="canonical" href="https://soluciones-geomaticas.web.app/servicios" />
                <meta property="og:title" content="Servicios | Soluciones Geomáticas" />
                <meta property="og:description" content="Topografía, geodesia, fotogrametría con drones y SIG. Servicios profesionales en Bolivia." />
                <meta property="og:url" content="https://soluciones-geomaticas.web.app/servicios" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={absUrl(ogImage)} />
                <meta name="twitter:image" content={absUrl(ogImage)} />
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbLd([{ name: 'Servicios', path: '/servicios' }]))}
                </script>
            </Helmet>
            <div className={style.banner}>
                <h1 className={style.bannerTitle}>Nuestros Servicios</h1>
                <p className={style.breadcrumb}>inicio / servicios</p>
            </div>

            <main className={style.contanerServicio}>
                <div className={style.introSection}>
                    <p className={style.introText}>
                        En Soluciones Geomáticas, ofrecemos servicios especializados en Topografía y Geomática, brindando soluciones precisas para proyectos de ingeniería, construcción y medio ambiente. Nuestro equipo altamente capacitado y el uso de tecnología avanzada nos permiten garantizar resultados confiables y eficientes.
                    </p>
                </div>

                <CardsDefiniciones />
            </main>
        </>
    );
}

export default Servicios;
