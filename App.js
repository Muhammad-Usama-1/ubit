import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import AppText from "./app/components/AppText";
import TestScreen from "./app/screens/TestScreen";
import LoginScreen from "./app/screens/LoginScreen";
// import ResetPasswdScreen from "./app/screens/ResetPasswdScreen";
import ForgotPasswdScreen from "./app/screens/ForgotPasswdScreen";
import ResetPasswdScreen from "./app/screens/ResetPasswdScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import JobListingScreen from "./app/screens/JobListingScreen";
import ListItem from "./app/components/lists/ListItem";
import Screen from "./app/components/Screen";
import { useEffect, useState } from "react";
import ListItemDeleteAction from "./app/components/lists/ListItemDeleteAction";
import { Feather } from "@expo/vector-icons";
import { color } from "./app/config/colors";
import MessageScreen from "./app/screens/MessageScreen";
import JobDetails from "./app/screens/JobDetails";
// import Apply from "./app/screens/ApplyJobScreen";
import ApplyToJobScreen from "./app/screens/ApplyToJobScreen";
import VerifyEmailScreen from "./app/screens/VerifyEmailScreen";
import ApplySuccess1 from "./app/screens/AppliedSuccessScreen";
import Usama from "./app/screens/Test2";
import SplashScreen from "./app/screens/SplashScreen";
import ResetVerityOTPScreen from "./app/screens/ResetVerityOTPScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
// import AndroidLarge12 from "./app/screens/Fucked";
// import Apply from "./app/screens/Fucked";
// import JobDetails from "./app/screens/JobDetail";
// import JobDetails from "./app/screens/JobDetails";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowSplash(false), 3000);
  }, []);

  // return showSplash ? (
  //   <SplashScreen />
  // ) : (
  //   <>
  //     <LoginScreen />
  //   </>
  // );
  return (
    // <NavigationContainer>
    //   <AuthNavigator />
    // </NavigationContainer>
    // <JobListingScreen />
    // <LoginScreen />
    // <KeyboardAvoidingComponent />
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: color.primary,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
