import React from 'react';
import {View, Text} from 'react-native';

export default function ProfileScreen( ) {
    return (
      <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontWeight: 'bold', fontSize: '20', fontStyle:'italic'}}>Profile Screen</Text>
        {/* <Button
          title="settings"
          onPress={() => navigation.navigate('Settings')}
          color='steelblue'
        /> */}
      </View>
    );
  }