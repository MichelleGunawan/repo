import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import SelectAlbums from "./Components/SelectAlbums";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import {r CameraRoll } from "@react-native-camera-roll/camera-roll";

// LOOK INTO keyboard scroll view
// break things down to reusable components
// map circles to people,,, make component for this. sent list of users and get images from users
// ^ album

// get rid of tab navigator
// create groupchat rename groupchat

export default function IndividualGroupchatScreen({ route }) {
  const navigation = useNavigation();
  const { groupPicture, name, description } = route.params;
  const [number, onChangeNumber] = React.useState("");
  const [openAlbums, setOpenAlbums] = useState(false);

  const [albums, setAlbums] = useState([]);
  const [albumsTab, setAlbumsTab] = useState(true);
  const [cameraRollTab, setCameraRollTab] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((albums) => {
        const albumsWithPhotos = albums.map((album) => {
          return fetch(
            `https://jsonplaceholder.typicode.com/albums/${album.id}/photos?_limit=100`
          )
            .then((response) => response.json())
            .then((photos) => {
              return {
                ...album,
                photos,
              };
            });
        });

        Promise.all(albumsWithPhotos)
          .then((updatedAlbums) => setAlbums(updatedAlbums))
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

  const renderAlbums = ({ item }) => (
    <View>
      <SelectAlbums id={item.id} title={item.title} photos={item.photos} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backArrowContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate({ name: "Group Chats" })}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={45}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.groupImageContainer}>
          <Image
            source={{
              uri: groupPicture,
            }}
            style={{ width: 43, height: 43, borderRadius: 5 }}
          />
        </View>
        <View style={styles.groupNameContainer}>
          <Text style={styles.groupName}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.galleryContainer}>
          <MaterialCommunityIcons
            name="image-filter-none"
            size={32}
            color="#DBE1D0"
            borderColor="#536531"
          />
        </View>
      </View>

      <View style={styles.body}>
        <Text>Groupchat content</Text>
      </View>
      <View style={styles.messageBarContainer}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="camera-outline"
            size={27}
            style={styles.cameraIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            openAlbums ? setOpenAlbums(false) : setOpenAlbums(true)
          }
        >
          <Ionicons
            name="images-outline"
            size={27}
            style={styles.galleryIcon}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.messageBar}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Send Message"
          keyboardType="numeric"
        />
      </View>

      {openAlbums && (
        <View style={{ flex: 5 }}>
          <View style={styles.albumOrCameraRollContatiner}>
            <TouchableOpacity
              onPress={() => {
                setAlbumsTab(true);
                setCameraRollTab(false);
              }}
            >
              <Text style={styles.albumOrCameraRoll}>Albums</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setAlbumsTab(false);
                setCameraRollTab(true);
              }}
            >
              <Text>Camera Roll</Text>
            </TouchableOpacity>
          </View>

          {albumsTab ? ( // Access Albums
            <FlatList
              data={albums}
              renderItem={renderAlbums}
              keyExtractor={(item) => item.id}
            />
          ) : (
            // Access Camera Roll
            // <FlatList
            //   data={albums}
            //   renderItem={renderAlbums}
            //   keyExtractor={(item) => item.id}
            // />
            <Text>hello</Text>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: "4.5%",
    // paddingTop: "15%",
    // paddingBottom: "25%",
    // backgroundColor: "lightblue",
  },
  header: {
    // flex: 0.7,
    flexDirection: "row",
    backgroundColor: "#6E8641",
    // alignItems: "center",
    paddingTop: 45,
    paddingLeft: 15,
    paddingRight: 30,
    alignItems: "center",
    minHeight: 130,
    // paddingHorizontal: 30,
    // justifyContent: "center",
  },
  groupImageContainer: {
    flex: 1,
    paddingRight: 8,
  },
  backArrowContainer: {
    flex: 1,

    // alignItems: "flex-start",
    // backgroundColor: "green",
    // paddingTop: "13.5%",
  },
  groupNameContainer: {
    flex: 5,
    // backgroundColor: "red",
  },
  groupName: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 27,
    color: "#FFFFFF",
  },
  description: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 14,
    color: "#FFFFFF",
  },
  galleryContainer: {
    flex: 1,
  },
  body: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  messageBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 24,
    paddingRight: 17,
    // backgroundColor: "red",
  },
  cameraIcon: {
    // backgroundColor: "blue",
  },
  galleryIcon: {
    padding: 0,
    marginLeft: 11,
    marginRight: 12,
    // backgroundColor: "blue",
  },
  messageBar: {
    flex: 6,
    borderWidth: 1,
    marginRight: 12,
    height: 40,
    padding: 13,
    fontSize: 16,
    fontWeight: "600",
    borderRadius: 10,
    borderColor: "#000000",
  },
  albumOrCameraRollContatiner: {
    flexDirection: "row",
    paddingLeft: 23,
  },
});
