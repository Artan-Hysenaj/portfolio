import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {(process.env.NODE_ENV === 'development' ||
          process.env.VERCEL_ENV === 'preview') && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script
            data-project-id="j8tqaX6ErnMOofkkEYFhRYLL8Z2qNqoX0u5d7jGv" // TODO move to env
            data-is-production-environment="false"
            src="https://snippet.meticulous.ai/v1/meticulous.js"
          />
        )}

        <meta
          name="description"
          content="Hi, my name is Artan and welcome to my portfolio, a JavaScript and React.js developer from Kosova."
        />
        <meta name="author" content="Artan Hysenaj" />
        <meta
          name="keywords"
          content="JavaScript, React.js, Portfolio, Web Development, Kosovo"
        />
        <meta property="og:title" content="Artan Hysenaj's Portfolio" />
        <meta
          property="og:description"
          content="Hi, my name is Artan and welcome to my portfolio, a JavaScript and React.js developer from Kosova."
        />
        <meta property="og:image" content="public/about.jpg" />
        <meta property="og:url" content="https://artan-hysenaj.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Artan Hysenaj's Portfolio" />
        <meta
          name="twitter:description"
          content="Hi, my name is Artan and welcome to my portfolio, a JavaScript and React.js developer from Kosova."
        />
        <meta name="twitter:image" content="public/about.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
