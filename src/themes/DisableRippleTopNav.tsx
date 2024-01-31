import { createTheme } from "@mui/material";

const DisabledRippleTheme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
export default DisabledRippleTheme;
