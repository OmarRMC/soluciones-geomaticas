
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MarkEmailUnreadRoundedIcon from '@mui/icons-material/MarkEmailUnreadRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import style from '../css/Footer.module.css'
import logo from '../Assets/img/LOGO.png'
//const ListImg = require.context('../Assets/img/redes');
import IconButton from '@mui/material/IconButton';
import { useRef } from 'react';

function Footer() {

    const email = useRef(null);
    function NewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }


    return (
        <div className={style.ConatinerFooter}>
            <footer className={style.container} >

                <header className={style.caja}>
                    <div className={style.logo}>
                        <img src={logo} alt='' />
                        <p>Ciencias geomaticas</p>
                    </div>

                </header>

                <div className={`${style.About} ${style.caja}`} >
                    <h4>Contacto</h4>
                    <ul className={style.listaSevicios}>
                        <li><FmdGoodIcon/> Dirección Planta Baja Oficina J, Calle Mercado Esq. Loayza Edif. Paladium, La Paz</li>
                        <li><EmailIcon/> lacienciageomatica@gmail.com</li>
                        <li><CallIcon/> 63385750</li>
                    </ul>

                </div>

                <div className={`${style.caja} ${style.MainRedes}`}>
                    <h4>Siguenos</h4>
                    <main className={`${style.contentRedes}`}>
                        <IconButton onClick={() => { NewTab("https://www.facebook.com/profile.php?id=100065148214212") }} className={style.facebook}>
                            <FacebookOutlinedIcon style={{ fontSize: "30px" }} />
                        </IconButton >
                        <IconButton onClick={() => { NewTab("https://www.instagram.com/cienciasgeomaticas66?igsh=aTdtcmF1aWtva2dr") }} className={style.red}>
                            <InstagramIcon style={{ fontSize: "30px" }} />
                        </IconButton  >
                        <IconButton onClick={() => { NewTab("https://www.youtube.com/channel/UCRGioCQaGbKCK0h5ZcMEBFw/videos") }} className={style.youtube}>
                            <YouTubeIcon style={{ fontSize: "30px" }} />
                        </IconButton >
                        <IconButton onClick={() => { NewTab("https://www.tiktok.com/@servicio_topografia_geo?_t=ZM-8uPruHhuKIA&_r=1") }} className={style.blue}>
                            <AudiotrackIcon style={{ fontSize: "30px" }} />
                        </IconButton>
                        <IconButton onClick={() => { NewTab(`https://api.whatsapp.com/send?phone=+59163385750&text=%E2%9C%94%20%F0%9F%97%BA%20%F0%9F%8C%8F%20Ciencias%20geomaticas%F0%9F%98%83%20..`) }} className={style.green}>
                            <WhatsAppIcon style={{ fontSize: "30px" }} />
                        </IconButton  >
                        <IconButton onClick={() => { NewTab(`mailTo:lacienciageomatica@gmail.com?subject=Geomatics Science !!! &body=Hola `) }} className={style.orange}>
                            <MarkEmailUnreadRoundedIcon style={{ fontSize: "30px" }} />
                        </IconButton>
                    </main>
                </div>



            </footer>
            <footer className={style.footerTxt}>
                <div>
                    <span><CopyrightIcon style={{ fontSize: '13px' }} /> 2025 GeoScien</span> |
                    <span>Todos los derechos resevados</span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;