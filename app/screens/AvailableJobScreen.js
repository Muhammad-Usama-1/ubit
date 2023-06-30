import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Listing from "../components/Listing";
import { color } from "../config/colors";
const data = [
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
