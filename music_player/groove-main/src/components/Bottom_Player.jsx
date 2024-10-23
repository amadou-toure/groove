import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { styles } from "../../global_style";
import { Ionicons } from "@expo/vector-icons";
import no_artwork from "../../assets/images/no_artwork.png";
import { useContext } from "react";
import Track_slider from "./Track_slider";
import { SongContext } from "../store";
import { SettingContext } from "../store/Settings";
import usePlayerControls from "../hooks/usePlayerControls";
import { useNavigation } from "@react-navigation/native";
import { useNavigationState } from "@react-navigation/native";

export default function () {
  const navigation = useNavigation();
  const route = useNavigationState((state) => state); // 2 is the index of the player route
  const button_size = 32;
  const { song, activeTrack, isPlaying, setIsPlaying, isOpened, setIsOpened } =
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
          justifyContent: "space-around",
          alignItems: "center",
          width: "95%",
        }}
      >
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
          onPress={() => {
            navigation.navigate("Player");
            setIsOpened(false);
          }}
        >
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
              flex: 0.7,
            }}
          >
            <Text style={styles.Primary_text} numberOfLines={1}>
              {activeTrack.title}
            </Text>
            <Text style={styles.Secondary_text}>{activeTrack.artist}</Text>
          </View>
        </Pressable>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
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
