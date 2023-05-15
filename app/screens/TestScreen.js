import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { color } from "../config/colors";

const OtpInput = () => {
  const [otp, setOtp] = useState("");
  const refInputs = useRef([]);

  const handleOtpChange = (index, value) => {
    // Update the OTP value
    const otpArray = otp.split("");
    otpArray[index] = value;
    setOtp(otpArray.join(""));

    // Focus on the next input field
    if (index < refInputs.current.length - 1 && value) {
      refInputs.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={(input) => (refInputs.current[0] = input)}
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(value) => handleOtpChange(0, value)}
        value={otp[0]}
      />
      <TextInput
        ref={(input) => (refInputs.current[1] = input)}
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(value) => handleOtpChange(1, value)}
        value={otp[1]}
      />
      <TextInput
        ref={(input) => (refInputs.current[2] = input)}
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(value) => handleOtpChange(2, value)}
        value={otp[2]}
      />
      <TextInput
        ref={(input) => (refInputs.current[3] = input)}
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(value) => handleOtpChange(3, value)}
        value={otp[3]}
      />
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
});

export default OtpInput;
