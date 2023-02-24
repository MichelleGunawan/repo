import React, { useState } from "react";
import { View, FlatList, Button, Image, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Grid from "../../../components/Grid/Grid";
import SearchBar from "../../../components/SearchBar/SearchBar";

export default function DiscoverAlbum() {
	return (
		<View>
			<Grid />
		</View>
	);
}
