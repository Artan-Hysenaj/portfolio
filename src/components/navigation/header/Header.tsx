import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

export type HeaderProps = React.ComponentPropsWithoutRef<'nav'>;

const Header: React.FC<HeaderProps> = ({ ...headerProps }) => {
  return (
    <nav {...headerProps} className={styles.navigation}>
      <Image
        src="/logo.png"
        alt="My Portfolio"
        width={70}
        height={70}
        className="logo"
        priority
      />
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
