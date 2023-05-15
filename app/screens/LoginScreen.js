import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import React from "react";
import Screen from "../components/Screen";
import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { color } from "../config/colors";
import Icon from "../components/Icon";
import defaultStyles from "../config/styles";

const LoginScreen = ({ navigation }) => {
  return (
    <Screen>
      <ImageBackground
        source={{
          uri: "https://lh3.googleusercontent.com/p/AF1QipMUI75tW0RVu8ugg6aO2sHupScasjKDoevrgjBD=s680-w680-h510",
        }}
        resizeMethod="resize"
        style={styles.loginBackgroundImg}
      ></ImageBackground>
      <AppText style={styles.subHeading}>Login to your</AppText>
      {/* <AppTextInput></AppTextInput> */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your email address" style={styles.inputFeild} />
        <TextInput
          secureTextEntry
          placeholder="Enter Password"
          style={styles.inputFeild}
        />
        <AppButton title={"Login now"} style={styles.loginBtn}></AppButton>
        <AppText
          onPress={() => navigation.navigate("Forgot")}
          style={styles.forget}
        >
          Forget Password ?
        </AppText>
        <View style={styles.redirecttoSignUp}>
          <AppText style={styles.text}>Don't you have an Account?</AppText>
          <Text
            onPress={() => navigation.navigate("Register")}
            style={[defaultStyles.text, styles.signupText]}
          >
            signup
          </Text>
        </View>

        <AppText style={styles.signinwithText}> Sign in with </AppText>
      </View>

      <View style={styles.signinOptions}>
        <Icon
          backgroundColor={color.white}
          iconColor={color.dark}
          size={50}
          name={"google"}
        />
        <Icon
          backgroundColor={color.white}
          iconColor={color.dark}
          size={50}
          name={"facebook"}
        />
        <Icon
          backgroundColor={color.white}
          iconColor={color.dark}
          size={50}
          name={"apple"}
        />
      </View>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  redirecttoSignUp: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 1,
    marginTop: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
  signinwithText: {
    textAlign: "center",
  },
  signupText: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold",
    color: color.primary,
  },
  signinOptions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 50,
    // marginVertical: ,
  },

  forget: {
    color: color.primary,
    fontWeight: "600",

    textAlign: "right",
    marginBottom: 15,
  },
  loginBackgroundImg: {
    width: "100%",
    height: 200,
    overflow: "hidden",
    borderRadius: 10,
    marginBottom: 30,
  },
  loginBtn: {
    color: color.light,
    fontSize: 40,
  },
  signupLink: {
    color: color.primary,
    marginLeft: "auto",
  },
  subHeading: {
    fontSize: 26,
    textAlign: "center",
    marginBottom: 10,
  },
  inputFeild: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 30,
  },
  inputContainer: {
    textAlign: "center",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
