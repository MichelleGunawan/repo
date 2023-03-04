import React, { Component } from 'react';
import {View, Text, Image, TextInput, Pressable, StyleSheet,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, AntDesign, Ionicons, Octicons, MaterialIcons } from '@expo/vector-icons'; 


const AlbumView =(props) =>{

    let image1, image2, image3, image4 = '';

    image1, image2, image3, image4, albumId = {props}; //props.imageID

    
    const navigation = useNavigation();

    //pass albumId onto onPress
    const onPress = (screen) => {
        console.log(screen);
        navigation.navigate(screen);
    };

    //set background image to image1, image2, image3
    return(
    <View style={styles.container}>
      <View style={styles.topLeft}></View>
      <View style={styles.topRight}></View>
      <View style={styles.bottomLeft}></View>
      <View style={styles.bottomRight}></View>
      
    </View>         
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute', 
        width: 180,
        height: 180, 
        left: 0, 
        top: 10
    },

    topLeft: {
        position: 'absolute', 
        left: '0%',
        right: '50%',
        top: '0%', 
        bottom: '50%', 
        borderTopLeftRadius:15, 
        backgroundColor:'#000', 
        background:''
    },

    topRight: {
        position: 'absolute', 
        left: '50%',
        right: '0%',
        top: '0%', 
        bottom: '50%', 
        borderTopRightRadius:15, 
        backgroundColor:'#FFF'
    },

    bottomLeft: {
        position: 'absolute', 
        left: '0%',
        right: '50%',
        top: '50%', 
        bottom: '0%', 
        borderBottomLeftRadius:15, 
        backgroundColor:'#FFF'
    },

    bottomRight:{
        position: 'absolute', 
        left: '50%',
        right: '0%',
        top: '50%', 
        bottom: '0%', 
        borderBottomRightRadius:15, 
        backgroundColor:'#FFF'}
  });

export default AlbumView;