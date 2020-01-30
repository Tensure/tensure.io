import React from "react";
import footerStyles from "./footer.module.scss";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import backgroundLogo from "../images/tensure-homepage-logo-background.png"
import sampleWork from "../images/tensure-work-samples.png"
import stackedLogo from "../images/logo-stacked-white.svg"
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

const styles = theme => ({
  sample: {
    minHeight: 2000,
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
    marginTop: theme.spacing(50),
    marginBottom: theme.spacing(14),
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
          <Container className={classes.sampleContent} maxWidth="lg">
            <Typography color="secondary" align="center" variant="h2" marked="center">
              we build to last
            </Typography>
            <Typography color="secondary" align="center" variant="h5" className={classes.h5}>
              From this to that and everything in between, we aim to<br /> set you up for success.?The best way we’ve found to<br /> make that happen is to BLOW. PEOPLE’S. MINDS.
            </Typography>
          </Container>
        </Grid>        
        <Grid item xs={12}>
          <img src={ sampleWork } alt="Tensure Example Work" />
        </Grid>
        <Grid item xs={12}>
          <Container className={classes.container} maxWidth="lg">
            <Typography color="inherit" align="center" variant="h1" marked="center" className={classes.h1}>
              Let's Blow Some Minds?
            </Typography>
            <Button
              color="primary"
              variant="contained"
              size="large"
              className={classes.button}
              component="a"
              href="/premium-themes/onepirate/sign-up/"
            >Get in touch</Button>
          </Container>
        </Grid>
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
