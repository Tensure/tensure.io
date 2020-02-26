import React from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styles from './hero.module.scss'
import useMenuState from './Hooks/useMenuState';

const Hero = (props) => {
  const { handleMenuShownClick} = useMenuState();

  return (
    <section className={styles.hero}>
      <Container className={styles.container} maxWidth="lg">
        <Typography color="inherit" align="center" variant="h1" marked="center">
          Freedom to Move
        </Typography>
        <Container maxWidth="md">
          <Typography align="center" variant="subtitle1" className={styles.subtitle}>
            It’s easy to dream and imagine the end result, but right now, you’re feeling stuck. At Tensure, we put the right people, processes, and expertise in place to help move you past what’s blocking you and your team, giving you the freedom to move toward something better, faster.
          </Typography>
        </Container>
        <Button
          color="primary"
          variant="contained"
          size="large"
          className={styles.button}
          component="a"
          onClick={handleMenuShownClick}
        >
          Contact Us
        </Button>
      </Container>
    </section>
  );
};

Hero.propTypes = {
};

export default Hero;
