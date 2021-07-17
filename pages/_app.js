import * as React from "react";
import { ThemeProvider } from "styled-components";

import { useRouter } from "next/router";

import GlobalStyles from "@components/GlobalStyles/GlobalStyles";
import { pageview } from "@lib/analytics.js";

import { THEME } from "../constants";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={THEME}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
