import Head from "next/head";
import "../styles/globals.scss";
import reducer, { initialState } from "../states/reducer";
import { StateProvider } from "../states/StateProvider";

import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Search Countries</title>
        <meta
          name="description"
          content="app that helps see and search for countries"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        {/*  eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;600;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateProvider>
    </>
  );
}

export default MyApp;
