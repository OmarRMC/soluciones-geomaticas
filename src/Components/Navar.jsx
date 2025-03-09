import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import IconButton from '@mui/material/IconButton';
import style from '../css/Navar.module.css';
import logo from '../Assets/img/LOGO.png'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
function Navar() {
  const [barra, setBarra] = useState(false);

  const [select, setSelect] = useState({ "Somos": true, "productos": false, "servicios": false, "cursos": false, "blog": false });
  let valInicial = { "Somos": false, "productos": false, "servicios": false, "cursos": false, "blog": false }
  useEffect(() => {
    var cadena = window.location.pathname.substring(1).toLowerCase();
    if (cadena === "") {
      cadena = "Somos"
    }
    let ok = valInicial;
    ok[cadena] = true;
    setSelect(ok)

  }, [barra]);


  return (

    <header className={style.ContentHeader}>
      <div className={style.ContentLogo}>
        <img src={logo} alt=""></img>
        <div>
          <span>GeoScien</span>
        </div>
      </div>
      <div className={style.button}>
        <IconButton onClick={(e) => { setBarra(!barra) }}>
          {(barra) ? <KeyboardDoubleArrowRightOutlinedIcon /> : <MenuOutlinedIcon />}
        </IconButton>
      </div>
      <div className={`${style.enlaces}  ${(barra) ? style.activado : ''}`}>
        <div className={style.link}>
          <Link onClick={() => { setBarra(!barra) }} to="/"  ><span >Somos</span></Link>
          <span className={`${(select.Somos) ? style.linea : ""}`}></span>
        </div>
        <div className={style.link}>
          <Link onClick={() => { setBarra(!barra) }} to="/Servicios" ><span >Servicios</span></Link>
          <span className={`${(select.servicios) ? style.linea : ""}`}></span>
        </div>
        <div className={style.link}>
          <Link onClick={() => { setBarra(!barra) }} to="/Producto" ><span >Productos</span></Link>
          <span className={`${(select.productos) ? style.linea : ""}`}></span>
        </div>
        <div className={style.link}>

          <Link onClick={() => { setBarra(!barra) }} to="/Cursos" ><span >Cursos</span></Link>
          <span className={`${(select.cursos) ? style.linea : ""}`}></span>
        </div>
        <div className={style.link}>
          <Link onClick={() => { setBarra(!barra) }} to="/Blog" ><span > Blog</span></Link>
          <span className={`${(select.blog) ? style.linea : ""}`}></span>
        </div>

      </div>
    </header>

  );
}

export default Navar;