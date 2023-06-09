import { useFormikContext } from "formik";
import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { color } from "../config/colors";
import ErrorMsg from "./forms/ErrorMsg";

const ButtonComponent = ({ name }) => {
  // console.log(errors);
  const { errors, touched, setFieldValue, values } = useFormikContext();

  //   const { setFieldValue, values, errors, touched } = useFormikContext();
  const handleButtonPress = (buttonName) => {
    setFieldValue("selectedButton", buttonName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerBTN}>
        <TouchableOpacity
          style={[
            styles.button,
            values.selectedButton === "student" ? styles.activeButton : null,
          ]}
          onPress={() => handleButtonPress("student")}
        >
          <Text>Student</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            values.selectedButton === "employer" ? styles.activeButton : null,
          ]}
          onPress={() => handleButtonPress("employer")}
        >
          <Text>Employer</Text>
        </TouchableOpacity>
        {/* <ErrorMsg error={errors[name]} visible={touched[name]} /> */}
        {/* // Ensure 'name' matches the field name used in Formik */}
      </View>
      <ErrorMsg error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default ButtonComponent;
const styles = StyleSheet.create({
  container: {
    // marginVertical: 1,
    // marginHorizontal: 20,
  },
  containerBTN: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // height: 100,
    // paddingVertical: 10,
    // backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#333",
  },
  activeButton: {
    backgroundColor: color.primary,
  },
}); //
