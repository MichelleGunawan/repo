import React from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import PrivatePostsHeader from "./PrivatePostsHeader";

const data = [
  { key: "A" },
  { key: "B" },
  { key: "C" },
  { key: "D" },
  { key: "E" },
  { key: "F" },
  { key: "G" },
  { key: "H" },
  { key: "I" },
  { key: "J" },
  { key: "K" },
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 2;
const renderItem = ({ item }) => {
  if (item.empty === true) {
    return <View style={[styles.item, styles.itemInvisible]} />;
  }
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.key}</Text>
    </View>
  );
};

export default function PrivatePosts() {
  return (
    <FlatList
      data={formatData(data, numColumns)}
      style={styles.container}
      renderItem={renderItem}
      numColumns={numColumns}
      ListHeaderComponent={<PrivatePostsHeader />}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginBottom: 30,
  },

  item: {
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 10,
    height: Dimensions.get("window").width / numColumns - 10, // approximate a square
    borderRadius: "5px",
  },

  itemInvisible: {
    backgroundColor: "transparent",
  },

  itemText: {
    color: "#fff",
  },
});
