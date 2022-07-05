import type { GetStaticProps, NextPage } from "next";
import { englishLocale, frenchLocale } from "config";
import Layout from "components/Layout";
import PageIntro from "components/PageIntro";
import TranslatorInfo from "components/TranslatorInfo";
import TranslatorForm from "components/TranslatorForm";
import TextTranslator from "components/TextTranslator";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const props = locale === "fr" ? frenchLocale : englishLocale;

  return { props };
};

const Home: NextPage<typeof englishLocale> = ({
  brand,
  copyRight,
  description,
  fileSupport,
  textTranslator,
  translatorComponent: { quickStart, ...rest },
  webPages: { home },
}) => {
  return (
    <Layout
      brand={brand}
      title={home.title}
      description={description}
      copyRight={copyRight}
    >
      <article className="min-h-screen mb-20 md:w-1/2 mx-auto space-y-14">
        <PageIntro {...home} />
        <TextTranslator {...textTranslator} />
        <TranslatorInfo {...{ fileSupport, quickStart }} />
        <TranslatorForm {...rest} />
      </article>
    </Layout>
  );
};

export default Home;
