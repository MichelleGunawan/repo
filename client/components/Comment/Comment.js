import React, { useState, useRef, useEffect } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { primary } from "../../assets/colors";

export const Comment = ({ item, style }) => {
  const [commentsNum, setCommentsNum] = useState(0);

  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <Icon size={28} name="comment" color={primary} />
      <Text style={{ margin: 5 }}>{commentsNum}</Text>
    </View>
  );
};
