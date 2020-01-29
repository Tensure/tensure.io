import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import LayoutHomepage from "../components/layout-homepage";
import BackgroundImage from "gatsby-background-image";
import "../styles/index.scss";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./../theme";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

const IndexPage = () => (

  <React.Fragment>
  <CssBaseline />
    <ThemeProvider theme={theme}>
      <LayoutHomepage>
      
      </LayoutHomepage>
    </ThemeProvider>
  </React.Fragment>
);

export default IndexPage;
