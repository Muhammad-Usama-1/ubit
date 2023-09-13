import React from "react";
import { StyleSheet, View, Button, Text, TouchableOpacity } from "react-native";
import { useFormikContext } from "formik";
import * as DocumentPicker from "expo-document-picker";

import ErrorMsg from "./ErrorMsg";
import { color } from "../../config/colors";
// import Pdf from "react-native-pdf";

const PdfUpload = ({ name, label }) => {
  // const []
  const { setFieldValue, errors, touched, values } = useFormikContext();

  // Pdf Pick Uploader Func

  const handlePdfPick = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
      });

      if (res.type === "success") {
        console.lo;
        setFieldValue(name, res.uri);
      }
    } catch (error) {
      // Handle errors
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.actionTitle}>
        Upload your CV or Resume and use it when you apply for jobs
      </Text>
      <Text style={styles.label}>{label}</Text>

      <Text style={styles.fileName}>{values[name]}</Text>

      <TouchableOpacity onPress={handlePdfPick} style={styles.button}>
        <Text style={styles.buttonText}>Select PDF</Text>
      </TouchableOpacity>

      <ErrorMsg error={errors[name]} visible={touched[name]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderStyle: "dotted",
    borderWidth: 5,
    borderColor: color.medium,
    padding: 20,
  },
  actionTitle: {
    color: color.medium,
    padding: 10,
    textAlign: "center",
  },
  pdfContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  button: {
    backgroundColor: color.white,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: color.primary,
    // textDecorationLine: "underline",
  },
  fileName: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default PdfUpload;
