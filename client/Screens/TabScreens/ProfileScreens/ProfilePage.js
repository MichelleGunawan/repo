import { View, FlatList, Image, Text, StyleSheet } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";

export default function ProfilePage() {
  const DATA = [
    { id: "1", height: 70 },
    { id: "2", height: 130 },
    { id: "3", height: 90 },
    { id: "4", height: 86 },
    { id: "5", height: 110 },
    { id: "6", height: 40 },
    { id: "7", height: 70 },
    { id: "8", height: 130 },
    { id: "9", height: 90 },
    { id: "10", height: 86 },
    { id: "11", height: 110 },
    { id: "12", height: 40 },
  ];

  const renderItem = ({ item }) => (
    <View
      style={[styles.item, { height: item.height, backgroundColor: "grey" }]}
    />
  );

  return (
    <MasonryList
      data={DATA}
      style={styles.container}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    marginBottom: 30,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  item: {
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 10,
    borderRadius: "5px",
  },
});
