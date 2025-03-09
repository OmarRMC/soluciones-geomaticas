
import style from '../css/CardsDefiniciones.module.css'
import { useNavigate } from "react-router-dom"
import img1 from '../Assets/img/img6.jpg';
import img2 from '../Assets/img/Estacion.jpg';


import topografia from '../Assets/img/topografia.jpeg';
import geodesia from '../Assets/img/geodesia.jpeg';
import sig from '../Assets/img/sig.jpeg';
import fotogrametria from '../Assets/img/fotogrametria.jpeg';


import UseObserver from '../Hooks/UseObserver';
import { useEffect } from 'react';

function CardsDefiniciones() {
    const ListDB = [{titulo:"FOTOGRAMETRÍA ",description:'Dron', urlImg:fotogrametria},{titulo:"TOPOGRAFÍA",description:'Relevamiento', urlImg:topografia},{titulo:"GEODESIA",description:'Posicionamiento GNSS', urlImg:geodesia},{titulo:"SIG",description:'Captura de datos, Análisis y Despliegue ', urlImg:sig}]   
     const [observer, setElemntos, entries] = UseObserver({ root: null, threshold: 0.6 }); //


    useEffect(() => {
        const card = document.querySelectorAll(`.${style.card}`);
        setElemntos(card);        
    }, [setElemntos])

    useEffect(() => {
        entries.forEach((e,pos) => {
            
            //console.log(pos, e.boundingClientRect.y , e.isIntersecting); 
            if (e.isIntersecting ) {
                e.target.classList.add(style.visible);                
            } else {
                if(e.boundingClientRect.y > 0){
                    e.target.classList.remove(style.visible);
                }
            }
        })

    }, [observer, entries])

    return (
        <div className={style.container}>
            
            {
                ListDB.map((e, pos) => <Card key={pos} titulo={e.titulo} description={e.description} urlImg={e.urlImg} />)
            }
            

        </div>
    );
}

function Card({ titulo = 'Hola Mundo', description = "Descripcion", urlImg = '' }) {
    
    const navigation =useNavigate(); 
    return (
        <div className={style.card} onClick={(e)=>{navigation(`/Servicio/${titulo}`)}}>
            <div className={style.circle}>
                <img  loading='lazy' className={style.image} src={urlImg} alt="" />
            </div>
            <div className={style.footer}>
                <p>{titulo}</p>
                <p>{description}</p>
            </div>
        </div>
    )

}


export default CardsDefiniciones;