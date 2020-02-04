import React from "react";
import styles from "./footer.module.scss";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import backgroundLogo from "../images/tensure-homepage-logo-background.png"
import sampleWork from "../images/tensure-work-samples.png"
import stackedLogo from "../images/logo-stacked-white.svg"
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

const Footer = ({ className }) => {


  const divStyle = {
    backgroundImage: `URL(${backgroundLogo})`
  };

  return (
    <section className={styles.sample} style={divStyle}>
      <Grid container spacing={0} alignItems="flex-start">
        <Grid item xs={12}>
          <Container className={styles.sampleContent} maxWidth="lg">
            <Typography color="secondary" align="center" variant="h2" marked="center">
              Services
            </Typography>
            <Container maxWidth="md">
              <Typography color="secondary" align="center" variant="h5" className={styles.h5}>
                Application Development, Data & AI, Cloud Infrastructure, or Cybersecurity. We don't necessarily do it all, but what we do, we do it better.
              </Typography>
            </Container>
          </Container>
        </Grid>        
        <Grid item xs={12}>
          <img src={ sampleWork } alt="Tensure Example Work" />
        </Grid>
        <Grid item xs={12}>
          <Container className={styles.container} maxWidth="lg">
            <Typography color="inherit" align="center" variant="h1" marked="center" className={styles.heading}>
              Let's build better together
            </Typography>
            <Button
              color="primary"
              variant="contained"
              size="large"
              className={styles.button}
              component="a"
              href="/contact"
            >Get in touch</Button>
          </Container>
        </Grid>
        <Grid item xs={12} justify="center">
          <Container className={styles.logo} maxWidth="xs">
            <img src={ stackedLogo } alt="Tensure Logo" />
          </Container>
        </Grid>
      </Grid>
    </section>
  ); 
};

export default Footer
