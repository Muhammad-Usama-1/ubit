import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { useFormikContext } from "formik";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { color } from "../../config/colors";
import ErrorMsg from "./ErrorMsg";

const MultipleImageInput = ({ name, height }) => {
  const { errors, touched, setFieldValue, setFieldTouched, values } =
    useFormikContext();
  const imageUris = values[name] || [];

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });

    if (!result.cancelled) {
      const updatedImageUris = [...imageUris, result.uri];
      setFieldValue(name, updatedImageUris);
    }
  };

  const handleDelete = (index) => {
    const updatedImageUris = imageUris.filter((_, i) => i !== index);
    setFieldValue(name, updatedImageUris);
    setFieldTouched(name, false);
  };

  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        {imageUris.map((uri, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri }} />
            <View style={styles.deleteButton}>
              <MaterialCommunityIcons
                name="close"
                size={20}
                color={color.white}
                onPress={() => handleDelete(index)}
              />
            </View>
          </View>
        ))}
        <MaterialCommunityIcons
          name="camera"
          size={25}
          color={color.black}
          onPress={pickImage}
        />
      </View>
      <ErrorMsg error={errors[name]} visible={touched[name]} />
    </ScrollView>
  );
};

export default MultipleImageInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  imageContainer: {
    position: "relative",
    marginRight: 10,
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
