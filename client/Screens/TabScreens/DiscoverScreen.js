import React, { useState } from "react";
import { View, FlatList, Button, Image, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Grid from "../../components/Grid/Grid";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function DiscoverScreen() {
	const [search, setSearch] = useState("");

	const Stack = createNativeStackNavigator();

	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					justifyContent: "center",
					marginTop: "5%",
				}}>
				<SearchBar searchPhrase={search} setSearchPhrase={setSearch} />
				<Button title="Filter" color="steelblue" />
			</View>
			<View>
				<Button title="Likes" color="steelblue" />
				<Button title="Recent" color="steelblue" />
			</View>
			{/* <View>
				<Grid />
				<Grid />
			</View>
			<View style={{ flex: 1, flexDirection: "row" }}>
				<Grid />
				<Grid />
			</View>
			<View style={{ flex: 1, flexDirection: "row" }}>
				<Grid />
				<Grid />
			</View>
			<View style={{ flex: 1, flexDirection: "row" }}>
				<Grid />
				<Grid />
			</View> */}
		</View>
	);
}
