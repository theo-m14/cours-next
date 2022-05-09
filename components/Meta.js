import Head from "next/head";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Le blog dev, pour les passionés du web",
  description:
    "Apprendre et comprendre le développement web avec react,next ...",
};

export default Meta;
