import { Button, Title } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>nassarapallo</title>
        <meta name="description" content="Nassa Rapallo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title order={1}>Nassa Rapallo</Title>
      </main>
    </>
  );
};

export default Home;
