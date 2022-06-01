import NextHead from "next/head";

export const Head = ({ title }: { title: string }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content="Nassa Rapallo" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};
