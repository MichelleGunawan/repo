import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRoutes from "./Screens/TabRoutes";
import SplashScreen from "./Screens/SplashScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";

// will include splash, login/register, and landing pages
// only has landing page now
const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			{/* change initial route name once login is set up*/}
			<Stack.Navigator initialRouteName="TabRoutes">
				<Stack.Screen
					name="TabRoutes"
					component={TabRoutes}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
