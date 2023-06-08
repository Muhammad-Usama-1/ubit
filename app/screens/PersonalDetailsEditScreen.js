import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import EditModal from "./Modal";
import * as yup from "yup";
import AppForm from "../components/forms/AppForm";
import AppFormInput from "../components/forms/AppFormInput";
import FormSubmit from "../components/forms/FormSubmit";
import AppButton from "../components/AppButton";
import { color } from "../config/colors";

const PersonalDetailsEditScreen = () => {
  const [modalVisibleP, setModalVisibleP] = useState(false);
  const [modalVisibleE, setModalVisibleE] = useState(false);

  const handleOpenModal = () => {
    setModalVisibleP(true);
  };
  const hadleProfileEdit = (values) => {
    console.log(values);
    setModalVisibleP(false);
  };
  const hadleEducationEdit = (values) => {
    console.log(values);
    setModalVisibleE(false);
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
        })}
      >
        <AppButton
          icon={"chevron-right"}
          bgcolor={"white"}
          title={"personal Details"}
          onPress={handleOpenModal}
        />
        <EditModal
          modalVisible={modalVisibleP}
          setModalVisible={setModalVisibleP}
          handleSubmit={<FormSubmit title={"save and go back"} />}
          title={"personal Details"}
        >
          <AppFormInput name="name" placeholder="Your Name" />
        </EditModal>
      </AppForm>

      {/* --------------- */}

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
    </Screen>
  );
};

export default PersonalDetailsEditScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary,
    paddingHorizontal: 10,
  },
});
