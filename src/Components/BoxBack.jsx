import { useParams , useNavigate, useSearchParams } from "react-router-dom"
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import IconButton from '@mui/material/IconButton';
import style from "../css/BoxBack.module.css";

function BoxBack(params) {
    const navigate = useNavigate(); 
    return (
        <header className={style.boxVolver}>
                
        <IconButton  className={style.prev}  onClick={(e) => {navigate(-1) }}>
            <ArrowBackIosNewSharpIcon  />
        </IconButton>
        <p>Volver</p>
        
        </header>

    )
}

export default BoxBack; 