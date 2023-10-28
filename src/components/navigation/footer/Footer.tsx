import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export type FooterProps = React.ComponentPropsWithoutRef<'footer'>;

const Footer: React.FC<FooterProps> = ({ ...footerProps }) => {
  return (
    <footer {...footerProps} className="footer">
      <div className="container footer-content">
        <p>Copyright &copy; 2023. All Rights Reserved</p>
        <div className="social">
          <a
            href="https://twitter.com/artan_hysenaj"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faTwitter} className="fab" />
          </a>

          <a
            href="https://www.facebook.com/artan.hysenaj.20000001"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faFacebook} className="fab" />
          </a>
          <a
            href="https://www.instagram.com/artan_hysenaj/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faInstagram} className="fab" />
          </a>
          <a
            href="https://www.linkedin.com/in/artan-hysenaj/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faLinkedin} className="fab" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
