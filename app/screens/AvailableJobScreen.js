import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import Listing from "../components/Listing";
import { color } from "../config/colors";
import { useFocusEffect } from "@react-navigation/native";
import apiClient from "../api/apiConfig";

const dataOld = [
  {
    id: 3,
    title: "Forntend",
    images:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    id: 4,
    title: "Node JS Developer",
    images:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    id: 5,
    title: "Data Science",
    images:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    id: 6,
    title: "ML enginner",
    images:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    id: 7,
    title: "RPA Analyst",
    images:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
];

const AvailableJobScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await apiClient.get("job/getPosts");

      console.log(response.data);
      setData(response.data);
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
    <View style={styles.container}>
      <FlatList
        style={styles.listOfJob}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Listing
            onPress={() => navigation.navigate("JobsDetails", { data: item })}
            item={item}
          />
        )}
      />
    </View>
  );
};

export default AvailableJobScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary,

    paddingHorizontal: 5,
    flex: 1,
  },
});
