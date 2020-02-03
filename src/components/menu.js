import React from "react";
import Typography from '@material-ui/core/Typography';
import styles from './navbar.module.scss';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import ContactForm from "./UI/ContactForm/Form";


const Menu = (props) => {

  return (
    <div>

      <Grid container justify="flex-end" alignItems="center" spacing={1}>
        <Grid item>
          <Button onClick={() => props.handleClickClose()} aria-label="close">
            <h1 className={styles.close}>X</h1>
          </Button>
        </Grid>
      </Grid>

      <Grid container direction="column" justify="center" alignItems="center" spacing={6}>
        <Grid item>
          <Button color="secondary" href="https://www.facebook.com/TensureIO">
            <Typography color="inherit" align="center" variant="h1" marked="center">
              facebook
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button color="secondary" href="https://www.linkedin.com/company/tensureio/about">
            <Typography color="inherit" align="center" variant="h1" marked="center">
              LinkedIn
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button color="secondary" href="https://twitter.com/TensureIO">
            <Typography color="inherit" align="center" variant="h1" marked="center">
              Twitter
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button color="secondary" href="https://www.instagram.com/tensure.io">
            <Typography color="inherit" align="center" variant="h1" marked="center">
              Instagram
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button color="secondary" href="/contact">
            <Typography color="inherit" align="center" variant="h1" marked="center">
              Contact
            </Typography>
          </Button>
        </Grid>
      </Grid>


      <Grid container justify="center" alignItems="center" spacing={10}>
        <Grid item className={styles.menuItems}>
          <ContactForm />
        </Grid>
      </Grid>

    </div>
  );
};

export default Menu;
