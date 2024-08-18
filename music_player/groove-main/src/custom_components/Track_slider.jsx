import { View, Text } from "react-native";
import React, { useEffect, useContext } from "react";
import Slider from "@react-native-community/slider";
import { Main_color } from "../../global_style";
import { SongContext } from "../store";

export default function Track_slider({ Duration }) {
  const { song } = useContext(SongContext);
  const format_minutes = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);

    // Format seconds to be always two digits
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${formattedSeconds}`;
  };
  const [value, setValue] = React.useState(0);
  const UpdatePosition = async (newPosition) => {
    await song.playFromPositionAsync(newPosition);
  };
  useEffect(() => {
    // Function to be executed every second
    const getPosition = async () => {
      const status = await song.getStatusAsync();
      setValue(status.positionMillis);
    };

    // Set up the interval
    const intervalId = setInterval(getPosition, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <View style={{ display: "flex", flexDirection: "column", width: "90%" }}>
      <Slider
        style={{ width: "100%", height: 10 }}
        minimumValue={0}
        maximumValue={Duration}
        step={1}
        value={value}
        minimumTrackTintColor={Main_color.Button_color}
        maximumTrackTintColor={Main_color.Button_color}
        thumbTintColor={Main_color.Button_color}
        onSlidingComplete={(result) => UpdatePosition(result)}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text style={{ color: Main_color.Button_color }}>
          {format_minutes(value)}
        </Text>
        <Text style={{ color: Main_color.Button_color }}>
          {format_minutes(Duration)}
        </Text>
      </View>
    </View>
  );
}
