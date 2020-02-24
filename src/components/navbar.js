import React from "react";
import styles from './navbar.module.scss';
import logo from './../images/logo-type-white.svg';
import menuIcon from './../images/menu-icon.svg';
import Grid from "@material-ui/core/Grid";
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Menu from './menu'
import { useStore } from 'react-hookstore';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const NavBar = () => {

  const [open, setOpen] = useStore('menuShown');

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
          <a href="/"><img className={styles.logo} src={logo} alt="Tensure Logo" /></a>
        </Grid>
        <Grid item>
          <div className={styles.menuButton}>
            <div tabindex="0" role="link" onClick={handleClickOpen} className={styles.menuButton}>
              <img src={menuIcon} alt="Tensure Logo" />
            </div>
          </div>
          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} className={styles.dialog}>
            <Menu handleClickClose={handleClose} />
          </Dialog>
        </Grid>
      </Grid>

    </nav>
  );
};

export default NavBar;
