import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
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
        { titulo: "Topografia", descripcion: "Descripcion y representacion grafica del terreno, tanto los elementos naturales como artificiales, aplicando diferentes metodos y utilizando equipos como la Estacion Total, Receptores GNSS, Drone." },
        { titulo: "Geodesia", descripcion: "Ofrecemos soluciones especializadas en establecimiento de redes geodesicas, levantamientos GNSS y desarrollo de modelos geoidales locales, asegurando precision y eficiencia en cada proyecto." },
        { titulo: "Fotogrametria - Dron", descripcion: "Realizamos levantamientos topograficos precisos utilizando drones georreferenciados y generamos productos fotogrametricos de alta calidad para una amplia variedad de aplicaciones." },
        { titulo: "S I G", descripcion: "Ofrecemos servicios especializados en el analisis de datos hidrologicos y la elaboracion de mapas utilizando avanzadas herramientas de sistemas de informacion geografica (SIG)." }
    ];

    function start() {
        setSize(document.documentElement.clientWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', start);
        setSize(document.documentElement.clientWidth);
        return () => {
            window.removeEventListener('resize', start);
        }
    }, []);

    useEffect(() => {
        let i = 1;
        let c = index;
        const interval = setInterval(() => {
            if (c < 5 && c >= 1) {
                c++;
                setImgeActive((e) => e + i);
            } else {
                i = -i;
                c = 1;
            }
        }, 7000);

        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="slider">
            <div className="ContainerSlider" style={{ left: `-${(imgActive - 1) * 100}%` }}>
                {list.map((e, pos) => (
                    <div key={`${pos}-${pos}`} className={`myslide ${pos + 1 === imgActive ? "active" : ""}`}>
                        <div className="slide-overlay"></div>
                        <div className={`txt ${pos + 1 === imgActive ? "active" : ""}`}>
                            <h1>{textos[pos].titulo}</h1>
                            <p className="descripcion">{textos[pos].descripcion.substring(0, 200)}{textos[pos].descripcion.length > 200 && "..."}</p>
                            <button className="slider-cta" onClick={() => navigation('/servicios')}>
                                Conoce nuestros servicios
                            </button>
                        </div>
                        <img loading="lazy" className={`img ${pos + 1 === imgActive ? "active" : ""}`} src={size > 650 ? ListImg(`./slide${pos + 1}PC.jpeg`) : ListImg(`./slide${pos + 1}Mobile.jpeg`)} alt={textos[pos].titulo} />
                    </div>
                ))}
            </div>
            <IconButton className="prev" onClick={() => { if (imgActive > 1) { setImgeActive(imgActive - 1); setIndex(imgActive - 1); } }}>
                <ArrowBackIosIcon />
            </IconButton>
            <IconButton className="next" onClick={() => { if (imgActive < list.length) { setImgeActive(imgActive + 1); setIndex(imgActive + 1); } }}>
                <ArrowForwardIosIcon />
            </IconButton>
            <div className="dotsbox" style={{ textAlign: 'center' }}>
                {list.map((e, pos) => (
                    <span key={pos + e} pos={pos + 1} className={`dot ${pos + 1 === imgActive ? "active" : ""}`}
                        onClick={(e) => { setImgeActive(parseInt(e.target.getAttribute("pos"))); setIndex(parseInt(e.target.getAttribute("pos"))); }}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Slider;
