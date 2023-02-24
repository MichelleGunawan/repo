import * as React from "react";
import { Input } from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';


export default function EditProfileScreen({ navigation }){
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.done} onPress={() => navigation.goBack()}>
        <Text> Done </Text>
      </TouchableOpacity>
      <Icon 
        size={100}
        name='account-circle'
        type='material-community'
      />
      <Ionicons
        size={25}
        name='repeat'
      />
      <Input
        disabledInputStyle={{ background: "#ddd" }}
        label="Username"
        labelStyle={{fontSize: 18, paddingVertical:10}}
        leftIcon={<Icon name="at" size={15}/>}
        placeholder="username"
        inputStyle={{fontSize:15}}
        inputContainerStyle={styles.username}
      />
      
      <Input
        multiline
        disabledInputStyle={{ background: "#ddd" }}
        label="Bio"
        labelStyle={{fontSize: 18, paddingVertical:10}}
        placeholder="really cool and interesting bio here"
        numberOfLines={2}
        maxLength={100}
        inputStyle={{fontSize:15}}
        inputContainerStyle={styles.bio}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 20,
    marginHorizontal: 10,
    alignItems: 'center',
  },

  done: {
    backgroundColor:'gainsboro',
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginRight: 10,
    padding:5
  },

  username: {
    height: 40, 
    backgroundColor: 'gainsboro', 
    padding: 10, 
    borderRadius: 5, 
    borderBottomColor: 'transparent'
  },

  bio: {
    backgroundColor: 'gainsboro', 
    padding:10, 
    borderRadius:5, 
    borderBottomColor: 'transparent'
  }

});