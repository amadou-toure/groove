import { View, Text } from "react-native";
import React from "react";
import { useEffect, useContext } from "react";
import { SettingContext } from "../store/Settings";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
} from "react-native-reanimated";

const Item = () => {
  const opacity = useSharedValue(1.1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  }, []);
  useEffect(() => {
    opacity.value = withRepeat(withSpring(0.7), -1, true);
  }, []);
  const { Main_color } = useContext(SettingContext);
  return (
    <Animated.View
      style={[
        {
          display: "flex",
          flexDirection: "row",
          marginTop: "10%",
          width: "90%",
          paddingBottom: "5%",
          alignItems: "center",
          justifyContent: "center",
          borderBottomColor: Main_color.Third_color,
          borderBottomWidth: 1,
        },
        animatedStyle,
      ]}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 15,
          marginRight: 20,
          backgroundColor: Main_color.Third_color,
        }}
      ></View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <View
          style={{
            width: 260,
            height: 20,
            borderRadius: 15,
            backgroundColor: Main_color.Third_color,
            marginBottom: 5,
          }}
        ></View>
        <View
          style={{
            width: 160,
            height: 20,
            borderRadius: 15,
            backgroundColor: Main_color.Third_color,
          }}
        ></View>
      </View>
    </Animated.View>
  );
};

export default function Track_Loading() {
  const { Main_color } = useContext(SettingContext);
  return (
    <View style={{ backgroundColor: Main_color.bg_color }}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </View>
  );
}
