import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import style from '../css/Navar.module.css';
import logo from '../Assets/img/LOGO.png'
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

const routeMap = {
  '': 'somos',
  'servicios': 'servicios',
  'servicio': 'servicios',
  'producto': 'producto',
  'productos': 'producto',
  'cursos': 'cursos',
  'blog': 'blog',
};

function Navar() {
  const [barra, setBarra] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [select, setSelect] = useState({ "somos": true, "producto": false, "servicios": false, "cursos": false, "blog": false });

  useEffect(() => {
    const segment = location.pathname.split('/')[1]?.toLowerCase() || '';
    const key = routeMap[segment] || 'somos';
    const ok = { somos: false, producto: false, servicios: false, cursos: false, blog: false };
    ok[key] = true;
    setSelect(ok);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${style.ContentHeader} ${scrolled ? style.scrolled : ''}`}>
      <div className={style.ContentLogo}>
        <img src={logo} alt="Soluciones Geomaticas" />
        <div>
          <Link to="/" className={style.brand}>Soluciones Geomaticas</Link>
        </div>
      </div>
      <div className={style.button}>
        <IconButton onClick={() => setBarra(!barra)}>
          {barra ? <CloseIcon /> : <MenuOutlinedIcon />}
        </IconButton>
      </div>
      <nav className={`${style.enlaces} ${barra ? style.activado : ''}`}>
        <div className={style.link}>
          <Link onClick={() => setBarra(false)} to="/"><span>Home</span></Link>
          <span className={select.somos ? style.linea : ""}></span>
        </div>
        <div className={style.link}>
          <Link onClick={() => setBarra(false)} to="/servicios"><span>Servicios</span></Link>
          <span className={select.servicios ? style.linea : ""}></span>
        </div>
        <div className={style.link}>
          <Link onClick={() => setBarra(false)} to="/productos"><span>Productos</span></Link>
          <span className={select.producto ? style.linea : ""}></span>
        </div>
        <div className={style.link}>
          <Link onClick={() => setBarra(false)} to="/cursos"><span>Cursos</span></Link>
          <span className={select.cursos ? style.linea : ""}></span>
        </div>
        <div className={style.link}>
          <Link onClick={() => setBarra(false)} to="/blog"><span>Blog</span></Link>
          <span className={select.blog ? style.linea : ""}></span>
        </div>
      </nav>
    </header>
  );
}

export default Navar;
