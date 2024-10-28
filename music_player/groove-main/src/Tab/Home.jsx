import { Text, View, Pressable } from "react-native";
import React, { useContext } from "react";
import { styles, Main_color } from "../../global_style";
import { SongContext } from "../store";
import Is_Playing from "../Animations/Is_Playing";

export default function Home() {
  const { song } = useContext(SongContext);
  const handlePress = () => {
    console.log(song._loaded);
  };
  return (
    <View style={styles.container}>
      <Is_Playing />
    </View>
  );
}
