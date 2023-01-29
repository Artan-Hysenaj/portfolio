import Link from 'next/link';
import styles from './SidebarLayout.module.scss';

export type SidebarLayoutProps = {};

const SidebarLayout: React.FC<SidebarLayoutProps> = () => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="search" />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default SidebarLayout;
