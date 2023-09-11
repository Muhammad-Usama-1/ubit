import React, { useContext } from "react";
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
import AuthContext from "../auth/context";
import StudentListingScreen from "../screens/StudentListingScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import EmployeePostedJobScreen from "../screens/EmployeePostedJobScreen";
import StudentProfileScreen from "../screens/StudentProfileScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
  const { user, setUser } = useContext(AuthContext);
  // console.log("---------> ", user?.user?.role);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user?.user?.role == "employer" ? (
        <>
          <Stack.Screen name="students" component={StudentListingScreen} />
          <Stack.Screen
            name="studentProfile"
            component={StudentProfileScreen}
          />

          {/* <Stack.Screen
            options={{ headerShown: false }}
            name="availableJobs"
            component={AvailableJobScreen}
          /> */}
          {/* <Stack.Screen name="Jobs" component={JobListingScreen} /> */}
        </>
      ) : (
        <>
          <Stack.Screen name="Jobs" component={JobListingScreen} />
          <Stack.Screen name="applyjob" component={ApplyToJobScreen} />
          <Stack.Screen name="applysuccess" component={ApplySuccess} />
          <Stack.Screen
            options={{ headerShown: false }}
            name="availableJobs"
            component={AvailableJobScreen}
          />

          <Stack.Screen name="JobsDetails" component={JobDetails} />
        </>
      )}
      {/* <Stack.Screen name="Messages" component={MessagesScreen} /> */}
    </Stack.Navigator>
  );
};
export default FeedNavigator;
