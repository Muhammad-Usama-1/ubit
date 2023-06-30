import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { color } from "../config/colors";
import { FontSize } from "../config/styles";

const StudentListingScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppText>Student Listing</AppText>
      {/* PROFILE CCARD */}
      <View style={styles.profileCard}>
        <AppText style={styles.titleProfile}>Muhammad Usama</AppText>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imagecenter}
            source={require("../assets/mosh.jpg")}
          />
          <AppText style={styles.jobTitle}>UX Designer</AppText>
        </View>

        <View style={styles.profileCardBottom}>
          <AppText style={styles.textTag}>See Profile</AppText>
          <AppText style={styles.textTag}>Message</AppText>
        </View>
      </View>
    </Screen>
  );
};

export default StudentListingScreen;

const styles = StyleSheet.create({
  imageContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -45 }, { translateY: -30 }],
    zIndex: 999,
    // marginBottom: 100,
    // textAlign: "center",
  },

  imagecenter: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  jobTitle: {
    textAlign: "center",
  },
  container: {
    backgroundColor: color.light,
    paddingHorizontal: 10,
  },
  profileCard: {
    backgroundColor: color.darkPrimray,
    borderRadius: 20,
    width: "100%",
    height: 200,
    position: "relative",
    marginBottom: 5,
  },
  titleProfile: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: FontSize.semibold16_size,
    marginTop: 10,
  },
  profileCardBottom: {
    backgroundColor: color.white,
    position: "absolute",
    height: 90,
    width: "100%",
    borderRadius: 20,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    // paddingVertical: 5,
    // marginBottom: 30,
    paddingBottom: 10,
  },
  textTag: {
    backgroundColor: "#C7C7CC",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
});
