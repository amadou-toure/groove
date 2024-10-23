//import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home.jsx";
import Setting from "./Setting.jsx";
import Track from "./Track.jsx";
import Favorite from "./Favorite.jsx";
import { SettingContext } from "../store/Settings.jsx";
import { Ionicons } from "@expo/vector-icons";
import { getHeaderTitle } from "@react-navigation/elements";
import Bottom_Player from "../components/Bottom_Player.jsx";
import { SongContext } from "../store/index.jsx";
import { useContext } from "react";
import { BlurView } from "expo-blur";
import { Text, SafeAreaView } from "react-native";
import { styles } from "../../global_style.js";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Platform } from "react-native";
const Tab = createBottomTabNavigator();

export default function () {
  const { song, isOpened, setIsOpened } = useContext(SongContext);

  const { Main_color } = useContext(SettingContext);
  return (
    <>
      <Tab.Navigator
        initialRouteName="Library"
        labeled={false}
        screenOptions={({ route }) => ({
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            return (
              <SafeAreaView style={options.headerStyle}>
                <Text style={[styles.Title_text]}>{title}</Text>
              </SafeAreaView>
            );
          },

          headerStyle: {
            marginTop: Constants.statusBarHeight,
            backgroundColor: Main_color.Third_color,
            width: "100%",
            alignItems: "center",
            justifyContent: "center ",
          },
          tabBarShowLabel: false,

          tabBarActiveTintColor: "#FF7878",
          tabBarInactiveTintColor: "#EBE6E4",
          tabBarStyle: {
            position: "absolute",
            marginLeft: 9,
            marginRight: 9,
            marginBottom: 9,
            borderTopEndRadius: isOpened ? 0 : Platform.OS === "ios" ? 60 : 20,
            borderTopStartRadius: isOpened
              ? 0
              : Platform.OS === "ios"
              ? 60
              : 20,
            borderBottomStartRadius: Platform.OS === "ios" ? 60 : 20,
            borderBottomEndRadius: Platform.OS === "ios" ? 60 : 20,
            height: 100,
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
            } else if (route.name === "Library") {
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
                <Ionicons name={iconName} size={30} color={iconColor} />
              </>
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Library" component={Track} />
        <Tab.Screen name="Favorite" component={Favorite} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
    </>
  );
}
