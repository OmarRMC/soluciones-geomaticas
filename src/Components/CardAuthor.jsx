import style from '../css/CardAuthor.module.css'
import avatar from '../Assets/img/Avatar.png'

import topografia from '../Assets/img/curvasNivel.png'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
function CardAuthor() {

    const [zindex, SetZindex] = useState(true);
    return (
        <div className={style.main}>

            <div className={style.cardContainer} >

                <div className={`${style.skills} ${(!zindex) ? style.cambioSkills : ""}`} onClick={(e) => {
                    console.log("Azul");
                    if (zindex) {
                        SetZindex(!zindex)
                        }
                    }
                }
                >
                    <main className={style.footer}>
                        <div className={style.informacion}>
                            <p> Topografia , Godesia y Geomatica</p>
                            <img loading='lazy' src={topografia} alt="" ></img>
                        </div>
                        <footer className={style.redes}>
                            <IconButton aria-label="fingerprint" color="secondary" ><FacebookRoundedIcon /></IconButton>
                        </footer>
                    </main>
                </div>
                <div
                    className={`${style.InfAvatar} ${(zindex) ? style.cambioAvatar : ""}`}
                    onClick={(e) => {
                        if (!zindex) {
                            SetZindex(!zindex)
                            }
                        }
                    }
                >

                    <div className={style.fondo}>
                       
                    </div>
                    <img className={style.round} src={avatar} alt="user" />
                    <h3>Wilmer Mamani</h3>
                    <h6>La Paz - Bolivia </h6>
                </div>
            </div>
        </div>
    );
}

export default CardAuthor;