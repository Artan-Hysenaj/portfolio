import Footer from '@/components/navigation/footer/Footer';
import Header from '@/components/navigation/header/Header';
import Head from 'next/head';
import Link from 'next/link';
import Typewriter from '../../shared/typewriter/Typewriter';
import styles from './PrimaryLayout.module.scss';

export type PrimaryLayoutProps = React.ComponentPropsWithoutRef<'div'>;

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({
  children,
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <div {...divProps} className={styles.layout}>
        <div className={styles.showcase}>
          <Header />
          <div className={styles['header-content']}>
            <h1>
              I Am Artan The{' '}
              <Typewriter words={['Developer', 'Designer', 'Photographer']} />
            </h1>
            <p className="lead">
              I specialize in graphic design, UI/UX and photography
            </p>
            <Link href="work" className="btn-light">
              View My Work
            </Link>
          </div>
        </div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
