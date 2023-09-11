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
import AppButton from "../components/AppButton";
import * as OpenAnything from "react-native-openanything";
import AssetsConfig from "../api/AssetsConfig";
import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
const AppliedCandidatesScreen = ({ route }) => {
  const { jobId, title } = route.params; // Get the jobId from route.params
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
      {/* <Text>AppliedCandidatesScreen</Text> */}
      <AppText style={styles.subHeading}> Candidates in {title} </AppText>

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
              // console.log("Resume Details", `${AssetsConfig}${item.resume}`);
              return (
                <View
                  // style={{ marginBottom: 16 }}
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    // margin: 5,
                    marginVertical: 5,
                    marginBottom: 10,
                    borderRadius: 10,
                    elevation: 3,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>{item.name}</Text>
                  <AppButton
                    onPress={() =>
                      OpenAnything.Pdf(`${AssetsConfig}${item.resume}`)
                    }
                    title={"Open Resume."}
                  />
                  <Text> Emial : {item.email}</Text>
                  <AppButton
                    onPress={() =>
                      OpenAnything.Email(item.email, "Here is Your Job Offer")
                    }
                    title={"Send Offer"}
                  />
                  <Text> Cover Letter : {item.coverLetter}</Text>
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
    backgroundColor: color.primary,
    flex: 1,
  },
  subHeading: {
    fontSize: 26,
    textAlign: "center",
    marginBottom: 10,
  },
});

// tidey43605@cohodl.com
