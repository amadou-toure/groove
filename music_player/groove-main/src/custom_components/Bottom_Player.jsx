import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { styles, Main_color } from "../../global_style";
import { Ionicons } from "@expo/vector-icons";
import no_artwork from "../../assets/images/no_artwork.png";
import Slider from "./Track_slider";
export default function ({ Artwork, Title, Artist }) {
	const button_size = 32;
	const [isPlaying, setIsPlaying] = React.useState(false);
	const [isLiked, setIsLiked] = React.useState(false);

	return (
		<View style={styles.bottom_player}>
			<Text style={styles.Secondary_text}>{Title}</Text>
		</View>
	);
}
