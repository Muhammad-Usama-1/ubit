import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { useFormikContext } from "formik";
import ErrorMsg from "./ErrorMsg";
import { color } from "../../config/colors";
import AppButton from "../AppButton";

const DatePickerField = ({ name, label }) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (date) => {
    setFieldValue(name, date);
    setShowDatePicker(false);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.label}>{label}</Text> */}
      <AppButton
        bgcolor="light"
        title={label}
        onPress={() => setShowDatePicker(true)}
      />
      {/* <Button title="Select Date" onPress={() => setShowDatePicker(true)} /> */}

      {showDatePicker && (
        <DatePicker
          selected={values[name] || new Date()}
          onDateChange={handleDateChange}
          format="YYYY-MM-DD"
          maxDate={new Date()} // Optional: Set a max date if needed
        />
      )}

      <ErrorMsg error={errors[name]} visible={touched[name]} />
    </View>
  );
};

// Styles and other code...
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
export default DatePickerField;
