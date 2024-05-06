import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavTab from "./src/Tab";
import { Main_color } from "./global_style";
import { SafeAreaView } from "react-native";

const Stack = createNativeStackNavigator();

function HomeScreen() {
	return (
		<SafeAreaView
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>Home Screen</Text>
		</SafeAreaView>
	);
}

export default function App() {
	return (
		<NavigationContainer style={styles.container}>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Tab" component={NavTab} />
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
