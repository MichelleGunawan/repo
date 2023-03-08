import React, { useState, useRef, useEffect } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

export const Comment = ({ item, style }) => {
  const [commentsNum, setCommentsNum] = useState(0);

  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <Icon size={25} name="comment" />
      <Text style={{ margin: 5 }}>{commentsNum}</Text>
    </View>
  );
};
