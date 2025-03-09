import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import { Public, RocketLaunch, Groups } from "@mui/icons-material";
import styles from "../css/GeoScien.module.css";
import CardAuthorV1 from "./CardAuthorV1";
import avatar from "../Assets/img/Avatar.png";
const GeoScien = () => {
  return (
    <Container className={styles.container}>
      {/* Sección de introducción */}
      <section className={styles.sectionIntro}>
        <Typography variant="h5" className={styles.title}>
          Somos GeoScien
        </Typography>
        <Typography variant="body2" className={styles.description}>
          Brindamos soluciones en Geomática con tecnología avanzada y un equipo de expertos comprometidos en ofrecer precisión y eficiencia.
        </Typography>
      </section>

      {/* Sección de valores */}
      <Grid container spacing={3} className={styles.sectionValues}>
        <Grid item xs={12} sm={4} className={styles.valueCardContainer}>
          <Card className={styles.valueCard}>
            <CardContent>
              <Public className={styles.icon} />
              <Typography variant="h6" className={styles.cardTitle}>Somos</Typography>
              <Typography variant="body2" className={styles.cardText}>
                Equipo con experiencia en Geomática, Topografía, Cartografía y Geomensura.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} className={styles.valueCardContainer}>
          <Card className={styles.valueCard}>
            <CardContent>
              <RocketLaunch className={styles.icon} />
              <Typography variant="h6" className={styles.cardTitle}>Pasión</Typography>
              <Typography variant="body2" className={styles.cardText}>
                Compromiso con la innovación y excelencia en soluciones geoespaciales.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} className={styles.valueCardContainer}>
          <Card className={styles.valueCard}>
            <CardContent>
              <Groups className={styles.icon} />
              <Typography variant="h6" className={styles.cardTitle}>Propósito</Typography>
              <Typography variant="body2" className={styles.cardText}>
                Brindar soluciones eficientes que superen las expectativas de nuestros clientes.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Sección de equipo */}
      <section className={styles.sectionTeam}>
        <Typography variant="h5" className={styles.title}>Nuestro Equipo</Typography>
        <Typography variant="body2" className={styles.description}>
          Equipo de profesionales especializados en diversas áreas de la Geomática.
        </Typography>
        <div className={styles.teamCards}>
          <CardAuthorV1 name="Juan Wilmer" image={avatar} socials={{'linkedin':'a','twitter':'a'}} />
          <CardAuthorV1 name="Juan Wilmer" image={avatar} socials={{'linkedin':'a','twitter':'a'}} />
        </div>
      </section>
    </Container>
  );
};

export default GeoScien;
