import { createTheme } from "@mui/material";

const GlobalTheme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: "orange",
        },
      },
    },
  },
});
export default GlobalTheme;
