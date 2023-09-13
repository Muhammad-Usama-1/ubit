import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { color } from "../config/colors";
import { FontSize } from "../config/styles";
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import apiClient from "../api/apiConfig";
import AssetsConfig from "../api/AssetsConfig";
import * as OpenAnything from "react-native-openanything";

const ProfileCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileCard}>
      <AppText style={styles.titleProfile}> {item.name} </AppText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imagecenter}
          // source={require("../assets/mosh.jpg")}

          source={{
            uri: `${AssetsConfig}${
              item.personalDetails?.[0]?.picture ?? "Picture not available"
            } `,
          }}
        />
        <AppText style={styles.jobTitle}> {item.job} </AppText>
      </View>

      <View style={styles.profileCardBottom}>
        <AppText
          // studentProfile
          onPress={() =>
            navigation.navigate("studentProfile", { student: item })
          }
          style={styles.textTag}
        >
          See Profile
        </AppText>
        <AppText
          // onPress={() => navigation.navigate("Messages")}
          onPress={() =>
            OpenAnything.Email(item.email, "Are you intereste in Job Offer")
          }
          style={styles.textTag}
        >
          Message
        </AppText>
      </View>
    </View>
  );
};
const students = [
  {
    name: "test1",
    id: 1,
    job: "Developer 1",
  },
  {
    name: "test2",
    id: 2,
    job: "Developer 2",
  },
  {
    name: "test3",
    id: 3,
    job: "Developer 3",
  },
];
const StudentListingScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await apiClient.get("/users/getStudents");

      console.log("Student DATA", response.data.users);

      setData(response.data.users);
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
      <AppText>Student Listing</AppText>
      {/* PROFILE CCARD */}
      {/* {[1, 2, 3, 4, 5, 6].map((item, key) => (
        <ProfileCard key={key} item={item} />
      ))} */}

      <FlatList
        // style={styles.listOfJob}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProfileCard
            // onPress={() => navigation.navigate("JobsDetails", { data: item })}
            item={item}
          />
        )}
      />
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
