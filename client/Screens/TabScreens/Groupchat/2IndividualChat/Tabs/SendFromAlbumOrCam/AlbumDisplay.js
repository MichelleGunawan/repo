import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Dimensions } from "react-native";
const albumSquareWidth = Dimensions.get("window").width * 0.1987;

export default function AlbumDisplay(props) {
  const navigation = useNavigation();
  const [viewAllAlbums, setviewAllAlbums] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("In Album", {
            title: props.title,
            photos: props.photos,
          })
        }
      >
        <View style={styles.albumsContainer}>
          <View key={props.id} style={styles.indivdualAlbums}>
            <View style={{ flexDirection: "row" }}>
              {props.photos.slice(0, 1).map((photo) => (
                <Image
                  key={photo.id}
                  source={{ uri: photo.thumbnailUrl }}
                  style={styles.topLeft}
                />
              ))}
              {props.photos.slice(1, 2).map((photo) => (
                <Image
                  key={photo.id}
                  source={{ uri: photo.thumbnailUrl }}
                  style={styles.topRight}
                />
              ))}
            </View>
            <View style={{ flexDirection: "row" }}>
              {props.photos.slice(2, 3).map((photo) => (
                <Image
                  key={photo.id}
                  source={{ uri: photo.thumbnailUrl }}
                  style={styles.bottomLeft}
                />
              ))}
              {props.photos.slice(3, 4).map((photo) => (
                <Image
                  key={photo.id}
                  source={{ uri: photo.thumbnailUrl }}
                  style={styles.bottomRight}
                />
              ))}
            </View>
            <View style={styles.albumTitle}>
              <Text>{props.title.substring(0, 15) + "..."}</Text>
              {/* INCLUDE LOGIC TO EITHER SHOW GLOBE OR LOC OUTLINE */}
              <FontAwesome name="globe" size={16.67} />
              <MaterialCommunityIcons name="lock-outline" size={16.67} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  albumsContainer: {
    flex: 1,
    // paddingHorizontal: 23,
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "red",
    paddingBottom: 20,
    // alignContent: "space-between",
  },
  indivdualAlbums: {
    // flexDirection: "row",
    // backgroundColor: "red",
    // flex: 1,
    // alignSelf: "flex-start",
  },
  topLeft: {
    width: albumSquareWidth,
    height: albumSquareWidth,
    borderTopLeftRadius: 15,
  },
  bottomLeft: {
    width: albumSquareWidth,
    height: albumSquareWidth,
    borderBottomLeftRadius: 15,
  },
  topRight: {
    width: albumSquareWidth,
    height: albumSquareWidth,
    borderTopRightRadius: 15,
  },
  bottomRight: {
    width: albumSquareWidth,
    height: albumSquareWidth,
    borderBottomRightRadius: 15,
  },
  albumTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 17,
    top: 2,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 16,
    color: "#536531",
    marginTop: 8,
    // backgroundColor: "red",
    // paddingTop: 9,
    // marginBottom: 9,
  },
});
