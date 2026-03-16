import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { Helmet } from 'react-helmet-async';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import servidor from './Server.js';
import style from '../css/DetalleCurso.module.css'
import BoxBack from "../Components/BoxBack.jsx";
import Loading from '../Components/Loading';

/*
  ============================================================
  ESTRUCTURA DE DATOS QUE DEBE DEVOLVER EL BACKEND
  Endpoint: GET /getRecurso/:id
  ============================================================
  {
    // --- Informacion principal del curso ---
    Titulo: "Curso de Pilotaje de Drones – Teórico y Práctico",
    Descripccion: "Formar pilotos de drones responsables y competentes, capaces de operar de manera segura, cumpliendo la normativa vigente en Bolivia y aplicando el dron en actividades comerciales, técnicas y audiovisuales.",
    Imagen: "https://soluciones-geomaticas.web.app/img/curso-pilotaje-drones.jpg",
    Categoria: "Drones",                                // Categoria del curso
    Nivel: "Basico",                                     // Basico | Intermedio | Avanzado
    Duracion: "12",                                      // Horas totales (8 teóricas + 4 prácticas)
    Lecciones: 12,                                       // Numero de lecciones
    FechaInicio: "2026-05-10",                            // Fecha de inicio (opcional)
    Modalidad: "Hibrido",                                // Virtual | Presencial | Hibrido
    Precio: 390,                                         // Precio en Bs
    Moneda: "Bs",                                        // Bs | USD
    Certificado: true,                                   // Si otorga certificado

    // --- Instructor ---
    Instructor: {
      Nombre: "Juan Mamani",
      Bio: "Piloto certificado de drones con experiencia en operaciones comerciales, filmación aérea y aplicaciones técnicas con aeronaves DJI en Bolivia.",
      Avatar: "https://soluciones-geomaticas.web.app/img/instructor-juan.jpg"
    },

    // --- Objetivos del curso ---
    Objetivos: [
      "Clasificación y usos comerciales de drones",
      "Normativa y seguridad operacional DGAC Bolivia",
      "Zonas GEO DJI",
      "Meteorología aplicada al vuelo",
      "Planificación y navegación GNSS",
      "Maniobras básicas y avanzadas de vuelo",
      "Configuración de cámara profesional",
      "Filmación y fotografía aérea",
      "Uso de funciones inteligentes del dron"
    ],

    // --- Requisitos previos ---
    Requisitos: [
      "No se requiere experiencia previa en drones",
      "Disponibilidad para la sesión presencial en campo de vuelo Aranjuez"
    ],

    // --- Software/herramientas utilizadas ---
    Software: ["DJI Fly", "DJI Pilot 2", "Google Meet"],

    // --- Modulos / Contenido del curso ---
    Modulos: [
      {
        modulo_id: 1,
        Titulo: "Módulo Teórico",
        Descripcion: "Clasificación y usos comerciales, normativa vigente DGAC Bolivia, zonas GEO DJI, meteorología aplicada, navegación y planificación GNSS, seguridad operacional.",
        Lecciones: 6,
        Duracion: "8 Horas",
        Modalidad: "Virtual – Google Meet"
      },
      {
        modulo_id: 2,
        Titulo: "Módulo Práctico",
        Descripcion: "Conocimiento del equipo y mantenimiento, habilidades básicas de vuelo, configuración RTH, funciones inteligentes, filmación y fotografía aérea, pilotaje nocturno.",
        Lecciones: 6,
        Duracion: "4 Horas",
        Modalidad: "Presencial – Campo de vuelo Aranjuez"
      }
    ],

    // --- Que incluye el curso ---
    Incluye: [
      "Material digital del curso",
      "Videos grabados de clases teóricas",
      "Asesoramiento para registro DGAC",
      "Certificado de participación"
    ],

    // --- Informacion de contacto y pago ---
    Contacto: {
      Telefono: "63385750",
      Direccion: "Calle Mercado Esq. Loayza, Edif. Paladium Of. J – La Paz, Bolivia",
      Banco: "Banco Unión",
      Cuenta: "10000025789609",
      Titular: "Juan Mamani"
    },

    // --- Recursos descargables ---
    Recurso: [
      {
        recurso_id: 1,
        Titulo: "Material digital del curso",
        Enlace: "https://drive.google.com/ejemplo-material-curso",
        Nota: "Presentaciones y guías del módulo teórico",
        CardColor: "#2EA3F2",
        textColor: "#ffffff"
      },
      {
        recurso_id: 2,
        Titulo: "Videos de clases teóricas",
        Enlace: "https://drive.google.com/ejemplo-videos",
        Nota: "Grabaciones de las sesiones teóricas para repasar",
        CardColor: "#4caf50",
        textColor: "#ffffff"
      }
    ]
  }
*/

export default function DetalleCurso() {
    const { id } = useParams();
    const [curso, setCurso] = useState(null);
    const [page404, setPage404] = useState(false);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();

    // Fallback desde query params (compatibilidad con datos actuales)
    const fallbackTitulo = searchParams.get('titulo') ?? '';
    const fallbackDescripcion = searchParams.get('descripccion') ?? '';

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        const connection = async () => {
            try {
                const res = await fetch(`${servidor}/getRecurso/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setCurso(data);
                } else {
                    setPage404(true);
                }
            } catch {
                setPage404(true);
            } finally {
                setLoading(false);
            }
        }
        connection();
    }, [id])

    const titulo = curso?.Titulo || fallbackTitulo;
    const descripcion = curso?.Descripccion || fallbackDescripcion;
    const instructor = curso?.Instructor;

    // Convierte objetos/map del backend a arrays para iterar
    const toArray = (obj) => {
        if (!obj) return [];
        if (Array.isArray(obj)) return obj;
        return Object.entries(obj).map(([key, val]) => ({ _key: key, ...val }));
    };

    const recursos = toArray(curso?.Recurso);
    const modulos = toArray(curso?.Modulos);
    const totalRecursos = recursos.length;

    if (loading) return <Loading />;

    if (page404) return (
        <div className={style.containerRecurso}>
            <BoxBack />
            <div className={style.page404}>
                <h2>404</h2>
                <p>El curso no fue encontrado</p>
            </div>
        </div>
    );

    return (
        <>
            <Helmet>
                <title>{titulo ? `${titulo} | Cursos` : 'Detalle del Curso'} - Soluciones Geomaticas</title>
                <meta name="description" content={descripcion || `Curso de ${titulo} - Accede a los recursos y materiales del curso. Soluciones Geomaticas.`} />
                <meta name="keywords" content={`curso ${titulo}, capacitacion ${titulo}, ${curso?.Categoria || 'geomatica'}, Soluciones Geomaticas`} />
                <link rel="canonical" href={`https://soluciones-geomaticas.web.app/cursos/${id}`} />
                <meta property="og:title" content={`${titulo || 'Curso'} | Soluciones Geomaticas`} />
                <meta property="og:description" content={descripcion || `Recursos y materiales del curso de ${titulo}`} />
                <meta property="og:url" content={`https://soluciones-geomaticas.web.app/cursos/${id}`} />
                <meta property="og:type" content="article" />
                {curso?.Imagen && <meta property="og:image" content={curso.Imagen} />}
            </Helmet>

            <div className={style.containerRecurso}>
                <BoxBack />

                {/* --- Cabecera del curso --- */}
                <header className={style.cursoHeader}>
                    {curso?.Imagen && (
                        <div className={style.cursoImagen}>
                            <img src={curso.Imagen} alt={titulo} />
                        </div>
                    )}
                    <div className={style.cursoHeaderInfo}>
                        <h1 className={style.cursoTitulo}>{titulo}</h1>
                        {descripcion && <p className={style.cursoDescripcion}>{descripcion}</p>}

                        {/* Info rápida */}
                        <div className={style.cursoMeta}>
                            {curso?.Duracion && (
                                <span className={style.metaItem}>
                                    <AccessTimeIcon fontSize="small" /> {curso.Duracion} Horas
                                </span>
                            )}
                            {curso?.Lecciones && (
                                <span className={style.metaItem}>
                                    <MenuBookIcon fontSize="small" /> {curso.Lecciones} Lecciones
                                </span>
                            )}
                            {curso?.Nivel && (
                                <span className={style.metaItem}>
                                    <SignalCellularAltIcon fontSize="small" /> {curso.Nivel}
                                </span>
                            )}
                            {curso?.Categoria && (
                                <span className={style.metaItem}>
                                    <CategoryIcon fontSize="small" /> {curso.Categoria}
                                </span>
                            )}
                            {curso?.FechaInicio && (
                                <span className={style.metaItem}>
                                    <CalendarTodayIcon fontSize="small" /> Inicio: {new Date(curso.FechaInicio).toLocaleDateString('es-BO')}
                                </span>
                            )}
                            {curso?.Modalidad && (
                                <span className={style.metaItem}>{curso.Modalidad}</span>
                            )}
                        </div>

                        {curso?.Precio !== undefined && (
                            <p className={style.cursoPrecio}>
                                {curso.Precio === 0 ? 'Gratuito' : `${curso.Precio} ${curso.Moneda || 'USD'}`}
                            </p>
                        )}
                        {curso?.Certificado && (
                            <span className={style.cursoCertificado}>Con certificado</span>
                        )}
                    </div>
                </header>

                {/* --- Instructor --- */}
                {instructor && (
                    <section className={style.seccion}>
                        <h2 className={style.seccionTitulo}>Instructor</h2>
                        <div className={style.instructorCard}>
                            {instructor.Avatar ? (
                                <img src={instructor.Avatar} alt={instructor.Nombre} className={style.instructorAvatar} />
                            ) : (
                                <div className={style.instructorAvatarPlaceholder}>
                                    <PersonIcon fontSize="large" />
                                </div>
                            )}
                            <div>
                                <p className={style.instructorNombre}>{instructor.Nombre}</p>
                                {instructor.Bio && <p className={style.instructorBio}>{instructor.Bio}</p>}
                            </div>
                        </div>
                    </section>
                )}

                {/* --- Objetivos --- */}
                {curso?.Objetivos?.length > 0 && (
                    <section className={style.seccion}>
                        <h2 className={style.seccionTitulo}>Lo que aprenderás</h2>
                        <ul className={style.listaObjetivos}>
                            {curso.Objetivos.map((obj, i) => (
                                <li key={i}><CheckCircleOutlineIcon fontSize="small" color="success" /> {obj}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* --- Requisitos --- */}
                {curso?.Requisitos?.length > 0 && (
                    <section className={style.seccion}>
                        <h2 className={style.seccionTitulo}>Requisitos previos</h2>
                        <ul className={style.listaRequisitos}>
                            {curso.Requisitos.map((req, i) => (
                                <li key={i}>{req}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* --- Software / Herramientas --- */}
                {curso?.Software?.length > 0 && (
                    <section className={style.seccion}>
                        <h2 className={style.seccionTitulo}>Software y herramientas</h2>
                        <div className={style.softwareTags}>
                            {curso.Software.map((sw, i) => (
                                <span key={i} className={style.softwareTag}>{sw}</span>
                            ))}
                        </div>
                    </section>
                )}

                {/* --- Módulos / Contenido --- */}
                {modulos.length > 0 && (
                    <section className={style.seccion}>
                        <h2 className={style.seccionTitulo}>Contenido del curso</h2>
                        <div className={style.modulosLista}>
                            {modulos.map((modulo, i) => (
                                <div key={modulo.modulo_id || modulo._key || i} className={style.moduloCard}>
                                    <div className={style.moduloNumero}>{i + 1}</div>
                                    <div className={style.moduloInfo}>
                                        <p className={style.moduloTitulo}>{modulo.Titulo}</p>
                                        {modulo.Descripcion && <p className={style.moduloDescripcion}>{modulo.Descripcion}</p>}
                                        <div className={style.moduloMeta}>
                                            {modulo.Lecciones && <span>{modulo.Lecciones} lecciones</span>}
                                            {modulo.Duracion && <span>{modulo.Duracion}</span>}
                                            {modulo.Modalidad && <span>{modulo.Modalidad}</span>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* --- Incluye --- */}
                {curso?.Incluye?.length > 0 && (
                    <section className={style.seccion}>
                        <h2 className={style.seccionTitulo}>Incluye</h2>
                        <ul className={style.listaObjetivos}>
                            {curso.Incluye.map((item, i) => (
                                <li key={i}><CheckCircleOutlineIcon fontSize="small" color="primary" /> {item}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* --- Recursos descargables --- */}
                {totalRecursos > 0 && (
                    <section className={style.seccion}>
                        <h2 className={style.seccionTitulo}>Recursos ({totalRecursos})</h2>
                        {recursos.map((recurso) => {
                            let enlaceCorto = recurso.Enlace || '';
                            enlaceCorto = enlaceCorto.replace("https://", "").replace("http://", "");
                            enlaceCorto = enlaceCorto.length > 30 ? (enlaceCorto.substring(0, 28) + "...") : enlaceCorto;
                            return (
                                <div className={style.boxRecurso} style={{ background: recurso.CardColor ?? "#2EA3F2", color: recurso.textColor ?? "white" }} key={recurso.recurso_id || recurso._key}>
                                    <p>{recurso.Titulo}</p>
                                    {recurso.Enlace && <a href={recurso.Enlace} className={style.enlaceRecurso} target="_blank" rel="noopener noreferrer">{enlaceCorto}</a>}
                                    {recurso.Nota && <p>{recurso.Nota}</p>}
                                </div>
                            )
                        })}
                    </section>
                )}

                {/* --- Contacto e inversión --- */}
                {curso?.Contacto && (
                    <section className={style.seccion}>
                        <h2 className={style.seccionTitulo}>Información de contacto</h2>
                        <div className={style.contactoCard}>
                            {curso.Contacto.Telefono && <p><strong>Consultas:</strong> {curso.Contacto.Telefono}</p>}
                            {curso.Contacto.Direccion && <p><strong>Oficina:</strong> {curso.Contacto.Direccion}</p>}
                            {curso.Contacto.Banco && (
                                <p><strong>Pago:</strong> {curso.Contacto.Banco} – Cta. {curso.Contacto.Cuenta} ({curso.Contacto.Titular})</p>
                            )}
                        </div>
                    </section>
                )}
            </div>
        </>
    )
}
