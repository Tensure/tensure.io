import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from "../components/UI/ContactForm/Form";
import LayoutHomepage from "../components/layout-homepage"

const Contact = () => {
  return (
    <LayoutHomepage pageTitle="Contact form">
      <SEO title='Contact'></SEO>
      <ContactForm />
    </LayoutHomepage>
  );
};

export default Contact;
