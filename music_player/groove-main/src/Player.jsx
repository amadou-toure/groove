import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { styles, Main_color } from "../global_style";
import { Ionicons } from "@expo/vector-icons";
import no_artwork from "../assets/images/no_artwork.png";

export default function Player({ navigation, route }) {
	const { Artwork, Title, Artist } = route.params;
	const button_size = 30;
	return (
		<View style={styles.Player}>
			<View style={styles.Track_info}>
				{Artwork ? (
					<Image
						style={{ width: 300, height: 300, borderRadius: 15 }}
						source={{ uri: Artwork }}
					/>
				) : (
					<Image
						style={{ width: 300, height: 300, borderRadius: 15 }}
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
			</View>
			<View style={styles.Player_control}>
				<Pressable onPress={() => console.log("Shuffle")}>
					<Ionicons
						name="shuffle-outline"
						size={button_size}
						color={Main_color.Third_color}
					/>
				</Pressable>
				<Pressable onPress={() => console.log("Skip-back")}>
					<Ionicons
						name="play-skip-back-outline"
						size={button_size}
						color={Main_color.Third_color}
					/>
				</Pressable>
				<Pressable
					style={{
						backgroundColor: Main_color.Third_color,
						borderRadius: 80,
						padding: 20,
					}}
					onPress={() => console.log("play")}
				>
					<Ionicons
						name="play-outline"
						size={button_size}
						color={Main_color.Secondary_color}
					/>
				</Pressable>
				<Pressable onPress={() => console.log("Skip-forward")}>
					<Ionicons
						name="play-skip-forward-outline"
						size={button_size}
						color={Main_color.Third_color}
					/>
				</Pressable>
				<Pressable onPress={() => console.log("repeat")}>
					<Ionicons
						name="repeat-outline"
						size={40}
						color={Main_color.Third_color}
					/>
				</Pressable>
			</View>
		</View>
	);
}
