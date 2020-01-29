import { Link } from "gatsby";
import React from "react";
import Typography from '@material-ui/core/Typography';
import styles from './Navbar.module.scss'
import logo from './../images/logo-type-white.svg'
import menuIcon from './../images/menu-icon.svg'
import Grid from "@material-ui/core/Grid";

const Hero = () => {

  return (
    <nav className={styles.section}>

      <Grid container justify="space-between" alignItems="center" spacing={3}>
        <Grid item>
          <img className={styles.logo} src={ logo } alt="Tensure Logo" />
        </Grid>
        <Grid item>
          <a href="/contact" className={styles.menuButton}>
          <img src={ menuIcon } alt="Tensure Logo" />
          </a>
        </Grid>
      </Grid>

    </nav>
  );
};

export default Hero;
