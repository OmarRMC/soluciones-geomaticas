import style from '../css/Cursos.module.css'
import Zoom from '@mui/material/Zoom';
import Search from '../Components/Search'
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import servidor from './Server.js';
import Loading from '../Components/Loading'
import bannerStyle from '../css/ContanerServicio.module.css'

function Cursos() {
    let checked = true;

    const [dataBase, setDataBase] = useState([])
    const [listCursos, setListCursos] = useState(null);
    const [totalCursos, setTotalCursos] = useState(0);

    function filtrar(texto) {
        let auxi = [...dataBase];

        if (/^\w+/.test(texto)) {
            auxi = auxi.filter(e => {
                var regular = new RegExp(texto, 'i')
                return regular.test(e.Titulo)
            });
            setListCursos(auxi)
        } else {
            setListCursos(auxi)
        }
    }

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        let connection = async () => {
            const res = await fetch(`${servidor}/allCursos`);
            const data = await res.json();

            setListCursos(data);
            setDataBase(data);
            setTotalCursos(data.length);
        }

        connection();
    }, [])

    const categoriasDisponibles = [...new Set(dataBase.map(c => c.Categoria).filter(Boolean))];

    return (
        <>
            <Helmet>
                <title>Cursos y Capacitaciones | Soluciones Geom&aacute;ticas</title>
                <meta name="description" content={`Explora nuestros ${totalCursos || ''} cursos de topograf&iacute;a, geodesia, fotogrametr&iacute;a, SIG y desarrollo web. Capacitaciones profesionales con certificaci&oacute;n en geom&aacute;tica.`} />
                <meta name="keywords" content={`cursos topograf&iacute;a, capacitaci&oacute;n geodesia, curso fotogrametr&iacute;a drones, curso SIG, geom&aacute;tica Bolivia${categoriasDisponibles.length ? ', ' + categoriasDisponibles.join(', ') : ''}`} />
                <link rel="canonical" href="https://soluciones-geomaticas.web.app/cursos" />
                <meta property="og:title" content="Cursos y Capacitaciones | Soluciones Geom&aacute;ticas" />
                <meta property="og:description" content={`Descubre nuestros cursos de topograf&iacute;a, geodesia, fotogrametr&iacute;a y SIG. ${totalCursos ? totalCursos + ' cursos disponibles.' : ''}`} />
                <meta property="og:url" content="https://soluciones-geomaticas.web.app/cursos" />
                <meta property="og:type" content="website" />
            </Helmet>
            <div className={bannerStyle.banner}>
                <h1 className={bannerStyle.bannerTitle}>Cursos y Capacitaci&oacute;n</h1>
                <p className={bannerStyle.breadcrumb}>inicio / cursos</p>
            </div>
            <Search search={filtrar} />
            <main className={style.main}>

                {(!listCursos) ? <Loading></Loading> : ''}
                {
                    listCursos?.map((element, pos) =>
                        <Zoom key={`${element.id}${pos}}`} in={checked} style={{ transitionDelay: checked ? `${500 * pos}ms` : '0ms' }}>
                            <div>
                                <Curso
                                    curso_id={element.id}
                                    Descripccion={element.Descripccion}
                                    imgUrl={element.Imagen || `https://picsum.photos/500/300?random=${getRandomNumber(0, 50)}`}
                                    titulo={element.Titulo}
                                    autor={element.author ?? 'Juan wilmer'}
                                    leciones={`${element.lecciones ?? '-'} lecciones`}
                                    duracion={`${element.duracion ?? '-'} Horas`}
                                    software={element.Software ?? 'Software'}
                                    categoria={element.Categoria}
                                />
                            </div>
                        </Zoom>
                    )
                }

            </main>
        </>);
}

function Curso({ imgUrl, titulo = "Developers JS", autor = "Omar RMC", leciones = "30 lecciones", duracion = "5 Horas", software = "Software", curso_id, Descripccion, categoria }) {
    const navigate = useNavigate();
    return (
        <article className={style.contentMainCurso} onClick={() => navigate(`./${curso_id}?titulo=${encodeURIComponent(titulo)}&descripccion=${encodeURIComponent(Descripccion ?? '')}`)}>
            <div className={style.contentCurso}>
                <div className={style.imgCurso}>
                    <img loading='lazy' src={imgUrl} alt={`Curso de ${titulo} - Soluciones Geomaticas`} width="100%" />
                </div>

                <main className={style.descricionCurso}>
                    <p>{titulo}</p>
                    <p>{autor}</p>
                    {categoria && <span style={{ fontSize: '0.75rem', color: '#2EA3F2' }}>{categoria}</span>}
                </main>

                <footer className={style.footerCurso}>
                    <span>{leciones}</span>
                    <span className={style.footerLine}>{duracion}</span>
                    <span className={style.footerLine}>{software}</span>
                </footer>
            </div>
        </article>
    )
}

export default Cursos;