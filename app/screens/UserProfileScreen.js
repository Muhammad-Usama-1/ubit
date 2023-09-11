import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect } from "react";
import Screen from "../components/Screen";
import { color } from "../config/colors";
import AppText from "../components/AppText";
import { FontSize } from "../config/styles";
// import PDFExample from "../components/PDFViewer";
import { useRoute } from "@react-navigation/native";
import AuthContext from "../auth/context";
import apiClient from "../api/apiConfig";
import { useFocusEffect } from "@react-navigation/native";
import AssetsConfig from "../api/AssetsConfig";
import AppButton from "../components/AppButton";
import * as OpenAnything from "react-native-openanything";

const UserProfileScreen = ({ navigation }) => {
  const route = useRoute();
  const { user, setUser } = useContext(AuthContext);

  console.log(user?.user?.personalDetails?.[0]?.picture);

  // const headers = {
  //   Authorization: `${user.token}`,
  // };
  // const headers = {
  //   // "Content-Type": "multipart/form-data",
  //   Authorization: `${user.token}`,
  // };
  apiClient.setHeader("Authorization", `${user.token}`);

  const getData = async (key) => {
    try {
      const response = await apiClient.get("/users/getSingleUser");
      // const response = await apiClient.get("/users/getSingleUser");

      console.log("RESPONSE In User profile--->", response.data);
      // setUser(...response.data);
      setUser((prevUser) => ({
        ...prevUser, // Keep existing user properties
        ...response.data, // Overwrite with new data from response
      }));
      // await AsyncStorage.removeItem("user");

      // console.log("Data removed successfully.");
    } catch (error) {
      console.log("Error removing data:", error);
    }
  };
  // useEffect(() => {
  //   getData();
  // }, []);

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
      <ScrollView>
        {/* <PDFExample /> */}

        {/* Only display edit if it is a User */}
        {user?.user?.role === "student" && (
          <AppText
            onPress={() => navigation.navigate("ProfileEdit")}
            style={styles.editBtnprofile}
          >
            Edit
          </AppText>
        )}
        <AppButton title={"Logout"} onPress={() => setUser(null)} />
        {/* {route?.params?.user ? (
          <AppButton />
        ) : (
          <AppButton title={"Logout"} onPress={() => setUser(null)} />
        )} */}

        <View style={styles.profileContainer}>
          <View style={styles.photoContainer}>
            <Image
              style={styles.userprofilephoto}
              // source={{
              //   uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
              // }}

              source={{
                uri: `${AssetsConfig}uploads/${
                  user?.user?.personalDetails?.[0]?.picture ??
                  "Picture not available"
                } `,
              }}

              // source={require("../assets/images/jobscreen-titleBG.png")}
            />
          </View>
          {/* <AppText style={styles.username}>Iqra Aziz Remani</AppText> */}
          <AppText style={styles.username}>
            {route?.params?.user || user.user?.name || "Anonoyomous User"}
          </AppText>

          <AppText style={styles.userJobSeek}>
            {/* {user?.user?.personalDetails?.[0]?.skill ?? "Employer"} */}
            {user?.user?.role ?? "Employer"}
          </AppText>

          {user.user?.personalDetails?.skill ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log("redirect to message screen")}
            >
              <Text style={styles.buttonText}>Message</Text>
            </TouchableOpacity>
          ) : null}
        </View>

        {user?.user?.role === "student" && (
          <View>
            {/* SECTION AI INTELIGENCE */}
            <View style={styles.sectionAI}>
              {/* Box1 */}
              <View style={styles.insigtAi}>
                <AppText style={{ fontWeight: "bold" }}>27 </AppText>
                <AppText style={{ color: color.medium }}>Applied </AppText>
              </View>
              {/* Box1 */}
              <View style={styles.insigtAi}>
                <AppText style={{ fontWeight: "bold" }}>27 </AppText>
                <AppText style={{ color: color.medium }}>Applied </AppText>
              </View>
              {/* Box1 */}
              <View style={styles.insigtAi}>
                <AppText style={{ fontWeight: "bold" }}>27 </AppText>
                <AppText style={{ color: color.medium }}>Applied </AppText>
              </View>
            </View>

            {/* SECTION EXPERIENCE */}
            <AppText style={styles.username}>Experience</AppText>
            {user?.user?.experience?.map((el) => (
              <View key={el._id} style={styles.sectionWhiteBG}>
                <View>
                  <AppText style={{ fontWeight: "bold" }}>
                    {" "}
                    {el.position}{" "}
                  </AppText>
                  <AppText> {el.company} </AppText>
                </View>
                <View>
                  <AppText>Dec 20 - Feb 21</AppText>
                </View>
              </View>
            ))}

            {/* SECTION EXPERIENCE */}

            <AppText style={styles.username}>Education</AppText>
            {user?.user?.education?.map((el) => (
              <View style={styles.sectionWhiteBG}>
                <View>
                  <AppText style={{ fontWeight: "bold" }}>
                    {" "}
                    {el.degree}{" "}
                  </AppText>
                  <AppText>UBIT</AppText>
                </View>
                <View>
                  <AppText>Dec 20 - Feb 21</AppText>
                </View>
              </View>
            ))}
            {/* sedction Resume */}
            <AppText style={styles.username}>Resume</AppText>
            {user?.user?.resumeDetails?.map((el) => {
              // console.log(el);
              return (
                <View style={styles.sectionWhiteBG}>
                  <AppButton
                    onPress={() =>
                      OpenAnything.Pdf(`${AssetsConfig}${el.resume}`)
                    }
                    title={"Open Resume"}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </Screen>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  button: {
    // backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: color.blue,
  },
  buttonText: {
    color: color.medium,
    // color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: color.primary,
    // paddingVertical: 10,
    paddingHorizontal: 10,
  },
  profileContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  messageButton: {
    backgroundColor: color.danger,
  },
  photoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    marginBottom: 5,
  },
  userprofilephoto: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  username: {
    fontSize: FontSize.size_xl,
    fontWeight: "900",
    marginBottom: 10,
  },
  userJobSeek: {
    marginBottom: 5,
  },

  //   Section AI styling

  sectionAI: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  insigtAi: {
    // textAlign: "center",
    // justifyContent: "center",
    alignItems: "center",
  },

  //   section experience
  sectionWhiteBG: {
    backgroundColor: color.white,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: 20,
    paddingVertical: 30,
    marginBottom: 10,
    // mt,
  },

  editBtnprofile: {
    textAlign: "right",
    marginRight: 20,
    fontWeight: "bold",
    padding: 10,
  },
});
