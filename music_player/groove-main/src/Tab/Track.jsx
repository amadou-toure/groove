import { Text, View, FlatList, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native";
import React, { Component, useContext } from "react";
import { styles, Main_color } from "../../global_style";
import no_artwork from "../../assets/images/no_artwork.png";
import useAudio from "expo-audio-hooks";
import library from "../../assets/data/Library.json";
import Bottom_Player from "../custom_components/Bottom_Player";

const Track_list_item = ({ index, Artwork, Title, Artist, Url }) => {
	const { isLoadingAudio, isPlaying, setIsPlaying, unload } = useAudio({
		uri: Url,
	});
	const [songIndex, setSongIndex] = React.useState(-1);

	const handlePress = async (index) => {
		//if i use unload in a pressable, it works and stops the current playing song, but in this function it seems not to work
		if (isPlaying === true) {
			await unload();
			isPlaying ? console.log("playing") : console.log("still not playing");
		} else {
			console.log("not playing");
			setIsPlaying(true);
		}
	};

	return (
		<Pressable
			onPress={() => handlePress(index)}
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
			{Artwork ? (
				<Image
					style={{ width: 60, height: 60, borderRadius: 15, marginRight: 20 }}
					source={{ uri: Artwork }}
				/>
			) : (
				<Image
					style={{ width: 60, height: 60, borderRadius: 15, marginRight: 20 }}
					source={no_artwork}
				/>
			)}
			<View>
				<Text style={styles.Primary_text}>{Title}</Text>
				{Artist ? (
					<Text style={styles.Secondary_text}>{Artist}</Text>
				) : (
					<Text style={styles.Secondary_text}>Unknown</Text>
				)}
			</View>
		</Pressable>
	);
};

export default Track = ({ navigation }) => {
	const songList = library;
	return (
		<SafeAreaView style={styles.container}>
			<Text style={[styles.Title_text, { flex: 0.15, width: "90%" }]}>
				Songs
			</Text>
			<FlatList
				style={{ flex: 0.9 }}
				data={songList}
				renderItem={({ item }) => (
					<Track_list_item
						Title={item.title}
						Artist={item.artist}
						Artwork={item.artwork}
						Url={item.url}
						index={songList.indexOf(item)}
					/>
				)}
			/>
			<Bottom_Player
				Title={item.title}
				Artist={item.artist}
				Artwork={item.artwork}
			/>
		</SafeAreaView>
	);
};
