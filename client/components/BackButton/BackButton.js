import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      style={{
        flex: 1,
      }}
      onPress={handleGoBack}>
      <Ionicons name="chevron-back-outline" size={20} color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;
