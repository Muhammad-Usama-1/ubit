import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { color } from "../config/colors";
import { useFormikContext } from "formik";

const OtpInput = ({ name }) => {
  const { values, handleChange, errors, touched, setFieldTouched } =
    useFormikContext();
  const refInputs = useRef([]);

  const handleOtpChange = (index, value) => {
    const otpArray = values[name].split("");
    otpArray[index] = value;
    handleChange(name)(otpArray.join(""));

    // Focus on the next input field
    if (index < refInputs.current.length - 1 && value) {
      refInputs?.current[index + 1]?.focus();
    }
  };

  const handleBlur = () => {
    setFieldTouched(name, true);
  };

  const isFieldComplete = values[name].length === 4;

  return (
    <View>
      <View style={styles.container}>
        {[0, 1, 2, 3].map((index) => (
          <TextInput
            key={index}
            ref={(input) => (refInputs.current[index] = input)}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(value) => handleOtpChange(index, value)}
            onBlur={handleBlur}
            value={values[name][index]}
          />
        ))}
      </View>
      {/* {touched[name] && !isFieldComplete && (
        <Text style={styles.errorText}>{errors[name]}</Text>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  input: {
    height: 50,
    backgroundColor: color.white,
    width: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    fontSize: 30,
    textAlign: "center",
  },
  errorText: {
    color: "red",
    marginTop: 5,
    fontSize: 15,
  },
});

export default OtpInput;
