import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider,unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import Layout from "../components/Layout";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);



 let language
  const RightToLeftLanguages = (lang) => {
    switch (lang) {
      case "fa-IR":
        return "rtl";
  
      default:
        return "ltr";
    }
  };



 




  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider  theme={{ ...theme, direction: RightToLeftLanguages(language) }}>
        <div dir={RightToLeftLanguages(language)}>

       
      <StylesProvider jss={jss}>
        <CssBaseline />
        <Layout>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <Component {...pageProps} />
        </Layout>
        </StylesProvider>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
