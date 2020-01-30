import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer.js";
import Hero from "./hero";
import NavBar from "./navbar.js";
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
          <NavBar />
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
