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

export default function CameraRollScreen(props) {
  const navigation = useNavigation();
  const [viewAllAlbums, setviewAllAlbums] = useState(true);

  return (
    <View>
      <Text>Dummy</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
