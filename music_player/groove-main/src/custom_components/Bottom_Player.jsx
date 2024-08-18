import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { styles, Main_color } from "../../global_style";
import { Ionicons } from "@expo/vector-icons";
import no_artwork from "../../assets/images/no_artwork.png";
import Slider from "./Track_slider";
import { useContext } from "react";
import Track_slider from "./Track_slider";
import { SongContext } from "../store";
export default function () {
  const button_size = 32;
  const song = useContext(SongContext);

  return (
    <View style={styles.bottom_player}>
      <Text style={styles.Secondary_text}>test</Text>
      <Track_slider Duration={50000} />
    </View>
  );
}
