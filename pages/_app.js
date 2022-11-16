import { ChakraProvider, CSSReset, ThemeProvider } from "@chakra-ui/react";
import { ProvideAuth } from "../lib/auth";
import "../styles/globals.css";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <ProvideAuth>
          <CSSReset/>
          <Component {...pageProps} />
        </ProvideAuth>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
