import { Text, View, FlatList, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native";
import React from "react";
import { styles, Main_color } from "../../global_style";
import no_artwork from "../../assets/images/no_artwork.png";
import library from "../../assets/data/Library.json";
import { useContext } from "react";
import { SongContext } from "../store";
import Search from "../custom_components/Search_Bar";

export default Track = ({ navigation }) => {
  const { song } = useContext(SongContext);
  const songList = library;

  const getTrackUrl = (item) => {
    return songList[songList.indexOf(item)].url;
  };
  const loadUrl = async (url) => {
    await song.loadAsync({ uri: url });
  };
  const unloadUrl = async () => {
    await song.unloadAsync();
  };

  const handlePress = async (item) => {
    await unloadUrl();
    // setIndex(songList.indexOf(item));
    if (song._loaded != true) {
      await loadUrl(getTrackUrl(item));
      navigation.navigate("Player", {
        Artist: item.artist,
        Artwork: item.artwork,
        Title: item.title,
        Status: await song.getStatusAsync(),
      });
      await song.playAsync();
    } else {
      //setIndex(songList.indexOf(item));
      navigation.navigate("Player", {
        Artist: item.artist,
        Artwork: item.artwork,
        Title: item.title,
        Status: await song.getStatusAsync(),
      });
      await song.playAsync();
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.Title_text, { flex: 0.15, width: "90%" }]}>
        Songs
      </Text>
      <Search />
      <FlatList
        style={{ flex: 0.9 }}
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
