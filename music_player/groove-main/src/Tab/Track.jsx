import { Text, View, FlatList, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native";
import React, { Component, useContext, useState } from "react";
import { styles, Main_color } from "../../global_style";
import no_artwork from "../../assets/images/no_artwork.png";
import { Audio } from "expo-av";
import useAudio from "expo-audio-hooks";
import library from "../../assets/data/Library.json";

export default Track = () => {
	const song = new Audio.Sound();
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
		unloadUrl();
		if (song._loaded != true) {
			console.log("loading...");
			await loadUrl(getTrackUrl(item));
			await song.playAsync();
		} else {
			await song.playAsync();
		}
		// const { isLoadingAudio, isPlaying, setIsPlaying } = useAudio({
		// 	uri:
		// });
		// //if i use unload in a pressable, it works and stops the current playing song, but in this function it seems not to work
		// if (isPlaying === true) {
		// 	setIsPlaying === false;
		// 	isPlaying ? console.log("playing") : console.log("still not playing");
		// } else {
		// 	console.log("not playing");
		// 	setIsPlaying(true);
		// }
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
			{/* <Bottom_Player
				Title={item.title}
				Artist={item.artist}
				Artwork={item.artwork}
			/> */}
		</SafeAreaView>
	);
};
