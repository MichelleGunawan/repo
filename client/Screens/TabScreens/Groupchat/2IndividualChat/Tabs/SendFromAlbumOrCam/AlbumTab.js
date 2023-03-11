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

  // useEffect(() => {

  // }, []);

  const fetchData = () => {
    // fetch("https://jsonplaceholder.typicode.com/albums")
    //   .then((response) => response.json())
    //   .then((albums) => {
    //     const albumsWithPhotos = albums.map((album) => {
    //       return fetch(
    //         `https://jsonplaceholder.typicode.com/albums/${album.id}/photos?`
    //       )
    //         .then((response) => response.json())
    //         .then((photos) => {
    //           return {
    //             ...album,
    //             photos,
    //           };
    //         });
    //     });

    //     Promise.all(albumsWithPhotos)
    //       .then((updatedAlbums) => setAlbums(updatedAlbums))
    //       .catch((error) => console.error(error));
    //   })
    //   .catch((error) => console.error(error));

    (async () => {
      let url = new URL("http://169.232.127.118:8000/getAllAlbums");
      url.searchParams.append("username", "ingtest");

      const result = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());

      for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].photos.length; j++) {
          const image = await fetch(`http://169.232.127.118:8000/getPhoto?photo=${result[i].photos[j]}`, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }).then((response) => response.json())

          console.log(image.photo);
          result[i].photos[j] = image.photo;
        }
      }

      setAlbums(result);
    })();

  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderAlbums = ({ item }) => {
    return (
      <View>
        <AlbumDisplay id={item._id} title={item.name} photos={item.photos} />
      </View>
    )
  };
  return (
    <View style={styles.tabContainer}>
      <FlatList
        data={albums} // CHANGE THIS LINE, TAKE OUT SLICE
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
