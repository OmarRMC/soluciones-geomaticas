// Font Awesome solo con los iconos que usa el sitio (antes se cargaba all.min.js: ~1.5 MB).
// Funciona igual: dom.watch() reemplaza cada <i className="fa-solid fa-..."> por su <svg>.
// Si usas un icono nuevo, agrégalo aquí o no se mostrará.
import { library, dom, config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
  faArrowUpRightFromSquare,
  faBookOpen,
  faCalendarCheck,
  faChevronLeft,
  faChevronRight,
  faDiagramProject,
  faDiamondTurnRight,
  faDollarSign,
  faEnvelope as faEnvelopeSolid,
  faLink,
  faLocationDot,
  faMapMarkerAlt,
  faNewspaper,
  faPaperPlane,
  faPhone,
  faUserTie,
  faUsers,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faClock, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faLinkedinIn, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false; // el CSS ya se importa arriba

library.add(
  faArrowUpRightFromSquare, faBookOpen, faCalendarCheck, faChevronLeft, faChevronRight,
  faDiagramProject, faDiamondTurnRight, faDollarSign, faEnvelopeSolid, faLink, faLocationDot,
  faMapMarkerAlt, faNewspaper, faPaperPlane, faPhone, faUserTie, faUsers, faXmark,
  faCalendar, faClock, faEnvelope, faUser,
  faFacebookF, faLinkedinIn, faWhatsapp, faXTwitter,
);

dom.watch();
