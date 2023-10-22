import '@/styles/globals.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Dosis } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { NextPageWithLayout } from './page';

config.autoAddCss = false;

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const dosis = Dosis({
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // use getLayout from the page if available
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <style jsx global>{`
        body {
          font-family: ${dosis.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
