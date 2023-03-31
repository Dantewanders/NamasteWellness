import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#bed4ad",
    },
    secondary: {
      main: "#f50057",
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
    },
  },

  typography: {
    htmlFontSize: 14,
    button: {
      fontSize: 15,
    },
  },
});

const ThemeContextProvider = (props) => {
  const { children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeContextProvider;
