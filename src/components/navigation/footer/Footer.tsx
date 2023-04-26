import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cs from 'classnames';
import styles from './Footer.module.scss';
export type FooterProps = React.ComponentPropsWithoutRef<'footer'>;

const Footer: React.FC<FooterProps> = ({ ...footerProps }) => {
  return (
    <footer {...footerProps} className={styles.footer}>
      <div className={cs('container', styles['footer-content'])}>
        <p>Copyright &copy; 2023. All Rights Reserved</p>
        <div className={styles.social}>
          <a
            href="https://twitter.com/artan_hysenaj"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faTwitter} className={styles.fab} />
          </a>
          
          <a
            href="https://www.facebook.com/artan.hysenaj.20000001"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faFacebook} className={styles.fab} />
          </a>
          <a
            href="https://www.instagram.com/artan_hysenaj/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faInstagram} className={styles.fab} />
          </a>
          <a
            href="https://www.linkedin.com/in/artan-hysenaj/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faLinkedin} className={styles.fab} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
