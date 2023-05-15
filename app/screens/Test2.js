import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

const Usama = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChooseFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
      });

      setSelectedFile(result);
    } catch (error) {
      console.log("Error picking file:", error);
    }
  };

  const renderSelectedFile = () => {
    if (!selectedFile) {
      return <Text>No file selected</Text>;
    }

    return (
      <View>
        <Text>Selected file:</Text>
        <Text>Name: {selectedFile.name}</Text>
        <Text>Size: {selectedFile.size} bytes</Text>
      </View>
    );
  };

  return (
    <Screen>
      <View>
        <AppButton
          bgcolor="white"
          colorText={"medium"}
          title="Browse PDF file"
          onPress={handleChooseFile}
        />
        {renderSelectedFile()}
      </View>
    </Screen>
  );
};

export default Usama;
