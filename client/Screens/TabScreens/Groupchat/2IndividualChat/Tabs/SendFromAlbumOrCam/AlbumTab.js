import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  FlatList,
} from "react-native";
import AlbumDisplay from "./AlbumDisplay";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import { CameraRoll } from "@react-native-camera-roll/camera-roll";

export default function AlbumTab() {
  // const navigation = useNavigation();
  // const [viewAllAlbums, setviewAllAlbums] = useState(true);

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function bruh() {
      const result = await fetchData("http://172.28.6.53:8000/getAllPhotos");
      console.log(result);
    }
    bruh();
  }, []);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((albums) => {
        const albumsWithPhotos = albums.map((album) => {
          return fetch(
            `https://jsonplaceholder.typicode.com/albums/${album.id}/photos?`
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

  useEffect(() => {
    fetchData();
  }, []);

  const renderAlbums = ({ item }) => (
    <View>
      <AlbumDisplay id={item.id} title={item.title} photos={item.photos} />
    </View>
  );
  return (
    <View style={styles.tabContainer}>
      <FlatList
        data={albums.slice(0, 8)} // CHANGE THIS LINE, TAKE OUT SLICE
        numColumns={2}
        renderItem={renderAlbums}
        keyExtractor={(item) => item.id}
        style={styles.albums}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    paddingTop: 14,
    paddingHorizontal: 23,
    // backgroundColor: "lightblue",
  },
  albums: {
    // flex: 1,
    // flexDirection: "row",
    // flexWrap: "wrap",
    // backgroundColor: "red",
  },
});
