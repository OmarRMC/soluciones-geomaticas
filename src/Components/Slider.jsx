import { useEffect, useState } from 'react';
import { useParams, useNavigate, useSearchParams } from "react-router-dom"

import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import IconButton from '@mui/material/IconButton';
import '../css/Slider.css';


const sliderImages = import.meta.glob('../Assets/img/Slider/*', { eager: true, query: '?url', import: 'default' });
const ListImg = (path) => sliderImages[`../Assets/img/Slider/${path.replace('./', '')}`];
function Slider() {

    const navigation = useNavigate();
    const [imgActive, setImgeActive] = useState(1);
    const [index, setIndex] = useState(1);
    const [size, setSize] = useState(0);

    let list = [1, 2, 3, 4];
    let textos = [
        { titulo: "Topografia", descripcion: "Descripción y representación gráfica del terreno, tanto los elementos naturales como artificiales, aplicando diferentes métodos y utilizando equipos como la Estación Total, Receptores GNSS, Drone." }, 
        { titulo: "Geodesia ", descripcion: "Ofrecemos soluciones especializadas en establecimiento de redes geodésicas, levantamientos GNSS y desarrollo de modelos geoidales locales, asegurando precisión y eficiencia en cada proyecto.." },
        { titulo: "Fotogrametria - Dron", descripcion: "Realizamos levantamientos topográficos precisos utilizando drones georreferenciados y generamos productos fotogramétricos de alta calidad. Esta tecnología avanzada nos permite capturar datos detallados y fiables para una amplia variedad de aplicaciones, asegurando la máxima precisión y eficiencia en cada proyecto." }, 
        { titulo: "S I G", descripcion: "Ofrecemos servicios especializados en el análisis de datos hidrológicos y la elaboración de mapas utilizando avanzadas herramientas de sistemas de información geográfica (SIG). Nuestro equipo de expertos te ayudará a comprender y gestionar tus recursos hídricos de forma sostenible y responsable. Desde la toma de decisiones estratégicas hasta la planificación de infraestructuras y la conservación ambiental, proporcionamos la información detallada y precisa que necesitas para garantizar la sostenibilidad y el uso eficiente de los recursos hídricos a largo plazo." }]

    function start() {
        setSize(document.documentElement.clientWidth);
        //console.log(document.documentElement.clientWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', start);
        setSize(document.documentElement.clientWidth);
        return () => {
            window.removeEventListener('resize', start);
        }
    }, [])

    useEffect(() => {
        let i = 1;
        let c = index;
        const interval = setInterval(() => {
            if (c < 5 && c >= 1) {
                c++;
                //console.log(c)
                setImgeActive((e) => e + i);
            } else {
                i = -i;
                c = 1;
            }
        }, 7000);

        return () => clearInterval(interval);
    }, [index])

    return (
        <>
            <div className="slider">
                <div className='ContainerSlider' style={{ "left": `-${(imgActive - 1) * 100}%` }}>
                    {
                        list.map((e, pos) => {
                            return (
                                <div key={`${pos}-${pos}`} className={`myslide ${(pos + 1 === imgActive) ? "active" : ""}`}>
                                    <div className={`txt ${(pos + 1 === imgActive) ? "active" : ""}`}>
                                        <h1>{textos[pos].titulo}</h1>
                                        <p className="descripcion">{textos[pos].descripcion.substring(0, 250)} {textos[pos].descripcion.length > 250 && "..."}</p>

                                    </div>
                                    <img loading='lazy' className={`img ${(pos + 1 === imgActive) ? "active" : ""}`} src={(size > 650) ? ListImg(`./slide${pos + 1}PC.jpeg`) : ListImg(`./slide${pos + 1}Mobile.jpeg`)} alt={'Hola MUndo '} />
                                </div>
                            )
                        }
                        )

                    }
                </div>
                <IconButton className="prev" onClick={(e) => { (imgActive > 1) && setImgeActive(imgActive - 1); (imgActive > 1) && setIndex(imgActive - 1) }}>
                    <ArrowBackIosIcon />
                </IconButton>
                <IconButton className="next" onClick={(e) => { (imgActive < list.length) && setImgeActive(imgActive + 1); (imgActive < list.length) && setIndex(imgActive + 1) }} >
                    <ArrowForwardIosIcon />
                </IconButton>

                <div className="dotsbox" style={{ textAlign: 'center' }}>

                    {
                        list.map((e, pos) =>
                            <span pos={pos + 1} key={pos + e} className={`dot ${(pos + 1 === imgActive) ? "active" : ""}`} onClick={(e) => { setImgeActive(parseInt(e.target.getAttribute("pos"))); setIndex(parseInt(e.target.getAttribute("pos"))) }}></span>
                        )
                    }
                </div>

            </div>

        </>
    );
}

export default Slider;