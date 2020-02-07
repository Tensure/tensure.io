import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "./../components/hero";
import Testimonals from "../components/testimonials";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Tensure Homepage'></SEO>
      <Hero />
      <Testimonals />
    </Layout>
  );
};

export default IndexPage;
