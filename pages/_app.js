import React from 'react';
import '../styles/reset.scss';
import '../styles/main.scss';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>La nube de azure en ingeniería de software</title>
      </Head>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}
