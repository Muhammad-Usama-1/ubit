import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
// import AppText from "./app/components/AppText";
// import TestScreen from "./app/screens/TestScreen";
// import LoginScreen from "./app/screens/LoginScreen";
// import ResetPasswdScreen from "./app/screens/ResetPasswdScreen";
// import ForgotPasswdScreen from "./app/screens/ForgotPasswdScreen";
// import ResetPasswdScreen from "./app/screens/ResetPasswdScreen";
// import SignUpScreen from "./app/screens/SignUpScreen";
// import JobListingScreen from "./app/screens/JobListingScreen";
// import ListItem from "./app/components/lists/ListItem";
// import Screen from "./app/components/Screen";
import { useState } from "react";
// import ListItemDeleteAction from "./app/components/lists/ListItemDeleteAction";
import { Feather } from "@expo/vector-icons";
import { color } from "../config/colors";
import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
// import { color } from "./app/config/colors";

const initialMessages = [
  {
    id: 1,
    title: "Md Usama",
    description: "Hey! Is this item still available?",
    // image: require("./app/assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Md Usama",
    description:
      "I'm interested in this item. When will you beem. When will you beem. When will you beem. When will you beem. When will you be able to post it?",
    // image: require("./app/assets/mosh.jpg"),
  },
];

const SearchBox = ({ placeholder, onChangeText }) => {
  return (
    <View style={styles.containersearch}>
      {/* <Feather name="search" size={30} /> */}
      <Icon
        backgroundColor={color.white}
        iconColor={color.dark}
        size={30}
        name={"candelabra"}
        // <MaterialCommunityIcons name="candelabra" size={24} color="black" />
        // import PlagiarismIcon from '@mui/icons-material/Plagiarism';
      />
      <TextInput
        style={styles.input}
        placeholder="search a chat or message"
        placeholderTextColor={color.white}
        onChangeText={onChangeText}
      />
    </View>
  );
};
export default function MessageScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState(initialMessages);

  return (
    <Screen>
      <View style={styles.container}>
        <SearchBox />
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log("Message selected", item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => console.log("clicke")} />
              )}
            />
          )}
          // ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={() => {
            // Set login of getting new message from DB
            setMessages([
              {
                id: 2,
                title: "T2",
                description: "D2",
                // image: require("../assets/mosh.jpg"),
              },
            ]);
          }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    // alignItems: "center",
    // justifyContent: "center",
    width: "100%",
  },

  containersearch: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: color.primary,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderColor: color.white,
    borderWidth: 1, //

    // borderRadius: 10,
    // paddingHorizontal: 10,
    // marginHorizontal: 20,
    // marginVertical: 10,
    borderColor: "#007aff", // <-- added borderColor
    // borderWidth: 2, //
  },

  input: {
    flex: 1,
    marginLeft: 10,
    color: "#007aff",
  },
});
