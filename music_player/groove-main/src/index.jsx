import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bottom_tab from "./Tab";
import Player from "./Player";
import { SettingContext } from "./store/Settings";
import { useContext } from "react";
import Detail from "./Detail";

//import Bottom_Player from "./custom_components/Bottom_Player";

const Stack = createNativeStackNavigator();

export default function index() {
  const { Main_color } = useContext(SettingContext);
  return (
    <>
      <StatusBar
        style="light"
        backgroundColor={Main_color.Third_color}
      />
      <NavigationContainer
        style={[styles.container, { backgroundColor: Main_color.bg_color }]}
      >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Tab"
            component={Bottom_tab}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
          />
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen
              name="Player"
              component={Player}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: Main_color.bg_color,
    alignItems: "center",
    justifyContent: "center",
  },
});
