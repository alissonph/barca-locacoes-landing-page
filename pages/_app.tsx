import "../src/styles/globals.scss";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import { HomeContextProvider } from "../src/contexts/HomeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HomeContextProvider>
      <Component {...pageProps} />
      <Analytics />
    </HomeContextProvider>
  );
}
export default MyApp;
