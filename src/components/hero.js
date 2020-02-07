import React from "react";
import PropTypes from "prop-types";
// import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styles from "./hero.module.scss";
// const styles = theme => ({
//   hero: {
//     minHeight: 820,
//     display: 'flex',
//     // backgroundImage: 'linear-gradient(180deg, #04B8A6 0%, #04B8A6 10%, rgba(216,216,216,0.00) 99%);',
//     color: theme.palette.common.white,
//     position: 'relative',
//     alignItems: 'center',
//     [theme.breakpoints.up('sm')]: {
//       height: '110vh',
//       maxHeight: 900,
//     },
//   },
//   container: {
//     marginop: theme.spacing(1),
//     marginBottom: theme.spacing(14),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   background: {
//     backgroundPosition: 'center',
//   },
//   h5: {
//     marginBottom: theme.spacing(4),
//     marginTop: theme.spacing(2),
//     fontWeight: 600,
//     [theme.breakpoints.up('sm')]: {
//       marginTop: theme.spacing(3),
//     },
//   },
// });

const Hero = ({handleClickOpen}) => {
  // const { classes } = props;

  return (
      <section className={styles.hero}>
        <Container className={styles.container} maxWidth="lg">
          <Typography color="inherit" align="center" variant="h1" marked="center">
            Let's build better together
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
          <Button
            color="primary"
            variant="contained"
            size="large"
            className={styles.button}
            component="a"
            href="#"
            onClick={handleClickOpen}
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
