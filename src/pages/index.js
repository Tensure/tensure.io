import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import BackgroundImage from "gatsby-background-image";
import "../styles/index.scss";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./../theme";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const IndexPage = ({ className }) => (

  <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Typography>Tensure</Typography>
      <Typography variant="h1" component="h2" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
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

  </ThemeProvider>

);

const StyledBackgroundSection = styled(IndexPage)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  min-height: calc(100vh - 3.25rem);
`;
export default StyledBackgroundSection;
