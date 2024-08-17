import { Text, View, FlatList, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { styles, Main_color } from "../../global_style";
import no_artwork from "../../assets/images/no_artwork.png";
import { Audio } from "expo-av";
import library from "../../assets/data/Library.json";

export default Track = ({ navigation }) => {
	const song = new Audio.Sound();
	const songList = library;
	const [i, setI] = useState(0);
	const getTrackUrl = (item) => {
		return songList[songList.indexOf(item)].url;
	};
	const loadUrl = async (url) => {
		await song.loadAsync({ uri: url });
	};
	const unloadUrl = async () => {
		await song.unloadAsync();
	};

	const getDuration = async () => {
		try {
			const result = await song.getStatusAsync();
			if (result.isLoaded) {
				return result.durationMillis;
			} else {
				throw new Error("Song is not loaded");
			}
		} catch (error) {
			console.error("Error getting song status:", error);
			return "error";
		}
	};

	const handlePress = async (item) => {
		await unloadUrl();
		if (song._loaded != true) {
			await loadUrl(getTrackUrl(item));
			navigation.navigate("Player", {
				Artist: item.artist,
				Artwork: item.artwork,
				Title: item.title,
				Duration: await getDuration(),
			});
			await song.playAsync();
		} else {
			navigation.navigate("Player", {
				Artist: item.artist,
				Artwork: item.artwork,
				Title: item.title,
				Duration: await getDuration(),
				songStatus: await song.getStatusAsync(),
				Song: song,
			});
			await song.playAsync();
		}
	};
	return (
		<SafeAreaView style={styles.container}>
			<Text style={[styles.Title_text, { flex: 0.15, width: "90%" }]}>
				Songs
			</Text>
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
