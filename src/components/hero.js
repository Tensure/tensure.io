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
          <Container maxWidth="md">
            <Typography color="inherit" align="center" variant="h5" className={styles.h5}>
              Tensure was born out of a simple idea: "What if it was better?"
              Better means giving our team the flexibility to succeed in their career and lives.
              Better means changing lives by training people in our community who don't have a technical background.
              Better means solving our customers' problems, not padding our bottom line.
              We looked at what people called the best and asked "what if it was better?"
            </Typography>
          </Container>
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

// Hero.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default Hero;
