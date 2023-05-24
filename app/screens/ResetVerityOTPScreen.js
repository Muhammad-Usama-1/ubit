import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppHeading from "../components/AppHeading";
import { color } from "../config/colors";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import { useRoute } from "@react-navigation/native";
// import OtpInput from "../components/OtpInput";
import AppForm from "../components/forms/AppForm";
import * as yup from "yup";
import OtpInput from "../components/OtpInput";
import FormSubmit from "../components/forms/FormSubmit";
import apiClient from "../api/apiConfig";

const validationSchema = yup.object().shape({
  otp: yup.string().label("OTP"),
});
const ResetVerityOTPScreen = ({ navigation }) => {
  const route = useRoute();
  const handleverifyOTP = async (values) => {
    console.log(values.otp);
    if (values.otp.length < 4) {
      alert("OTP must be length 4 ");
    }
    try {
      const data = await apiClient.post("users/verification", {
        otp: values.otp,
      });
      if (data.status >= 400) {
        alert(data.data.error);
        console.log(data.data);
        return;
      }
      console.log(data.status);
      alert("OTP verify Success");
      navigation.navigate("Reset");
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
            Please enter the varifcation code we have sent to your email
          </AppHeading>
          <AppHeading style={styles.heading}>
            {route.params?.email || " busy@busy.com"}
          </AppHeading>
          <OtpInput name={"otp"} />
          {/* <AppButton
            onPress={() => navigation.navigate("Reset")}
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

export default ResetVerityOTPScreen;

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
});
