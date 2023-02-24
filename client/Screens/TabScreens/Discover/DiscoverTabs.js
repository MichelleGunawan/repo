import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchBar from "../../../components/SearchBar/SearchBar";
import DiscoverAlbum from "./DiscoverAlbum";
import DiscoverProfile from "./DiscoverProfile";

const Tab = createMaterialTopTabNavigator();

export function DiscoverTabs() {
  const [search, setSearch] = useState("");

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: "8%",
          backgroundColor: "#FFFFFF",
        }}>
        <SearchBar searchPhrase={search} setSearchPhrase={setSearch} />
        <Button title="Filter" color="steelblue" />
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === "Albums") {
              iconName = focused ? "ios-image" : "ios-image-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "ios-person" : "ios-person-outline";
            }
            return <Ionicons name={iconName} size={25} color={color} />;
          },

          tabBarActiveTintColor: "steelblue",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
        })}>
        <Tab.Screen name="Albums" component={DiscoverAlbum} />
        <Tab.Screen name="Profile" component={DiscoverProfile} />
      </Tab.Navigator>
    </>
  );
}
