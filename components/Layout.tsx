import Head from "next/head";
import { LayoutPropsType } from "types";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({
  children,
  brand,
  title,
  description,
  copyRight,
}: LayoutPropsType) {
  return (
    <main className="p-2 h-full">
      <Head>
        <title>{`${brand} | ${title}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
      </Head>
      <Header brand={brand} />
      {children}
      <Footer brand={brand} copyRight={copyRight} />
    </main>
  );
}
