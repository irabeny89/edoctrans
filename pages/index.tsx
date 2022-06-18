import type { GetStaticProps, NextPage } from "next";
import config from "config";
import Head from "next/head";
import LocaleSelect from "components/LocaleSelect";
import Translator from "components/Translator";
import { MdLoop, MdOutlineWarningAmber } from "react-icons/md";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // @ts-ignore
  const props = config.app[locale];

  return { props };
};

const Home: NextPage<typeof config.app.en> = ({
  brand,
  copyRight,
  description,
  fileSupport: { label, files },
  translatorComponent,
  webPages: {
    home: { heading, paragraphs, title },
  },
}) => {
  return (
    <main className="p-2 h-full">
      <Head>
        {/* <title>
          {brand} | {title}
        </title> */}
        <title>{`${brand} | ${title}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
      </Head>

      <header className="flex justify-between mb-10">
        <h1 className="flex font-bold align-center text-xl">
          <MdLoop className="mt-1" color="green" /> {brand}
        </h1>
        <LocaleSelect />
      </header>

      <article className="min-h-screen">
        <section className="flex flex-wrap justify-center gap-5">
          <div className="md:w-1/2 mb-28 my-auto">
            <h2 className="text-center text-2xl mb-8 font-semibold">
              {heading}
            </h2>
            <div className="text-center">
              {paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="my-8 mx-auto p-2 shadow bg-blue-100 rounded text-center w-fit">
              <MdOutlineWarningAmber className="mx-auto" size="25" />{" "}
              <p>{label}</p>
              <ul>
                {files.map((file) => (
                  <li key={file}>&rarr; {file}</li>
                ))}
              </ul>
            </div>
          </div>

          <Translator
            {...translatorComponent}
            className="space-y-6 mb-28 text-slate-400"
          />
        </section>
      </article>

      <footer className="border-t-2 p-2 text-center">&copy; {copyRight}</footer>
    </main>
  );
};

export default Home;
