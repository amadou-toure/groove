import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { styles, Main_color } from "../global_style";
import { Ionicons } from "@expo/vector-icons";
import no_artwork from "../assets/images/no_artwork.png";
//import Slider from "@react-native-community/slider";
import Slider from "./custom_components/Track_slider";
import { useImageColors } from "./hooks/useImageColors";
import bgc from "../assets/Backgrounds/bg1.jpg";
export default function Player({ navigation, route }) {
  const { Artwork, Title, Artist, Duration } = route.params;
  const button_size = 32;
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  const bg = useImageColors();
  console.log(bg);
  return (
    <View style={[styles.Player, { backgroundColor: "#000" }]}>
      <View style={styles.Track_info}>
        {Artwork ? (
          <Image
            style={{ width: 300, height: 300, borderRadius: 15 }}
            source={{ uri: Artwork }}
          />
        ) : (
          <Image
            style={{ width: 300, height: 300, borderRadius: 15 }}
            source={no_artwork}
          />
        )}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            flex: 0.3,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "left",
              height: "50%",
              width: "80%",
            }}
          >
            <Text style={styles.Primary_text}>{Title}</Text>
            {Artist ? (
              <Text style={styles.Secondary_text}>{Artist}</Text>
            ) : (
              <Text style={styles.Secondary_text}>Unknown</Text>
            )}
          </View>
          <Pressable
            onPress={() => {
              isLiked ? setIsLiked(false) : setIsLiked(true);
            }}
          >
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              size={button_size}
              color={Main_color.Secondary_color}
            />
          </Pressable>
        </View>
        <Slider Duration={Duration} />
      </View>
      <View style={styles.Player_control}>
        <View
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            width: "80%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Pressable onPress={() => console.log("Shuffle")}>
            <Ionicons
              name="shuffle-outline"
              size={button_size}
              color={Main_color.Third_color}
            />
          </Pressable>
          <Pressable onPress={() => console.log("Skip-back")}>
            <Ionicons
              name="play-skip-back"
              size={button_size}
              color={Main_color.Third_color}
            />
          </Pressable>
          <Pressable
            style={{
              backgroundColor: Main_color.Third_color,
              borderRadius: 80,
              padding: 20,
            }}
            onPress={() => {
              isPlaying ? setIsPlaying(false) : setIsPlaying(true);
            }}
          >
            <Ionicons
              name={isPlaying ? "pause" : "play"}
              size={button_size}
              color={Main_color.Secondary_color}
            />
          </Pressable>
          <Pressable onPress={() => console.log("Skip-forward")}>
            <Ionicons
              name="play-skip-forward"
              size={button_size}
              color={Main_color.Third_color}
            />
          </Pressable>
          <Pressable onPress={() => console.log("repeat")}>
            <Ionicons
              name="repeat-outline"
              size={40}
              color={Main_color.Third_color}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
