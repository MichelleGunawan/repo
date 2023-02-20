import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

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
        data.append('files', {
          uri: result.assets[i].uri,
          type: result.assets[i].type,
          name: result.assets[i].fileName
        });
      }
      await axios.post('http://169.232.127.97:8000/upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }, {
        onUploadProgress: progressEvent => {
          console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
        }
      }).catch(error => console.log(error));
    }

  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: '20', fontStyle: 'italic' }}>Home Screen</Text>
      <Button title="Pick image from camera roll" onPress={pickImage} />
      <Button
        title="see comments"
        onPress={() => navigation.navigate('Comments')}
        color='steelblue'
      />
    </View>
  );
}