import React from "react";
import styles from "./footer.module.scss";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import backgroundLogo from "../images/tensure-homepage-logo-background.png"
import stackedLogo from "../images/logo-stacked-white.svg"
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Testimonals from "./testimonials";
import useMenuState from './Hooks/useMenuState';

const Footer = ({ className }) => {
  const { handleMenuShownClick} = useMenuState();
  const divStyle = {
    backgroundImage: `URL(${backgroundLogo})`
  };

  return (
    <section className={styles.sample} style={divStyle}>
      <Grid container spacing={0} alignItems="flex-start">
        <Grid item xs={12}>
          <Container className={styles.sampleContent} maxWidth="lg">
            <Typography color="secondary" align="center" variant="h1" marked="center">
              WHAT’S STANDING IN YOUR WAY?
            </Typography>
            <Container maxWidth="md">
              <Typography color="secondary" align="center" variant="subtitle1" className={styles.h5}>
              We do a lot of things - from custom software design to cloud infrastructure and machine learning. We have a strong focus on taking pieces of technology and seamlessly integrating them to help you move forward and and discover your next big project.
              <br />
              Here’s how we’ve helped people move forward:              
              </Typography>
            </Container>
          </Container>
        </Grid>        
        <Grid item xs={12}>
          <Testimonals />
        </Grid>
        <Grid item xs={12}>
          <Container className={styles.container} maxWidth="lg">
            <Typography color="inherit" align="center" variant="h1" marked="center" className={styles.heading}>
              Let's Get Started
            </Typography>
            <Button
              color="primary"
              variant="contained"
              size="large"
              className={styles.button}
              component="a"
              onClick={handleMenuShownClick}
            >Get in touch</Button>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container className={styles.logo} maxWidth="xs">
            <img src={ stackedLogo } alt="Tensure Logo" />
          </Container>
        </Grid>
      </Grid>
    </section>
  ); 
};

export default Footer
