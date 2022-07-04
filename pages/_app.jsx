import React, { useState, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../styles/createEmotionCache";
import theme from "../styles/theme";
import "/styles/globals.css";
import Header from "../components/layout/header";
import Router, { useRouter as UseRouter } from "next/router";
import Footer from "../components/layout/footer";
import "/styles/header.css";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const router = UseRouter();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />

        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {/* <title>{CaseInfo.CaseName}</title> */}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="bgimage">
          {/* <Router> */}
          <Header />
          <Component {...pageProps} />

          <br />
          <br />
          <br />
          <br />
          {/* </Router> */}
        </div>
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}
