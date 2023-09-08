import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import Screen from "../components/Screen";
import { color } from "../config/colors";
import apiClient from "../api/apiConfig";
import { useFocusEffect } from "@react-navigation/native";

const AppliedCandidatesScreen = ({ route }) => {
  const { jobId } = route.params; // Get the jobId from route.params
  const [candidates, setCandidates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      // Use your apisauce client to make the API request
      const response = await apiClient.get(
        `job/getJobApplicants?jobId=${jobId}`
      );

      //   console.log(response.status);

      if (response.status == 200) {
        // Assuming the response contains a data property with the candidates array
        setCandidates(response.data);
        setIsLoading(false);
      } else {
        console.error("Error fetching candidates:", response.problem);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching candidates:", error);
      setIsLoading(false);
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
      <Text>AppliedCandidatesScreen</Text>

      <View style={{ flex: 1, padding: 16 }}>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : candidates.length === 0 ? (
          <Text>No candidates applied for this job.</Text>
        ) : (
          <FlatList
            data={candidates}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
              console.log(item.resumeDetails);
              return (
                <View style={{ marginBottom: 16 }}>
                  <Text style={{ fontSize: 18 }}>{item.name}</Text>
                  <Text>{item.email}</Text>
                  {/* Add more candidate information here */}
                </View>
              );
            }}
          />
        )}
      </View>
    </Screen>
  );
};

export default AppliedCandidatesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.danger,
    flex: 1,
  },
});

// tidey43605@cohodl.com
