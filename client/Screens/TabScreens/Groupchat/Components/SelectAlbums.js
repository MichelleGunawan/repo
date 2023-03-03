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
import AlbumScreen from "./AlbumScreen";
import CameraRollScreen from "./CameraRollScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export default function SelectAlbumsScreen(props) {
  const Tab = createMaterialTopTabNavigator();

  const TopBarNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="AlbumScreen" component={AlbumScreen} />
        <Tab.Screen name="CameraRollScreen" component={CameraRollScreen} />
      </Tab.Navigator>
    );
  };

  const navigation = useNavigation();
  const [viewAllAlbums, setviewAllAlbums] = useState(true);

  return (
    <View>
      {/* <NavigationContainer> */}
      {/* <TopBarNavigator /> */}
      {/* </NavigationContainer> */}
      <View>
        {viewAllAlbums && (
          <View>
            <TouchableOpacity onPress={() => setviewAllAlbums(false)}>
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
                    <Text>{props.title}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View>
        {!viewAllAlbums && (
          <View>
            <View style={styles.indivudalAlbumHeader}>
              <View style={styles.backArrowContainer}>
                <TouchableOpacity onPress={() => setviewAllAlbums(true)}>
                  <MaterialIcons
                    name="keyboard-arrow-left"
                    size={30}
                    color="#536531"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.albumTitleInAlbumContainer}>
                <Text style={styles.albumTitleInAlbum}>{props.title}</Text>
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
              {props.photos.map((photo) => (
                <Image
                  key={photo.id}
                  source={{ uri: photo.thumbnailUrl }}
                  style={styles.individualPictures}
                />
              ))}
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  albumsContainer: {
    flex: 1,
    paddingHorizontal: 23,
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "red",
    paddingBottom: 20,
    // alignContent: "space-between",
  },
  indivdualAlbums: {
    // flexDirection: "row",
    // backgroundColor: "red",
    flex: 1,
    alignSelf: "flex-start",
  },
  topLeft: {
    width: 65,
    height: 65,
    borderTopLeftRadius: 15,
  },
  bottomLeft: {
    width: 65,
    height: 65,
    borderBottomLeftRadius: 15,
  },
  topRight: {
    width: 65,
    height: 65,
    borderTopRightRadius: 15,
  },
  bottomRight: {
    width: 65,
    height: 65,
    borderBottomRightRadius: 15,
  },
  albumTitle: {
    height: 17,
    top: 2,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 16,
    color: "#536531",
    // paddingTop: 9,
    // marginBottom: 9,
  },

  // INDIVIDUAL ALBUM STYLINGS
  indivudalAlbumHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
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
