import React from 'react';
import {View, Text, Button} from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontWeight: 'bold', fontSize: '20', fontStyle:'italic'}}>Home Screen</Text>
        <Button
          title="see comments"
          onPress={() => navigation.navigate('Comments')}
          color='steelblue'
        />
      </View>
    );
}

