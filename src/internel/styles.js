import { FormControl, withStyles } from "@material-ui/core";
import { StyledInput } from "../common/FormInput";
import styled from "styled-components";
import COLORS from "../assets/Colors";

export const StyledSelectFormControl = withStyles({
  ...StyledInput,
  root: {
    ...StyledInput.root,
    width: "80%",
  },
})(FormControl);

export const StyledDropdownIcon = styled.img`
  height: 4px;
  width: 7px;
  background-color: ${COLORS.INPUT_BACKGROUND};
  position: absolute;
  right: 13px;
`;
