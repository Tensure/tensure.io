import React from "react";
import Footer from "./footer";
import NavBar from "./navbar";
import Grid from "@material-ui/core/Grid";
import theme from "./../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Hero from './hero';

const Layout = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <NavBar open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}/>
              <Hero handleClickOpen={handleClickOpen}/>
              {children}
              <Footer handleClickOpen={handleClickOpen}/>
            </Grid>
          </Grid>
        </CssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Layout;
