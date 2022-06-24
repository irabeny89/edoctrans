import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Translator from "components/Translator";
import { englishLocale, frenchLocale } from "config";
import Header from "components/Header";

/**
 * Runs server side and generates static props for the home page based on selected locale. Curently supports `English` and `French`.
 * @param {*} { `locale` } can be `fr` otherwise defaults to `en`
 * @returns {*} { `props` } locale data as props to the homepage component
 */
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const props = locale === "fr" ? frenchLocale : englishLocale;

  return {
    props,
  };
};

const Home: NextPage<typeof englishLocale> = ({
  brand,
  copyRight,
  description,
  fileSupport,
  translatorComponent,
  webPages: {
    home: { heading, paragraphs, title },
  },
}) => {
  return (
    <main className="p-2 h-full">
      <Head>
        <title>{`${brand} | ${title}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
      </Head>

      <Header brand={brand} />

      <article className="min-h-screen mb-20">
        <section className="md:w-1/2 mx-auto space-y-14">
          <h2 className="text-center text-2xl mb-8 font-semibold">{heading}</h2>
          <div className="text-center">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <Translator
            {...{ translatorComponent, fileSupport }}
            className="space-y-6 mb-28 text-slate-400 sm:w-2/3 md:w-11/12 lg:w-2/3 mx-auto"
          />
        </section>
      </article>

      <footer className="border-t-2 p-2 text-center">&copy; {copyRight}</footer>
    </main>
  );
};

export default Home;
