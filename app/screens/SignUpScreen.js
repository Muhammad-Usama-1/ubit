import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { color } from "../config/colors";
// import { TextStyle } from "../config/styles";
import defaultStyles from "../config/styles";
const SignUpScreen = ({ navigation }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <Screen>
      <ImageBackground
        source={{
          uri: "https://lh3.googleusercontent.com/p/AF1QipMUI75tW0RVu8ugg6aO2sHupScasjKDoevrgjBD=s680-w680-h510",
        }}
        resizeMethod="resize"
        style={styles.loginBackgroundImg}
      ></ImageBackground>
      {/* <View style={styles.categorycontainer}>
        <AppText > Student</AppText>
       
        <AppText> Employer</AppText>
      </View> */}
      <AppText style={styles.subHeading}>Sign up Now</AppText>
      <View style={styles.containerBTN}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === "button1" ? styles.activeButton : null,
          ]}
          onPress={() => handleButtonPress("button1")}
        >
          <Text style={styles.buttonText}>Student</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === "button2" ? styles.activeButton : null,
          ]}
          onPress={() => handleButtonPress("button2")}
        >
          <Text style={styles.buttonText}>Employer</Text>
        </TouchableOpacity>
      </View>

      {/* <AppTextInput></AppTextInput> */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your email address" style={styles.inputFeild} />
        <TextInput
          secureTextEntry
          placeholder="Enter Password"
          style={styles.inputFeild}
        />
        <AppButton
          colorText={"white"}
          title={"Sign UP"}
          style={styles.loginBtn}
        ></AppButton>

        <View style={styles.redirecttoSignUp}>
          <AppText style={styles.text}>Already have an Account?</AppText>
          <Text
            // style={styles.signupText}
            style={[defaultStyles.text, styles.signupText]}
            onPress={() => navigation.navigate("Sign In")}
          >
            Login
          </Text>
          {/* <Button title="login" style={styles.signupText}></Button> */}
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

export default SignUpScreen;

const styles = StyleSheet.create({
  containerBTN: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // height: 100,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#333",
  },
  activeButton: {
    backgroundColor: color.primary,
  },
  //

  categorycontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
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
    // //
    // backgroundColor: "transparent",
    // // color: "#007AFF",
    // fontFamily: "System",
    // fontSize: 17,
    // fontWeight: "500",
    // padding: 10,
    // textAlign: "center",
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
