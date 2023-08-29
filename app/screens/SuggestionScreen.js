import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import Screen from "../components/Screen";
import AppHeading from "../components/AppHeading";
import { color } from "../config/colors";
import { useFocusEffect } from "@react-navigation/native";
import AuthContext from "../auth/context";
import apiClient from "../api/apiConfig";
import AppText from "../components/AppText";

const SuggestionScreen = () => {
  const [data, setData] = useState([]);
  const { user, setUser } = useContext(AuthContext);
  console.log(user.token);

  const getData = async () => {
    apiClient.setHeader("Authorization", `${user.token}`);
    try {
      const response = await apiClient.get("users/resumeFeedback");
      setData(response.data.feedback);
      //   setData(Math.random());

      // console.log(response.data.feedback[0]);
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      getData();

      return () => {
        // Cleanup function
        // If needed, you can perform any cleanup here
      };
    }, [])
  );
  return (
    <Screen style={styles.container}>
      <AppHeading>SuggestionScreen</AppHeading>
      <AppText>{data}</AppText>
    </Screen>
  );
};

export default SuggestionScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary,
  },
});
