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
import GroupMembers from "./GroupMembers";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import { TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { renderNode } from "@rneui/base";

const groupImageWidth = Dimensions.get("window").width * 0.3077;

export default function GalleryScreen({ route }) {
  const { groupPicture, groupName, groupDescription } = route.params;
  const navigation = useNavigation();
  const [groupNameChange, setGroupNameChange] = useState(groupName);

  const [muteChat, setMuteChat] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const [groupDescriptionChange, setGroupDescriptionChange] =
    useState(groupDescription);

  const handleNameChange = (newText) => {
    setGroupNameChange(newText);
    // CHANGE GROUP NAME IN BACKEND
  };

  const handleDescriptionChange = (newText) => {
    setGroupDescriptionChange(newText);
    // CHANGE GROUP DESCRIPTION IN BACKEND
  };

  return (
    <ScrollView style={styles.container}>
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
        <View style={styles.titleContainer}>
          <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "700" }}>
            Group Details
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <TouchableOpacity
            onPress={() => (muteChat ? setMuteChat(false) : setMuteChat(true))}
          >
            <MaterialCommunityIcons
              name={muteChat ? "bell-off-outline" : "bell-outline"}
              size={24}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.groupImageContainer}>
          <Image
            source={{
              uri: groupPicture,
            }}
            style={{
              width: groupImageWidth,
              height: groupImageWidth,
              borderRadius: 20,
            }}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          {/* ADD LOGIC */}
          <TouchableOpacity>
            <Text style={{ color: "#425027", fontWeight: "500", fontSize: 16 }}>
              Change group photo
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.nameInputContainer}>
          <TextInput
            // onChangeText={setGroupNameChange(groupNameChange)}
            // value={numb
            onChangeText={handleNameChange}
            value={groupNameChange}
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
            onChangeText={handleDescriptionChange}
            value={groupDescriptionChange}
            placeholderTextColor={"#6C757D"}
            fontSize={16}
            fontWeight={"600"}
            paddingHorizontal={16}
          />
        </View>

        <TouchableOpacity>
          <View // MAKE BUTTON FUNCTIONAL
            style={{
              backgroundColor: "#6E8641",
              height: 36,
              width: 183,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              marginVertical: 24,
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "600" }}>
              Edit Group Members
            </Text>
          </View>
        </TouchableOpacity>

        {/* Members */}
        <View style={{ alignSelf: "flex-start" }}>
          <Text style={{ fontWeight: "500", fontSize: 16 }}># Members</Text>
        </View>

        <View style={{ flex: 1, width: "100%" }}>
          <GroupMembers />
          <GroupMembers />
          <GroupMembers />
          <GroupMembers />
          <GroupMembers />

          {showMore && (
            <View>
              <GroupMembers />
              <GroupMembers />
            </View>
          )}
          {/* Show more */}
          <TouchableOpacity
            onPress={() => (showMore ? setShowMore(false) : setShowMore(true))}
          >
            <View
              style={{
                paddingTop: 17,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Octicons name={"people"} size={24} color={"#425027"} />
              <Text
                style={{
                  paddingLeft: 4,
                  fontSize: 16,
                  fontWeight: "400",
                  color: "#425027",
                }}
              >
                {showMore ? (
                  <Text>Collapse Members</Text>
                ) : (
                  <Text>Show More (2)</Text>
                )}
              </Text>
            </View>
          </TouchableOpacity>

          {/* Mute Chat*/}
          <TouchableOpacity
            onPress={() => (muteChat ? setMuteChat(false) : setMuteChat(true))}
          >
            <View
              style={{
                paddingTop: 48,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name={muteChat ? "bell-off-outline" : "bell-outline"}
                size={24}
                color="#425027"
              />
              <Text
                style={{
                  paddingLeft: 4,
                  fontSize: 16,
                  fontWeight: "400",
                  color: "#425027",
                }}
              >
                {muteChat ? <Text>Unmute Chat</Text> : <Text>Mute Chat</Text>}
              </Text>
            </View>
          </TouchableOpacity>

          {/* Leave Group */}
          <TouchableOpacity>
            <View
              style={{
                marginTop: 16,
                marginBottom: 65,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name={"exit-to-app"}
                size={24}
                color={"#EF1212"}
              />
              <Text
                style={{
                  paddingLeft: 4,
                  fontSize: 16,
                  fontWeight: "400",
                  color: "#EF1212",
                }}
              >
                Leave Group
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
    flex: 1,
    // alignItems: "flex-start",
    // backgroundColor: "green",
    // paddingTop: "13.5%",
  },
  titleContainer: {
    flex: 1,
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

    // justifyContent: "center",
    // alignItems: "center",
  },
  groupImageContainer: {
    marginTop: 36,
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
