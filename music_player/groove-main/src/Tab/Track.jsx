import { Text, View, FlatList, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native";
import React, { Component } from "react";
import { styles, Main_color } from "../../global_style";
import no_artwork from "../../assets/images/no_artwork.png";
//import { exImage } from "expo-image";
import library from "../../assets/data/Library.json";

const Track_list_item = ({ navigation, Artwork, Title, Artist }) => {
	return (
		<Pressable
			onPress={() => navigation.navigate("Player")}
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
					style={{ width: 60, height: 60, borderRadius: 30, marginRight: 20 }}
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
	return (
		<SafeAreaView style={styles.container}>
			<Text style={[styles.Title_text, { flex: 0.15, width: "90%" }]}>
				Songs
			</Text>
			<FlatList
				style={{ flex: 0.9 }}
				data={library}
				renderItem={({ item }) => (
					<Track_list_item
						navigation={navigation}
						Title={item.title}
						Artist={item.artist}
						Artwork={item.artwork}
					/>
				)}
			/>
		</SafeAreaView>
	);
};
