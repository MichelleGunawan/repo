import React, { useState } from "react";
import {
  View,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
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

      <Modal transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            <Image style={styles.image} source={{ uri: source }} />
            <TouchableOpacity
              onPress={() => setModalVisible(false)}></TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  image: { width: "80%", height: "80%", borderRadius: 15 },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  blurOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
