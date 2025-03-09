import { Link, useParams } from "react-router-dom";
import { products } from "../../utils/products";
import styles from '../../css/ProductCatalog.module.css'
import BoxBack from "../BoxBack";

const ProductCatalog = () => {
    const { title } = useParams();
    const product = products.find((p) => p.title === title);
    if (!product) return <h2 className={styles.errorMessage}>Producto no encontrado</h2>;

    const catalog = product.catalog;


    return (
        <>
            <BoxBack></BoxBack>
            <div className={styles.tableContainer}>
                <h2 className={styles.tableTitle}>Lista de Productos - {product.title}</h2>
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