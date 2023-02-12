import cs from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import styles from './NavLink.module.scss';

export type NavLinkProps = {
  href: string;
  className?: string;
};

const NavLink: React.FC<PropsWithChildren<NavLinkProps>> = ({
  children,
  href,
  className,
}) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={cs(styles.navlink, {
        [styles.current]: isActive,
        className,
      })}
    >
      {children}
    </Link>
  );
};

export default NavLink;
