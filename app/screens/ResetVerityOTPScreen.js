import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppHeading from "../components/AppHeading";
import { color } from "../config/colors";
import OtpInput from "./TestScreen";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

const ResetVerityOTPScreen = ({ navigation }) => {
  return (
    <Screen>
      <View style={styles.container}>
        <AppHeading style={styles.heading}>
          Please enter the varifcation code we have sent to
        </AppHeading>
        <AppHeading style={styles.heading}>busy@busy.com</AppHeading>
        <OtpInput />
        <AppButton
          onPress={() => navigation.navigate("Reset")}
          title={"Verify"}
          colorText={"black"}
          bgcolor="white"
        />
        <View style={styles.resetbtns}>
          <AppText> Did not recive code ? </AppText>
          <AppText style={styles.blueText}> Resend Now</AppText>
        </View>
      </View>
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
