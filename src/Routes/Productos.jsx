import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { ProductList } from "../Components/product/ProductList";
import bannerStyle from "../css/ContanerServicio.module.css";

function Productos() {
    const { producto_id } = useParams();
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])

    return (<>
        <div className={bannerStyle.banner}>
            <h1 className={bannerStyle.bannerTitle}>Nuestros Productos</h1>
            <p className={bannerStyle.breadcrumb}>inicio / productos</p>
        </div>
        <ProductList />
    </>);
}

export default Productos;