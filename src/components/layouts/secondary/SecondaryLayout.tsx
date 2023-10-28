import Footer from '@/components/navigation/footer/Footer';
import Header from '@/components/navigation/header/Header';
import Head from 'next/head';

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
        <div className="header-inner">
          <Header />
        </div>
        <main className="main">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default SecondaryLayout;
