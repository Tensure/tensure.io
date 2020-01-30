import { Link } from "gatsby";
import React from "react";
import Typography from '@material-ui/core/Typography';
import styles from './Navbar.module.scss'
import logo from './../images/logo-type-white.svg'
import menuIcon from './../images/menu-icon.svg'
import Grid from "@material-ui/core/Grid";
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Menu from './Menu'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const NavBar = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className={styles.section}>

      <Grid container justify="space-between" alignItems="center" spacing={3}>
        <Grid item>
          <img className={styles.logo} src={ logo } alt="Tensure Logo" />
        </Grid>
        <Grid item>
          <a onClick={handleClickOpen} className={styles.menuButton}>
            <img src={ menuIcon } alt="Tensure Logo" />
          </a>
          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} className={styles.dialog}>
            <Menu handleClickClose={handleClose} />
          </Dialog>
        </Grid>
      </Grid>

    </nav>
  );
};

export default NavBar;
