import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { color } from "../config/colors";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

const ForgotPasswdScreen = ({ navigation }) => {
  return (
    <Screen>
      <View style={styles.ForgotPasswdContainer}>
        <AppText style={styles.subHeading}>
          Please Enter your Email to get reset password link to your Email
        </AppText>
        <AppTextInput placeholder="Please enter your Email" />
        <AppButton
          onPress={() => navigation.navigate("Forgot2")}
          bgcolor="white"
          title={"Proceced"}
        />
      </View>
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
