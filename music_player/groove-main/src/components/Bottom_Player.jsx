import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { styles, Main_color } from "../../global_style";
import { Ionicons } from "@expo/vector-icons";
import no_artwork from "../../assets/images/no_artwork.png";
import { useContext } from "react";
import Track_slider from "./Track_slider";
import { SongContext } from "../store";
import { Card, Button } from "react-native-paper";
export default function () {
  const button_size = 32;
  const song = useContext(SongContext);

  return (
    <View style={styles.bottom_player}>
      {/* <Pressable onPress={navigation.navigate("Player")}> */}
      <Image
        style={{ width: 80, height: 80, borderRadius: 15 }}
        source={no_artwork}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.Secondary_text}>test</Text>
        <Track_slider />
      </View>

      <Pressable
        style={{
          padding: 20,
        }}
      >
        <Ionicons
          name="play"
          size={button_size}
          color={Main_color.Button_color}
        />
      </Pressable>
      <Pressable>
        <Ionicons
          name="play-skip-forward"
          size={button_size}
          color={Main_color.Button_color}
        />
      </Pressable>

      {/* </Pressable> */}
    </View>
  );
}
