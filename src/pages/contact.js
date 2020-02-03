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
      <ContactForm useWhiteForm={true}/>
    </Layout>
  );
};

export default Contact;
