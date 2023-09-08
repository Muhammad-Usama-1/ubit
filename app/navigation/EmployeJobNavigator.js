import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppliedCandidatesScreen from "../screens/AppliedCandidatesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeePostedJobScreen from "../screens/EmployeePostedJobScreen";

const Stack = createNativeStackNavigator();
const EmployeJobNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="employeejobs" component={EmployeePostedJobScreen} />

    <Stack.Screen
      name="AppliedCandidates"
      component={AppliedCandidatesScreen}
    />
  </Stack.Navigator>
);
export default EmployeJobNavigator;
