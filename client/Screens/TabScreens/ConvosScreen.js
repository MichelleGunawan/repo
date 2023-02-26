import React from 'react';
import {View, Text, Image, TextInput, FlatList, Dimensions} from 'react-native';
import {TestImage} from '../../assets/test.jpg';
import { Feather, AntDesign } from '@expo/vector-icons'; 
import styles from '../style';

import Convo from '../Components/Convo'
import TabBar from '../Components/TabBar'

//stylesheet: https://stackoverflow.com/questions/30853178/react-native-global-styles


export default function ConvosScreen(props) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const onPress = () => {
    props.navigation.navigate('NewChat');
  };

  //use usState when implementing backend
  const chats = [
    { name: 'Roommates', description: 'the best shlump' },
    { name: 'RoadTrippin', description: 'chaotic drives' },
    { name: 'Keeping Up with TSwift', description: 'eras tour' },
  ];

  const renderItem = ({ item }) => {
    console.log(item)
    return <Convo style={[styles.convo, styles.shadow]} name={item.name} description={item.description} />;
  };

    return (
      <View style={{flex: 1, width: windowWidth, height: windowHeight}}>
        <View>
        <Text style={{position: 'absolute', width: 169, height: 44, left: 20, top: 69, fontFamily: 'Nunito', fontStyle: 'normal', fontWeight: '600', fontSize: 32, lineHeight: 44, color: '#425027'}}>Chats</Text>
        <AntDesign name="pluscircleo" size={40} color= "#63793B" style={{position: 'absolute', right: 20, top: 69}} onPress={onPress}/>
        </View>

        <View style={{position: 'absolute', width: 350, height: 28, left: 20, top: 143}}>
          <TextInput style={{position: 'absolute', width: '100%', height: 33, left: 0, top: 0, backgroundColor: '#DEE2E6', borderRadius: 5, paddingLeft: 10, flex:1, flexDirection:'column', justifyContent:'center'}}>
            <Feather name="search" size={20} color="#777777"/>
            <Text style={{fontFamily: 'Nunito', fontStyle: 'normal', fontWeight: '500', fontSize: 14, lineHeight: 19, display: 'flex', alignItems: 'center', color: '#777777'}}>Search</Text>
          </TextInput>
        </View>

        
        {/* <FlatList
        style={{ marginTop: 200 }}
        data={chats}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
      /> */}
      {chats.map((chat, index) => (
        <View key={index} style={{marginBottom: 175, alignItems:'center'}} >
          <Convo name={chat.name} description={chat.description}/>
        </View>
      ))}

        <TabBar/>
        
      </View>
    );
  }