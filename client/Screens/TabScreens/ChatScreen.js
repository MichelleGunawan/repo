import React from 'react';
import {View, Text, Image, TextInput, KeyboardAvoidingView} from 'react-native';
import {TestImage} from '../../assets/test.jpg';
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons'; 

import Convo from '../Components/Convo'

//stylesheet: https://stackoverflow.com/questions/30853178/react-native-global-styles


export default function ChatScreen(props) {
   const styles = require('../style')

    //onPress To Navigate
    const goBack = () => {
        props.navigation.navigate('Convos');
    };


    return (
      <KeyboardAvoidingView behavior= 'height' style={{flex: 1, alignItems: 'center'}}>
        <View style={{position: 'absolute', width: 390, height: 118, left: 0, top: 0, backgroundColor: '#9AAA7A'}}>
        <Ionicons name="md-chevron-back-outline" size={40} color="white" style={{marginLeft: 20, marginTop: 58}} onPress={goBack}/>

        <View style={{position: 'absolute', width: 43, height: 43, marginLeft: 70, marginTop: 58, borderWidth: 0.5, borderColor: 'grey', backgroundColor: 'black'}}/>

        <View style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 0, gap: 1, position: 'absolute',width: 150, height: 44, left: 127, top: 50,}}>
            <Text style={{width: '100%', height: 27, fontFamily: 'Nunito', fontStyle: 'normal', fontWeight: '700', fontSize: 20, lineHeight: 27, color: '#FFFFFF', flex: 'none', order: 0, flexGrow: 0}}>Roomates</Text>
            <Text style={{width: '100%', height: 16, fontFamily: 'Nunito', fontStyle: 'normal', fontWeight: '600', fontSize: 12, lineHeight: 16, color: '#FFFFFF', flex: 'none', order: 1, flexGrow: 0}}>Active 2 min ago</Text>
        </View>

        <Ionicons name="albums-outline" size={40} color="black" style={{position: 'absolute', right: 20, marginTop: 58}}/>
        
        </View>


        <View style={{ flexDirection: 'row',  position: 'absolute', bottom: 0, width: '100%', height: 85, padding: 10, backgroundColor: '#D9D9D9'}}>
            <View>
                <Feather name="camera" size={24} color="black" style={{margin:10, flex:1}}/>
            </View>
            <View>
                <FontAwesome name="photo" size={24} color="black" style={{margin:10, flex:1}}/>
            </View>

            <View style={{width: '75%'}}>
            <TextInput placeholder='text' style={{position: 'absolute', width: '95%', margin: 5, height: 33, left: 0, top: 0, backgroundColor: '#DEE2E6', borderRadius: 15, paddingLeft: 10, flex: 8}}/>
            </View>
        </View>
      </KeyboardAvoidingView>
    );
  }