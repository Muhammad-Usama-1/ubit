import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JobListingScreen from "../screens/JobListingScreen";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import ForgotPasswdScreen from "../screens/ForgotPasswdScreen";
import ResetVerityOTPScreen from "../screens/ResetVerityOTPScreen";
import ResetPasswdScreen from "../screens/ResetPasswdScreen";
import VerifyEmailScreen from "../screens/VerifyEmailScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import PersonalDetailsEditScreen from "../screens/PersonalDetailsEditScreen";
import AuthContext from "../auth/context";

// import RegisterScreen from "../screens/RegisterScreen";
// import SignInScreen from "../screens/SignInScreen";
// import AuthContext from "../auth/context";
// import MyprofileScreen from "../screens/MyprofileScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  //   const authContext = useContext(AuthContext);
  const { user, setUser } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Profile"
            component={UserProfileScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="ProfileEdit"
            component={PersonalDetailsEditScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={SignUpScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Sign In"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Forgot"
            component={ForgotPasswdScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Forgot2"
            component={ResetVerityOTPScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Reset"
            component={ResetPasswdScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Verify Email"
            component={VerifyEmailScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
export default AuthNavigator;
