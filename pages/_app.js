import { ThemeProvider } from "styled-components";

import GlobalStyles from "@components/GlobalStyles/GlobalStyles";

import { THEME } from "../constants";

function MyApp({ Component, pageProps }) {
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
