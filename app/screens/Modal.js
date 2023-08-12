import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { color } from "../config/colors";
import AppButton from "../components/AppButton";
import GoBackButton from "../components/GoBackButton";

const EditModal = ({
  children,
  title,
  handleSubmit,
  modalVisible,
  setModalVisible,
}) => {
  //   const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSaveChanges = () => {
    // Handle saving the changes made in the input field
    console.log("Changes saved:", inputValue);
    handleCloseModal();
  };

  return (
    // <View style={styles.container}>
    <Modal visible={modalVisible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <GoBackButton handleCloseModal={handleCloseModal} />
        <View style={styles.modalContent}>
          {children}
          <TouchableOpacity
            // style={styles.closeButton}
            onPress={handleCloseModal}
          >
            {/* <Text style={styles.closeButtonText}>Close</Text> */}
            {handleSubmit}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: color.primary,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    paddingTop: 10,
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.primary,
  },
  modalContent: {
    width: "100%",
  },

  saveButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default EditModal;
