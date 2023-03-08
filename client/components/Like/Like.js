import React, { useState, useRef, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Animated, View, Text } from "react-native";

const AnimatedIcon = Animated.createAnimatedComponent(FontAwesome);

export const Like = ({ item, style }) => {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const reverseOpacity = useRef(new Animated.Value(0)).current;
  const [liked, setLiked] = useState(false);
  const [likesNum, setLikesNum] = useState(0);

  const like = (value) => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 1,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(value ? opacity : reverseOpacity, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(value ? reverseOpacity : opacity, {
          toValue: 1,
          duration: 0,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
    setLiked(value);
  };

  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <AnimatedIcon
        name={"heart"}
        size={20}
        style={{
          ...style,
          position: "absolute",
          opacity: reverseOpacity,
          transform: [{ scale }],
        }}
        color="#B00000"
        onPress={() => {
          like(!liked);
          setLikesNum(likesNum - 1);
        }}
      />
      <AnimatedIcon
        name={"heart-o"}
        size={20}
        style={{
          ...style,
          opacity: opacity,
          transform: [{ scale }],
        }}
        color="black"
        onPress={() => {
          like(!liked);
          setLikesNum(likesNum + 1);
        }}
      />
      <Text style={{ margin: 5 }}>{likesNum}</Text>
    </View>
  );
};
