/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer";
import NavBar from "./navbar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundImage: 'linear-gradient(180deg, #04B8A6 0%, #04B8A6 10%, rgba(216,216,216,0.00) 99%);',
  },
  content: {
    height: '110vh',
    'padding-top': '150px'
  }
}));

const Layout = ({ children, pageTitle }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.content}>
        <Grid item xs={12}>
          <NavBar />
            <Container>
              {children}
            </Container>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
