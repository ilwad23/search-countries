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
