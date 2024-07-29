import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bottom_tab from "./Tab";
import Player from "./Player";
import Detail from "./Detail";

const Stack = createNativeStackNavigator();

export default function index() {
	return (
		<NavigationContainer style={styles.container}>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Tab" component={Bottom_tab} />
				<Stack.Screen name="Detail" component={Detail} />
				<Stack.Group screenOptions={{ presentation: "modal" }}>
					<Stack.Screen name="Player" component={Player} />
				</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		alignItems: "center",
		justifyContent: "center",
	},
});
