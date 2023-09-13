import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { color } from "../config/colors";
import AppTag from "../components/AppTag";
import AppButton from "../components/AppButton";
import { useRoute } from "@react-navigation/native";
import AuthContext from "../auth/context";
import AssetsConfig from "../api/AssetsConfig";

const JobDetails = ({ navigation, route }) => {
  const { user, setUser } = useContext(AuthContext);

  const { params } = useRoute();

  console.log("JOB DETAILS IMAGE", `${AssetsConfig}${params.data.img}`);

  const handleNavigation = () => {
    if (!user?.user) {
      alert("Please Login to Apply to this Job");
      navigation.navigate("Sign In");
      return;
    }
    navigation.navigate("applyjob", { data: params.data });
  };
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.curveCard}>
          <Image
            style={styles.image}
            // source={{
            //   uri: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQAQ3JMCi56vgzxgDirr7pArTs7W-90JU9O8lG-QQmVmJGC3txdGeVA0x73bki-6SzX7kVM-4KIpkDsDzs",
            // }}

            source={{
              uri: `${AssetsConfig}${params?.data?.img}`,
            }}

            // source = {{}}
          />
          <AppText style={[styles.jobTitle, styles.whiteTextBold]}>
            {params?.data?.title}
          </AppText>
          {/* <AppText style={[styles.jobTitle, styles.whiteTextBold]}>
            React Developer
          </AppText> */}

          <View style={styles.tagContainer}>
            {/* params.data */}
            {/* <AppTag>Full time</AppTag> */}
            <AppTag>{params.data?.jobType}</AppTag>
            {/* <AppTag>Junior</AppTag> */}
          </View>
          <View style={styles.salaryandLocContainer}>
            <AppText style={[styles.jobTitle, styles.whiteTextBold]}>
              {/* Malir Karachi */}
            </AppText>
            {/* <AppText style={[styles.jobTitle, styles.whiteTextBold]}>
              $160,00/year{" "}
            </AppText> */}
          </View>
          <Text>{params?.data?.description}</Text>
        </View>

        <View style={styles.btnContainer}>
          <AppButton
            onPress={handleNavigation}
            title={"Apply Now"}
            bgcolor="blue"
            colorText={"white"}
          />
        </View>
      </View>
    </Screen>
  );
};

export default JobDetails;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 5,
  },
  bullet: {
    fontWeight: "bold",
    fontSize: 20,
  },
  text: {
    flex: 1,
    marginLeft: 5,
    fontSize: 16,
  },
  btnContainer: {
    paddingHorizontal: 20,
  },
  descriptionContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  jobImage: {
    marginBottom: 10,
  },
  whiteTextBold: {
    color: color.white,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
  curveCard: {
    alignItems: "center",
    paddingVertical: 20,
    // backgroundColor: color.black,
    // borderBottomLeftRadius: 50,
    // borderBottomRightRadius: 10,

    paddingVertical: 20,
    backgroundColor: "#FFCC4D",
    // backgroundColor: color.primary,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 20,
  },
  salaryandLocContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
    marginBottom: 20,
  },
});
