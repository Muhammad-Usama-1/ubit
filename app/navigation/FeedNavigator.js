import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import ListingsScreen from "../screens/ListingsScreen";
// import ListingDetailsScreen from "../screens/ListingDetailsScreen";
// import ExploreScreen from "../screens/ExploreScreen";
// import MessagesScreen from "../screens/MessagesScreen";
import JobListingScreen from "../screens/JobListingScreen";
import JobDetails from "../screens/JobDetails";
import ApplyToJobScreen from "../screens/ApplyToJobScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Jobs" component={JobListingScreen} />
    <Stack.Screen name="applyjob" component={ApplyToJobScreen} />
    {/* <Stack.Screen name="Listings" component={List} /> */}

    <Stack.Screen name="JobsDetails" component={JobDetails} />
    {/* <Stack.Screen name="Messages" component={MessagesScreen} /> */}
  </Stack.Navigator>
);
export default FeedNavigator;
