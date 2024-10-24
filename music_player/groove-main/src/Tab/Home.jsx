import { Text, View, Pressable } from "react-native";
import React, { useContext } from "react";
import { styles, Main_color } from "../../global_style";
import { SongContext } from "../store";

export default function Home() {
  const { song } = useContext(SongContext);
  const handlePress = () => {
    // console.log(song._loaded);
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => handlePress()}
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "10%",
          paddingBottom: "5%",
          alignItems: "center",
          borderBottomColor: Main_color.Third_color,
          borderBottomWidth: 1,
        }}
      >
        <Text style={styles.Secondary}>{song._loaded}</Text>
      </Pressable>
    </View>
  );
}
