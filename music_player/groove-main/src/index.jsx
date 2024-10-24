import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bottom_tab from "./Tab";
import Player from "./Player";
import { SettingContext } from "./store/Settings";
import { useContext } from "react";
import Detail from "./Detail";
import Bottom_Player from "./components/Bottom_Player";
import { SongContext } from "./store";

const Stack = createNativeStackNavigator();

export default function index() {
  const { Main_color } = useContext(SettingContext);
  const { song, isOpened, setIsOpened } = useContext(SongContext);

  return (
    <View style={{ flex: 1, backgroundColor: Main_color.bg_color }}>
      <StatusBar
        style="light"
        backgroundColor={Main_color.Third_color}
        //hidden={Platform.OS === "ios"}
      />

      <NavigationContainer
        style={[styles.container, { backgroundColor: Main_color.bg_color }]}
      >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tab" component={Bottom_tab} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen
              name="Player"
              component={Player}
              options={{ gestureDirection: "vertical" }}
            />
          </Stack.Group>
        </Stack.Navigator>

        {isOpened ? (
          <View
            style={{
              position: "absolute",
              marginTop: 655,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Bottom_Player />
          </View>
        ) : null}
      </NavigationContainer>
    </View>
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
