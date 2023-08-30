import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import Screen from "../components/Screen";
import EditModal from "./Modal";
import * as yup from "yup";
import AppForm from "../components/forms/AppForm";
import AppFormInput from "../components/forms/AppFormInput";
import FormSubmit from "../components/forms/FormSubmit";
import AppButton from "../components/AppButton";
import { color } from "../config/colors";
import * as DocumentPicker from "expo-document-picker";
import { Field } from "formik";
import PdfUpload from "../components/forms/PdfUpload";
import ImageInput from "../components/forms/ImageInput";
import AppText from "../components/AppText";
import apiClient from "../api/apiConfig";
import AuthContext from "../auth/context";
import DatePickerField from "../components/forms/DatePickerField";

const PersonalDetailsEditScreen = () => {
  const { user, setUser } = useContext(AuthContext);

  const handlePdfPick = async (setFieldValue) => {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
      });

      if (res.type === "success") {
        // setFieldValue('pdf', res);
        console.log("success");
      }
    } catch (error) {
      // Handle errors
    }
  };
  const [modalVisibleP, setModalVisibleP] = useState(false);
  const [modalVisibleE, setModalVisibleE] = useState(false);
  const [modalVisibleED, setModalVisibleED] = useState(false);
  const [modalVisibleR, setModalVisibleR] = useState(false);

  const hadleProfileEdit = async (values) => {
    console.log(user.token);

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("skill", values.skill);
    console.log(values.image);
    formData.append("picture", {
      uri: values.image,
      name: "image.jpg", // Set a filename for the image
      type: "image/jpeg", // Set the image MIME type according to your requirements
    });
    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `${user.token}`,
    };
    try {
      const response = await apiClient.post(
        "/users/personalDetails",
        formData,
        {
          headers,
        }
      );
      console.log("RESPONSE--->", response.data);
      // setUser(...response.data);
      // setUser((prevUser) => ({
      //   ...prevUser, // Keep existing user properties
      //   ...response.data, // Overwrite with new data from response
      // }));
    } catch (error) {
      console.log("Error:", error);
    }

    setModalVisibleP(false);
  };
  const hadleEducationEdit = async (values) => {
    // console.log("Function is getting called..", values);
    setModalVisibleED(false);
    const headers = {
      Authorization: `${user.token}`,
    };
    try {
      const response = await apiClient.post("/users/education", values, {
        headers,
      });
      console.log("RESPONSE--->", response.data);
      // setUser(...response.data);
      // setUser((prevUser) => ({
      //   ...prevUser, // Keep existing user properties
      //   ...response.data, // Overwrite with new data from response
      // }));
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const hadleExperienceEdit = async (values) => {
    console.log(values);
    setModalVisibleE(false);
    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `${user.token}`,
    };
    try {
      const response = await apiClient.post("/users/experience", values, {
        headers,
      });
      console.log("RESPONSE--->", response.data);
      // setUser(...response.data);
      // setUser((prevUser) => ({
      //   ...prevUser, // Keep existing user properties
      //   ...response.data, // Overwrite with new data from response
      // }));
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const handleResumeEdit = async (values) => {
    console.log(values);
    setModalVisibleR(false);

    // // console.log(user.token);
    const formData = new FormData();
    formData.append("prompt", values.prompt);

    formData.append("resume", {
      uri: values.pdf,
      name: "resume.pdf", // Set a filename for the pdf
      type: "application/pdf", // Set the MIME type for PDF
      // type: "image/jpeg", // Set the image MIME type according to your requirements
    });
    // console.log(values);
    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `${user.token}`,
    };
    console.log(formData);
    try {
      const response = await apiClient.post("users/resumeAnalyzer", formData, {
        headers,
      });
      console.log("RESPONSE--->", response.data);
      // setUser(...response.data);
      // setUser((prevUser) => ({
      //   ...prevUser, // Keep existing user properties
      //   ...response.data, // Overwrite with new data from response
      // }));
    } catch (error) {
      console.log("Error:", error);
    }

    // Logic for Editing Resume update
  };
  return (
    <Screen style={styles.container}>
      {/* APP FORM FOR PERSONAL DETAILS */}
      <AppForm
        initialValues={{
          name: "",
        }}
        onSubmit={hadleProfileEdit}
        validationSchema={yup.object().shape({
          name: yup.string().label("Name"),
          skill: yup.string().label("Skill"),
          // picture: yup.string().label("Skill"),
          image: yup.string().label(" select picture "),
        })}
      >
        <AppButton
          icon={"chevron-right"}
          bgcolor={"white"}
          title={"personal Details"}
          onPress={() => setModalVisibleP(true)}
        />
        <EditModal
          modalVisible={modalVisibleP}
          setModalVisible={setModalVisibleP}
          handleSubmit={
            <FormSubmit bgcolor={"white"} title={"save and go back"} />
          }
          title={"personal Details"}
        >
          <AppFormInput name="name" placeholder="Your Name" />
          <AppFormInput name="skill" placeholder="Your Skills" />
          <AppText>Profile Picture</AppText>
          <View style={styles.profileupload}>
            <ImageInput name="image" />
          </View>
        </EditModal>
      </AppForm>

      {/* ---Experience------------ */}

      <AppForm
        initialValues={{
          position: "",
          company: "",

          startdate: "",
          enddate: "",
        }}
        onSubmit={hadleExperienceEdit}
        validationSchema={yup.object().shape({
          position: yup.string().label("Position "),
          company: yup.string().label("Company "),

          startdate: yup.string().label("Please select a string"),
          enddate: yup.string().label("Please select a date"),
        })}
      >
        <AppButton
          icon={"chevron-right"}
          bgcolor={"white"}
          title={"Experience"}
          onPress={() => setModalVisibleE(true)}
        />
        <EditModal
          modalVisible={modalVisibleE}
          setModalVisible={setModalVisibleE}
          handleSubmit={<FormSubmit title={"save and go back"} />}
        >
          <AppFormInput name="role" placeholder="Your Position" />
          <AppFormInput name="company" placeholder="Your Company" />

          <DatePickerField name="startdate" label="Start Date" />
          <DatePickerField name="enddate" label="End Date" />
        </EditModal>
      </AppForm>

      {/* Education Update */}

      <AppForm
        initialValues={{
          degree: "",
          startdate: "",
          enddate: "",
        }}
        onSubmit={hadleEducationEdit}
        validationSchema={yup.object().shape({
          degree: yup.string().label("Degree"),
          startdate: yup.string().label("Please select a string"),
          enddate: yup.string().label("Please select a date"),
        })}
      >
        <AppButton
          icon={"chevron-right"}
          bgcolor={"white"}
          title={"Education"}
          onPress={() => setModalVisibleED(true)}
        />
        <EditModal
          modalVisible={modalVisibleED}
          setModalVisible={setModalVisibleED}
          handleSubmit={<FormSubmit title={"save and go back"} />}
        >
          <AppFormInput name="degree" placeholder="Your Degree" />
          <DatePickerField name="startdate" label="Start Date" />
          <DatePickerField name="enddate" label="End Date" />
        </EditModal>
      </AppForm>

      {/* Resume Update */}

      <AppForm
        initialValues={{
          pdf: "",
          prompt:
            "we would appreciate your feedback on areas where this resume can be improved",
          // images: [], // Initialize with an empty array for images
        }}
        onSubmit={handleResumeEdit}
        validationSchema={yup.object().shape({
          // name: yup.string().label("Name"),
          pdf: yup.string().required().label("PDF "),
          prompt: yup.string().required().label("Prompt "),

          // portfolio: yup.string().required().label("portfolio"),
          // images: yup.array().min(1, "Please select at least one image "),
        })}
      >
        <AppButton
          icon={"chevron-right"}
          bgcolor={"white"}
          title={"Resume"}
          onPress={() => setModalVisibleR(true)}
        />
        <EditModal
          modalVisible={modalVisibleR}
          setModalVisible={setModalVisibleR}
          handleSubmit={<FormSubmit title={"save and go back"} />}
        >
          <PdfUpload name="pdf" />
          {/* <AppFormInput name="portfolio" placeholder="Your Portfolio" /> */}
          <AppFormInput name="prompt" placeholder="Enter the Prompt" />

          {/* <ImageInput name="images" /> */}

          {/* <Field name="pdf" component={PdfUpload} label="Upload PDF" /> */}

          {/* <AppFormInput name="name" placeholder="Your Name" /> */}
        </EditModal>
      </AppForm>
    </Screen>
  );
};

export default PersonalDetailsEditScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary,
    paddingHorizontal: 10,
    justifyContent: "center",
    flex: 1,
  },
  profileupload: {
    // backgroundColor: "#000",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
