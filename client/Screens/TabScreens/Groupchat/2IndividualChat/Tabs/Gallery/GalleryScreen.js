import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// import SelectAlbums from "./Components/SelectAlbums";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import CollectionsScreen from "./Tabs/Collections";
import MediaScreen from "./Tabs/Media";
const Tab = createMaterialTopTabNavigator();

export default function GalleryScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backArrowContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={45}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "700" }}>
            Gallery
          </Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>

      <View style={styles.tabBarContainer}>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              height: 48,
              backgroundColor: "transparent",
            },
            // tabBarUnderlineStyle: { width: 20, height: 3 },
            tabBarLabelStyle: {
              fontSize: 16,
              fontWeight: "500",
              lineHeight: 21.82,
              color: "#425027",
              paddingVertical: 4,
              // alignSelf: "flex-start",
              // backgroundColor: "red",
            },
            // tabBarItemStyle: {
            //   width: 140,
            // },
            tabBarIndicatorStyle: {
              backgroundColor: "#536531",
              height: 1,
              // width: 90,
              // left: 25,
            },
          }}
        >
          <Tab.Screen name="Collections" component={CollectionsScreen} />
          <Tab.Screen name="Media" component={MediaScreen} />
        </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: "4.5%",
    // paddingTop: "15%",
    // paddingBottom: "25%",
    // backgroundColor: "lightblue",
  },
  header: {
    // flex: 0.7,
    flexDirection: "row",
    backgroundColor: "#6E8641",
    // alignItems: "center",
    paddingTop: 45,
    paddingLeft: 15,
    paddingRight: 21,
    alignItems: "center",
    minHeight: 130,
    // paddingHorizontal: 30,
    // justifyContent: "center",
  },

  backArrowContainer: {
    flex: 1,
    // alignItems: "flex-start",
    // backgroundColor: "green",
    // paddingTop: "13.5%",
  },
  titleContainer: {
    flex: 1,
    // position: "absolute",
    alignItems: "center",
    // backgroundColor: "pink",
  },
  tabBarContainer: {
    // flex: 6,
    flex: 1,

    // justifyContent: "center",
    // alignItems: "center",
  },
});
