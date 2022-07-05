import { supportedLocales, selectTestId } from "config";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import { MdLoop } from "react-icons/md";
import { LayoutPropsType } from "types";
import Footer from "./Footer";
import LocaleSelect from "./LocaleSelect";

export default function Layout({
  children,
  brand,
  title,
  description,
  copyRight,
}: LayoutPropsType) {
  const router = useRouter();

  const handleLocaleSelect = (e: FormEvent<HTMLSelectElement>) =>
    router.push(router.route, router.route, { locale: e.currentTarget.value });

  return (
    <main className="p-2 h-full">
      <Head>
        <title>{`${brand} | ${title}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
      </Head>
      <header className="mb-10">
        <section className="flex justify-between mb-10">
          <h1 className="flex font-bold align-center text-xl">
            <MdLoop className="mt-1" color="green" /> {brand}
          </h1>
          <LocaleSelect
            locales={supportedLocales}
            handleSelect={handleLocaleSelect}
            data-testid={selectTestId}
          />
        </section>
      </header>
      {children}
      <Footer brand={brand} copyRight={copyRight} />
    </main>
  );
}
