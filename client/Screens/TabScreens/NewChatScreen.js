import React from 'react';
import {View, Text, Image, TextInput, KeyboardAvoidingView} from 'react-native';
import {TestImage} from '../../assets/test.jpg';
import { AntDesign } from '@expo/vector-icons'; 
import styles from '../style';

import Convo from '../Components/Convo'

//stylesheet: https://stackoverflow.com/questions/30853178/react-native-global-styles


export default function NewChatScreen(props) {

    //onPress To Navigate
    const goBack = () => {
        props.navigation.navigate('Convos');
    };


    return (
      <KeyboardAvoidingView behavior= 'height' style={{flex: 1, alignItems: 'center'}}>
        <View style={{position: 'absolute',width: 150, height: 150, left: 143, top: 111}}>
            <View style={{position: 'absolute', width: 104, height: 104, left: 0, top: 0, background: '#D9D9D9', borderRadius: 20, backgroundColor:'black'}}></View>
            <AntDesign name="pluscircle" size={24} color="#6C757D" style={{position: 'absolute', width: 22, height: 22, left: 86, top: 86}}/>
        </View>

        <TextInput placeholder='Group Name' style={{ marginBottom: 100, width: 350, height: 36, top: 245, backgroundColor:'#DBE1D0', borderRadius: 8}}/>
        <TextInput placeholder='Group Name' style={{ marginTop: 150, width: 350, height: 80, backgroundColor:'#DBE1D0', borderRadius: 8}}/>

        <View style={{borderTop: 0.5, borderColor: 'grey', marginTop:100}}>

        </View>
      </KeyboardAvoidingView>
    );
  }