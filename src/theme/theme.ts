import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#161616",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: "#161616",
          borderRadius: "34px",
          color: "white",
          padding: "12px 25px",
          textTransform: "capitalize",
          fontWeight: "700",
          fontSize: "12px",
          ":hover": {
            background: "#2d2d2d",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          padding: "0 10px",
          borderRadius: "34px",
          background: "transparent",
          border: "2px solid #AEAEAE",

          "& fieldset": {
            border: "34px",
          },
          input: {
            background: "transparent",
            "&::placeholder": {
              color: "black",
              fontSize: "12px",
            },
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          ":after": {
            background: "#BDBDBD",
            borderTop: "0.5px solid rgba(0, 0, 0, 0.12)",
          },
          ":before": {
            background: "#BDBDBD",
            borderTop: "0.5px solid rgba(0, 0, 0, 0.12)",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          "&.Mui-error": {
            marginTop: "0",
            marginLeft: "10px",
          },
        },
      },
    },
  },
});
