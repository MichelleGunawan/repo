import React from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";

const data = [
	{ id: "1", name: "Item 1", image: "https://picsum.photos/200/300?random=2" },
	{ id: "2", name: "Item 2", image: "https://picsum.photos/200/300?random=2" },
	{ id: "3", name: "Item 3", image: "https://picsum.photos/200/300?random=2" },
	{ id: "4", name: "Item 4", image: "https://picsum.photos/200/300?random=2" },
];

const styles = StyleSheet.create({
	itemContainer: {
		flex: 1,
		width: "50%",
		height: 100,
		justifyContent: "center",
		alignItems: "center",
	},
});

const Grid = () => {
	const renderItem = ({ item }) => (
		<View style={styles.itemContainer}>
			<Image
				source={{ uri: item.image }}
				style={{ width: "100%", height: "100%" }}
			/>
		</View>
	);

	return (
		<FlatList
			data={data}
			numColumns={2}
			renderItem={renderItem}
			keyExtractor={(item) => item.id}
		/>
	);
};

export default Grid;
