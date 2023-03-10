import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { primary } from "../../assets/colors";

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: primary,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    height: 40,
    justifyContent: "center",
    borderColor: "",
    margin: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontWeight: "normal",
  },
});

export default CustomButton;
