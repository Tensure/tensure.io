import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";
import Hero from "./hero";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const LayoutHomepage = ({ children, pageTitle }) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          {/* <Header /> */}
          <Hero />
          {children}
          <Footer />
        </Grid>
      </Grid>
    </div>

  );
};

LayoutHomepage.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutHomepage;
