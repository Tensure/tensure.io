import { Link } from "gatsby";
import React from "react";
import Typography from '@material-ui/core/Typography';
import styles from './Navbar.module.scss'
import logo from './../images/logo-type-white.svg'
import menuIcon from './../images/menu-icon.svg'
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

const Menu = (props) => {

  return (
    <nav className={styles.section}>

      <Grid container justify="space-between" alignItems="center" spacing={3}>
        <Grid item>

          menu stuff
          <Button onClick={() => props.handleClickClose()} aria-label="close">
            Close
          </Button>

        </Grid>
      </Grid>

    </nav>
  );
};

export default Menu;
