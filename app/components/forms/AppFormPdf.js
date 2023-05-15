import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Screen from "../Screen";
import AppButton from "../AppButton";

const AppFormPdf = ({ handleResumeUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  // const renderSelectedFile = () => {
  //   if (!selectedFile) {
  //     return <Text>No file selected</Text>;
  //   }

  //   return (
  //     <View>
  //       <Text>Selected file:</Text>
  //       <Text>Name: {selectedFile.name}</Text>
  //       <Text>Size: {selectedFile.size} bytes</Text>
  //     </View>
  //   );
  // };

  return (
    <View>
      <AppButton
        bgcolor="white"
        colorText={"medium"}
        title="Browse PDF file"
        onPress={handleResumeUpload}
      />
      {/* {renderSelectedFile()} */}
    </View>
  );
};

export default AppFormPdf;
