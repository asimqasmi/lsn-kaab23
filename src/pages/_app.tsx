import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Nav from "@comp/Nav/Nav";
import axios from "axios";
import { server } from "@src/config";
import { SWRConfig } from "swr";

import { useEffect } from "react";
import { themeChange } from "theme-change";

axios.defaults.baseURL = server;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Nav />
        <SWRConfig
          value={{
            fetcher: (url: string) => axios(url).then((r) => r.data),
            revalidateOnFocus: true,
            // refreshInterval: 10000,
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </SessionProvider>
    </>
  );
}

export default MyApp;
