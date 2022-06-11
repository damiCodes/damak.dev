import Head from "next/head";
import { useState, useEffect } from "react";
import Layout from "../components/layout";
import PreLoader from "../components/ui/pre-loader";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loader) {
    return <PreLoader />;
  }

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
