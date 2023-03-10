import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AlbumTab from "./AlbumTab";
import AlbumDisplay from "./AlbumDisplay";
import InAlbum from "./InAlbum";
import CameraRollTab from "./CameraRollTab";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export function IndividualGroupchatsTabs() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { height: 40, backgroundColor: "transparent" },
          // tabBarUnderlineStyle: { width: 20, height: 3 },
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: "500",
            color: "#536531",
          },
          tabBarItemStyle: {
            width: 140,
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#536531",
            height: 2,
            width: 90,
            left: 25,
          },
        }}
      >
        <Tab.Screen name="Album" component={AlbumTab} />
        <Tab.Screen name="Camera Roll" component={CameraRollTab} />
        {/* <Tab.Screen
          name="In Album"
          component={InAlbum}
          options={
            {
              // tabBarShowLabel: false,
              // tabBarShowIcon: false,
            }
          }
        /> */}
      </Tab.Navigator>
    </View>
  );
}
