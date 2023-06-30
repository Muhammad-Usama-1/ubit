import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { color } from "../../config/colors";
import ErrorMsg from "./ErrorMsg";

const ImageInput = ({ name }) => {
  const { errors, touched, setFieldValue, setFieldTouched, values } =
    useFormikContext();
  const imageUri = values[name];

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });

    if (!result.cancelled) {
      setFieldValue(name, result.uri);
    }
  };

  const handleDelete = () => {
    setFieldValue(name, null);
    setFieldTouched(name, false);
  };

  return (
    <>
      <View style={styles.container}>
        {imageUri ? (
          <>
            <Image style={styles.image} source={{ uri: imageUri }} />
            <View style={styles.deleteButton}>
              <MaterialCommunityIcons
                name="close"
                size={20}
                color={color.white}
                onPress={handleDelete}
              />
            </View>
          </>
        ) : (
          <MaterialCommunityIcons
            name="camera"
            size={25}
            color={color.black}
            onPress={pickImage}
          />
        )}
      </View>
      <ErrorMsg error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: color.white,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 20,
    margin: 10,
  },
  deleteButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: color.red,
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
