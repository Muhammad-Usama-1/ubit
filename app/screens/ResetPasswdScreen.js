import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import { color } from "../config/colors";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

const ResetPasswdScreen = ({ navigation }) => {
  const handlePasswordReset = () => {
    navigation.navigate("Sign In");
    // Handle Reset password

    // Change to login Screen

    // Clear out Storage cookie
  };
  return (
    <Screen>
      <View style={styles.ResetPasswdContainer}>
        <AppText style={styles.subHeading}>
          Set up new Password for your Account
        </AppText>
        <View>
          <View style={styles.inputContainer}>
            <AppText style={styles.textfornewPassword}>Password</AppText>
            <AppTextInput
              secureTextEntry={true}
              placeholder="Please enter your new  Password"
            />
          </View>
          <View style={styles.inputContainer}>
            <AppText style={styles.textfornewPassword}>
              Confirm Password
            </AppText>
            <AppTextInput
              secureTextEntry={true}
              placeholder="Retype new password"
            />
          </View>
          <AppButton
            onPress={handlePasswordReset}
            bgcolor="white"
            title={"Proceced"}
          />
        </View>
      </View>
    </Screen>
  );
};

export default ResetPasswdScreen;

const styles = StyleSheet.create({
  customInput: {
    marginBottom: 100,
  },
  inputContainer: {
    marginBottom: 40,
  },
  ResetPasswdContainer: {
    paddingHorizontal: 20,
    backgroundColor: color.primary,
    flex: 1,
  },
  subHeading: {
    fontSize: 26,
    paddingVertical: 80,
    textAlign: "center",
  },
  textfornewPassword: {
    fontWeight: "bold",
    fontSize: 20,
    color: color.medium,
  },
});
