import { green, grey, red } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const fonts = {
  fontFamily: [
    "benton-sans-wide",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(","),
};

// A custom theme for this app
const rawTheme = createMuiTheme({
  typography: {
    fontFamily: fonts.fontFamily,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  palette: {
    primary: {
      main: "#04B8A6",
      contrastText: '#F1F1F1'
    },
    secondary: {
      main: "#002A49"
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 2,
        padding: '0 30px',
        fontWeight: '700',
        fontFamily: fonts.fontFamily
      },
      sizeLarge: {
        // fontSize: '18px',
        padding: '26px 38px'
      }
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#F3F3F3',
        }
      }
    },
    MuiDialog: {
      paperFullScreen: {
        backgroundColor: '#DDDDDD',
      }
    }
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontFamily: rawTheme.typography.fontFamily,
  fontWeight: rawTheme.typography.fontWeightBold,
  textTransform: 'uppercase',
  letterSpacing: 6.5
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      fontSize: 3.5,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 3,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 2.5,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontWeight: rawTheme.typography.fontWeightRegular,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontWeight: rawTheme.typography.fontWeightRegular,
    }
  }
};

let options = {
  factor: 2
}
const themeResponsive = responsiveFontSizes(theme, options);

export default themeResponsive;
