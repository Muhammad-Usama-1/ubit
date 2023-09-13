import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import AppText from "./AppText";
const GoBackButton = ({ handleCloseModal }) => {
  const navigation = useNavigation();

  // Go One Step Functionality
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
      <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
      <AppText>Go back</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: color.primary,
    flexDirection: "row",
  },
});
export default GoBackButton;
