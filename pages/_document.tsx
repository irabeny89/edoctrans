import Document, { Html, Head, Main, NextScript } from "next/document";
import { envVariables } from "config";

const { gtmId } = envVariables;

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <body>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}
