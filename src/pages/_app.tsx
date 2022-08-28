import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "@comp/Nav/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
