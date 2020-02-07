import React from "react";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styles from './hero.module.scss'



const Hero = (props, {className}) => {

  return (
    <section className={styles.hero}>
      <Container className={styles.container} maxWidth="lg">
        <Typography color="inherit" align="center" variant="h1" marked="center">
          Build better together
        </Typography>
        <Container maxWidth="md">
          <Typography align="center" variant="subtitle1" className={styles.subtitle}>
            Imagine something better, teams thriving in their careers and lives, better training and honing skills, better solutions resulting in a better bottom line.
          </Typography>
        </Container>
        <Button
          color="primary"
          variant="contained"
          size="large"
          className={styles.button}
          component="a"
          href="/contact"
        >
          Contact Us
        </Button>
      </Container>
    </section>
  );
};

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Hero;
