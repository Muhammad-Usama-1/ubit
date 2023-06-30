import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import { color } from "../config/colors";
import AppText from "../components/AppText";
import AppFormPdf from "../components/forms/AppFormPdf";
import * as DocumentPicker from "expo-document-picker";
import AppButton from "../components/AppButton";
import AppHeading from "../components/AppHeading";
import { useRoute } from "@react-navigation/native";
import AppDscribFeild from "../components/forms/AppDscribFeild";

// import im from "../assets/jobBoard.png
const ApplyToJobScreen = ({ navigation }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");
  const { params } = useRoute();

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
  return (
    <Screen>
      <View style={styles.container}>
        <AppHeading style={styles.center}>Apply Now</AppHeading>

        {/* JOB DETAILS */}
        <View style={styles.jobDescribContainer}>
          <View style={styles.posandcompany}>
            <Image
              style={styles.image}
              source={{
                uri: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQAQ3JMCi56vgzxgDirr7pArTs7W-90JU9O8lG-QQmVmJGC3txdGeVA0x73bki-6SzX7kVM-4KIpkDsDzs",
              }}
            />
            <View>
              <AppText>{params.data.title}</AppText>
              <AppText>Systems Limited</AppText>
            </View>
          </View>
          <View style={styles.salryandLoc}>
            <AppText>$80000/year</AppText>
            <AppText>$Karachi, sindh</AppText>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <AppText style={styles.darkandBold}>FullName</AppText>
          <AppTextInput
            styles={styles.inputFeild}
            placeholder="Enter your FUll Name"
          />
        </View>
        <View style={styles.inputContainer}>
          <AppText style={styles.darkandBold}>Portfolio Link</AppText>
          <AppTextInput
            styles={styles.inputFeild}
            placeholder="Enter your Portfolio"
          />
        </View>
        <AppFormPdf handleResumeUpload={handleChooseFile} />

        {selectedFile && (
          <View>
            <Text>Selected file:</Text>
            <Text>Name: {selectedFile.name}</Text>
            <Text>Size: {selectedFile.size} bytes</Text>
          </View>
        )}
        {/* COVER LETTER */}
        <View style={styles.coverContainer}>
          <TextInput
            placeholder="Enter your cover letter here..."
            value={coverLetter}
            onChangeText={setCoverLetter}
            multiline={true}
            style={styles.textInput}
            textAlignVertical="top" // add this prop
          />
          {/* <AppDscribFeild
            name="description"
            style={styles.textInput}
            placeholder="Enter your cover letter here..."
          /> */}
        </View>

        <AppButton
          onPress={() => navigation.navigate("applysuccess")}
          title={"Apply"}
          colorText={"white"}
          bgcolor="blue"
        />
      </View>
    </Screen>
  );
};

export default ApplyToJobScreen;

const styles = StyleSheet.create({
  center: {
    textAlign: "center",
  },
  jobDescribContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
  coverContainer: {
    padding: 10,
  },
  textInput: {
    height: 200,
    borderColor: color.white,
    backgroundColor: color.white,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    // textAlign: "right",
  },
  container: {
    flex: 1,
    backgroundColor: color.primary,
    paddingHorizontal: 10,
  },
  darkandBold: {
    fontWeight: "bold",
    color: color.black,
  },

  inputContainer: {
    // textAlign: "center",
    // width: "100%",
    // paddingVertical: 20,
    // paddingHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  posandcompany: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
});
