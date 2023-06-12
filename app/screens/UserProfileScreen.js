import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Screen from "../components/Screen";
import { color } from "../config/colors";
import AppText from "../components/AppText";
import { FontSize } from "../config/styles";
// import PDFExample from "../components/PDFViewer";

const UserProfileScreen = ({navigation}) => {
  return (
    <Screen style={styles.container}>
      {/* <PDFExample /> */}
      <AppText
        onPress={() => navigation.navigate("ProfileEdit") }
        style={{ textAlign: "right", marginRight: 20, fontWeight: "bold" }}
      >
        Edit
      </AppText>
      <View style={styles.profileContainer}>
        <View style={styles.photoContainer}>
          <Image
            style={styles.userprofilephoto}
            source={{
              uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            }}

            // source={require("../assets/images/jobscreen-titleBG.png")}
          />
        </View>
        <AppText style={styles.username}>Iqra Aziz Remani</AppText>
        <AppText style={styles.userJobSeek}>UX Designer </AppText>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("redirect to message screen")}
        >
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>
      </View>
      {/* SECTION AI INTELIGENCE */}
      <View style={styles.sectionAI}>
        {/* Box1 */}
        <View style={styles.insigtAi}>
          <AppText style={{ fontWeight: "bold" }}>27 </AppText>
          <AppText style={{ color: color.medium }}>Applied </AppText>
        </View>
        {/* Box1 */}
        <View style={styles.insigtAi}>
          <AppText style={{ fontWeight: "bold" }}>27 </AppText>
          <AppText style={{ color: color.medium }}>Applied </AppText>
        </View>
        {/* Box1 */}
        <View style={styles.insigtAi}>
          <AppText style={{ fontWeight: "bold" }}>27 </AppText>
          <AppText style={{ color: color.medium }}>Applied </AppText>
        </View>
      </View>

      {/* SECTION EXPERIENCE */}
      <AppText style={styles.username}>Experience</AppText>
      <View style={styles.sectionWhiteBG}>
        <View>
          <AppText style={{ fontWeight: "bold" }}>UX Intern</AppText>
          <AppText>Spotify</AppText>
        </View>
        <View>
          <AppText>Dec 20 - Feb 21</AppText>
        </View>
      </View>

      {/* SECTION EXPERIENCE */}
      <AppText style={styles.username}>Education</AppText>
      <View style={styles.sectionWhiteBG}>
        <View>
          <AppText style={{ fontWeight: "bold" }}>Bachelors</AppText>
          <AppText>UBIT</AppText>
        </View>
        <View>
          <AppText>Dec 20 - Feb 21</AppText>
        </View>
      </View>
    </Screen>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  button: {
    // backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: color.blue,
  },
  buttonText: {
    color: color.medium,
    // color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: color.primary,
    // paddingVertical: 10,
    paddingHorizontal: 10,
  },
  profileContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  messageButton: {
    backgroundColor: color.danger,
  },
  photoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    marginBottom: 5,
  },
  userprofilephoto: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  username: {
    fontSize: FontSize.size_xl,
    fontWeight: "900",
    marginBottom: 10,
  },
  userJobSeek: {
    marginBottom: 5,
  },

  //   Section AI styling

  sectionAI: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  insigtAi: {
    // textAlign: "center",
    // justifyContent: "center",
    alignItems: "center",
  },

  //   section experience
  sectionWhiteBG: {
    backgroundColor: color.white,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: 20,
    paddingVertical: 30,
    marginBottom: 10,
    // mt,
  },
});
