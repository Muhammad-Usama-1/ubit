import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, Color, FontFamily } from "../GlobalStyles";
import Screen from "../components/Screen";

const ApplySuccess1 = () => {
  //   const navigation = useNavigation();

  return (
    <Screen>
      <View style={styles.applySuccess1}>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          // onPress={() => navigation.navigate("AndroidLarge12")}
          onPress={() => console.log("asd")}
        >
          <Text style={[styles.next, styles.nextTypo]}>Go Back to Home</Text>
        </Pressable>
        <View style={[styles.button1, styles.buttonFlexBox]}>
          <Text style={[styles.next1, styles.nextTypo]}>Browse Jobs</Text>
        </View>
        <Text style={[styles.successful, styles.textClr]}>Successful</Text>
        <Text style={[styles.youveSuccessfullyApplied, styles.nextTypo]}>
          You’ve successfully applied to Systems Limited CyberSecurity role.
        </Text>
        <Image
          style={styles.doneRafiki1Icon}
          resizeMode="cover"
          source={require("../assets/donerafiki-1.png")}
        />
        <View
          style={[styles.statusBarIphoneXOrNewe, styles.homeIndicatorLayout]}
        ></View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  homeIndicatorLayout: {
    width: 375,
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_29xl,
    flexDirection: "row",
    width: 327,
    borderRadius: Border.br_8xs,
    left: 24,
    position: "absolute",
  },
  nextTypo: {
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.semibold16_size,
  },
  textClr: {
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  timeLayout: {
    height: 21,
    width: 54,
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    top: 778,
    height: 34,
    left: 0,
  },
  next: {
    color: Color.pureWhite,
    fontFamily: FontFamily.medium13,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.semibold16_size,
  },
  button: {
    top: 552,
    backgroundColor: Color.dodgerblue,
  },
  next1: {
    color: Color.steelblue,
    fontFamily: FontFamily.medium13,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.semibold16_size,
  },
  button1: {
    top: 628,
    borderStyle: "solid",
    borderColor: "#356899",
    borderWidth: 1,
  },
  successful: {
    top: 398,
    left: 116,
    fontSize: FontSize.bold24_size,
    letterSpacing: -0.4,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: FontFamily.bold24,
  },
  youveSuccessfullyApplied: {
    top: 439,
    left: 47,
    fontFamily: FontFamily.regular15,
    color: Color.grey60,
    width: 269,
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.semibold16_size,
    position: "absolute",
  },
  doneRafiki1Icon: {
    top: 144,
    left: 61,
    width: 254,
    height: 254,
    position: "absolute",
    overflow: "hidden",
  },
  notchIcon: {
    top: -2,
    left: 78,
    width: 0,
    height: 0,
    position: "absolute",
  },
  rightSideIcon: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  text: {
    top: 1,
    left: 7,
    fontSize: FontSize.regular15_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldSubheadline,
    width: 40,
  },
  time: {
    borderRadius: 24,
    top: 0,
    left: 0,
  },
  leftSide: {
    top: 12,
    left: 24,
    width: 54,
  },
  statusBarIphoneXOrNewe: {
    left: 1,
    height: 44,
    top: 0,
    overflow: "hidden",
  },
  applySuccess1: {
    backgroundColor: Color.goldenrod_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ApplySuccess1;
