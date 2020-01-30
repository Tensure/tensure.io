import { green, grey, red } from '@material-ui/core/colors';
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const rawTheme = createMuiTheme({
  typography: {
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
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    fontFamilySecondary: "benton-sans-wide"
  },
  palette: {
    primary: {
      main: "#04B8A6",
      contrastText: '#F1F1F1'
    },
    secondary: {
      main: "#002A49"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#F3F3F3"
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 2,
        padding: '0 30px',
        fontWeight: '700',
      },
      sizeLarge: {
        fontSize: '18px',
        padding: '26px 38px'
      }
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#f3f3f3',
        }
      }
    },
    MuiDialog: {
      paperFullScreen: {
        backgroundColor: '#dddddd',
      }
    }
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightBold,
  fontFamily: rawTheme.typography.fontFamilySecondary,
  textTransform: 'uppercase',
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
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: '6.5px',
      fontSize: 51,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      letterSpacing: '6.5px',
      fontSize: 48,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 22,
      fontWeight: rawTheme.typography.fontWeightRegular,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
};

export default theme;
