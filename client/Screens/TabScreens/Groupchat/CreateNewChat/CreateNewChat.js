import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import { TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";

const groupImageWidth = Dimensions.get("window").width * 0.3077;

export default function GalleryScreen() {
  const navigation = useNavigation();
  const [addedGroupImage, setAddedGroupImage] = useState(false);

  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.backArrowContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={45}
              color="#000000"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text
            style={{
              color: "#000000",
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Create New Group
          </Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>

      <View style={styles.body}>
        <View style={styles.groupImageContainer}>
          {addedGroupImage ? (
            <Image
              source={{
                uri: "",
              }}
              style={{
                width: groupImageWidth,
                height: groupImageWidth,
                borderRadius: 20,
                backgroundColor: "green",
              }}
            />
          ) : (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={{
                  uri: "",
                }}
                style={{
                  width: groupImageWidth,
                  height: groupImageWidth,
                  borderRadius: 20,
                  backgroundColor: "#E9ECEF",
                }}
              />
              <Text
                style={{
                  position: "absolute",
                  color: "#6C757D",
                  fontSize: 16,
                  marginHorizontal: 12,
                  textAlign: "center",
                }}
              >
                Add Group Photo
              </Text>
            </View>
          )}
        </View>
        <View style={styles.nameInputContainer}>
          <TextInput
            // onChangeText={setGroupNameChange(groupNameChange)}
            // value={numb
            // onChangeText={handleNameChange}
            // value="yes"
            placeholder="Group Name"
            placeholderTextColor={"#6C757D"}
            fontSize={16}
            fontWeight={"600"}
            paddingHorizontal={16}
          />
        </View>

        <View style={styles.descriptionInputContainer}>
          <TextInput
            // onChangeText={setGroupNameChange(groupNameChange)}
            // value={numb
            // onChangeText={handleDescriptionChange}
            // value="no"
            placeholder="Add Description (max 50 characters)"
            placeholderTextColor={"#6C757D"}
            fontSize={16}
            fontWeight={"600"}
            paddingHorizontal={16}
          />
        </View>

        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    // flex: 0.7,
    flexDirection: "row",
    // alignItems: "center",
    paddingTop: 45,
    paddingLeft: 15,
    paddingRight: 21,
    alignItems: "center",
    minHeight: 130,
    // backgroundColor: "red",
    // paddingHorizontal: 30,
    // justifyContent: "center",
  },

  backArrowContainer: {
    flex: 1,
    // alignItems: "flex-start",
    // backgroundColor: "green",
    // paddingTop: "13.5%",
  },
  titleContainer: {
    flex: 9,
    // position: "absolute",
    alignItems: "center",
    // marginRight: 40, // HARDCODED need to fix
    // backgroundColor: "pink",
  },
  body: {
    // flex: 6,
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 16,
    // backgroundColor: "pink",
    // justifyContent: "center",
    // alignItems: "center",
  },
  groupImageContainer: {
    // marginTop: 24,
  },
  nameInputContainer: {
    justifyContent: "center",
    backgroundColor: "#DBE1D0",
    width: "100%",
    height: 36,
    borderRadius: 10,
    marginTop: 24,
  },
  descriptionInputContainer: {
    justifyContent: "center",
    backgroundColor: "#DBE1D0",
    width: "100%",
    height: 36,
    borderRadius: 10,
    marginTop: 17,
  },
});
