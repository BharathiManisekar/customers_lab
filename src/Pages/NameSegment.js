import React from "react";
import { Drawer } from "@material-ui/core";
import styled from "styled-components";
import COLORS from "../assets/Colors";
import {
  PrimaryOutlinedCTAButton,
  PrimaryCTAButton,
} from "../common/FormInput";
import CustomSelect from "../internel/CustomSelect";
import { NameType } from "../Helpers/constants";
import { Formik } from "formik";
import FormField from "../common/FormField";


export default function NameSegment({ open, setOpen }) {
  const onFormSubmit = values => {
    console.log("values", values);

    fetch("https://webhook.site/2f4843d8-78fa-47e1-affb-b0da6519efeb", {
      method: "POST",
      body: JSON.stringify(values)
    });
  };

  function handleRemove(schema, index, setFieldValue) {
    let returnData = schema.filter((schema, id) => id !== index);
    setFieldValue("schema", returnData);
  }

  function addSection(setFieldValue, schema) {
    let newSections = [
      ...schema,
      {
        first_name: "",
        last_name: "",
        gender: "",
        age: "",
        accout_name: "",
        city: "",
        state: ""
      }
    ];
    setFieldValue("schema", newSections);
  }

  return (
    <Drawer anchor="right" open={open}>
      <DrawerContainer role="presentation">
        <HeadingContainer>
          <Heading>Name Segment</Heading>
          <CloseModal
            onClick={() => setOpen(false)}
            src={require("../assets/images/ArrowBack.png")}
          />
        </HeadingContainer>
        <AgentFormContainer>
          <Formik
            initialValues={{
              segment_name: "",
              // NameType
              schema: [
                {
                  first_name: "",
                  last_name: "",
                  gender: "",
                  age: "",
                  accout_name: "",
                  city: "",
                  state: ""
                }
              ]
              // schema: [{ first_name: "", last_name: "" }]
            }}
            onSubmit={onFormSubmit}
            validateOnBlur
            validateOnChange
          >
            {({
              values,
              handleChange,
              errors,
              handleSubmit,
              touched,
              handleBlur,
              setFieldValue
            }) => (
              <FormContainer onSubmit={handleSubmit}>
                <div>
                  <Flex>
                    <FormField
                      input={{
                        name: "segment_name",
                        label: "Enter the Name of the Segment",
                        type: "text",
                        required: true,
                        placeholder: "Name of the Segment"
                      }}
                      {...{
                        touched,
                        errors,
                        values,
                        handleChange,
                        handleBlur
                      }}
                    />
                  </Flex>
                  <Label style={{ lineHeight: 5.7 }}>
                    To Save Your Segment. you need to add the schemas to build
                    the query
                  </Label>
                  {values.schema.map((element, index) => (
                    <div style={{ marginBottom: "28px" }} key={index}>
                      <CustomSelect
                        menuItemValues={NameType}
                        value={element?.first_name}
                        name={`schema[${index}].first_name`}
                        id={`schema[${index}].first_name`}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        style={{ marginTop: 6, marginBottom: 20 }}
                      />
                      <CustomSelect
                        menuItemValues={NameType}
                        value={element.last_name}
                        name={`schema[${index}].last_name`}
                        id={`schema[${index}].last_name`}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        style={{ marginTop: 6, marginBottom: 20 }}
                      />
                      <CustomSelect
                        menuItemValues={NameType}
                        value={element.gender}
                        name={`schema[${index}].gender`}
                        id={`schema[${index}].gender`}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        style={{ marginTop: 6, marginBottom: 20 }}
                      />
                      <CustomSelect
                        menuItemValues={NameType}
                        value={element.age}
                        name={`schema[${index}].age`}
                        id={`schema[${index}].age`}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        style={{ marginTop: 6, marginBottom: 20 }}
                      />
                      <CustomSelect
                        menuItemValues={NameType}
                        value={element.accout_name}
                        name={`schema[${index}].accout_name`}
                        id={`schema[${index}].accout_name`}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        style={{ marginTop: 6, marginBottom: 20 }}
                      />
                      <CustomSelect
                        menuItemValues={NameType}
                        value={element.city}
                        name={`schema[${index}].city`}
                        id={`schema[${index}].city`}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        style={{ marginTop: 6, marginBottom: 20 }}
                      />
                      <CustomSelect
                        menuItemValues={NameType}
                        value={element.state}
                        name={`schema[${index}].state`}
                        id={`schema[${index}].state`}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        style={{ marginTop: 6, marginBottom: 20 }}
                      />
                      {values.schema.length > 1 && (
                        <DeleteIcon
                          src={require("../assets/images/removeIcon.svg")}
                          alt="remove"
                          onClick={() =>
                            handleRemove(values.schema, index, setFieldValue)
                          }
                        />
                      )}
                    </div>
                  ))}
                  <button
                    className="button add"
                    type="button"
                    onClick={() => addSection(setFieldValue, values.schema)}
                  >
                    + Add New Schema
                  </button>
                </div>
                <ButtonContainer>
                  <PrimaryCTAButton
                    style={{ width: "47%", height: "48px", marginRight: 20 }}
                    onClick={handleSubmit}
                  >
                    Save the Segment
                  </PrimaryCTAButton>
                  <PrimaryOutlinedCTAButton
                    onClick={() => setOpen(false)}
                    style={{ width: "47%", height: "48px" }}
                  >
                    Cancel
                  </PrimaryOutlinedCTAButton>
                </ButtonContainer>
              </FormContainer>
            )}
          </Formik>
        </AgentFormContainer>
      </DrawerContainer>
    </Drawer>
  );
}

const FormContainer = styled.form``;

const DrawerContainer = styled.div`
  width: 600px;
  height: 100%;
  background-color: white;
  outline: none;
`;

const ButtonContainer = styled.div`
  width: 413px;
  margin: 0 auto;
  margin-top: 150px;
`;

const Label = styled.div`
  font-size: 10px;
  line-height: 3.7;
  text-transform: uppercase;
  color: ${COLORS.COLOR_DARK};
`;

export const BasicDetailsLabel = styled.div`
  font-size: 10px;
  line-height: 1.7;
  color: ${COLORS.INPUT_LABEL};
  text-transform: capitalize;
`;

export const DeleteIcon = styled.img`
  margin-left: 20px;
  user-select: none;
  object-fit: contain;
  cursor: pointer;
`;

const HeadingContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 20px;
  padding-left: 38px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  position: relative;
  border-bottom: 1px solid ${COLORS.BTN_GREEN};
  background-color: ${COLORS.BTN_GREEN};
`;

const CloseModal = styled.img`
  width: 14px;
  height: 14px;
  object-fit: contain;
  cursor: pointer;
  position: absolute;
  left: 15px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  }
`;

const Heading = styled.h3`
  margin: 0;
  padding: 10px;
  font-size: 18px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
`;

const AgentFormContainer = styled.div`
  padding-top: 26px;
  padding-left: 28px;
  padding-right: 94px;
  padding-bottom: 26px;
  & form {
    padding-top: 10px;
  }
`;
