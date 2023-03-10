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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import { CameraRoll } from "@react-native-camera-roll/camera-roll";

export default function InAlbum({ route, navigation }) {
  const { title, photos } = route.params;

  // const navigation = useNavigation();
  const [viewAllAlbums, setviewAllAlbums] = useState(true);

  return (
    <View style={{ flex: 1, paddingTop: 30 }}>
      <View style={styles.indivudalAlbumHeader}>
        <View style={styles.backArrowContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={30}
              color="#536531"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.albumTitleInAlbumContainer}>
          <Text style={styles.albumTitleInAlbum}>{title}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <View style={styles.shareAlbumButton}>
              <Text style={styles.buttonText}>Share Album</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.individualAlbumPictureContatiner}>
        {photos.map((photo) => (
          <Image
            key={photo.id}
            source={{ uri: photo.thumbnailUrl }}
            style={styles.individualPictures}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // INDIVIDUAL ALBUM STYLINGS
  indivudalAlbumHeader: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 24,
  },
  backArrowContainer: {
    flex: 1,
    // backgroundColor: "red",
    // alignSelf: "flex-start",
  },
  albumTitleInAlbumContainer: {
    flex: 6,
  },
  albumTitleInAlbum: {
    height: 22,
    fontWeight: "500",
    fontSize: 16,
    color: "#536531",
    // paddingTop: 20,
  },
  buttonContainer: {
    flex: 5,
    alignItems: "flex-end",
  },
  shareAlbumButton: {
    backgroundColor: "#6E8641",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 128,
    height: 28,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 22,
  },
  individualAlbumPictureContatiner: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 13.5,
    paddingRight: 18.5,
    justifyContent: "space-between",
  },
  individualPictures: {
    width: "16%",
    height: 1, // placeholder
    aspectRatio: 1,
    marginHorizontal: 5.5,
    marginVertical: 5,
    // size: 61,
    // margin: 5.5,
    // padding: 5.5,
  },
});
