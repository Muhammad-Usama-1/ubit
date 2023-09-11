import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Linking,
} from "react-native";
// import { ListItem } from "react-native-elements";
import Screen from "../components/Screen";
import { color } from "../config/colors";
import { useFocusEffect } from "@react-navigation/native";

const data = [
  {
    id: "1",
    category: "scholarship",
    title: "Scholarship",
    link: "https://example.com/scholarship",
  },
  {
    id: "2",
    category: "course",
    title: "Free Course",
    link: "https://example.com/course",
  },
  {
    id: "3",
    category: "webinar",
    title: "Webinar",
    link: "https://example.com/webinar",
  },
  {
    id: "4",
    category: "job_fair",
    title: "Job Fair",
    link: "https://example.com/job-fair",
  },
  // Add more data items as needed
];

const ResourcesScreen = () => {
  // const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const handleCategoryPress = (category) => {
    const filtered = data.filter((item) => item.category === category);
    setFilteredData(filtered);
  };
  const openLink = (link) => {
    Linking.openURL(link);
  };

  const getData = async () => {
    try {
      //   const response = await apiClient.get("job/getPosts");

      //   console.log(response.data);
      // Set Jobs Array if it is greater to 0
      //   if (response.data?.length > 0) {
      setFilteredData(data);
      console.log(data);
      //   }
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      getData();

      return () => {
        // Cleanup function
        // If needed, you can perform any cleanup here
      };
    }, [])
  );

  return (
    <Screen style={styles.container}>
      <View>
        <ScrollView horizontal>
          {data?.map((item) => (
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor={color.darkPrimray}
              key={item.id}
              onPress={() => handleCategoryPress(item.category)}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 10,
                backgroundColor: color.white,
                margin: 5,
              }}
            >
              <Text style={{ color: color.black }}>{item.title}</Text>
            </TouchableHighlight>
          ))}
        </ScrollView>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => openLink(item.link)}
              underlayColor="transparent"
            >
              <View
                style={{
                  backgroundColor: "white",
                  padding: 10,
                  margin: 10,
                  borderRadius: 10,
                  elevation: 3,
                }}
              >
                <Text style={{ fontSize: 16 }}>{item.title}</Text>
                <Text style={{ fontSize: 12, color: "gray" }}>
                  Category: {item.category}
                </Text>
                <Text
                  style={{ fontSize: 12, color: "blue" }}
                  onPress={() => openLink(item.link)}
                >
                  {item.link}
                </Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    </Screen>
  );
};

export default ResourcesScreen;
const styles = StyleSheet.create({
  container: { backgroundColor: color.primary },
});
