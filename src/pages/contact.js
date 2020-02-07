import React from "react";
import SEO from "../components/seo";
import ContactForm from "../components/UI/ContactForm/Form";
import Layout from "../components/layout"
import Typography from '@material-ui/core/Typography';
import styles from "./contact.module.scss"
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
const Contact = () => {
  return (
    <Layout pageTitle="Contact form">
      <SEO title="Contact"></SEO>

      <Container maxWidth="md">
        <Grid container justify="center" alignItems="center" spacing={20}>
          <Grid item>
            <ContactForm useWhiteForm={true} />
          </Grid>
        </Grid>
      </Container>

    </Layout>
  );
};

export default Contact;
