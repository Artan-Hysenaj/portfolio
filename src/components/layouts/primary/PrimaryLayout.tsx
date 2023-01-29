import Head from 'next/head';

export type PrimaryLayoutProps = {
  justify?: 'items-center' | 'items-start';
} & React.ComponentPropsWithoutRef<'div'>;

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <div {...divProps} className={`min-h-screen flex flex-col ${justify}`}>
        {/* <Header /> */}
        <main className="px-5">{children}</main>
        <div className="m-auto" />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default PrimaryLayout;
