import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import IndividualGroupchatScreen from "./IndividualGroupchatScreen";

export default function GroupchatCard(props) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Individual Group Screen", {
            name: props.name,
            groupPicture: props.image,
            description: props.description,
          })
        }
      >
        <View style={styles.card}>
          <Text style={styles.cardName}>{props.name}</Text>

          <Text style={styles.cardDescription}>{props.description}</Text>

          <View style={styles.notificationContainer}>
            <Text style={styles.cardnotificationNumber}>
              {props.notificationNumber}
            </Text>

            <Text style={styles.notificationTime}>2 min ago</Text>
          </View>

          <Image
            style={styles.cardImage}
            source={{
              uri: props.image,
            }}
          ></Image>

          <Ionicons
            name="md-person-circle-outline"
            size={30}
            style={styles.cardPeople}
          />

          <Text style={styles.cardMorePeople}>+ # others</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    borderColor: "#000000",
    borderWidth: 1,
    elevation: 3,
    backgroundColor: "#C5CFB3",
    width: "100%",
    height: 157,
    alignItems: "center",
    marginBottom: 40,
  },
  cardName: {
    // backgroundColor: "red",
    position: "absolute",
    height: "12%",
    top: "11.5%",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "16%",
    lineHeight: "19%",
    color: "#212529",
  },
  cardDescription: {
    // backgroundColor: "lightblue",
    position: "absolute",
    height: "15%",
    top: "30.57%",
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: "12%",
    lineHeight: "15%",
    color: "#425027",
  },
  cardImage: {
    position: "absolute",
    width: "24%",
    height: "59%",
    left: "3.14%",
    top: "19%",
    borderStyle: "solid",
    borderRadius: 5,
  },
  notificationContainer: {
    top: "4%",
    left: "195%",
    // backgroundColor: "lightblue",
    // width: "100%",
    // alignItems: "flex-end",
    justifyContent: "center",
    alignSelf: "flex-start",
    flexDirection: "row",
  },
  cardBell: {
    position: "absolute",
    // top: "12.1%",
    // right: "3.14%",
    // left: "87%",
    // zIndex: 2,
    // backgroundColor: "red",
  },
  cardnotificationNumber: {
    // position: "absolute",
    // height: "15%",
    // bottom: "70%",
    left: 54,
    bottom: 4,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12%",
    lineHeight: "15%",
    color: "#000000",
  },
  notificationTime: {
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 14,
    paddingTop: 30,
    marginRight: 20,
    // alignSelf: "flex-end",
  },
  cardPeople: {
    position: "absolute",
    top: "61.14%",
  },
  cardMorePeople: {
    position: "absolute",
    height: "9.55%",
    top: "65.61%",
    left: "66.86%",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12%",
    lineHeight: "15%",
    color: "#000000",
  },
});
