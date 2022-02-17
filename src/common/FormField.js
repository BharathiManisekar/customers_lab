import React, { useState } from "react";
import { CustomInputField } from "../common/FormInput";
import theme from "../assets/theme";
import { FormLabel, TextareaAutosize } from "@material-ui/core";
import CustomSelect from "../internel/CustomSelect";
import COLORS from "../assets/Colors";
import styled, { css } from "styled-components";


export default function FormField({
  touched,
  errors,
  input,
  values,
  handleChange,
  handleBlur,
  menuItems,
  setFieldValue,
  white = false,
  showAllInitial = false,
  selectedIndex = "label",
  alias,
  multiline,
  row = 4,
  disabled,
  maxLength = 1000,
  style = {},
  minDate,
  maxDate,
  openTo,
  views,
  format = "DD/MM/YYYY",
  selectedItemChanged = () => {}
}) {
  const { name, label, type, placeholder, required } = input;
  const [visibility, setVisibility] = useState(false);
  const [searchInput, setSearchInput] = useState();
 

  const calRenderOption = option => {
    // Value selected with enter, right from the input
    if (typeof option === "string") {
      return option;
    }
    // Add "xxx" option created dynamically
    if (option.inputValue) {
      return option.inputValue;
    }
    // Regular option
    return option[selectedIndex];
  };
  return (
    <div className="form-fields" style={{ width: "100%", paddingTop: 5 }}>
      <FormLabel
        error={errors[name] && touched[name]}
        style={{
          fontFamily: theme.fonts.primaryFontSemiBold,
          fontSize: 10,
          color: COLORS.INPUT_LABEL
        }}
      >
        {label}
        {required && <span className="required-star"> *</span>}
      </FormLabel>
      {type === "select" ? (
        <CustomSelect
          white={white}
          id={name}
          menuItemValues={menuItems}
          name={name}
          value={values[name]}
          onChange={handleChange}
          error={errors[name] && touched[name]}
          onBlur={handleBlur}
          style={{ marginTop: 6 }}
        />
      ) : (
        <CustomInputField
          className={
            white && multiline
              ? "input-white input-height-auto"
              : white
              ? "input-white"
              : multiline
              ? "input-height-auto"
              : ""
          }
          multiline={multiline}
          row={4}
          autoComplete={"new-password"}
          autoFocus={name === "fullname"}
          type={type === "password" ? (visibility ? "text" : type) : type}
          value={values[name]}
          error={errors[name] && touched[name]}
          helperText={touched[name] && errors[name]}
          id={name}
          placeholder={placeholder}
          name={name}
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ marginTop: 6, marginBottom: 10 }}
        />
      )}
    </div>
  );
}

const Relative = styled.div`
  position: relative;
`;

const CustomTextArea = styled(TextareaAutosize)`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  font-size: 16px;
  color: ${COLORS.COLOR_DARK} !important;
  font-family: ${theme.fonts.primaryFontSemiBold};
  /* min-height: 89px; */
  border-radius: 6px;
  border: solid 0.5px #e1e3ee;
  background-color: #ffffff;
  outline: none;
  padding: 15px;
  ${({ disabled }) =>
    !disabled
      ? css`
          :hover {
            border: solid 0.5px black;
          }
        `
      : css`
          background-color: ${COLORS.TABLE_GREY_CELL};
        `}

  ${({ error }) =>
    error &&
    css`
      border: solid 0.5px #f44336;
      :hover {
        border: solid 0.5px #f44336;
      }
    `}
`;

const MaxLength = styled.div`
  font-family: openSans-SemiBold, sans-serif;
  font-size: 10px;
  color: #acb1c2;
  text-align: right;
`;

const HelperText = styled.div`
  position: absolute;
  left: 3px;
  position: absolute;
  font-size: 10px;
  font-family: openSans-SemiBold, sans-serif;
  color: #f44336;
`;
