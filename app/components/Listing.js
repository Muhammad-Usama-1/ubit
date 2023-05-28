import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { color } from "../config/colors";
import AppTag from "./AppTag";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const Listing = ({
  item,
  deleteAction,
  onPress,
  special,
  navigation,
  specialPress,
}) => {
  // const navigation = useNavigation();
  return (
    <View style={styles.jobCardContainer}>
      {special && (
        <View style={styles.allandSuggestContainer}>
          <AppText style={styles.greyText}>suggested Jobs</AppText>
          <AppText onPress={specialPress} style={styles.greyText}>
            see all
          </AppText>
        </View>
      )}
      <TouchableOpacity
        // onPress={() => navigation.navigate("JobsDetails", { item })}
        onPress={onPress}
        style={styles.container}
      >
        <Image
          style={styles.image}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
          }}
        />
        <View style={styles.detailsContainer}>
          {/* <AppText style={styles.title}> {item.title} </AppText> */}
          <AppText style={{ color: color.dark, fontWeight: "bold" }}>
            {item.title}
          </AppText>
        </View>

        {deleteAction && (
          <MaterialCommunityIcons
            style={{ alignSelf: "flex-start" }}
            name="close"
            size={32}
            color={"red"}
          />
        )}
      </TouchableOpacity>
      <View style={styles.JobTag}>
        <AppTag> Full time</AppTag>
        <AppTag>Junior</AppTag>
      </View>

      <View style={styles.priceandLocDetails}>
        <AppText style={styles.whiteText}> $14000/year </AppText>
        <AppText style={styles.whiteText}>Malir Karachi</AppText>
      </View>
    </View>
  );
};

export default Listing;

const styles = StyleSheet.create({
  allandSuggestContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  greyText: {
    color: color.medium,
  },
  container: {
    flexDirection: "row",
    margin: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconsContainer: {
    flexDirection: "row",
  },
  iconInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: 100,
    height: 90,
    borderRadius: 10,
  },
  detailsContainer: {
    // width: "100%",
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  jobCardContainer: {
    backgroundColor: color.primary,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: "#FFC64B",
    marginBottom: 4,
  },
  JobTag: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  priceandLocDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  whiteText: {
    color: color.white,
    fontWeight: "bold",
  },
});
