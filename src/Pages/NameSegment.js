import React, { useState } from "react";
import { Drawer } from "@material-ui/core";
import styled from "styled-components";
import COLORS from "../assets/Colors";
import {
  PrimaryOutlinedCTAButton,
  PrimaryCTAButton
} from "../common/FormInput";
import theme from "../assets/theme";
import CustomSelect from "../internel/CustomSelect";
import { NameType } from "../Helpers/constants";
import { Formik } from "formik";
import FormField from "../common/FormField";
import { FormLabel } from "@material-ui/core";

export default function NameSegment({ open, setOpen }) {
  const [name, setName] = useState("");
  const [segName, setSegName] = useState("");

  const onFormSubmit = values => {
    //   onSubmit(postData, modal?.data);
    console.log("values", values);
  };

  const handleDeleteVideo = (index, tutorialUrl, setFieldValue) => {
    if (tutorialUrl?.length) {
      const filtered = tutorialUrl.filter((v, idx) => idx !== index);
      setFieldValue("tutorialUrl", filtered);
    }
  };

  const initialState = {
    first_name: "",
    last_name: ""
  };

  const [formValues, setFormValues] = useState([
    { first_name: "", last_name: "" }
  ]);

  const handleChangeForm = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  const addFormFields = () => {
    setFormValues([...formValues, { first_name: "", last_name: "" }]);
  };

  const removeFormFields = i => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

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
              segment_name: name,
              schema: [{ first_name: "", last_name: "" }]
            }}
            // validationSchema={AddZoomLinkValidation}
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
                <div className="link-container">
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
                  <Label style={{ lineHeight: 5.7 }}>
                    To Save Your Segment. you need to add the schemas to build
                    the query
                  </Label>
                  {formValues.map((element, index) => (
                    <div style={{ marginBottom: "28px" }} key={index}>
                      {console.log("element", element)}
                      <CustomSelect
                        menuItemValues={NameType}
                        value={
                          element.first_name
                            ? element.first_name
                            : element?.last_name
                        }
                        onChange={e => handleChangeForm(index, e)}
                        name={element.first_name ? "first_name" : "last_name"}
                      />
                      {index ? (
                        <DeleteIcon
                          src={require("../assets/images/removeIcon.svg")}
                          onClick={() => removeFormFields(index)}
                        />
                      ) : null}
                    </div>
                  ))}
                  <button
                    className="button add"
                    type="button"
                    onClick={() => addFormFields()}
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

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media ${theme?.breakpoints?.sm_up} {
    width: auto;
  }
`;

const StyledForm = styled.form`
  width: 100%;
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

const FileUploadContainer = styled.div`
  display: flex;
`;

export const DeleteIcon = styled.img`
  margin-left: 20px;
  user-select: none;
  object-fit: contain;
  cursor: pointer;
`;

const FileUploadBox = styled.div`
  display: flex;
  flex-direction: column;
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
