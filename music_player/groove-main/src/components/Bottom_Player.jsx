import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { styles, Main_color } from "../../global_style";
import { Ionicons } from "@expo/vector-icons";
import no_artwork from "../../assets/images/no_artwork.png";
import { useContext } from "react";
import Track_slider from "./Track_slider";
import { SongContext } from "../store";
import { SettingContext } from "../store/Settings";
import usePlayerControls from "../hooks/usePlayerControls";
import { Card, Button } from "react-native-paper";
export default function () {
  const button_size = 32;
  const { song, activeTrack, isPlaying, setIsPlaying } =
    useContext(SongContext);
  const { Main_color } = useContext(SettingContext);
  const { handlePlayButton, handleNextButton } = usePlayerControls();

  return (
    <View
      style={[
        styles.bottom_player,
        { backgroundColor: Main_color.Third_color },
      ]}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {/* <Pressable onPress={navigation.navigate("Player")}> */}
        {activeTrack.artwork ? (
          <Image
            style={{ width: 80, height: 80, borderRadius: 15 }}
            source={{ uri: activeTrack.artwork }}
          />
        ) : (
          <Image
            style={{ width: 80, height: 80, borderRadius: 15 }}
            source={no_artwork}
          />
        )}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            flex: 0.5,
          }}
        >
          <Text style={styles.Primary_text} numberOfLines={1}>
            {activeTrack.title}
          </Text>
          <Text style={styles.Secondary_text}>{activeTrack.artist}</Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 0.3,
          }}
        >
          <Pressable onPress={handlePlayButton}>
            <Ionicons
              name={isPlaying ? "pause" : "play"}
              size={button_size}
              color={Main_color.Button_color}
            />
          </Pressable>
          <Pressable onPress={handleNextButton}>
            <Ionicons
              name="play-skip-forward"
              size={button_size}
              color={Main_color.Button_color}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
