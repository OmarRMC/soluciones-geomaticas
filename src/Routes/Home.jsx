import { useEffect } from "react";
import CardAuthor from "../Components/CardAuthor";
import CardsDefiniciones from "../Components/CardsDefiniciones";
import Slider from "../Components/Slider";
import style from '../css/Home.module.css';
import CardAuthorV1 from "../Components/CardAuthorV1";

import img from '../Assets/img/Avatar.png';
import GeoScien from "../Components/GeoScien";
function Home() {
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

    }, [])
    return (

        <>
        <GeoScien></GeoScien>
            {/* <Slider></Slider> */}
            {/* <div className={style.container_servicio}>
                <h2>Servicios</h2>
                <p>                    
                En Geocien, ofrecemos servicios especializados en Topografía y Geomática, brindando soluciones precisas para proyectos de ingeniería, construcción y medio ambiente. Nuestro equipo altamente capacitado y el uso de tecnología avanzada nos permiten garantizar resultados confiables y eficientes.
                </p>
            </div>
            
            <CardsDefiniciones></CardsDefiniciones> */}
            {
                //<CardAuthor></CardAuthor>
            }

            {/* <section>
                <div>
                    <h3>Somos GeoScien</h3>
                    <p>
                    Nuestro objetivo es brindar un servicio integral en el ámbito de la Geomática. Contamos con un equipo de profesionales altamente especializados en diversas áreas del conocimiento y respaldados por herramientas tecnológicas de última generación. Gracias a nuestro enfoque multidisciplinario y el uso de tecnología avanzada, garantizamos soluciones precisas y eficientes para tus necesidades geoespaciales.
                    </p>
                </div>
            </section>

            <section>
                <picture>
                    <img src="" alt="" />
                </picture>
                <div>
                    <h3> </h3>
                    <ul>
                        <li>
                            <h5>
                                Somos
                            </h5>
                            <p>Somos un equipo de profesionales con amplia experiencia en Geomática, Topografía, Cartografía y Geomensura. Nuestro compromiso con la excelencia y la innovación se refleja en cada proyecto que emprendemos y en cada servicio que ofrecemos.</p>
                        </li>

                    </ul>
                </div>
                <div>
                    <h3> </h3>
                    <ul>
                        <li>
                            <h5>
                            Pasión
                            </h5>
                            <p>Nos comprometemos con las geociencias, la tecnología y la excelencia en el servicio, lo que nos impulsa a proporcionar soluciones técnicas precisas e innovadoras, perfectamente adaptadas a las necesidades específicas de nuestros clientes.</p>
                        </li>

                    </ul>
                </div>
                <div>
                    <h3> </h3>
                    <ul>
                        <li>
                            <h5>
                            Propósito
                            </h5>
                            <p>Nos destacamos por brindar un servicio serio y puntual, comprometidos en satisfacer plenamente los requerimientos de nuestros clientes y superar sus expectativas con soluciones excepcionales e innovadoras.</p>
                        </li>

                    </ul>
                </div>
            </section>


            <section>
                <div>
                    <h3>Nuestro Equipo</h3>
                    <p>
                    Equipo de profesionales especializados.
                    </p>
                    <div>
                        <CardAuthorV1 name ={"Juan Wilmer"} image={img} socials={[]}/>
                    </div>
                    
                </div>
            </section> */}

        </>);
}

export default Home;