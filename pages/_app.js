import "@/styles/globals.css";
import AppLayout from "@/components/Layout/AppLayout";
import "animate.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Vatebra Academy</title>
        <meta name="description" content="Building Tech Talents" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
