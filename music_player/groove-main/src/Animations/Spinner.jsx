import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
} from "react-native-reanimated";
import { Main_color } from "../../global_style";

export default function Spinner() {
  const SIZE = 30;
  const scale = useSharedValue(2);
  const progress = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [
        { scale: scale.value },
        { rotate: `${progress.value * 360}deg` },
      ],
    };
  }, []);
  useEffect(() => {
    progress.value = withRepeat(withSpring(0.7), -1, true);
    scale.value = withRepeat(withSpring(1), -1, true);
  }, []);
  return (
    <View>
      <Animated.View
        style={[
          {
            height: SIZE,
            width: SIZE,
            backgroundColor: Main_color.Secondary_color,
          },
          animatedStyle,
        ]}
      />
    </View>
  );
}
