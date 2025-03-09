//import Loading from "../Components/Loading";
import img1 from '../Assets/img/img1.jpg';
import style from '../css/Blog.module.css'
import { useEffect, useState } from "react";
import UseObserver from '../Hooks/UseObserver';

function Blog() {

  let List = [{ Titulo: "Topografia", resumen: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!", urlImg: img1, ColorPrimario: "#9251ac", colorSecundario: "#f6a4ec" }
    , { Titulo: "Geodesia", resumen: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!", urlImg: "", ColorPrimario: "#555ac0", colorSecundario: "#87bbfe" }
    , { Titulo: "Matematicas", resumen: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!", urlImg: "", ColorPrimario: "#24b47e", colorSecundario: "#aff1b6" }
    , { Titulo: "Viajes", resumen: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!", urlImg: "", ColorPrimario: "#9251ac", colorSecundario: "#f6a4ec" }]

   
  const [observer, setElemntos, entries] = UseObserver({ root: null, threshold: 0.6 }); //

  useEffect(() => {
    document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;    
        
    const card = document.querySelectorAll(`.${style.auxi}`);
    setElemntos(card);
  }, [setElemntos])

  useEffect(() => {
    entries.forEach((e, pos) => {

      console.log(pos, e.boundingClientRect.y, e.isIntersecting);
      if (e.isIntersecting) {
        e.target.classList.add(style.visible);
      } else {
        if (e.boundingClientRect.y > 0) {
          e.target.classList.remove(style.visible);
        }
      }
    })

  }, [observer, entries])

  //  ${style.animated} ${style.fadeInUp} delay-3s style.timeline__event--type1
  return (
    
    <div className={style.timeline}>
      <p>Pagina en construccion</p>
      
      {
        List.map((element, pos) => <CardBlog key={`${pos + "" + parseInt(Math.random() * 10)}`} element={element} />)
      }

    </div>
  );
}


function CardBlog({ element }) {
  return (
  <>
  <div>
    Card de blog
  </div>
  </>  
  
  )
}

export default Blog;