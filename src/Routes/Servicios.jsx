import { useEffect } from "react";
import style from "../css/ContanerServicio.module.css";
import CardsDefiniciones from "../Components/CardsDefiniciones";

function Servicios() {
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, []);

    return (
        <>
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
