import React from 'react';
import Head from 'next/head';

import '../styles/reset.scss';
import '../styles/main.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>La nube de azure en ingeniería de software</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
