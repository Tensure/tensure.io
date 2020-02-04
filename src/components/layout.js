import React from "react";
import Footer from "./footer";
import NavBar from "./navbar";
import Grid from "@material-ui/core/Grid";
import theme from "./../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <NavBar />
              {children}
              <Footer />
            </Grid>
          </Grid>
        </CssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Layout;
