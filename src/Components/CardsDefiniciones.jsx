import style from '../css/CardsDefiniciones.module.css';
import { useNavigate } from "react-router-dom";
import topografia from '../Assets/img/topografia.jpeg';
import geodesia from '../Assets/img/geodesia.jpeg';
import sig from '../Assets/img/sig.jpeg';
import fotogrametria from '../Assets/img/fotogrametria.jpeg';
import UseObserver from '../Hooks/UseObserver';
import { useEffect } from 'react';

function CardsDefiniciones() {
    const ListDB = [
        { titulo: "Fotogrametria", slug: "fotogrametria", description: 'Levantamientos con Dron', urlImg: fotogrametria },
        { titulo: "Topografia", slug: "topografia", description: 'Relevamiento de terrenos', urlImg: topografia },
        { titulo: "Geodesia", slug: "geodesia", description: 'Posicionamiento GNSS', urlImg: geodesia },
        { titulo: "SIG", slug: "sig", description: 'Analisis y Despliegue', urlImg: sig }
    ];

    const [observer, setElemntos, entries] = UseObserver({ root: null, threshold: 0.3 });

    useEffect(() => {
        const card = document.querySelectorAll(`.${style.card}`);
        setElemntos(card);
    }, [setElemntos]);

    useEffect(() => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add(style.visible);
            } else {
                if (e.boundingClientRect.y > 0) {
                    e.target.classList.remove(style.visible);
                }
            }
        });
    }, [observer, entries]);

    return (
        <div className={style.container}>
            {ListDB.map((e, pos) => (
                <Card key={pos} titulo={e.titulo} slug={e.slug} description={e.description} urlImg={e.urlImg} />
            ))}
        </div>
    );
}

function Card({ titulo = 'Hola Mundo', slug = '', description = "Descripcion", urlImg = '' }) {
    const navigation = useNavigate();
    return (
        <div className={style.card} onClick={() => navigation(`/servicio/${slug}`)}>
            <div className={style.imageWrap}>
                <img loading="lazy" className={style.image} src={urlImg} alt={titulo} />
            </div>
            <div className={style.cardBody}>
                <h3 className={style.cardTitle}>{titulo}</h3>
                <p className={style.cardDesc}>{description}</p>
            </div>
        </div>
    );
}

export default CardsDefiniciones;
