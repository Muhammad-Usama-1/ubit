import React, { useState, useRef, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useFormikContext } from "formik";
import SelectDropdown from "react-native-select-dropdown";
const countries = ["Egypt", "Canada", "Australia", "Ireland"];
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { color } from "../../config/colors";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons"; // Assuming you have the necessary dependencies installed
import ErrorMsg from "./ErrorMsg";

const SelectComponent = ({ name, items, style }) => {
  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    useFormikContext();
  // const { values, setFieldValue } = useFormikContext();
  const handleValueChange = (itemValue) => {
    setFieldValue(name, itemValue);
  };
  const renderDropdownIcon = () => (
    <TouchableOpacity onPress={() => console.log("Dropdown icon pressed")}>
      <MaterialIcons name="arrow-drop-down" size={24} color="black" />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <SelectDropdown
        renderDropdownIcon={renderDropdownIcon}
        data={items}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          handleValueChange(selectedItem);
        }}
        defaultButtonText={"Select category"}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
        // renderDropdownIcon=
        buttonStyle={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          borderRadius: 20,
        }}
        dropDownStyle={{ backgroundColor: color.primary }} // Set the dropDownStyle to change the dropdown options background color
        dropdownIconPosition="right"
        // buttonStyle={{ width: "100%" }} // Set the buttonStyle to make the dropdown full width
        buttonTextStyle={{ color: color.primary }} // Set the buttonTextStyle to change the text color
        // rowStyle={{ backgroundColor: color.primary }}
      />
      <ErrorMsg error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default SelectComponent;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: color.primary,
    width: "100%", // Set the container width to 100% for full width
  },
  dropdownStyle: {
    // backgroundColor: color.primary, // Change the background color of the dropdown
  },
});
