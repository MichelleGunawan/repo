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
// import SelectAlbums from "./Components/SelectAlbums";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IndividualGroupchatsTabs } from "./Tabs/SendFromAlbumOrCam/IndividualGroupchatsTabs";
import TakePicture from "./Tabs/TakePicture/TakePicture";
// import {r CameraRoll } from "@react-native-camera-roll/camera-roll";

// LOOK INTO keyboard scroll view
// break things down to reusable components
// map circles to people,,, make component for this. sent list of users and get images from users
// ^ album

// get rid of tab navigator
// create groupchat rename groupchat

export default function IndividualGroupchatScreen({ route }) {
  const navigation = useNavigation();
  const { groupPicture, groupName, groupDescription } = route.params;
  const [number, onChangeNumber] = React.useState("");
  const [openAlbums, setOpenAlbums] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);

  // const [albumsTab, setAlbumsTab] = useState(true);
  // const [cameraRollTab, setCameraRollTab] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backArrowContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={45}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{ flex: 1, flexDirection: "row" }}
          onPress={() =>
            navigation.navigate("Group Details Screen", {
              groupName: groupName,
              groupPicture: groupPicture,
              groupDescription: groupDescription,
            })
          }

          // onPress={() =>
          //   navigation.navigate("Individual Group Screen", {
          //     name: props.name,
          //     groupPicture: props.image,
          //     description: props.description,
          //   })
          // }
        >
          <View style={styles.groupImageContainer}>
            <Image
              source={{
                uri: groupPicture,
              }}
              style={{ width: 43, height: 43, borderRadius: 5 }}
            />
          </View>
          <View style={styles.groupNameContainer}>
            <Text style={styles.groupName}>{groupName}</Text>
            <Text style={styles.description}>{groupDescription}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.galleryContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Gallery Screen")}
          >
            <MaterialCommunityIcons
              name="dots-grid"
              size={32}
              color="#DBE1D0"
              borderColor="#536531"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <Text>Groupchat content</Text>
      </View>
      <View style={styles.messageBarContainer}>
        <TouchableOpacity
          onPress={() => {
            openCamera ? setOpenCamera(false) : setOpenCamera(true);
            setOpenAlbums(false);
          }}
        >
          <MaterialCommunityIcons
            name="camera-outline"
            size={27}
            style={styles.cameraIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            openAlbums ? setOpenAlbums(false) : setOpenAlbums(true);
            setOpenCamera(false);
          }}
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
          placeholderTextColor={"#6C757D"}
        />
      </View>

      {openAlbums && (
        <View style={{ flex: 5 }}>
          <IndividualGroupchatsTabs />
        </View>
      )}

      {openCamera && (
        <View style={{ flex: 5 }}>
          <TakePicture />
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
    paddingRight: 21,
    alignItems: "center",
    minHeight: 130,
    // paddingHorizontal: 30,
    // justifyContent: "center",
  },

  backArrowContainer: {
    // flex: 1,
    // alignItems: "flex-start",
    // backgroundColor: "green",
    // paddingTop: "13.5%",
  },
  groupImageContainer: {
    // flex: 1,
    marginRight: 16,
    marginLeft: 20,
  },
  groupNameContainer: {
    // flex: 5,
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
    fontStyle: "italic",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 22,
    color: "#FFFFFF",
  },
  galleryContainer: {
    // flex: 1,
    // backgroundColor: "lightblue",
    alignItems: "flex-end",
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
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    // lineHeight: 22,
    borderRadius: 10,
    borderColor: "#000000",
  },
  albumOrCameraRollContatiner: {
    flexDirection: "row",
    paddingLeft: 23,
  },
});
