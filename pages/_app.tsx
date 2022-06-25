import "../styles/globals.css";
import type { AppProps } from "next/app";
import ErrorBoundary from "components/ErrorBoundary";
import Script from "next/script";
import { envVariables } from "config";

const { gtmId } = envVariables;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "${gtmId}");`,
        }}
      />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
