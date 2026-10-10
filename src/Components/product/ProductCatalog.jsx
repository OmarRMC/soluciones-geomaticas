import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { absUrl, breadcrumbLd } from "../../utils/seo";
import { products } from "../../utils/products";
import styles from '../../css/ProductCatalog.module.css'
import stylesBoxBack from '../../css/BoxBack.module.css';
import BoxBack from "../BoxBack";
import NotFound from "../../Routes/NotFound";

const ProductCatalog = () => {
    const { title } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [title]);

    const product = products.find((p) => p.slug === title || p.title === title);
    if (!product) {
        return <NotFound title="Producto no encontrado" message="El producto que buscas no existe." backTo="/productos" backLabel="Ver productos" />;
    }

    if (product.slug !== title) return <Navigate to={`/productos/catalogo/${product.slug}`} replace />;

    const catalog = product.catalog;
    const url = `https://soluciones-geomaticas.web.app/productos/catalogo/${product.slug}`;
    const description = `Lista de productos y precios de ${product.title} en Soluciones Geomáticas, Bolivia.`;


    return (
        <>
        <Helmet>
            <title>{`${product.title} - Catálogo | Soluciones Geomáticas`}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            <meta property="og:title" content={`${product.title} - Catálogo | Soluciones Geomáticas`} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={absUrl(product.image)} />
            <meta name="twitter:image" content={absUrl(product.image)} />
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbLd([{ name: 'Productos', path: '/productos' }, { name: product.title, path: `/productos/catalogo/${product.slug}` }]))}
            </script>
        </Helmet>
        <div className={stylesBoxBack.containerBoxBack}>
            <BoxBack></BoxBack>
        </div>
            <div className={styles.tableContainer}>
                <h1 className={styles.tableTitle}>Lista de Productos - {product.title}</h1>
                <div className={styles.tableWrapper}>
                    <table className={styles.productTable}>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                catalog?.map((product, index) => (
                                    <tr key={index}>
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>{product.price}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                {/* <Link to="/" className={styles.backButton}>
          <ArrowBackIcon /> Volver
        </Link> */}
            </div >
        </>
    );
};

export default ProductCatalog;