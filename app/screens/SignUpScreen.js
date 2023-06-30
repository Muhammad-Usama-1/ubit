import {
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";
import * as yup from "yup";

import React, { useState } from "react";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { color } from "../config/colors";
// import { TextStyle } from "../config/styles";
import defaultStyles, { FontSize, Margin } from "../config/styles";
import AppForm from "../components/forms/AppForm";
import AppFormInput from "../components/forms/AppFormInput";
import FormSubmit from "../components/forms/FormSubmit";
import { Field } from "formik";
import ButtonComponent from "../components/ButtonComponent";
import apiClient from "../api/apiConfig";

const validationSchema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().email().required().label("Email"),
  password: yup.string().min(4).required().label("Password"),
  selectedButton: yup
    .string()
    .required("Please select an option")
    .label("Student/Employeer"),

  // createdOn: yup.date().default(function () {
  //   return new Date();
  // }),
});
const SignUpScreen = ({ navigation }) => {
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleSignUp = async (values) => {
    console.log(values);
    const { email, password, name } = values;
    // console.log(values);
    try {
      const data = await apiClient.post("users/create", {
        email,
        password,
        name,
        // gender: "",
        role: values.selectedButton,
      });
      if (data.status >= 400) {
        console.log(data.data);
        alert(data.data.message);
        return;
      }
      // console.log(data);
      alert("will redirect to  OTP verify..");
      // navigation.navigate("Verify Email");
      navigation.navigate("Verify Email", { email });
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  return (
    // <KeyboardAvoidingView style={styles.container} behavior="padding">
    <Screen style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <AppForm
          initialValues={{
            email: "mdusama225@gmail.com",
            password: "pass1234",
            selectedButton: "",
          }}
          onSubmit={handleSignUp}
          validationSchema={validationSchema}
        >
          <ImageBackground
            source={{
              uri: "https://lh3.googleusercontent.com/p/AF1QipMUI75tW0RVu8ugg6aO2sHupScasjKDoevrgjBD=s680-w680-h510",
            }}
            resizeMethod="resize"
            style={styles.loginBackgroundImg}
          ></ImageBackground>
          <AppText style={styles.subHeading}>Sign up Now</AppText>

          <ButtonComponent name={"selectedButton"} />

          {/* <AppTextInput></AppTextInput> */}
          <View style={styles.inputContainer}>
            <AppFormInput
              name="name"
              placeholder="Your Name"
              // style={styles.inputFeild}
            />
            <AppFormInput
              name="email"
              placeholder="Your email address"
              // style={styles.inputFeild}
            />

            <AppFormInput
              name="password"
              secureTextEntry
              placeholder="Enter Password"
              // style={styles.inputFeild}
            />
            {/* <AppButton
            colorText={"white"}
            title={"Sign UP"}
            style={styles.loginBtn}
          ></AppButton> */}

            {/* <Field type="hidden" name="selectedButton" /> */}

            <FormSubmit style={styles.loginBtn} title={"sign Up"} />

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
        </AppForm>
      </TouchableWithoutFeedback>
    </Screen>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.light,
  },
  containerBTN: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // height: 100,
    paddingVertical: 10,
    // backgroundColor: "#fff",
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
    height: 150,
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
    fontSize: FontSize.size_xl,
    textAlign: "center",
    marginBottom: Margin.mr_medium,
  },
  inputFeild: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 20,
  },
  inputContainer: {
    textAlign: "center",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
