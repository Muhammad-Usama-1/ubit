import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as yup from "yup";
import AppForm from "../components/forms/AppForm";
import AppFormInput from "../components/forms/AppFormInput";
import { color } from "../config/colors";
import { Field } from "formik";
import SelectComponent from "../components/forms/SelectComponent";
import { FontSize } from "../config/styles";
import AppText from "../components/AppText";
import AppDscribFeild from "../components/forms/AppDscribFeild";
import FormSubmit from "../components/forms/FormSubmit";
import ImageInput from "../components/forms/ImageInput";

const validationSchema = yup.object().shape({
  role: yup.string().required().label("Role"),
  company: yup.string().required().label("Company"),
  type: yup.string().required("Type is required"),
  description: yup.string("Job Description "),
  location: yup.string().required().label("Location"),
  // website: yup.string().url(),
  // createdOn: yup.date().default(function () {
  //   return new Date();
  // }),
});

const options = ["Internship", "Full Time", "Half Time"];
const CreateJobScreen = () => {
  const handlePostJob = (values) => {
    console.log(values);
  };
  return (
    <Screen style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          style={styles.loginBackgroundImg}
          // source={{
          //   uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7j3jBlQjV_3eCVJgrqm252a_peprjxPubssbv0y3&s",
          // }}

          source={require("../assets/images/jobscreen-titleBG.png")}
        />
        <AppText style={styles.title}> Create your Job Add </AppText>
      </View>
      <AppForm
        validationSchema={validationSchema}
        initialValues={{
          role: "",
          location: "",
          company: "",
          type: "",
          description: "",
        }}
        onSubmit={handlePostJob}
      >
        <AppFormInput
          name="role"
          placeholder="Enter Position"
          // style={styles.inputFeild}
        />
        <AppFormInput name="company" placeholder="Enter Company Name" />
        {/* <SelectComponent name="type" items={options} /> */}
        <View>
          <AppText>Add Image</AppText>
          <ImageInput name="image" />
        </View>
        <SelectComponent
          name="type"
          items={options}
          placeholder="Select an option"
          containerStyle={styles.containerStyle}
          textStyle={styles.textStyle}
          dropdownStyle={styles.dropdownStyle}
        />
        <AppFormInput name="location" placeholder="Enter Location" />
        <AppDscribFeild
          styles={styles.textInput}
          name="description"
          placeholder="Enter job Description"
        />

        <FormSubmit title={"Post now"} />

        {/* <Field name="type" component={SelectComponent} items={options} /> */}
      </AppForm>
    </Screen>
  );
};

export default CreateJobScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.light,
    flex: 1,
    paddingHorizontal: 10,
  },
  textInput: {
    height: 140,
    borderColor: color.white,
    backgroundColor: color.white,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    // textAlign: "right",
  },

  select: {
    width: 200,
    height: 40,
    backgroundColor: "#fafafa",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  titleContainer: {
    // flex: 1,
    position: "relative",
  },
  title: {
    fontSize: FontSize.size_xl,
    position: "absolute",
    color: color.blue,
    top: 40,
    left: 10,
  },

  loginBackgroundImg: {
    width: "100%",
    height: 160,
  },
});
