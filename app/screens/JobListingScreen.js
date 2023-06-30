import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import jobCategory1Image from "../assets/jobCategory1.png";
import jobCategory2Image from "../assets/jobCategory2.png";
import jobCategory3Image from "../assets/jobCategory3.png";
import jobCategory4Image from "../assets/jobCategory4.png";
import React from "react";
import AppHeading from "../components/AppHeading";
import Screen from "../components/Screen";
import Listing from "../components/Listing";
import { color } from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../components/AppText";
import { Ionicons } from "@expo/vector-icons";
import { FontSize } from "../config/styles";
// import { Ionicons } from '@expo/vector-icons';

const JobListingScreen = ({ navigation }) => {
  const data = [
    {
      id: 3,
      title: "Cyber Security",
      details: "afs",
      images:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
  ];
  const categoryData = [
    {
      imageUri: jobCategory1Image,
      title: "Company",
    },
    {
      imageUri: jobCategory2Image,
      title: "Internship",
    },
    {
      imageUri: jobCategory3Image,
      title: "Full Time",
    },
    {
      imageUri: jobCategory4Image,
      title: "Part Time",
    },
  ];
  return (
    <Screen>
      <View style={styles.JobListingScreenContainer}>
        {/* <AppHeading>Job Listing Screen</AppHeading> */}

        {/* JOB POSTER */}

        <View style={styles.imageJobBoard}>
          <Image
            style={styles.arrowJob}
            // source={require("../assets/arrow-forjob.png")}
            source={require("../assets/test.png")}
          />
          <Image
            style={styles.imagePerson}
            source={require("../assets/personJob.jpg")}
          />
        </View>
        {/* Category of Job type */}
        <AppText style={styles.TextCategory}>Browse By Category</AppText>
        <ScrollView style={styles.scrolStyle} horizontal>
          <View horizontal style={styles.categoryContainer}>
            {categoryData.map((item, key) => (
              <View>
                <View key={item.title} style={styles.mainBox}>
                  <View style={styles.whiteBox}>
                    <View style={styles.imgBox}>
                      <Image style={styles.image} source={item.imageUri} />
                    </View>
                  </View>
                </View>
                <AppText style={styles.categoryName}> {item.title} </AppText>
              </View>
            ))}
          </View>
        </ScrollView>

        <FlatList
          style={styles.listOfJob}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Listing
              special={true}
              specialPress={() => navigation.navigate("availableJobs")}
              onPress={() => navigation.navigate("JobsDetails", { data: item })}
              item={item}
            />
          )}
        />
      </View>
    </Screen>
  );
};

export default JobListingScreen;

const styles = StyleSheet.create({
  TextCategory: {
    fontSize: FontSize.size_lg,
  },
  mainBox: {
    backgroundColor: "#FBD488",
    // backgroundColor: color.danger,

    height: 100,
    width: 100,
    alignItems: "center",
    position: "relative",
    overflow: "visible",
    elevation: 10,
  },
  whiteBox: {
    backgroundColor: color.white,
    height: 100,
    position: "absolute",
    top: -20,
    width: 80,
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
  },
  imgBox: {
    // flex: 1,
    // width: "100%",
    // backgroundColor: color.black,
  },
  listOfJob: {
    marginTop: 10,
    maxHeight: 200,
    maxHeight: 180,
  },

  //
  imagePerson: {
    position: "absolute",
    // left: 10,
    // width: 100,
    right: 0,
    top: 10,
    borderRadius: 10,
  },
  imageJobBoard: {
    backgroundColor: "#FFB545",
    borderRadius: 10,
    height: 200,
    marginVertical: 10,
    marginHorizontal: 10,
    position: "relative",
    // backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    padding: 20,
    marginBottom: 10,
  },
  JobListingScreenContainer: {
    backgroundColor: color.primary,

    paddingHorizontal: 5,
    flex: 1,
  },
  categoryContainer: {
    flex: 1,
    gap: 10,

    marginTop: 40,
    flexDirection: "row",
  },
  categoryStyle: {
    margin: 4,
    // backgroundColor: color.danger,
    // backgroundColor: color.darkPrimray,
  },
  categoryName: {
    color: color.white,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  scrolStyle: {
    // height: 120,
    maxHeight: 190,
    // marginBottom: 100,
    // backgroundColor: color.danger,
  },

  bigBox: {
    position: "relative",
    width: 100,
    backgroundColor: color.danger,
    elevation: 5,
    height: 140,
  },
  image: {
    borderRadius: 10,
    // height: 100,
    width: "100%",
    // justifyContent: "center",
    // alignContent
    // alignItems: "center",
    // flex: 1,
    // width: 100,
    // overflow: "hidden",
    // padding: 40,
    // paddingTop: 50,
  },
});
