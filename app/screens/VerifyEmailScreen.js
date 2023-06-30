import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef, useState } from "react";
import Screen from "../components/Screen";
import AppHeading from "../components/AppHeading";
import { color } from "../config/colors";
// import OtpInput from "./TestScreen";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import { useRoute } from "@react-navigation/native";
import OtpInput from "../components/OtpInput";
import AppForm from "../components/forms/AppForm";
import * as yup from "yup";
import FormSubmit from "../components/forms/FormSubmit";
import apiClient from "../api/apiConfig";

const validationSchema = yup.object().shape({
  // email: yup.string().email().required().label("Email"),
  otp: yup.number().required().min(4).label("OTP"),
});

const VerifyEmailScreen = ({ navigation }) => {
  const route = useRoute();
  const { email } = route.params;
  // console.log(email);

  const handleverifyOTP = async (values) => {
    console.log(values.otp);
    if (values.otp.length < 4) {
      alert("OTP must be length 4 ");
      return;
    }
    try {
      const data = await apiClient.post("users/verifyOtp", {
        userotp: values.otp,
      });
      console.log(data.data);
      if (data.status >= 400) {
        alert(data.data);
        return;
      }
      console.log(data.status);
      alert("OTP verify Success");
      navigation.navigate("Sign In", { email });
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  return (
    <Screen>
      <AppForm
        initialValues={{ otp: "" }}
        onSubmit={handleverifyOTP}
        validationSchema={validationSchema}
      >
        <View style={styles.container}>
          <AppHeading style={styles.heading}>
            Please enter the varifcation code we have sent to
          </AppHeading>
          <AppHeading style={styles.heading}>
            {email || "busy@busy.com"}
          </AppHeading>
          <OtpInput name="otp" />
          {/* otp section */}

          {/* <AppButton
            // onPress={handleSubmit}
            title={"Verify"}
            colorText={"black"}
            bgcolor="white"
          /> */}
          <FormSubmit title={"Verify"} colorText={"black"} bgcolor="white" />
          <View style={styles.resetbtns}>
            <AppText> Did not recive code ? </AppText>
            <AppText style={styles.blueText}> Resend Now</AppText>
          </View>
        </View>
      </AppForm>
    </Screen>
  );
};

export default VerifyEmailScreen;

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    width: "100%",
  },
  resetbtns: {
    flexDirection: "row",
    justifyContent: "center",
    // textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: color.primary,
    paddingVertical: 100,
    paddingHorizontal: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
  blueText: {
    color: "#1877F2",
  },
  containerotp: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  input: {
    height: 50,
    backgroundColor: color.white,
    width: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    fontSize: 30,
    textAlign: "center",
  },

  errorText: {
    color: "red",
    marginTop: 5,
    fontSize: 16,
    textAlign: "center",
  },
});
