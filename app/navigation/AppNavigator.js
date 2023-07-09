import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import FeedNavigator from "./FeedNavigator";
import AuthNavigator from "./AuthNavigator";
// import CreateListingScreen from "../screens/CreateListingScreen";
// import AuthContext from "../auth/context";
// import { auth } from "../api/firebase.config";
// import { onAuthStateChanged } from "firebase/auth";
// import OfferScreen from "../screens/OfferScreen";
import ApplyToJobScreen from "../screens/ApplyToJobScreen";
import JobListingScreen from "../screens/JobListingScreen";
import FeedNavigator from "./FeedNavigator";
import MessageScreen from "../screens/MessageScreen";
import CreateJobScreen from "../screens/CreateJobScreen";
import EmpFeedNavigator from "./EmpFeedNavigator";
import AuthContext from "../auth/context";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {/* {user?.user?.role == "employer" ? ( */}
      {1 === 1 ? (
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
          name="Home"
          component={EmpFeedNavigator}
        />
      ) : (
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
          name="Home"
          component={FeedNavigator}
        />
      )}
      {/* <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
        name="Home"
        component={EmpFeedNavigator}
      /> */}
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message" size={size} color={color} />
          ),
        }}
        name="Messages"
        component={MessageScreen}
      />
      {1 == 1 && (
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus" size={size} color={color} />
            ),
          }}
          name="createJob"
          component={CreateJobScreen}
        />
      )}
      {/* <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message" size={size} color={color} />
          ),
        }}
        name="createJob"
        component={CreateJobScreen}
      /> */}

      {/* 
      {authContext.user && (
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus" size={size} color={color} />
            ),
          }}
          name="Create List"
          component={ApplyToJobScreen}
        />
      )} */}

      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
        name="profile"
        component={AuthNavigator}
      />
    </Tab.Navigator>
  );
}
