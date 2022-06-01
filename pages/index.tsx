import type { NextPage } from "next";
import { Hero } from "../src/components/Hero/Hero.components";
import { Head } from "../src/components/Head";

const Home: NextPage = () => {
  return (
    <>
      <Head title={"nassarapallo"} />
      <Hero />
    </>
  );
};

export default Home;
