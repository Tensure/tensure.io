import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import backgroundLogo from "../images/tensure-homepage-logo-background.png"
import stackedLogo from "../images/logo-stacked-white.svg"
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  sample: {
    minHeight: 100,
    backgroundImage:
      `linear-gradient(0deg, #002A49 10%, rgba(216,216,216,0.00) 80%),URL({backgroundLogo}), URL(${backgroundLogo})`,
    backgroundPosition: 'center 32%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '370%',
      color: theme.palette.common.white,
    position: "relative",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      backgroundPosition: 'center top',
      backgroundSize: '230%',
    }
  },
  sampleContent: {
    margin: '160px auto',
  },
  h5: {
    marginTop: theme.spacing(2),
    fontWeight: 600,
  },
  h1: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(32),
  },
  container: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const Footer = (props, { className }) => {

  const { classes } = props;

  return (
    <section className={classes.sample}>
      <Grid container spacing={0} alignItems="flex-start">
        <Grid item xs={12}>
          <Container className={classes.logo} maxWidth="lg">
            <img src={ stackedLogo } alt="Tensure Logo" />
          </Container>
        </Grid>
      </Grid>
    </section>
  ); 
};

export default withStyles(styles)(Footer);
