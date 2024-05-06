import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./Home.jsx";
import Setting from "./Setting.jsx";
import Track from "./Track.jsx";
import Favorite from "./Favorite.jsx";
import { styles, Main_color } from "../../global_style.js";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { getHeaderTitle } from "@react-navigation/elements";

header: ({ navigation, route, options }) => {
	const title = getHeaderTitle(options, route.name);

	return <MyHeader title={title} style={options.headerStyle} />;
};

const Tab = createMaterialBottomTabNavigator();
export default function () {
	return (
		<Tab.Navigator
			initialRouteName="Track"
			labeled={false}
			barStyle={{
				marginLeft: 10,
				marginRight: 10,
				marginBottom: 15,
				borderRadius: 30,
				position: "absolute",
				overflow: "hidden",
				opacity: 0.8,
				backgroundColor: Main_color.Third_color,
				tabBarBackground: () => <BlurView tint="dark" intensity={50} />,
			}}
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: "#FF7878",
				tabBarInactiveTintColor: "#EBE6E4",
				headerShown: true,
				tabBarIcon: ({ focused, color, size }) => {
					if (route.name === "Home") {
						iconName = focused ? "home" : "home-outline";
						iconColor = focused
							? Main_color.Secondary_color
							: Main_color.Primary_color;
					} else if (route.name === "Track") {
						iconName = focused ? "musical-notes" : "musical-notes-outline";
						iconColor = focused
							? Main_color.Secondary_color
							: Main_color.Primary_color;
					} else if (route.name === "Favorite") {
						iconName = focused ? "heart" : "heart-outline";
						iconColor = focused
							? Main_color.Secondary_color
							: Main_color.Primary_color;
					} else if (route.name === "Setting") {
						iconName = focused ? "person" : "person-outline";
						iconColor = focused
							? Main_color.Secondary_color
							: Main_color.Primary_color;
					}
					return <Ionicons name={iconName} size={28} color={iconColor} />;
				},
			})}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Track" component={Track} />
			<Tab.Screen name="Favorite" component={Favorite} />
			<Tab.Screen name="Setting" component={Setting} />
		</Tab.Navigator>
	);
}
