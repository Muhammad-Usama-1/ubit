import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import { color } from "../../config/colors";

const AppDscribFeild = ({ styles, name, ...otherProps }) => {
  const { handleChange, handleBlur, values, errors, touched } =
    useFormikContext();
  return (
    <View>
      <TextInput
        onChangeText={handleChange(name)}
        value={values[name]}
        multiline={true}
        style={styles}
        // style={styles.textInput}
        textAlignVertical="top" // add this prop
        {...otherProps}
      />
    </View>
  );
};

export default AppDscribFeild;

const styles = StyleSheet.create({
  //   textInput: {
  //     borderColor: color.white,
  //     backgroundColor: color.white,
  //     height: 130,
  //     borderWidth: 1,
  //     borderRadius: 5,
  //     padding: 10,
  //     // textAlign: "right",
  //   },
});
