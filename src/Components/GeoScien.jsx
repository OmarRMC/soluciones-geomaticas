import { useEffect } from "react";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import { Public, RocketLaunch, Groups } from "@mui/icons-material";
import styles from "../css/GeoScien.module.css";
import CardAuthorV1 from "./CardAuthorV1";
import avatar from "../Assets/img/Avatar.png";
import UseObserver from "../Hooks/UseObserver";

const GeoScien = () => {
  const [observer, setElementos, entries] = UseObserver({ root: null, threshold: 0.15 });

  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.fadeIn}`);
    setElementos(sections);
  }, [setElementos]);

  useEffect(() => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add(styles.visible);
      }
    });
  }, [entries]);

  return (
    <>
      {/* About Section */}
      <section className={`${styles.aboutSection} ${styles.fadeIn}`}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImage}>
            <div className={styles.imagePlaceholder}>
              <Public style={{ fontSize: '80px', color: '#2EA3F2' }} />
            </div>
          </div>
          <div className={styles.aboutText}>
            <Typography variant="h2" className={styles.title}>
              Soluciones Geomaticas
            </Typography>
            <Typography className={styles.subtitle}>
              Expertos en servicios geoespaciales
            </Typography>
            <Typography className={styles.description}>
              Nuestro objetivo es brindar un servicio integral en el ambito de la Geomatica. Contamos con un equipo de profesionales altamente especializados en diversas areas del conocimiento y respaldados por herramientas tecnologicas de ultima generacion. Gracias a nuestro enfoque multidisciplinario y el uso de tecnologia avanzada, garantizamos soluciones precisas y eficientes para tus necesidades geoespaciales.
            </Typography>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`${styles.valuesSection} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.valuesGrid}>
            <Card className={styles.valueCard}>
              <CardContent className={styles.valueContent}>
                <Public className={styles.icon} />
                <Typography variant="h6" className={styles.cardTitle}>Somos</Typography>
                <Typography className={styles.cardText}>
                  Somos un equipo de profesionales con amplia experiencia en Geomatica, Topografia, Cartografia y Geomensura. Nuestro compromiso con la excelencia se refleja en cada proyecto.
                </Typography>
              </CardContent>
            </Card>
            <Card className={styles.valueCard}>
              <CardContent className={styles.valueContent}>
                <RocketLaunch className={styles.icon} />
                <Typography variant="h6" className={styles.cardTitle}>Pasion</Typography>
                <Typography className={styles.cardText}>
                  Nos comprometemos con las geociencias, la tecnologia y la excelencia en el servicio, proporcionando soluciones tecnicas precisas e innovadoras.
                </Typography>
              </CardContent>
            </Card>
            <Card className={styles.valueCard}>
              <CardContent className={styles.valueContent}>
                <Groups className={styles.icon} />
                <Typography variant="h6" className={styles.cardTitle}>Proposito</Typography>
                <Typography className={styles.cardText}>
                  Nos destacamos por brindar un servicio serio y puntual, comprometidos en superar las expectativas de nuestros clientes con soluciones excepcionales.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`${styles.teamSection} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <Typography variant="h2" className={styles.sectionTitle}>Nuestro Equipo</Typography>
          <Typography className={styles.sectionSubtitle}>
            Equipo de profesionales especializados en diversas areas de la Geomatica.
          </Typography>
          <div className={styles.teamCards}>
            <CardAuthorV1 name="Juan Mamani C." role="CEO y Fundador de ScienBo" image={avatar} socials={{ }} />
            <CardAuthorV1 name="Rodrigo Apaza" role="Topografo y geomatico" image={avatar} socials={{ }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default GeoScien;
