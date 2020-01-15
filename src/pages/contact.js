import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from "../components/contactForm";

const Contact = () => {
  return (
    <Layout>
      <SEO title='Contact'></SEO>
      <ContactForm />
    </Layout>
  );
};

export default Contact;
