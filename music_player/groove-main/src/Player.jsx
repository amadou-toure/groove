import { View, Text, Image, Pressable, ImageBackground } from "react-native";
import React from "react";
import { styles, Main_color } from "../global_style";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import no_artwork from "../assets/images/no_artwork.png";
import { SongContext } from "./store";
import Slider from "./components/Track_slider";
import { BlurView } from "expo-blur";
import Constants from "expo-constants";
import { useSong } from "./hooks/useSong";
import usePlayerControls from "./hooks/usePlayerControls";
import Spinner from "./Animations/Spinner";

export default function Player({ navigation, route }) {
  const { handlePlayButton, handleNextButton, handlePrevButton } =
    usePlayerControls();
  const {
    setIsOpened,
    isPlaying,
    setShuffle,
    Shuffle,
    repeat,
    setRepeat,
    activeTrack,
  } = useContext(SongContext);
  const { artwork, title, artist } = activeTrack;
  const button_size = 32;
  const [isLiked, setIsLiked] = React.useState(false);
  //you need to fix this later: i should not have to use this use state(isPlaying)
  const { getStatus } = useSong();
  const Duration = getStatus();
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={artwork ? { uri: artwork } : no_artwork}
      blurRadius={70}
      resizeMode="cover"
    >
      <View style={[styles.Player, { backgroundColor: "rgba(0, 0, 0, 0.6)" }]}>
        <View
          style={{
            width: "90%",
            justifyContent: "center",
            alignItems: "flex-start",
            flex: 0.1,
            marginTop: Constants.statusBarHeight,
          }}
        >
          <BlurView
            style={[
              ,
              {
                backgroundColor: "transparent",
                borderRadius: 90,
                padding: 6,
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
            children={
              <Pressable
                onPress={() => {
                  navigation.goBack();
                  setIsOpened(true);
                }}
              >
                <Ionicons
                  name="chevron-back"
                  size={button_size}
                  color={Main_color.Button_color}
                />
              </Pressable>
            }
          />
        </View>
        <View style={styles.Track_info}>
          {artwork ? (
            <Image
              style={{ width: 350, height: 350, borderRadius: 15 }}
              source={{ uri: artwork }}
            />
          ) : (
            <Image
              style={{ width: 350, height: 350, borderRadius: 15 }}
              source={no_artwork}
            />
          )}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "90%",
            }}
          >
            {Shuffle ? (
              <BlurView
                style={[
                  ,
                  {
                    backgroundColor: Main_color.Secondary_color,
                    borderRadius: 20,
                    padding: 7,
                    overflow: "hidden",
                    marginRight: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
                children={
                  <Pressable onPress={() => setShuffle(!Shuffle)}>
                    <Text style={styles.Primary_text}>Shuffle</Text>
                  </Pressable>
                }
              />
            ) : (
              <BlurView
                style={[
                  ,
                  {
                    backgroundColor: "transparent",
                    borderRadius: 20,
                    padding: 7,
                    overflow: "hidden",
                    marginRight: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
                children={
                  <Pressable onPress={() => setShuffle(!Shuffle)}>
                    <Text style={styles.Primary_text}>Shuffle</Text>
                  </Pressable>
                }
              />
            )}

            <BlurView
              style={{
                backgroundColor: "transparent",
                borderRadius: 20,
                padding: 7,
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
              }}
              children={
                <Pressable onPress={() => console.log("repeat")}>
                  <Text style={styles.Primary_text}>repeat</Text>
                </Pressable>
              }
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "left",
                width: "80%",
              }}
            >
              <Text style={styles.Primary_text}>{title}</Text>
              {artist ? (
                <Text style={styles.Secondary_text}>{artist}</Text>
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
          <Slider />
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
            <Pressable onPress={handlePrevButton}>
              <Ionicons
                name="play-skip-back"
                size={button_size}
                color={Main_color.Button_color}
              />
            </Pressable>
            <BlurView
              style={[
                ,
                {
                  backgroundColor: "transparent",
                  borderRadius: 90,
                  padding: 20,
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
              children={
                <Pressable onPress={handlePlayButton}>
                  {/* <Ionicons
                    name={isPlaying ? "pause" : "play"}
                    size={50}
                    color={Main_color.Secondary_color}
                  /> */}
                  <Spinner />
                </Pressable>
              }
            />
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
    </ImageBackground>
  );
}
