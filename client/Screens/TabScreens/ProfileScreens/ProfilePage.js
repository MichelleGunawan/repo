import { useState } from "react";
import { View, FlatList, Image, Text, StyleSheet, Button } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";
import { Like } from "../../../components/Like/Like";
import { Ionicons } from "@expo/vector-icons";
import { Comment } from "../../../components/Comment/Comment";
import { Subscribe } from "../../../components/Subscribe/subscribe";
import Icon from "react-native-vector-icons/FontAwesome";
import ExpandableText from "../../../components/ExpendableText/ExpendableText";
import ImageModal from "../../../components/ImageModal/ImageModal";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { light_grey } from "../../../assets/colors";
import BackButton from "../../../components/BackButton/BackButton";

export default function ProfilePage() {
  const [modalVisible, setModalVisible] = useState(false);

  const data = [
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
    <ImageModal
      layout={[styles.item, { height: item.height, backgroundColor: "grey" }]}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      source={"https://picsum.photos/200/300"}
    />
  );

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}>
          <CustomButton title="Follow" />
          <CustomButton title="Select" />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons size={25} name="earth" />
            <Text style={{ marginLeft: 5, fontSize: 20 }}>Eatery</Text>
          </View>
          <Image
            source={{ uri: "https://picsum.photos/200/300?random=2" }}
            style={styles.image}
          />
        </View>
        <ExpandableText
          text="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum."
        />
        <View
          style={{
            flexDirection: "row",
            marginEnd: 120,
          }}>
          <Like />
          <Comment />
          <Subscribe />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}>
          <Text style={{ color: light_grey, marginRight: 5 }}>
            {data.length}
          </Text>
          <Icon color={light_grey} size={15} name="image" />
        </View>
      </View>
      <MasonryList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginHorizontal: 10,
    marginTop: 40,
    marginBottom: 5,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: "50%",
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
