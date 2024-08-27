//import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home.jsx";
import Setting from "./Setting.jsx";
import Track from "./Track.jsx";
import Favorite from "./Favorite.jsx";
import { Main_color } from "../../global_style.js";
import { Ionicons } from "@expo/vector-icons";
import { getHeaderTitle } from "@react-navigation/elements";
import Bottom_Player from "../custom_components/Bottom_Player.jsx";
import { SongContext } from "../store/index.jsx";
import { useContext } from "react";
import { BlurView } from "expo-blur";
import { Text, SafeAreaView } from "react-native";
import { styles } from "../../global_style.js";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function () {
  const song = useContext(SongContext);
  return (
    <>
      <Tab.Navigator
        initialRouteName="Track"
        labeled={false}
        screenOptions={({ route }) => ({
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            return (
              <SafeAreaView style={options.headerStyle}>
                <Text
                  style={[
                    styles.Title_text,
                    { marginTop: "5%", marginBottom: 0, width: "70%" },
                  ]}
                >
                  {title}
                </Text>
              </SafeAreaView>
            );
          },

          headerStyle: {
            backgroundColor: "#000",
          },
          tabBarShowLabel: false,

          tabBarActiveTintColor: "#FF7878",
          tabBarInactiveTintColor: "#EBE6E4",
          tabBarStyle: {
            position: "absolute",
            marginLeft: 9,
            marginRight: 9,
            marginBottom: 9,
            borderRadius: 25,
            height: "10%",
            overflow: "hidden",
            borderColor: "transparent",
            backgroundColor: Main_color.Third_color,
          },
          tabBarIcon: ({ focused }) => {
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
            return (
              <>
                <Ionicons
                  name={iconName}
                  size={30}
                  color={iconColor}
                />
              </>
            );
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
        />
        <Tab.Screen
          name="Track"
          component={Track}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
        />
      </Tab.Navigator>
    </>
  );
}
