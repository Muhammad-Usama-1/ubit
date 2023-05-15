import { Platform } from "react-native";
import { color } from "./colors";
export default {
  text: {
    color: color.dark,
    fontSize: 15,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  color,
};

export const Padding = {
  p_small: 5,
  p_main: 10,
  p_medium: 15,
  p_large: 20,
};
export const Border = {
  br_small: 5,
  br_main: 10,
  br_medium: 15,
  br_large: 20,
};

export const FontSize = {
  size_4xl: 23,
  size_31xl: 50,
  size_xl: 20,
  size_lg: 18,
  semibold16_size: 16,
  regular15_size: 15,
  size_mid: 17,
  size_3xl: 22,
  size_6xl: 25,
  semibold14_size: 14,
  medium13_size: 13,
  medium10_size: 10,
  medium11_size: 11,
  medium12_size: 12,
  bold24_size: 24,
};
