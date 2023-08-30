import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import * as yup from "yup";
import React, { useContext } from "react";
import Screen from "../components/Screen";
import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { color } from "../config/colors";
import Icon from "../components/Icon";
import defaultStyles from "../config/styles";
import AppFormInput from "../components/forms/AppFormInput";
import AppForm from "../components/forms/AppForm";
import FormSubmit from "../components/forms/FormSubmit";
import apiClient from "../api/apiConfig";
import { create } from "apisauce";
import { useRoute } from "@react-navigation/native";
import AuthContext from "../auth/context";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create an API instance using the base URL
// const api = create({
//   baseURL: "http://192.168.100.5:4000/api/",
// });

const validationSchema = yup.object().shape({
  email: yup.string().email().required().label("Email"),
  password: yup.string().min(4).required().label("Password"),
  // website: yup.string().url(),
  // createdOn: yup.date().default(function () {
  //   return new Date();
  // }),
});
const LoginScreen = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);

  const route = useRoute();
  const handleLogin = async (values) => {
    const { email, password } = values;
    // console.log(values);
    try {
      const data = await apiClient.post("/users/login", {
        email,
        password,
      });
      // console.log("--->", data.data);

      if (data.status >= 400) {
        alert(data.data.error);
        return;
      }
      // console.log(data.data);
      // const serializedObject = JSON.stringify(data.data);
      // await AsyncStorage.setItem("user", serializedObject);
      setUser(data.data);
      console.log("DATA After login..", data.data);
      // if()
      navigation.navigate("Home");

      // SET CONTEXT FOR ALL THE APPLICATION
      // console.log(AuthContext.user);

      alert("Login Success");
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  const handleloginGoogle = async () => {
    console.log("clicked..");
    try {
      const data = await apiClient.get("auth/google");
      if (data.status >= 400) {
        alert(data.data);
        return;
      }
      console.log(data);
      // alert("Login Success");
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  return (
    <Screen style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://lh3.googleusercontent.com/p/AF1QipMUI75tW0RVu8ugg6aO2sHupScasjKDoevrgjBD=s680-w680-h510",
        }}
        resizeMethod="resize"
        style={styles.loginBackgroundImg}
      ></ImageBackground>
      <AppForm
        initialValues={{
          email: `${route?.params?.email || ""}`,
          password: "",
        }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        <AppText style={styles.subHeading}>Login to your</AppText>
        {/* <AppTextInput></AppTextInput> */}
        <View style={styles.inputContainer}>
          <AppFormInput
            name="email"
            placeholder="Your email address"
            // style={styles.inputFeild}
          />
          <AppFormInput
            secureTextEntry
            name="password"
            placeholder="Enter Password"
            // style={styles.inputFeild}
          />
          <FormSubmit style={styles.loginBtn} icon={true} title={"sign in"} />

          {/* <AppButton
            onPress={handleLogin}
            title={"Login now"}
            style={styles.loginBtn}
          ></AppButton> */}
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
            onPress={handleloginGoogle}
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
    </Screen>
  );
};

const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);
    // Pass the user's access token to your backend API for verification and further processing
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log("Sign in cancelled");
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log("Sign in is already in progress");
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log("Play services are not available");
    } else {
      console.log("Error occurred while signing in: ", error);
    }
  }
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.light,
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
    // height: 200,
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
    fontSize: 26,
    textAlign: "center",
    marginBottom: 10,
  },
  inputFeild: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 15,
  },
  inputContainer: {
    textAlign: "center",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
