import "@/constant/styles/globals.css";
import { Container, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { muiTheme } from "../constant/styles/styleTheme.js";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={muiTheme}>
      <Container
        maxWidth={false}
        sx={{ backgroundColor: "#FAFAFA", minHeight: "100vh" }}
      >
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
