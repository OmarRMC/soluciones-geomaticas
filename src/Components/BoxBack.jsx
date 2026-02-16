import { useNavigate } from "react-router-dom"
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import IconButton from '@mui/material/IconButton';
import style from "../css/BoxBack.module.css";

function BoxBack() {
    const navigate = useNavigate();
    return (
        <header className={style.boxVolver} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
            <IconButton className={style.prev}>
                <ArrowBackIosNewSharpIcon />
            </IconButton>
            <p>Volver</p>
        </header>
    )
}

export default BoxBack; 