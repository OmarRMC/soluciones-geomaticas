import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { Helmet } from 'react-helmet-async';
import Fotogrametria from "../Components/Services/Fotogrametria";
import Topografia from "../Components/Services/Topografia";
import Geodesia from "../Components/Services/Geodesia";
import Sig from "../Components/Services/Sig";
import bannerStyle from "../css/ContanerServicio.module.css";
import NotFound from "./NotFound";
import { absUrl, breadcrumbLd, serviceLd } from "../utils/seo";
import imgFotogrametria from "../Assets/img/fotogrametria.jpeg";
import imgTopografia from "../Assets/img/topografia.jpeg";
import imgGeodesia from "../Assets/img/geodesia.jpeg";
import imgSig from "../Assets/img/sig.jpeg";

const serviceTitles = {
    fotogrametria: 'Fotogrametría',
    topografia: 'Topografía',
    geodesia: 'Geodesia',
    sig: 'SIG',
};

// Título para Google: incluye qué se ofrece y dónde
const serviceSeoTitles = {
    fotogrametria: 'Fotogrametría con drones en Bolivia',
    topografia: 'Topografía y levantamientos topográficos en Bolivia',
    geodesia: 'Geodesia y levantamientos GNSS en Bolivia',
    sig: 'SIG - Sistemas de Información Geográfica en Bolivia',
};

const serviceImages = {
    fotogrametria: imgFotogrametria,
    topografia: imgTopografia,
    geodesia: imgGeodesia,
    sig: imgSig,
};

const serviceDescriptions = {
    fotogrametria: 'Levantamientos fotogramétricos con drones georreferenciados. Generación de ortofotos, modelos digitales de terreno y nubes de puntos de alta precisión.',
    topografia: 'Levantamientos topográficos con estación total y receptores GNSS. Replanteos, perfiles longitudinales y curvas de nivel para proyectos de ingeniería.',
    geodesia: 'Establecimiento de redes geodésicas, levantamientos GNSS y desarrollo de modelos geoidales locales con precisión milimétrica.',
    sig: 'Análisis espacial, elaboración de mapas temáticos y gestión de datos geoespaciales con sistemas de información geográfica.',
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
    const Layout = serviceComponents[key];
    if (!Layout) {
        return <NotFound title="Servicio no encontrado" message="El servicio que buscas no existe." backTo="/servicios" backLabel="Ver servicios" />;
    }
    const title = serviceTitles[key];
    const description = serviceDescriptions[key];
    const seoTitle = `${serviceSeoTitles[key]} | Soluciones Geomáticas`;
    const path = `/servicio/${key}`;
    const image = absUrl(serviceImages[key]);

    return (
        <main>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={absUrl(path)} />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={absUrl(path)} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={image} />
                <meta name="twitter:image" content={image} />
                <script type="application/ld+json">
                    {JSON.stringify(serviceLd({ name: serviceTitles[key], description, path, image }))}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbLd([{ name: 'Servicios', path: '/servicios' }, { name: title, path }]))}
                </script>
            </Helmet>
            <div className={bannerStyle.banner}>
                <h1 className={bannerStyle.bannerTitle}>{title}</h1>
                <p className={bannerStyle.breadcrumb}>servicios / {title?.toLowerCase()}</p>
            </div>
            <Layout />
        </main>
    );
}
