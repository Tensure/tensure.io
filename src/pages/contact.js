import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from "../components/UI/ContactForm/Form";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./../theme";
import CssBaseline from '@material-ui/core/CssBaseline';

const Contact = () => {
  return (
    <React.Fragment>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout pageTitle="Contact form">
      <SEO title='Contact'></SEO>
      <ContactForm useWhiteForm={true}/>
    </Layout>
    </ThemeProvider>
  </React.Fragment>
  );
};

export default Contact;
