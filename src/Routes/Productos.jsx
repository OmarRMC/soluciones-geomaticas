import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { Helmet } from 'react-helmet-async';
import { absUrl, breadcrumbLd } from "../utils/seo";
import ogImage from "../Assets/img/productos/Diana.JPG";
import { ProductList } from "../Components/product/ProductList";
import bannerStyle from "../css/ContanerServicio.module.css";

function Productos() {
    const { producto_id } = useParams();
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])

    return (<>
        <Helmet>
            <title>Productos | Soluciones Geomáticas</title>
            <meta name="description" content="Catálogo de productos y equipos para topografía, geodesia y fotogrametría. Estaciones totales, receptores GNSS, drones y accesorios. Soluciones Geomáticas, Bolivia." />
            <link rel="canonical" href="https://soluciones-geomaticas.web.app/productos" />
            <meta property="og:title" content="Productos | Soluciones Geomáticas" />
            <meta property="og:description" content="Equipos y productos para topografía, geodesia y fotogrametría. Catálogo profesional en Bolivia." />
            <meta property="og:url" content="https://soluciones-geomaticas.web.app/productos" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={absUrl(ogImage)} />
            <meta name="twitter:image" content={absUrl(ogImage)} />
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbLd([{ name: 'Productos', path: '/productos' }]))}
            </script>
        </Helmet>
        <div className={bannerStyle.banner}>
            <h1 className={bannerStyle.bannerTitle}>Nuestros Productos</h1>
            <p className={bannerStyle.breadcrumb}>inicio / productos</p>
        </div>
        <ProductList />
    </>);
}

export default Productos;