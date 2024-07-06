import { Text, View } from "react-native";
import React, { Component } from "react";
import { styles, Main_color } from "../../global_style";
import { useSong } from "../Service/Player_service";
export default function Home() {
	const [song, setSong] = useSong();
	return (
		<View style={styles.container}>
			<Text style={styles.Secondary_text}>{song.artist}</Text>
		</View>
	);
}
