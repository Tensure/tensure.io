import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from "../components/UI/ContactForm/Form";

const Contact = () => {
  return (
    <Layout pageTitle="Contact form">
      <SEO title='Contact'></SEO>
      <ContactForm />
    </Layout>
  );
};

export default Contact;
