import { useEffect } from "react";
import { useParams } from "react-router-dom"
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

    return (
        <main>
            <div className={bannerStyle.banner}>
                <h1 className={bannerStyle.bannerTitle}>{title}</h1>
                <p className={bannerStyle.breadcrumb}>servicios / {title?.toLowerCase()}</p>
            </div>
            <Layout />
        </main>
    );
}
