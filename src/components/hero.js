import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const styles = theme => ({
  hero: {
    minHeight: '100vh',
    backgroundImage: 'linear-gradient(180deg, #04B8A6 0%, #04B8A6 10%, rgba(216,216,216,0.00) 99%);',
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '110vh',
      minHeight: 500,
      maxHeight: 900,
    },
  },
  container: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  background: {
    backgroundPosition: 'center',
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(2),
    fontWeight: 600,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(3),
    },
  },
});

const Hero = (props, {className}) => {
  const { classes } = props;

  return (
    <section className={classes.hero}>
      <Container className={classes.container} maxWidth="lg">
        <Typography color="inherit" align="center" variant="h1" marked="center">
          We're Fully Stacked
        </Typography>
        <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
          Put something here about building digital products? that <br /> will make their custies straight black out.
        </Typography>
        <Button
          color="primary"
          variant="contained"
          size="large"
          className={classes.button}
          component="a"
          href="/premium-themes/onepirate/sign-up/"
        >
          make ‘em black out
        </Button>
      </Container>
    </section>
  );
};

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
