import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { color } from "../config/colors";
function AppButton({ title, colorText, onPress, bgcolor = "primary" }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer, { backgroundColor: color[bgcolor] }]}
    >
      {/* <Text style={styles.text}>{title}</Text> */}
      <Text style={[styles.text, { color: color[colorText] }]}>{title}</Text>
    </TouchableOpacity>
  );
}
// Master's degree in Design, Computer Science, Computer Interaction, or a related field.
// 3 years of relevant industry experience.
// Ability to lead and ideate products from scratch and improve features, all with a user-centered design process.
// Skills in communicating and influencing product design strategy.
// Excellent problem-solving skills and familiarity with technical constraints and limitations.
// Experience designing across multiple platform.
// Portfolio highlighting multiple projects.
const styles = StyleSheet.create({
  btnContainer: {
    width: "100%",
    backgroundColor: color.primary,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginVertical: 5,
  },
  text: {
    color: color.medium,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 15,
  },
});

export default AppButton;
