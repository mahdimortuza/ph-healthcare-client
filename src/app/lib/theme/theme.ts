import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1586FD",
    },
    secondary: {
      main: "#666f73",
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
});
