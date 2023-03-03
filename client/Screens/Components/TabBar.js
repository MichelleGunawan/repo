import React, { Component } from 'react';
import {View, Text, Image, TextInput, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, AntDesign, Ionicons, Octicons, MaterialIcons } from '@expo/vector-icons'; 


const TabBar =(props) =>{

    //const styles = require('../style')

    const navigation = useNavigation();

    const onPress = (screen) => {
        console.log(screen);
    navigation.navigate(screen);
  };

    return(
        <View style={{ flex: 1, justifyContent: 'space-around', flexDirection: 'row', padding: 15, position: 'absolute', bottom: 0, width: '100%', height: 75, backgroundColor: 'white'}}>
            <Pressable style={{height:'100%' }} onPress={() => { navigation.navigate('Profile') }}>
                <Octicons name="person" size={24} color="black"/>
            </Pressable>
            <Pressable style={{height:'100%' }} onPress={() => { }}>
            <MaterialIcons name="chat-bubble-outline" size={24} color="black"/>
            </Pressable>



            <AntDesign name="pluscircle" size={45} color="#63793B" style={{margin: -11}}/>
            <Pressable style={{height:'100%' }} onPress={() => { navigation.navigate('Discover') }}>
                <Ionicons name="search" size={24} color="black" />
            </Pressable>
            
            <Ionicons name="md-notifications-outline" size={24} color="black" onPress={() => { navigation.navigate('Home') }}/>
        </View>        
    )
}

export default TabBar;