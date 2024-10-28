import { Text, View, FlatList, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native";
import React from "react";
import { styles } from "../../global_style";
import no_artwork from "../../assets/images/no_artwork.png";
import { useContext } from "react";
import { SettingContext } from "../store/Settings";
import { SongContext } from "../store";
import Search from "../components/Search_Bar";
import { useSong } from "../hooks/useSong";
import Is_Playing from "../Animations/Is_Playing";

export default Track = ({ navigation }) => {
  const { song, setIsOpened, setActiveTrack, activeTrack, searchResults } =
    useContext(SongContext);
  const { Main_color } = useContext(SettingContext);
  const { getTrackUrl, loadUrl, unloadUrl } = useSong();

  const handlePress = async (item) => {
    setActiveTrack(item);
    setIsOpened(false);
    await unloadUrl();
    if (song._loaded != true) {
      navigation.navigate("Player");
      await loadUrl(getTrackUrl(item));
      await song.playAsync();
    } else {
      navigation.navigate("Player");
      await song.playAsync();
    }
  };
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: Main_color.bg_color }]}
    >
      <Search />
      <FlatList
        style={{
          flex: 1,
          width: "100%",
        }}
        data={searchResults}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handlePress(item)}
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",

              backgroundColor:
                activeTrack === item
                  ? Main_color.Third_color
                  : Main_color.bg_color,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingTop: "10%",
                paddingBottom: "5%",
                width: "90%",
                alignItems: "flex-start",
                justifyContent: "center",

                // alignItems: "center",
                borderBottomWidth: 1,
              }}
            >
              {item.artwork ? (
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 15,
                    marginRight: 20,
                  }}
                  source={{ uri: item.artwork }}
                />
              ) : (
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 15,
                    marginRight: 20,
                  }}
                  source={no_artwork}
                />
              )}
              <View>
                <Text style={styles.Primary_text} numberOfLines={1}>
                  {item.title}
                </Text>
                {item.artist ? (
                  <Text style={styles.Secondary_text}>{item.artist}</Text>
                ) : (
                  <Text style={styles.Secondary_text}>Unknown</Text>
                )}
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  flex: 1,
                }}
              >
                {activeTrack === item ? <Is_Playing /> : null}
              </View>
            </View>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};
