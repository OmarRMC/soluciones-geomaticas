import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MarkEmailUnreadRoundedIcon from '@mui/icons-material/MarkEmailUnreadRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import CopyrightIcon from '@mui/icons-material/Copyright';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import style from '../css/Footer.module.css';
import logo from '../Assets/img/LOGO.png';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

function Footer() {
    function NewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    return (
        <div className={style.footerWrap}>
            <footer className={style.container}>
                <div className={style.column}>
                    <div className={style.logo}>
                        <img src={logo} alt="Soluciones Geomaticas" />
                        <span className={style.brandName}>Soluciones Geomaticas</span>
                    </div>
                    <p className={style.brandDesc}>
                        Soluciones integrales en Geomatica con tecnologia avanzada y un equipo de expertos.
                    </p>
                </div>

                <div className={style.column}>
                    <h4 className={style.columnTitle}>Servicios</h4>
                    <ul className={style.linkList}>
                        <li><Link to="/servicio/fotogrametria">Fotogrametria</Link></li>
                        <li><Link to="/servicio/topografia">Topografia</Link></li>
                        <li><Link to="/servicio/geodesia">Geodesia</Link></li>
                        <li><Link to="/servicio/sig">SIG</Link></li>
                    </ul>
                </div>

                <div className={style.column}>
                    <h4 className={style.columnTitle}>Contacto</h4>
                    <ul className={style.contactList}>
                        <li><FmdGoodIcon /> <span>Calle Mercado Esq. Loayza Edif. Paladium, La Paz</span></li>
                        <li><EmailIcon /> <span>lacienciageomatica@gmail.com</span></li>
                        <li><CallIcon /> <span>63385750</span></li>
                    </ul>
                </div>

                <div className={style.column}>
                    <h4 className={style.columnTitle}>Siguenos</h4>
                    <div className={style.socialGrid}>
                        <IconButton onClick={() => NewTab("https://www.facebook.com/profile.php?id=100065148214212")} className={style.socialBtn}>
                            <FacebookOutlinedIcon />
                        </IconButton>
                        <IconButton onClick={() => NewTab("https://www.instagram.com/cienciasgeomaticas66?igsh=aTdtcmF1aWtva2dr")} className={style.socialBtn}>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton onClick={() => NewTab("https://www.youtube.com/channel/UCRGioCQaGbKCK0h5ZcMEBFw/videos")} className={style.socialBtn}>
                            <YouTubeIcon />
                        </IconButton>
                        <IconButton onClick={() => NewTab("https://www.tiktok.com/@servicio_topografia_geo?_t=ZM-8uPruHhuKIA&_r=1")} className={style.socialBtn}>
                            <AudiotrackIcon />
                        </IconButton>
                        <IconButton onClick={() => NewTab("https://api.whatsapp.com/send?phone=+59163385750&text=%E2%9C%94%20%F0%9F%97%BA%20%F0%9F%8C%8F%20Soluciones%20Geomaticas%20-%20Consulta")} className={style.socialBtn}>
                            <WhatsAppIcon />
                        </IconButton>
                        <IconButton onClick={() => NewTab("mailto:lacienciageomatica@gmail.com?subject=Soluciones Geomaticas&body=Hola")} className={style.socialBtn}>
                            <MarkEmailUnreadRoundedIcon />
                        </IconButton>
                    </div>
                </div>
            </footer>

            <div className={style.bottomBar}>
                <span><CopyrightIcon style={{ fontSize: '13px', verticalAlign: 'middle' }} /> 2026 Soluciones Geomaticas</span>
                <span>Todos los derechos reservados</span>
            </div>
        </div>
    );
}

export default Footer;
