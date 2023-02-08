import React, { useState } from "react";
import { View, Text, Button, Image } from "react-native";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function DiscoverScreen() {
	const [search, setSearch] = useState("");

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text style={{ fontWeight: "bold", fontSize: "20", fontStyle: "italic" }}>
				Discover It
			</Text>
			<SearchBar searchPhrase={search} setSearchPhrase={setSearch} />
			<View style={{ flexDirection: "row" }}>
				<Button title="Likes" color="steelblue" />
				<Button title="Recent" color="steelblue" />
			</View>
			<Image
				style={{ width: "50%", height: "50%" }}
				source={{ uri: "https://picsum.photos/200/300?random=2" }}
			/>
		</View>
	);
}
