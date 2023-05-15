import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { color } from "../../config/colors";
import AppText from "../AppText";

// import Text from "../Text";
// import color, { color } from "../../config/colors";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={color.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {/* {image && <Image style={styles.image} source={image} />} */}
          <Image
            style={styles.image}
            source={{
              uri: "https://i.dawn.com/large/2022/10/24093647e3ccc6c.jpg?r=093705",
            }}
          />

          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            {subTitle && (
              <Text style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </Text>
            )}
          </View>
          <View style={styles.countandTime}>
            <AppText style={styles.time}>11:45 am </AppText>
            <AppText style={styles.noOfmsg}>7</AppText>
          </View>
          {/* <MaterialCommunityIcons
            color={color.medium}
            name="chevron-right"
            size={25}
          /> */}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: color.primary,
    flex: 1,
    // width: "100",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: color.medium,
  },
  title: {
    fontWeight: "500",
  },
  noOfmsg: {
    backgroundColor: "#5386E4",
    borderRadius: 15,
    width: 30,
    height: 30,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 0,
    // fontSize: 10,
  },
  countandTime: {
    display: "flex",
    alignItems: "flex-end",
    // fontSize: 10,
  },
  time: {
    fontWeight: "bold",
    fontSize: 10,
  },
});

export default ListItem;
