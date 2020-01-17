import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Form from "../components/UI/ContactForm/Form";

const Contact = () => {
  return (
    <Layout>
      <SEO title='Contact'></SEO>
      <Form />
    </Layout>
  );
};

export default Contact;
