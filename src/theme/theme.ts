import { PaletteColorOptions, createTheme, PaletteColor } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    typography: {
      fontFamily: string;
    };
  }
  interface Palette {
    purple: PaletteColor;
    gray: PaletteColor;
    grayLight: PaletteColor;
  }
  interface PaletteOptions {
    purple: PaletteColorOptions
    gray: PaletteColorOptions
    grayLight: PaletteColorOptions
  }
}


export const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
  palette: {
    primary: {
      main: "#100E1D",
    },
    secondary: {
      main: "#1E213A",
    },
    purple: {
      main: "#3C47E9",
    },
    gray: {
      main: "#616475"
    },
    grayLight: {
      main: "#E7E7EB"
    }
  },
});
