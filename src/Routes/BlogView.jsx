import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { Helmet } from 'react-helmet-async';
import Fotogrametria from "../Components/Services/Fotogrametria";
import Topografia from "../Components/Services/Topografia";
import Geodesia from "../Components/Services/Geodesia";
import Sig from "../Components/Services/Sig";
import bannerStyle from "../css/ContanerServicio.module.css";

const serviceTitles = {
    fotogrametria: 'Fotogrametria',
    topografia: 'Topografia',
    geodesia: 'Geodesia',
    sig: 'SIG',
};

const serviceDescriptions = {
    fotogrametria: 'Levantamientos fotogrametricos con drones georreferenciados. Generacion de ortofotos, modelos digitales de terreno y nubes de puntos de alta precision.',
    topografia: 'Levantamientos topograficos con estacion total y receptores GNSS. Replanteos, perfiles longitudinales y curvas de nivel para proyectos de ingenieria.',
    geodesia: 'Establecimiento de redes geodesicas, levantamientos GNSS y desarrollo de modelos geoidales locales con precision milimetrica.',
    sig: 'Analisis espacial, elaboracion de mapas tematicos y gestion de datos geoespaciales con sistemas de informacion geografica.',
};

const serviceComponents = {
    fotogrametria: Fotogrametria,
    topografia: Topografia,
    geodesia: Geodesia,
    sig: Sig,
};

export default function BlogView() {
    const { service_id } = useParams();

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, []);

    const key = service_id?.toLowerCase();
    const Layout = serviceComponents[key] || (() => <div></div>);
    const title = serviceTitles[key] || service_id;
    const description = serviceDescriptions[key] || '';

    return (
        <main>
            <Helmet>
                <title>{title} | Soluciones Geomaticas</title>
                <meta name="description" content={description || `Servicio de ${title} - Soluciones Geomaticas, Bolivia.`} />
                <link rel="canonical" href={`https://soluciones-geomaticas.web.app/servicio/${key}`} />
                <meta property="og:title" content={`${title} | Soluciones Geomaticas`} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={`https://soluciones-geomaticas.web.app/servicio/${key}`} />
                <meta property="og:type" content="article" />
            </Helmet>
            <div className={bannerStyle.banner}>
                <h1 className={bannerStyle.bannerTitle}>{title}</h1>
                <p className={bannerStyle.breadcrumb}>servicios / {title?.toLowerCase()}</p>
            </div>
            <Layout />
        </main>
    );
}
