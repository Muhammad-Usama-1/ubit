import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import AppHeading from "../components/AppHeading";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>Department of Computer Science</AppText>
      <Image source={require("../assets/newsplash.png")} style={styles.image} />
      <AppHeading>MOBILE APP PORTAL</AppHeading>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 50,
    paddingTop: 100,
    backgroundColor: "#2BFF80",
    alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    width: 100,
    textAlign: "center",
    marginBottom: 50,
  },
  image: {
    marginBottom: 100,
    // width: "100%",
    // height: "100%",
  },
});

export default SplashScreen;
