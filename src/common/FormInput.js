import theme from "../assets/theme";
import { withStyles, TextField, MenuItem, Button } from "@material-ui/core";
import COLORS from "../assets/Colors";

export const StyledInput = {
  root: {
    width: "80%",
    fontSize: "16px",
    color: `${COLORS.COLOR_DARK} !important`,
    "& input": {
      letterSpacing: 0.1,
      fontSize: "16px",
      color: `${COLORS.COLOR_DARK} !important`,
      fontFamily: `${theme.fonts.primaryFontSemiBold}`
    }
  }
};

const OutlinedPrimaryBtnStyle = {
  root: {
    backgroundColor: COLORS.PRIMARY_WHITE,
    color: COLORS.BTN_GREEN,
    fontFamily: theme.fonts.primaryFontBold,
    fontSize: 14,
    width: "100%",
    textTransform: "none",
    borderRadius: 4,
    padding: "16px 22px",
    border: `1px solid ${COLORS.BTN_GREEN}`,
    transition: "300ms",
    "&:hover": {
      backgroundColor: COLORS.PRIMARY_WHITE,
      borderColor: COLORS.BTN_GREEN,
      transform: "translate(0, -4px)",
    },
    "&:active": {
      backgroundColor: COLORS.PRIMARY_WHITE,
      borderColor: COLORS.BTN_GREEN,
    },
    "&:focus": {
      borderColor: COLORS.BTN_GREEN,
    },
  },
  label: {
    lineHeight: 1,
  },
  disabled: {
    borderColor: "rgba(0, 0, 0, 0.26)",
    opacity: 0.6,
  },
};

const PrimaryBtnStyle = {
  root: {
    backgroundColor: COLORS.BTN_GREEN,
    color: COLORS.PRIMARY_WHITE,
    fontFamily: theme.fonts.primaryFontBold,
    fontSize: 14,
    width: "100%",
    textTransform: "none",
    borderRadius: 4,
    padding: "16px 22px",
    border: `1px solid ${COLORS.BTN_GREEN}`,
    transition: "300ms",
    "&:hover": {
      backgroundColor: COLORS.BTN_GREEN,
      borderColor: COLORS.BTN_GREEN,
      transform: "translate(0, -4px)",
    },
    "&:active": {
      backgroundColor: COLORS.BTN_GREEN,
      borderColor: COLORS.BTN_GREEN,
    },
    "&:focus": {
      borderColor: COLORS.BTN_GREEN,
    },
  },
  label: {
    lineHeight: 1,
  },
  disabled: {
    borderColor: "rgba(0, 0, 0, 0.26)",
    opacity: 0.6,
    color: `${COLORS.PRIMARY_WHITE} !important`,
  },
};

const StyledMenuItem = withStyles({
  root: {
    fontFamily: theme.fonts.primaryFontSemiBold,
    color: COLORS.COLOR_DARK
  },
  selected: {
    fontFamily: theme.fonts.primaryFontSemiBold,
    color: COLORS.COLOR_DARK
  }
})(MenuItem);

export { StyledMenuItem };

export const PrimaryCTAButton = withStyles(PrimaryBtnStyle)(Button);
export const CustomInputField = withStyles(StyledInput)(TextField);
export const PrimaryOutlinedCTAButton = withStyles(OutlinedPrimaryBtnStyle)(
  Button
);
