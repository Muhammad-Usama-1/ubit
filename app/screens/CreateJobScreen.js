import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as yup from "yup";
import AppForm from "../components/forms/AppForm";
import AppFormInput from "../components/forms/AppFormInput";
import { color } from "../config/colors";
import { Field } from "formik";
import SelectComponent from "../components/forms/SelectComponent";

const validationSchema = yup.object().shape({
  role: yup.string().email().required().label("Role"),
  company: yup.string().email().required().label("Company"),
  type: yup.string().required("Type is required"),

  location: yup.string().required().label("Location"),
  // website: yup.string().url(),
  // createdOn: yup.date().default(function () {
  //   return new Date();
  // }),
});

const options = [
  { label: "Internship", value: "internship" },
  { label: "Full Time", value: "fulltime" },
  { label: "Half Time", value: "halftime" },
];
const CreateJobScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          role: "",
          location: "",
          company: "",
          type: "",
        }}
      >
        <AppFormInput
          name="email"
          placeholder="Your email address"
          // style={styles.inputFeild}
        />
        {/* <SelectComponent name="type" items={options} /> */}

        <SelectComponent name="type" items={options} />

        {/* <Field name="type" component={SelectComponent} items={options} /> */}
      </AppForm>
    </Screen>
  );
};

export default CreateJobScreen;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: color.primary,
    flex: 1,
    paddingHorizontal: 10,
  },
});
