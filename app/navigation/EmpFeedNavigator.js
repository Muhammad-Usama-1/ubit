import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import ListingsScreen from "../screens/ListingsScreen";
// import ListingDetailsScreen from "../screens/ListingDetailsScreen";
// import ExploreScreen from "../screens/ExploreScreen";
// import MessagesScreen from "../screens/MessagesScreen";
import JobListingScreen from "../screens/JobListingScreen";
import JobDetails from "../screens/JobDetails";
import ApplyToJobScreen from "../screens/ApplyToJobScreen";
import AvailableJobScreen from "../screens/AvailableJobScreen";
import ApplySuccess from "../screens/AppliedSuccessScreen";
import StudentListingScreen from "../screens/StudentListingScreen";
import UserProfileScreen from "../screens/UserProfileScreen";

const Stack = createNativeStackNavigator();

const EmpFeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="students" component={StudentListingScreen} />
    <Stack.Screen name="studentProfile" component={UserProfileScreen} />
  </Stack.Navigator>
);
export default EmpFeedNavigator;
