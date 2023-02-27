import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PrivatePostsHeader({}) {
  const navigation = useNavigation();
  
  return (
      <View style={styles.container}>
        <Text style={styles.title}> My Albums </Text>
        <TouchableOpacity style={styles.select}>
          <Text> Select </Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },

  title: {
    fontSize:18, 
    paddingTop:5
  },

  select: {
    backgroundColor:'gainsboro', 
    borderRadius:5, 
    padding:5,
    justifyContent:'center',
    alignSelf: 'flex-end',
    marginBottom: 5,
    marginTop:2
  },
});