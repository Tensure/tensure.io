import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "./../components/hero";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Tensure Homepage'></SEO>
      <Hero />
    </Layout>
  );
};

export default IndexPage;
