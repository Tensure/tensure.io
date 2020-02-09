import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "./../components/hero";
import { createStore } from 'react-hookstore';

const IndexPage = () => {
  try {
    createStore('menuShown', false);
  } catch {}
  return (
    <Layout>
      <SEO title='Tensure Homepage'></SEO>
      <Hero />
    </Layout>
  );
};

export default IndexPage;
