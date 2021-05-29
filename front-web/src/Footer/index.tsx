import './styles.css';
import { ReactComponent as YoutubeIcon } from "./youtube.svg";
import { ReactComponent as LinkedinIcon } from "./linkedin.svg";
import { ReactComponent as InstagramIcon } from "./instagram.svg";

function Footer() {
  return(
    <footer className="main-footer">
      App desenvolvido por Kaique de Oliveira Santos na semana Dev superior 2° ed.
      <div className="footer-icons">
        <a href="https://www.youtube.com/?hl=pt&gl=BR" target="_new">
          <YoutubeIcon />
        </a>
        <a href="https://www.linkedin.com/in/kaique-oliveira-santos-75a3951a0/" target="_new">
          <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com/" target="_new">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
