import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
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

const PersonalDetailsEditScreen = () => {
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

  const hadleProfileEdit = (values) => {
    console.log(values);
    setModalVisibleP(false);
  };
  const hadleEducationEdit = (values) => {
    console.log(values);
    setModalVisibleED(false);
  };

  const hadleExperienceEdit = (values) => {
    console.log(values);
    setModalVisibleE(false);
  };
  const handleResumeEdit = (values) => {
    console.log(values);
    setModalVisibleR(false);
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
          <AppFormInput name="skills" placeholder="Your Skills" />
          <AppText>Profile Picture</AppText>
          <View style={styles.profileupload}>
            <ImageInput height={"100%"} name="image" />
          </View>
        </EditModal>
      </AppForm>

      {/* --------------- */}

      <AppForm
        initialValues={{
          name: "",
        }}
        onSubmit={hadleExperienceEdit}
        validationSchema={yup.object().shape({
          name: yup.string().label("Name"),
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
          <AppFormInput name="name" placeholder="Your Name" />
        </EditModal>
      </AppForm>

      {/* Education Update */}

      <AppForm
        initialValues={{
          name: "",
        }}
        onSubmit={hadleEducationEdit}
        validationSchema={yup.object().shape({
          name: yup.string().label("Name"),
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
          <AppFormInput name="name" placeholder="Your Name" />
        </EditModal>
      </AppForm>

      {/* Resume Update */}

      <AppForm
        initialValues={{
          name: "",
          pdf: "",
        }}
        onSubmit={handleResumeEdit}
        validationSchema={yup.object().shape({
          name: yup.string().label("Name"),
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
          <AppFormInput name="name" placeholder="Your Name" />

          <PdfUpload name="pdf" />

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
    backgroundColor: color.danger,
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
