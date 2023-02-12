import Footer from '@/components/navigation/footer/Footer';
import Header from '@/components/navigation/header/Header';
import Head from 'next/head';
import styles from './SecondaryLayout.module.scss';

export type SecondaryLayoutProps = React.ComponentPropsWithoutRef<'div'>;

const SecondaryLayout: React.FC<SecondaryLayoutProps> = ({
  children,
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <div {...divProps}>
        <div className={styles.showcase}>
          <Header />
        </div>
        <main className="px-5 main">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default SecondaryLayout;
