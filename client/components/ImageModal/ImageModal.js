import React, { useState } from "react";
import {
  View,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

export default function ImageModal({
  layout,
  modalVisible,
  setModalVisible,
  source,
}) {
  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image style={layout} source={{ uri: source }} />
      </TouchableOpacity>
      <Modal visible={modalVisible}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
});
