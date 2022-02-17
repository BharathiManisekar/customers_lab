import React from "react";
import { Select } from "@material-ui/core";
import { StyledSelectFormControl, StyledDropdownIcon } from "./styles";
import { StyledMenuItem } from "../common/FormInput";
import styled from "styled-components";
import _ from "lodash";


const CustomSelect = ({
  label,
  name,
  value = [],
  onChange,
  disabled,
  menuItemValues,
  multiple = false,
  selectedItems = [],
  white = false,
  helperText,
  showId = false,
  ...props
}) => {
  function renderValue(selectValue) {
    if (multiple) {
      const selectedKeys = menuItemValues
        .filter(menuItemValue => selectValue?.includes(menuItemValue?.value))
        .map(menuItemValues => menuItemValues?.label);
      return selectedKeys?.join(", ");
    } else {
      const selectedKey = menuItemValues.find(
        menuItemValue => menuItemValue.value === selectValue
      );
      return _.trim(selectValue) === "" ? (
        <PlaceHolderText>{selectedKey?.label}</PlaceHolderText>
      ) : (
        selectedKey?.value
      );
    }
  }

  return (
    <StyledSelectFormControl
      className={white ? "input-white" : ""}
      variant="outlined"
    >
      <Select
        {...{ multiple, name, value, onChange, renderValue, disabled }}
        {...props}
        IconComponent={() => (
          <StyledDropdownIcon
            alt="select"
            src={require("../assets/images/dropdownIcon.svg")}
          />
        )}
      >
        {menuItemValues.map((item, idx) => (
          <StyledMenuItem key={idx} value={item.value} disabled={item.disabled}>
            {item.label}
          </StyledMenuItem>
        ))}
      </Select>
      {helperText && <ErrorLabel>{helperText}</ErrorLabel>}
    </StyledSelectFormControl>
  );
};

export default CustomSelect;

const PlaceHolderText = styled.div`
  opacity: 0.5;
`;

const ErrorLabel = styled.div`
  font-size: 10px;
  font-family: openSans-SemiBold, sans-serif;
  color: #f44336;
  margin: 5px 0px 0px 5px;
`;
