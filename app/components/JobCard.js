import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const JobCard = ({ jobTitle, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          padding: 16,
          borderWidth: 1,
          borderColor: "#ccc",
          marginBottom: 16,
          borderRadius: 8,
        }}
      >
        <Text style={{ fontSize: 18 }}>{jobTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default JobCard;
