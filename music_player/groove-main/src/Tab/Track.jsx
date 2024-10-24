import { Text, View, FlatList, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { styles } from "../../global_style";
import no_artwork from "../../assets/images/no_artwork.png";
import library from "../../assets/data/Library.json";
import { useContext } from "react";
import { SettingContext } from "../store/Settings";
import { SongContext } from "../store";
import Search from "../components/Search_Bar";
import { useSong } from "../hooks/useSong";

export default Track = ({ navigation }) => {
  const { song, setIsOpened, isOpend, setActiveTrack, activeTrack } =
    useContext(SongContext);
  const { Main_color } = useContext(SettingContext);
  const { getTrackUrl, loadUrl, unloadUrl } = useSong();

  const songList = library;

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
        style={{ flex: 0.8 }}
        data={songList}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handlePress(item)}
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
              <Text style={styles.Primary_text}>{item.title}</Text>
              {item.artist ? (
                <Text style={styles.Secondary_text}>{item.artist}</Text>
              ) : (
                <Text style={styles.Secondary_text}>Unknown</Text>
              )}
            </View>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};
