import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
} from "react-native-reanimated";
import { SettingContext } from "../store/Settings";

const Element = ({ reversed }) => {
  const { Main_color } = useContext(SettingContext);
  const Height = reversed ? useSharedValue(10) : useSharedValue(30);

  const animatedStyle = useAnimatedStyle(() => {
    return { height: Height.value };
  }, []);
  useEffect(() => {
    Height.value = reversed
      ? withRepeat(withTiming(30), -1, true)
      : withRepeat(withTiming(10), -1, true);
  }, []);
  return (
    <Animated.View
      style={[
        { backgroundColor: Main_color.Button_color, width: 3, marginBottom: 0 },
        animatedStyle,
      ]}
    ></Animated.View>
  );
};

export default function Is_Playing() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: 25,
        height: 25,
      }}
    >
      <Element />
      <Element reversed="true" />
      <Element />
    </View>
  );
}
