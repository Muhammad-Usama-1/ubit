import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { color } from "../config/colors";
import AppTag from "../components/AppTag";
import AppButton from "../components/AppButton";
import { useRoute } from "@react-navigation/native";

const JobDetails = ({ navigation }) => {
  const { params } = useRoute();
  // console.log(params.data.title);
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.curveCard}>
          <Image
            style={[styles.jobImage, styles.jobDetailsChildPosition]}
            resizeMode="cover"
            source={require("../assets/group-24.png")}
          />
          <AppText style={[styles.jobTitle, styles.whiteTextBold]}>
            {params?.data?.title}
          </AppText>
          <AppText style={[styles.jobTitle, styles.whiteTextBold]}>
            React Developer
          </AppText>

          <View style={styles.tagContainer}>
            <AppTag>Full time</AppTag>
            <AppTag>Junior</AppTag>
          </View>
          <View style={styles.salaryandLocContainer}>
            <AppText style={[styles.jobTitle, styles.whiteTextBold]}>
              Malir Karachi
            </AppText>
            <AppText style={[styles.jobTitle, styles.whiteTextBold]}>
              $160,00/year{" "}
            </AppText>
            {/* <Text  ></Text> */}
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <AppText>Description</AppText>
          {/* ITEMS IN JOB DETAIALS */}
          <View style={styles.listItem}>
            <Text style={styles.bullet}>• </Text>
            <Text style={styles.text}>
              Master's degree in Design, Computer Science, Computer Interaction,
              or a related field.
            </Text>
          </View>
          {/* ITEMS IN JOB DETAIALS */}
          <View style={styles.listItem}>
            <Text style={styles.bullet}>• </Text>
            <Text style={styles.text}>
              Master's degree in Design, Computer Science, Computer Interaction,
              or a related field.
            </Text>
          </View>
          {/* ITEMS IN JOB DETAIALS */}
          <View style={styles.listItem}>
            <Text style={styles.bullet}>• </Text>
            <Text style={styles.text}>
              Master's degree in Design, Computer Science, Computer Interaction,
              or a related field.
            </Text>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <AppButton
            onPress={() =>
              navigation.navigate("applyjob", { data: params.data })
            }
            title={"Apply Now"}
            bgcolor="blue"
            colorText={"white"}
          />
        </View>
      </View>
    </Screen>
  );
};

export default JobDetails;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 5,
  },
  bullet: {
    fontWeight: "bold",
    fontSize: 20,
  },
  text: {
    flex: 1,
    marginLeft: 5,
    fontSize: 16,
  },
  btnContainer: {
    paddingHorizontal: 20,
  },
  descriptionContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  jobImage: {
    marginBottom: 10,
  },
  whiteTextBold: {
    color: color.white,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
  curveCard: {
    alignItems: "center",
    paddingVertical: 20,
    // backgroundColor: color.black,
    // borderBottomLeftRadius: 50,
    // borderBottomRightRadius: 10,

    paddingVertical: 20,
    backgroundColor: "#FFCC4D",
    // backgroundColor: color.primary,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 20,
  },
  salaryandLocContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
});
