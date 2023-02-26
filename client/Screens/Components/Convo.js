import React, { Component } from 'react';
import {View, Text, Image, TextInput, Pressable} from 'react-native';
import {TestImage} from '../../assets/test.jpg';
import { useNavigation } from '@react-navigation/native';

const Convo =(props) =>{
  
  const {name, description} = props;

  const styles = require('../style')
    
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Chat');
  };

    return(
        <Pressable style={{...styles.convo, ...styles.shadow}} onPress={onPress}>
          
        <View style={{position: 'absolute', width: 81, height: 81, left: 14, top: 47, backgroundColor: "#000"}}/>

        <Text style={{position: 'absolute', width: 118, height: 27, left: 128, top: 14, fontFamily: 'Nunito', fontStyle: 'normal', fontWeight: 'bold', fontSize: 20, lineHeight: 27, color: '#425027'}}>
          {name}
        </Text>

        <Text style={{position: 'absolute', width: 88, height: 16, left: 131, top: 43, fontFamily: 'Nunito', fontStyle: 'italic', fontWeight: 'normal', fontSize: 12, lineHeight: 16, color: '#425027'}}>
          {description}
        </Text>

        <View style={{position: 'absolute', width: 30, height: 16, left: 306, top: 14, backgroundColor:'#9AAA7A', borderRadius: 20, flex: 1, justifyContent:'center', alignItems: 'center'}}>
          <Text style={{position: 'absolute', fontFamily: 'Nunito', fontStyle: 'normal', fontWeight: 'normal', color: 'white', fontSize: 12}}>
            20
          </Text>
        </View>        
          
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: 0, position: 'absolute', width: 138, height: 40, left: 118, top: 91, }}>
        <View style={{position: 'absolute', width: 30, height: 30, left: 12.5, right: 12.5, top: 12.5, bottom: 12.5, borderRadius: 20, backgroundColor: 'black'}}/> 
        <View style={{position: 'absolute', width: 30, height: 30, left: 12.5+15, right: 12.5, top: 12.5, bottom: 12.5, borderRadius: 20, backgroundColor: 'white'}}/> 
        </View>
        
        </Pressable>
    )
}

export default Convo;