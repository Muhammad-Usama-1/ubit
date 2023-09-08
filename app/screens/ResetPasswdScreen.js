import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Screen from "../components/Screen";
import { color } from "../config/colors";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppForm from "../components/forms/AppForm";
import AppFormInput from "../components/forms/AppFormInput";
import * as yup from "yup";
import FormSubmit from "../components/forms/FormSubmit";
import apiClient from "../api/apiConfig";
import AuthContext from "../auth/context";

const validationSchema = yup.object().shape({
  password: yup.string().min(4).required().label("Password"),
  confirmPassword: yup.string().min(4).required().label("Confirm Password"),
  // website: yup.string().url(),
  // createdOn: yup.date().default(function () {
  //   return new Date();
  // }),
});

const ResetPasswdScreen = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);
  const handlePasswordReset = async (values) => {
    const { password, confirmPassword } = values;
    console.log("clicked btnnnn");
    try {
      const data = await apiClient.post("users/resetPassword", {
        password,
        confirmPassword,
      });

      if (data.status >= 400) {
        alert(data.data.error);
        console.log(data.data);
        return;
      }
      // console.log(data.data);
      alert(data.data.message);
      // alert("OTP verify Success");
      // Update user state
      navigation.navigate("Sign In");
      // navigation.navigate("profile");
    } catch (error) {
      console.log("ERROR", error);
    }
    // navigation.navigate("Sign In");
    // Handle Reset password

    // Change to login Screen

    // Clear out Storage cookie
  };
  return (
    <Screen>
      <AppForm
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handlePasswordReset}
        validationSchema={validationSchema}
      >
        <View style={styles.ResetPasswdContainer}>
          <AppText style={styles.subHeading}>
            Set up new Password for your Account
          </AppText>
          <View>
            <View style={styles.inputContainer}>
              <AppText style={styles.textfornewPassword}>Password</AppText>
              <AppFormInput
                name={"password"}
                secureTextEntry={true}
                placeholder="Please enter your new  Password"
              />
              {/* <AppTextInput
                secureTextEntry={true}
                placeholder="Please enter your new  Password"
              /> */}
            </View>
            <View style={styles.inputContainer}>
              <AppText style={styles.textfornewPassword}>
                Confirm Password
              </AppText>
              {/* <AppTextInput
                secureTextEntry={true}
                placeholder="Retype new password"
              /> */}
              <AppFormInput
                secureTextEntry={true}
                placeholder="Retype new password"
                name={"confirmPassword"}
              />
            </View>
            {/* <AppButton onPress={handlePasswordReset} /> */}
            <FormSubmit bgcolor="white" title={"Proceced"} />
          </View>
        </View>
      </AppForm>
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
