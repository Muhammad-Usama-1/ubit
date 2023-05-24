import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { color } from "../config/colors";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppForm from "../components/forms/AppForm";
import * as yup from "yup";
import AppFormInput from "../components/forms/AppFormInput";
import FormSubmit from "../components/forms/FormSubmit";
import apiClient from "../api/apiConfig";

const validationSchema = yup.object().shape({
  email: yup.string().email().required().label("Email"),
});
const ForgotPasswdScreen = ({ navigation }) => {
  const handleForgotPassword = async (values) => {
    const { email } = values;
    // console.log(values);
    try {
      //  uncomment this to simulate real API
      const data = await apiClient.post("users/forgetPassword", {
        email,
      });
      if (data.status >= 400) {
        alert(data.data);
        return;
      }
      console.log(data.status);
      alert("OTP Send to your email");
      navigation.navigate("Forgot2", { email });
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  return (
    <Screen>
      <AppForm
        initialValues={{
          email: "",
        }}
        onSubmit={handleForgotPassword}
        validationSchema={validationSchema}
      >
        <View style={styles.ForgotPasswdContainer}>
          <AppText style={styles.subHeading}>
            Please Enter your Email to get reset password link to your Email
          </AppText>
          <AppFormInput name="email" placeholder="Please enter your Email" />
          {/* <AppTextInput placeholder="Please enter your Email" /> */}
          {/* <AppButton
            onPress={() => navigation.navigate("Forgot2")}
            bgcolor="white"
            title={"Proceced"}
          /> */}
          <FormSubmit title={"Proceced"} bgcolor="white" />
        </View>
      </AppForm>
    </Screen>
  );
};

export default ForgotPasswdScreen;

const styles = StyleSheet.create({
  ForgotPasswdContainer: {
    paddingHorizontal: 20,
    backgroundColor: color.primary,
    flex: 1,
  },
  subHeading: {
    fontSize: 26,
    paddingVertical: 100,
    textAlign: "center",
  },
});
