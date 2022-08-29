import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Nav from "@comp/Nav/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
