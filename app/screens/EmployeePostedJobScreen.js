import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import apiClient from "../api/apiConfig";
// import { Screen } from "react-native-screens";
import AuthContext from "../auth/context";
import { color } from "../config/colors";
import Screen from "../components/Screen";

const EmployeePostedJobScreen = () => {
  const [data, setData] = useState([]);
  const { user, setUser } = useContext(AuthContext);
  //   console.log(user);

  const getData = async () => {
    try {
      const response = await apiClient.get(
        `job/getAllJobs?employerEmail=${user?.user?.email}`,
        {
          headers: {
            Authorization: `${user.token}`,
          },
        }
      );

      //   console.log(response.data[0]);
      // Set Jobs Array if it is greater to 0
      setData(response.data);
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
      <Text>EmployeePostedJobScreen</Text>
      {/* <Text>EmployeePostedJobScreen</Text> */}

      <FlatList
        // style={styles.listOfJob}
        data={data}
        keyExtractor={(item) => item?._id}
        renderItem={({ item }) => (
          //   <ProfileCard
          //     // onPress={() => navigation.navigate("JobsDetails", { data: item })}
          //     item={item}
          //   />
          <Text> {item.title} </Text>
        )}
      />
    </Screen>
  );
};

export default EmployeePostedJobScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.danger,
    flex: 1,
  },
});
