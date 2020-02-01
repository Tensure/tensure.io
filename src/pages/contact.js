import React from "react";
import SEO from "../components/seo";
import ContactForm from "../components/UI/ContactForm/Form";
import Layout from "../components/layout"
import Typography from '@material-ui/core/Typography';
import styles from "./contact.module.scss"

const Contact = () => {
  return (
    <Layout pageTitle="Contact form">
      <SEO title='Contact'></SEO>
      <Typography className={styles.heading} align="center" variant="h1" marked="center">
          We're here for you
        </Typography>
        <Typography align="center" variant="h5" className={styles.h5}>
          Put something here about building digital products? that <br /> will make their custies straight black out.
        </Typography>
      <ContactForm />
    </Layout>
  );
};

export default Contact;
