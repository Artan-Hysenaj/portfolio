import Image from 'next/image';
import NavLink from '../utils/navlink/NavLink';

export type HeaderProps = React.ComponentPropsWithoutRef<'nav'>;

const Header: React.FC<HeaderProps> = ({ ...headerProps }) => {
  return (
    <nav {...headerProps} className="container main-nav">
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
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/work">work</NavLink>
        </li>
        <li>
          <NavLink href="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
