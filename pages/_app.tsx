import type { AppProps } from "next/app";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  return (
    <div>
      <header>
        <title>Rent Services</title>
      </header>

      <div id="wrapper">
        <NextNProgress />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
