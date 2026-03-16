import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { Helmet } from 'react-helmet-async';
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
            <title>Productos | Soluciones Geomaticas</title>
            <meta name="description" content="Catalogo de productos y equipos para topografia, geodesia y fotogrametria. Estaciones totales, receptores GNSS, drones y accesorios. Soluciones Geomaticas, Bolivia." />
            <link rel="canonical" href="https://soluciones-geomaticas.web.app/productos" />
            <meta property="og:title" content="Productos | Soluciones Geomaticas" />
            <meta property="og:description" content="Equipos y productos para topografia, geodesia y fotogrametria. Catalogo profesional en Bolivia." />
            <meta property="og:url" content="https://soluciones-geomaticas.web.app/productos" />
            <meta property="og:type" content="website" />
        </Helmet>
        <div className={bannerStyle.banner}>
            <h1 className={bannerStyle.bannerTitle}>Nuestros Productos</h1>
            <p className={bannerStyle.breadcrumb}>inicio / productos</p>
        </div>
        <ProductList />
    </>);
}

export default Productos;