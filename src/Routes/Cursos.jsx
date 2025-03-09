
import style from '../css/Cursos.module.css'
import img1 from '../Assets/img/curso1.jpg'
import img2 from '../Assets/img/curso2.jpg'
import img3 from '../Assets/img/curso3.jpg'
import img4 from '../Assets/img/curso4.jpg'
import Zoom from '@mui/material/Zoom';
import Search from '../Components/Search'
import { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import servidor from './Server.js'; 
import Loading from '../Components/Loading'
function Cursos() {


    let checked = true;
    
    let ListDB = [{ titulo: "Desarrollo web", author: "Omar Mamani", lecciones: "-", duracion: "-", url: img1 }, { titulo: "Topografia", author: "Wilmer Mamani", lecciones: "-", duracion: "-", url: img2 }, { titulo: "Fotogrametria", author: "Juan Mamani", lecciones: "-", duracion: "-", url: img3 }, { titulo: "Geodesia I", author: "Wilmer Mamani", lecciones: "-", duracion: "8", url: img4 }];
    let listIMG=['https://picsum.photos/500/300?random=5', 'https://picsum.photos/500/300?random=2', 'https://picsum.photos/500/300?random=1', 'https://picsum.photos/500/300?random=7']; 

    const [dataBase, setDataBase] = useState([])
    const [listCursos, setListCursos] = useState(null);

  
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

        }

        /*
        function ok(){
            setDataBase(ListDB); 
        }
        ok(); */
        connection();
    }, [])

    return (
        <>
            <Search search={filtrar} />
            <main className={style.main}>

                {(!listCursos)?<Loading></Loading>:''}
                {
                    
                    listCursos?.map((element, pos) =>
                        <Zoom key={`${element.id}${pos}}`} in={checked} style={{ transitionDelay: checked ? `${500 * pos}ms` : '0ms' }}>
                            <div>

                                <Curso curso_id={element.id} Descripccion={element.Descripccion} imgUrl={`https://picsum.photos/500/300?random=${getRandomNumber(0,50)}`} titulo={element.Titulo} autor={element.author ?? 'Juan wilmer'} leciones={`${element.lecciones ?? '-'} lecciones`} duracion={`${element.duracion ?? '-'} Horas`} software="Software" />

                            </div>
                        </Zoom>

                    )

                }

            </main> </>);
}

function Curso({ imgUrl, titulo = "Developers JS", autor = "Omar RMC", leciones = "30 lecciones", duracion = "5 Horas", software = "Software" , curso_id, Descripccion }) {
    const navigate = useNavigate();
    return (
        <>
            <div className={style.contentMainCurso} onClick={(e)=>{ navigate(`./${curso_id}?titulo=${titulo}&descripccion=${Descripccion??''}`) ;   console.log(curso_id)}}>
                <div className={style.contentCurso}>
                    <div className={style.imgCurso}>
                        <img loading='lazy' src={imgUrl} alt="IMG " width="100%" />
                    </div>

                    <main className={style.descricionCurso}>
                        <p>{titulo}</p>
                        <p>{autor}</p>
                    </main>

                    <footer className={style.footerCurso}>
                        <span > {leciones} </span>
                        <span className={style.footerLine}> {duracion} </span>
                        <span className={style.footerLine}> {software} </span>
                    </footer>
                </div>
            </div>
        </>

    )
}

{
    //'<Navigate to=`./Cursos/${curso_id}`/>'
}

export default Cursos;