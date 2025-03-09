import { useEffect, useState } from "react"
import { useParams , useNavigate, useSearchParams } from "react-router-dom"

import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import servidor from './Server.js'; 

import style from '../css/DetalleCurso.module.css'
import BoxBack from "../Components/BoxBack.jsx";

export default function DetalleCurso(params) {
    const {id}=useParams();  
    const navigate = useNavigate();
    const [detalleCurso, setDetalleCurso] = useState([]);   
    const [page404 , setPage404]=useState(false); 
    const [searchParams]=useSearchParams() 
 
    useEffect(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;    
        console.log(searchParams.get('titulo')); 
        const connection =async ()=>{
            const res = await fetch(`${servidor}/getRecurso/${id}`); 
            if(res.ok){
                const data = await res.json();                 
                setDetalleCurso(data); 
            }else {
                setPage404((e)=>true); 
                console.log('No fue encontrado')
            }            
        } 
        connection(); 
    }, [])
    return(

        <>

        <div className={style.containerRecurso}>
            <BoxBack></BoxBack>
            <div>
                <h4>{searchParams.get('titulo')??''}</h4>
                <p>{searchParams.get('descripccion')??''}</p>
            </div>
            {
                detalleCurso?.Recurso?.map((recurso, pos)=>
                    {
                       let  enlace = recurso.Enlace; 
                       enlace=enlace.replace("https://","")
                       enlace=enlace.replace("http://","")
                       enlace=enlace.length>30?(enlace.substring(0,28)+"..."):enlace; 
                    return <main className={style.boxRecurso} style={{background:recurso.CardColor??"blue", color:recurso.textColor??"white"}}   key={recurso.recurso_id}>
                        <p>{recurso.Titulo}</p>
                        <a href={recurso.Enlace} className={style.enlaceRecurso} target="_blank"> {enlace}</a>
                        <p>{recurso.Nota}</p>
                    </main>
                    }
                    )
            }
            {page404?<p>404 pagina no encontrado </p>:''}
        </div>
        
        </>

    )
}
