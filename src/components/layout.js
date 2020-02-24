import React from "react";
import Footer from "./footer";
import NavBar from "./navbar";
import Grid from "@material-ui/core/Grid";
import theme from "./../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from '@material-ui/core/styles';
import { createStore } from 'react-hookstore';
import useMenuState from './Hooks/useMenuState';

const Layout = ({ children }) => {
  //Initializes menuState
  useMenuState();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <StylesProvider injectFirst>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <NavBar />
                {children}
                <Footer />
              </Grid>
            </Grid>
          </StylesProvider>
        </CssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Layout;
