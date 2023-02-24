import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Icon, Text } from '@rneui/themed';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrivatePosts from './PrivatePosts';

function PublicProfile() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontWeight: 'bold', fontSize: '20', fontStyle:'italic'}}>Public Screen</Text>
    </View>
  );
}

const PrfTab = createMaterialTopTabNavigator();
function PrfTabs() {
  return(
    <PrfTab.Navigator 
      style={{minHeight:500}}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === 'PrivatePosts') {
            iconName = 'box'
          }  
          else if (route.name === 'PublicProfile') {
            iconName = 'box-open' 
          }
          return <Icon name={iconName} type={'font-awesome-5'} size={'13%'} color={color} />;
        },

        tabBarActiveTintColor: 'steelblue',
        tabBarInactiveTintColor: 'gray',
        tabBarIndicatorStyle: {backgroundColor:'#d3d3d3'},
        tabBarShowLabel: false,
        tabBarStyle: {height: '8%', backgroundColor:'transparent'}
      })}>

    <PrfTab.Screen name="PrivatePosts" component={PrivatePosts} options={{ headerShown: false }}/>
    <PrfTab.Screen name="PublicProfile" component={PublicProfile} options={{ headerShown: false }}/>
    </PrfTab.Navigator>
  );
}

export default function ProfileScreen({ navigation }) {
    return (
      <SafeAreaView style={{flex: 1} } edges={['bottom', 'left', 'right']}>
        <View style={ styles.container }>
            <TouchableOpacity>
              <Icon 
              containerStyle={ styles.edit } 
              name='edit'
              onPress={() => navigation.navigate('Edit Profile')}/>
            </TouchableOpacity>
            <Icon 
              size={100}
              name='account-circle'
              type='material-community'/>
            <Text style={ styles.text }>@username</Text>
            <View style={ styles.bio }>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              </Text>
            </View>         
        </View>
        <View>
          <PrfTabs/>
        </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      marginTop:15,
      marginHorizontal:10,
    },

    edit: {
      alignSelf: 'flex-end',
      marginRight: 5,
    },

    text: {
      alignSelf: 'center',
      padding: 5,
      marginBottom: 10,
    },

    bio: {
      backgroundColor:'gainsboro',
      borderRadius: 5,
      marginBottom: 10,
      padding:10
    }
  });


  
