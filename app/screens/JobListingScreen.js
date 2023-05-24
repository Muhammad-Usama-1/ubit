import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import AppHeading from "../components/AppHeading";
import Screen from "../components/Screen";
import Listing from "../components/Listing";
import { color } from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../components/AppText";
import { Ionicons } from "@expo/vector-icons";
// import { Ionicons } from '@expo/vector-icons';

const JobListingScreen = ({ navigation }) => {
  const data = [
    {
      id: 3,
      title: "Cyber Security",
      images:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
      id: 4,
      title: "Node JS Developer",
      images:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
  ];
  const categoryData = [
    {
      imagUri:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      title: "Company",
    },
    {
      imagUri:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      title: "Internship",
    },
    {
      imagUri:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      title: "Full Time",
    },
    {
      imagUri:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      title: "Part Time",
    },
  ];
  return (
    <Screen>
      <View style={styles.JobListingScreenContainer}>
        <AppHeading>Job Listing Screen</AppHeading>

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
        <AppHeading>Browse By Category</AppHeading>
        <ScrollView style={styles.scrolStyle} horizontal>
          <View horizontal style={styles.categoryContainer}>
            {[1, 2, 3, 4].map((i) => (
              <View>
                <View key={i} style={styles.mainBox}>
                  <View style={styles.whiteBox}>
                    <View style={styles.imgBox}>
                      <Image
                        style={styles.image}
                        source={require("../assets/jobCategory1.png")}
                      />
                    </View>
                  </View>
                </View>
                <AppText style={styles.categoryName}>Internship</AppText>
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
  mainBox: {
    backgroundColor: "#FBD488",
    height: 110,
    width: 110,
    alignItems: "center",
    position: "relative",
    overflow: "visible",
    elevation: 10,
  },
  whiteBox: {
    backgroundColor: color.white,
    height: 120,
    position: "absolute",
    top: -20,
    width: 90,
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
