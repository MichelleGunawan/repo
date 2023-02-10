import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import tailwind from 'tailwind-rn'
import RegisterScreen from './RegisterScreen';


// const SignUpStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="SignUp" component={RegisterScreen} />   
    </HomeStack.Navigator>
  );
}
export default function LoginScreen({navigation}) {

    const styles = StyleSheet.create({
  centered: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffc2c2",
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
  },
});

    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


    return (
    //   <View style={{padding: 20}}>
    //     <Text>This is Loginbkhk</Text>
        <View style={styles.centered}>
        <Text style={{padding: 10}}>Login Page</Text>
        <TextInput
        style={{padding: 10, borderWidth : 5}}
          value={username}
          placeholder={'Username'}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TextInput
        style={{padding: 10, borderWidth : 5}}
          value={password}
          placeholder={'Password'}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              New Here ? Register
            </Text>
        </View>
    //   </View>
    );
  }