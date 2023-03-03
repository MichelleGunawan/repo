import React, { Component } from 'react';
import {View, Text, Image, TextInput, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, AntDesign, Ionicons, Octicons, MaterialIcons } from '@expo/vector-icons'; 


const PeopleView =(props) =>{

    let image1, image2, image3 = '';

    image1, image2, image3 = {props}; //props.imageID


    //set background image to image1, image2, image3
    return(
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: 0, position: 'absolute'}}>
        <View style={{position: 'absolute', width: 30, height: 30, borderRadius: 100, backgroundColor: 'black'}}/> 
        <View style={{position: 'absolute', width: 30, height: 30, left: 17, borderRadius: 100, backgroundColor: 'white'}}/> 
        <View style={{position: 'absolute', width: 30, height: 30, left: 34, borderRadius: 100, backgroundColor: 'red'}}/> 
        <View style={{position: 'absolute',alignItems:'center', justifyContent:'center', width: 30, height: 30, left: 34, borderRadius: 100, backgroundColor: '#F0F0F080'}}>
          <Text>3+</Text>
        </View> 
      </View>       
    )
}

export default PeopleView;