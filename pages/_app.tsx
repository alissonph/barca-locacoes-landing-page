import "../src/styles/globals.scss";
import type { AppProps } from "next/app";

import { HomeContextProvider } from "../src/contexts/HomeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HomeContextProvider>
      <Component {...pageProps} />
    </HomeContextProvider>
  );
}
export default MyApp;
