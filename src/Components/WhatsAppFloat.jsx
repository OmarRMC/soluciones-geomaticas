import { useState } from 'react';
import style from '../css/WhatsAppFloat.module.css';

function WhatsAppFloat() {
    const [open, setOpen] = useState(false);
    const [mensaje, setMensaje] = useState('');

    const enviar = () => {
        const texto = mensaje.trim() || 'Hola, quiero mas informacion';
        const url = `https://api.whatsapp.com/send?phone=+59163385750&text=${encodeURIComponent(`✔ Soluciones Geomaticas\n${texto}`)}`;
        window.open(url, '_blank');
        setMensaje('');
        setOpen(false);
    };

    return (
        <div className={style.wrapper}>
            {open && (
                <div className={style.card}>
                    <div className={style.cardHeader}>
                        <div className={style.headerInfo}>
                            <i className="fa-brands fa-whatsapp"></i>
                            <div>
                                <span className={style.headerTitle}>Soluciones Geomaticas</span>
                                <span className={style.headerStatus}>En linea</span>
                            </div>
                        </div>
                        <button className={style.closeBtn} onClick={() => setOpen(false)}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className={style.cardBody}>
                        <div className={style.bubble}>
                            Hola 👋 ¿En que podemos ayudarte? Escribe tu mensaje y te responderemos a la brevedad.
                        </div>
                    </div>
                    <div className={style.cardFooter}>
                        <input
                            type="text"
                            className={style.input}
                            placeholder="Escribe tu mensaje..."
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && enviar()}
                        />
                        <button className={style.sendBtn} onClick={enviar}>
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            )}

            <button
                className={`${style.floatBtn} ${open ? style.active : ''}`}
                onClick={() => setOpen(!open)}
                aria-label="Contactar por WhatsApp"
            >
                <i className={open ? "fa-solid fa-xmark" : "fa-brands fa-whatsapp"}></i>
            </button>
        </div>
    );
}

export default WhatsAppFloat;
