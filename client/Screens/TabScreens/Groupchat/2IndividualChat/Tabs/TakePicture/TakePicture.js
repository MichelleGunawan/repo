// import React, { useEffect, useRef, useState } from "react";
// import { Button, StyleSheet, Text, View } from "react-native";
// import { Camera } from "expo-camera";
// import * as MediaLibrary from "expo-media-library";

// export default function App() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const cameraRef = useRef(null);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === "granted");
//     })();
//   }, []);

//   const takePicture = async () => {
//     if (cameraRef.current) {
//       let photo = await cameraRef.current.takePictureAsync();
//       await MediaLibrary.saveToLibraryAsync(photo.uri);
//       console.log(photo);
//     }
//   };

//   if (hasPermission === null) {
//     return <View />;
//   }

//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Camera
//         style={styles.camera}
//         type={Camera.Constants.Type.back}
//         ref={cameraRef}
//       >
//         <View style={styles.buttonContainer}>
//           <Button title="Take Picture" onPress={takePicture} />
//         </View>
//       </Camera>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   camera: {
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   buttonContainer: {
//     flex: 0.1,
//     flexDirection: "row",
//     alignSelf: "center",
//   },
// });

// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Button,
//   Image,
// } from "react-native";
// import { useEffect, useRef, useState } from "react";
// import { Camera } from "expo-camera";
// import { shareAsync } from "expo-sharing";
// import * as MediaLibrary from "expo-media-library";
// import PropTypes from "prop-types";

// export default function App() {
//   let cameraRef = useRef();
//   const [hasCameraPermission, setHasCameraPermission] = useState();
//   const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
//   const [photo, setPhoto] = useState();

//   useEffect(() => {
//     (async () => {
//       const cameraPermission = await Camera.requestCameraPermissionsAsync();
//       const mediaLibraryPermission =
//         await MediaLibrary.requestPermissionsAsync();
//       setHasCameraPermission(cameraPermission.status === "granted");
//       setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
//     })();
//   }, []);

//   if (hasCameraPermission === undefined) {
//     return <Text>Requesting permissions...</Text>;
//   } else if (!hasCameraPermission) {
//     return (
//       <Text>
//         Permission for camera not granted. Please change this in settings.
//       </Text>
//     );
//   }

//   let takePic = async () => {
//     let options = {
//       quality: 1,
//       base64: true,
//       exif: false,
//     };

//     let newPhoto = await cameraRef.current.takePictureAsync(options);
//     setPhoto(newPhoto);
//   };

//   if (photo) {
//     let sharePic = () => {
//       shareAsync(photo.uri).then(() => {
//         setPhoto(undefined);
//       });
//     };

//     let savePhoto = () => {
//       MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
//         setPhoto(undefined);
//       });
//     };

//     return (
//       <SafeAreaView style={styles.container}>
//         <Image
//           style={styles.preview}
//           source={{ uri: "data:image/jpg;base64," + photo.base64 }}
//         />
//         <Button title="Share" onPress={sharePic} />
//         {hasMediaLibraryPermission ? (
//           <Button title="Save" onPress={savePhoto} />
//         ) : undefined}
//         <Button title="Discard" onPress={() => setPhoto(undefined)} />
//       </SafeAreaView>
//     );
//   }

//   return (
//     <Camera style={styles.container} ref={cameraRef}>
//       <View style={styles.buttonContainer}>
//         <Button title="Take Pic" onPress={takePic} />
//       </View>
//       <StatusBar style="auto" />
//     </Camera>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonContainer: {
//     backgroundColor: "#fff",
//     alignSelf: "flex-end",
//   },
//   preview: {
//     alignSelf: "stretch",
//     flex: 1,
//   },
// });

import React, { useState } from "react";
import { View, Text, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

export default function HomeScreen({ navigation }) {
  // const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      // aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const data = new FormData();
      for (let i = 0; i < result.assets.length; i++) {
        data.append("files", {
          uri: result.assets[i].uri,
          type: result.assets[i].type,
          name: result.assets[i].fileName,
        });
      }
      await axios
        .post(
          "http://169.232.127.97:8000/upload",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
          {
            onUploadProgress: (progressEvent) => {
              console.log(
                "Upload Progress: " +
                  Math.round(
                    (progressEvent.loaded / progressEvent.total) * 100
                  ) +
                  "%"
              );
            },
          }
        )
        .catch((error) => console.log(error));
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Opened Camera" onPress={pickImage} />
    </View>
  );
}
