// do we want a splash screen? YES!

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
//import { InstagramEmbed } from 'react-social-media-embed';
import InstagramEmbed from 'react-native-embed-instagram'

export default function IgScreen() {
  const [data, setData] = useState(["loading"]);

  useEffect(() => {
        const fetchData = async () => {
      try {
        const response = await axios.post('http://192.168.0.106:8000/igSavedPosts', {
          ig_username: "",
          ig_password: ""
        });
        //console.log(response.data);
        const codes = (response.data).map(obj => obj.code);
        console.log(codes);
        setData(codes);
      } 
      catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <InstagramEmbed id={"CoYmONQL8dc"} style={{ width: '100%', height: '100%' }} />

     {/* {data.map((code) => (
      code === "loading" ? (
        <Text>Loading...</Text>
      ) : (
        <View key={code} style={{ height: 400 }}>
          <InstagramEmbed id={code} style={{ width: '100%', height: '100%' }} />
        </View>
      )
    ))} */}
  </View>
  );
}
