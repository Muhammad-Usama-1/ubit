import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";

const StudentListingScreen = () => {
  return (
    <Screen>
      <AppText>Student Listing</AppText>
      {/* PROFILE CCARD */}
      <View>
        <Image />
        <View></View>
      </View>
    </Screen>
  );
};

export default StudentListingScreen;

const styles = StyleSheet.create({});
