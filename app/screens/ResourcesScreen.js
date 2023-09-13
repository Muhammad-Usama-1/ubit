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

const dataC = [
  {
    id: "1",
    category: "scholarship",
    title: "Scholarship",
    link: "https://www.gistkobo.com/2023/09/06/british-council-full-degree-scholarships/",
  },
  {
    id: "2",
    category: "course",
    title: "Free Course",
    link: "https://www.udemy.com/topic/online-business/free/",
  },

  //
  {
    id: "3",
    category: "webinar",
    title: "Webinar",
    link: "https://www.linkedin.com/events/7098284569883213824/about/",
  },

  {
    id: "4",
    category: "job_fair",
    title: "Job Fair",
    link: "https://pakistanhinducouncil.org.pk/karachi-job-fair-2023/",
  },
  // Add more data items as needed
];

const data = [
  {
    id: "1",
    category: "scholarship",
    title: "Scholarship",
    link: "https://www.gistkobo.com/2023/09/06/british-council-full-degree-scholarships/",
  },
  {
    id: "2",
    category: "course",
    title: "Free Course",
    link: "https://www.udemy.com/topic/online-business/free/",
  },
  {
    id: "6",
    category: "course",
    title: "Time Management Fundamentals",
    link: "https://www.linkedin.com/learning/time-management-fundamentals-14548057/the-power-of-managing-your-time",
  },
  //
  {
    id: "3",
    category: "webinar",
    title: "Webinar",
    link: "https://www.linkedin.com/events/7098284569883213824/about/",
  },
  {
    id: "5",
    category: "webinar",
    title: " BIM solutions for Architecture, Engineering and Construction",
    link: "https://www.linkedin.com/events/cype-bimsolutionsforarchitectur7024693558582394880/about/",
  },
  {
    id: "4",
    category: "job_fair",
    title: "Job Fair",
    link: "https://pakistanhinducouncil.org.pk/karachi-job-fair-2023/",
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
          {dataC?.map((item) => (
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
