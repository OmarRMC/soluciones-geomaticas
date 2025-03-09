import { useEffect } from "react";
import style from "../css/ContanerServicio.module.css";
import Loading from "../Components/Loading";
import CardsDefiniciones from "../Components/CardsDefiniciones";

const listServicio = ['Levantamiento Topográfico', 'Levantamiento Topográfico Usando Dron', 'Levantamiento Batimétrico', 'Topografía  en la Construcción', 'Redes Geodésicas Municipales', 'Teledetección - Cartografía', 'Sistema de Información Geográfica'];
function Servicios() {

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])

    return (<>

        <main className={style.contanerServicio}>
            <div className={style.container_servicio}>
                <h2>Servicios</h2>
                <p>
                    En Geocien, ofrecemos servicios especializados en Topografía y Geomática, brindando soluciones precisas para proyectos de ingeniería, construcción y medio ambiente. Nuestro equipo altamente capacitado y el uso de tecnología avanzada nos permiten garantizar resultados confiables y eficientes.
                </p>
            </div>

            <CardsDefiniciones></CardsDefiniciones>
            {/* <h4>Se brinda los siguientes servicios </h4>
            <br/>
            <div  className={style.containerCard}>

                {
                    listServicio.map((e,pos)=>
                    <div className={style.card} key={`pos${pos}`}> 
                    <span className={style.indice}>{pos+1}</span>
                        <p>{e}</p>
                    </div>)
                }

            </div> */}

        </main>
    </>);
}

export default Servicios;