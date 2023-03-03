import { View, FlatList, Image, Text } from "react-native";

const mockData = [
  { id: "1", text: "React", img: "https://picsum.photos/200/300?random=2" },
  { id: "2", text: "is", img: "https://picsum.photos/200/300?random=2" },
  { id: "3", text: "Awesome!", img: "https://picsum.photos/200/300?random=2" },
];

export default function ProfilePage() {
  return (
    <View
      style={{
        margin: 10,
      }}>
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ margin: 10, flexDirection: "row" }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 25 }}
              source={{ uri: "https://picsum.photos/200/300?random=2" }}
            />
            <View>
              <Text style={{ fontSize: 22 }}>{item.text}</Text>
              <Text style={{ fontSize: 22 }}>{item.text}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
