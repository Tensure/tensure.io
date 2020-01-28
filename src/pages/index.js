import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import BackgroundImage from "gatsby-background-image";
import "@fortawesome/fontawesome-free/css/all.min.css";

const IndexPage = ({ className }) => (
  <Layout>
    <section className='hero is-dark is-fullheight-with-navbar'>
      <StaticQuery
        query={graphql`
          query {
            desktop: file(
              relativePath: { eq: "tensure-logo.png" }
            ) {
              childImageSharp {
                fluid(quality: 100, maxHeight: 600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `}
        render={data => {
          // Set ImageData.
          const imageData = data.desktop.childImageSharp.fluid;
          return (
            <BackgroundImage
              Tag='section'
              className={className}
              fluid={imageData}
            ></BackgroundImage>
          );
        }}
      />
    </section>
  </Layout>
);

const StyledBackgroundSection = styled(IndexPage)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  min-height: calc(100vh - 3.25rem);
`;
export default StyledBackgroundSection;
