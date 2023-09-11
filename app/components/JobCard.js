import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { color } from "../config/colors";

const JobCard = ({ jobTitle, onPress, job }) => {
  const formatISODateToHumanReadable = (isoDate) => {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "short", day: "numeric" };
    const datePart = date.toLocaleDateString("en-US", options);
    // const timePart = date.toLocaleTimeString("en-US");

    return `${datePart} `;
  };
  console.log(job);
  const formattedDate = formatISODateToHumanReadable(job.postedAt);

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          padding: 16,
          borderWidth: 1,
          borderColor: "#ccc",
          backgroundColor: color.white,
          marginBottom: 16,
          borderRadius: 8,
          marginHorizontal: 10,
        }}
      >
        <Text style={{ fontSize: 18 }}>{jobTitle}</Text>
        <Text style={{ fontSize: 18 }}>Posted On {formattedDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default JobCard;
