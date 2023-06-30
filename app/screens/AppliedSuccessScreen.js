import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import Screen from "../components/Screen";
import { color } from "../config/colors";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import { Margin } from "../config/styles";
import AppHeading from "../components/AppHeading";

const ApplySuccess = ({ navigation }) => {
  // const navigation = useNavigation();

  return (
    <Screen style={styles.container}>
      {/* <View style={styles.applySuccess1}> */}
      <Image
        style={styles.doneRafiki1Icon}
        resizeMode="cover"
        source={require("../assets/donerafiki-1.png")}
      />
      <Text style={[styles.successful, styles.textClr]}></Text>
      <AppHeading>Successful</AppHeading>
      <Text></Text>
      <AppText style={[styles.youveSuccessfullyApplied]}>
        You have successfully applied to Systems Limited CyberSecurity role.
      </AppText>
      <AppButton
        // onPress={() => navigation.navigate("home")}
        bgcolor="blue"
        colorText="white"
        title={"Go Back to Home"}
      />
      <AppButton
        onPress={() => navigation.navigate("availableJobs")}
        colorText="blue"
        title={"Browse Jobs"}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    // paddingVertical: 200,
    paddingHorizontal: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  youveSuccessfullyApplied: {
    textAlign: "center",
    marginBottom: Margin.mr_large,
    color: color.medium,
  },
});

export default ApplySuccess;
