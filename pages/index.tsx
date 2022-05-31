import { Title } from "@mantine/core";
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

      <div>
        <Title order={1}>Nassa Rapallo</Title>
      </div>
    </>
  );
};

export default Home;
