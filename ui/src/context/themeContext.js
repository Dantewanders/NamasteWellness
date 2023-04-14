import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#a9dab7',
    },
    secondary: {
      main: '#6d6a6d',
    },
    info: {
      main: "#052d46",
    },
    background: {
      default: "#312929",
      paper: "#bfd2d2",
    },
  },
  typography: {
    htmlFontSize: 14,
    button: {
      fontSize: 15,
      color:"#ffffff",
    },
  },
  text: {
    primary: 'rgba(226,225,225,0.87)',
  },

  
});

const ThemeContextProvider = (props) => {
  const { children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeContextProvider;
