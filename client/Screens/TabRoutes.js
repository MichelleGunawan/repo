import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './TabScreens/HomeScreen';
import CommentsScreen from './TabScreens/CommentsScreen';
import ProfileScreen from './TabScreens/ProfileScreens/ProfileScreen';
import EditProfileScreen from './TabScreens/ProfileScreens/EditProfileScreen';
import { DiscoverTabs } from "./TabScreens/Discover/DiscoverTabs";

//// for tabs in bottom nav bar
//// each tab will have their own navigation stack

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Repo" component={HomeScreen} />
			{/* comments page - just an example of nav stack use */}
			<HomeStack.Screen
				name="Comments"
				component={CommentsScreen}
				options={{ headerBackTitleVisible: false }}
			/>
		</HomeStack.Navigator>
	);
}

const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Edit Profile" component={EditProfileScreen} options={{ headerBackTitleVisible: false }}/>
    </ProfileStack.Navigator>
  );
}

const DiscoverStack = createNativeStackNavigator();
function DiscoverStackScreen() {
	return (
		<DiscoverStack.Navigator>
			<ProfileStack.Screen name="Discover" component={DiscoverTabs} />
		</DiscoverStack.Navigator>
	);
}

const Tab = createBottomTabNavigator();
export default function Tabs() {

return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === "Home") {
						iconName = focused ? "ios-home" : "ios-home-outline";
					} else if (route.name === "Profile") {
						iconName = focused ? "ios-person" : "ios-person-outline";
					} else if (route.name === "Discover") {
						iconName = focused ? "ios-search" : "ios-search-outline";
					}
          
					return <Ionicons name={iconName} size={size} color={color} />;
				},

				tabBarActiveTintColor: "steelblue",
				tabBarInactiveTintColor: "gray",
			})}>
			<Tab.Screen
				name="Home"
				component={HomeStackScreen}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileStackScreen}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Discover"
				component={DiscoverStackScreen}
				options={{ headerShown: false }}
			/>
		</Tab.Navigator>
	);
}

