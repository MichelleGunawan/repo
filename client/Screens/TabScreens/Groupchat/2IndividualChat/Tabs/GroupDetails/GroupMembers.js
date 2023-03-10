import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function GroupMembers() {
  const [follow, setFollow] = useState(true);

  return (
    <View
      style={{
        // flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor: "lightblue",
        paddingTop: 16,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Text>Picture</Text>
        <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: 16 }}>
          Profile Name
        </Text>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => (follow ? setFollow(false) : setFollow(true))}
        >
          {follow ? (
            <View
              style={{
                justifyContent: "center",
                backgroundColor: "#6E8641",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 16,
                  fontWeight: "600",
                  paddingVertical: 7,
                  paddingHorizontal: 16,
                }}
              >
                Follow
              </Text>
            </View>
          ) : (
            <View
              style={{
                borderWidth: 1,
                borderColor: "#425027",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "#425027",
                  fontSize: 16,
                  fontWeight: "600",
                  paddingVertical: 6,
                  paddingHorizontal: 16,
                }}
              >
                Following
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
