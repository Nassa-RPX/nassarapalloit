import { AppProps } from "next/app";

import Head from "next/head";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { Layout } from "../src/components/Layout/Layout.component";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
        }}
      >
        <ColorSchemeProvider
          colorScheme="light"
          toggleColorScheme={() => console.log("Changed")}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ColorSchemeProvider>
      </MantineProvider>
    </>
  );
}
