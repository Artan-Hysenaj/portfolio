import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NextPageWithLayout } from './page';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // use getLayout from the page if available
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
