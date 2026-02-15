import styles from "../css/CardAuthor.module.css";
import { Twitter, LinkedIn, GitHub } from "@mui/icons-material";

function CardAuthorV1({ name, role, image, socials }) {
    return (
        <div className={styles.card}>
            <picture>
                <img src={image} alt={name} className={styles.avatar} />
            </picture>
            <h2 className={styles.name}>{name}</h2>
            <h5 className={styles.profesion}>{role}</h5>
            <div className={styles.socials}>
                {socials.twitter && (
                    <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className={styles.icon} />
                    </a>
                )}
                {socials.linkedin && (
                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedIn className={styles.icon} />
                    </a>
                )}
                {socials.github && (
                    <a href={socials.github} target="_blank" rel="noopener noreferrer">
                        <GitHub className={styles.icon} />
                    </a>
                )}
            </div>
        </div>
    );
}

export default CardAuthorV1;