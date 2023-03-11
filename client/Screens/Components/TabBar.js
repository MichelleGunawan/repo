import React, { Component } from 'react';
import {View, Text, Image, TextInput, Pressable, StyleSheet} from 'react-native';
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
        <View style={styles.container}>
            <Pressable style={styles.icon} onPress={() => { navigation.navigate('Profile') }}>
                <Octicons name="person" size={24} color="black"/>
            </Pressable>
            <Pressable style={styles.icon} onPress={() => { }}>
            <MaterialIcons name="chat-bubble-outline" size={24} color="black"/>
            </Pressable>


            <Pressable style={styles.icon} onPress={() => { }}>
                <AntDesign name="pluscircle" size={45} color="#63793B" style={{margin: -11}}/>
            </Pressable>
            
            <Pressable style={styles.icon} onPress={() => { navigation.navigate('Discover') }}>
                <Ionicons name="search" size={24} color="black" />
            </Pressable>
            
            <Pressable style={styles.icon} onPress={() => { navigation.navigate('Discover') }}>
                <Ionicons name="md-notifications-outline" size={24} color="black" onPress={() => { navigation.navigate('Home') }}/>
            </Pressable>
            
        </View>        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'space-around', 
        flexDirection: 'row', 
        padding: 15, 
        position: 'absolute', 
        bottom: 0, 
        width: '100%', 
        height: 75, 
        backgroundColor: 'white'
    },

    icon:{height:'100%' }
  });

export default TabBar;