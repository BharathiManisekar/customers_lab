import React from "react";
import { CustomInputField } from "../common/FormInput";
import theme from "../assets/theme";
import { FormLabel } from "@material-ui/core";
import CustomSelect from "../internel/CustomSelect";
import COLORS from "../assets/Colors";


export default function FormField({
  touched,
  errors,
  input,
  values,
  handleChange,
  handleBlur,
  menuItems,
  white = false,
  selectedIndex = "label",
  multiline,
}) {
  const { name, label, type, placeholder, required } = input;

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
          multiline={multiline}
          row={4}
          value={values[name]}
          error={errors[name] && touched[name]}
          helperText={touched[name] && errors[name]}
          id={name}
          placeholder={placeholder}
          name={name}
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
    </div>
  );
}