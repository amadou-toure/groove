import { Text, View, FlatList, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native";
import React, { Component, useContext, useState } from "react";
import { styles, Main_color } from "../../global_style";
import no_artwork from "../../assets/images/no_artwork.png";
import { Audio } from "expo-av";
import library from "../../assets/data/Library.json";
import Bottom_Player from "../custom_components/Bottom_Player";

export default Track = ({ navigation }) => {
	const song = new Audio.Sound();
	const songList = library;
	const [index, setIndex] = useState(0);
	const getTrackUrl = (item) => {
		return songList[songList.indexOf(item)].url;
	};
	const loadUrl = async (url) => {
		await song.loadAsync({ uri: url });
	};
	const unloadUrl = async () => {
		await song.unloadAsync();
	};
	const next = () => {};
	const handlePress = async (item) => {
		unloadUrl();
		navigation.navigate("Player", {
			Artist: item.artist,
			Artwork: item.artwork,
			Title: item.title,
		});
		if (song._loaded != true) {
			await loadUrl(getTrackUrl(item));
			await song.playAsync();
		} else {
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
