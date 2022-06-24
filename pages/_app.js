import Head from "next/head";
import { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import Layout from "../components/layout";
import PreLoader from "../components/ui/pre-loader";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
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
        <title>Damilola Akinlade | Creative Front-end developer.</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color="29, 185, 84"
        outerAlpha={0.2}
        innerScale={0.8}
        outerScale={4}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
  );
}
