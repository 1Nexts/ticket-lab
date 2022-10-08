import type { AppProps } from "next/app";
import { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/globals.css";

import { Provider } from "react-redux";
import { store } from "@/store/store";

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
        <title>Ticket Labs</title>
      </header>

      <Provider store={store}>
        <NextNProgress />
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
