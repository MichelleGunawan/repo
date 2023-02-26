'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    color: {
        primary: '#536531',
        secondary: '#9AAA7A',
        tertiary: '#C5CFB3'
    },
    convo: {
        padding: 20, 
        marginTop: 200, 
        marginBottom: 200,
        position: 'absolute', 
        width: 350, 
        height: 157, 
        backgroundColor: '#C5CFB3', 
        borderRadius: 5,
        alignItems:'center'
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
});