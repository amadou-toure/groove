import { View, Text, Image, Pressable, ImageBackground } from "react-native";
import React from "react";
import { styles, Main_color } from "../global_style";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import no_artwork from "../assets/images/no_artwork.png";
import { SongContext } from "./store";
import Slider from "./custom_components/Track_slider";
export default function Player({ route }) {
	const { song } = useContext(SongContext);
	const { Artwork, Title, Artist, Status } = route.params;
	const button_size = 35;
	const [isLiked, setIsLiked] = React.useState(false);
	//you need to fix this later: i should not have to use this use state(isPlaying)
	const [isPlaying, setIsPlaying] = React.useState(true);

	const handlePlayButton = async () => {
		const status = await song.getStatusAsync();
		if (!status.isPlaying) {
			await song.playAsync();
			setIsPlaying(true);
		} else {
			await song.pauseAsync();
			setIsPlaying(false);
		}
	};
	const handleSkipButton = async () => {
		//await playNext();
	};
	const handlePreviousButton = async () => {
		//await playPevious();
	};

	return (
		<ImageBackground
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
			}}
			source={Artwork ? { uri: Artwork } : no_artwork}
			blurRadius={90}
			resizeMode="cover"
		>
			<View style={[styles.Player, { backgroundColor: "rgba(0, 0, 0, 0.5)" }]}>
				<View style={styles.Track_info}>
					{Artwork ? (
						<Image
							style={{ width: 350, height: 350, borderRadius: 15 }}
							source={{ uri: Artwork }}
						/>
					) : (
						<Image
							style={{ width: 350, height: 350, borderRadius: 15 }}
							source={no_artwork}
						/>
					)}
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							width: "80%",
							flex: 0.3,
						}}
					>
						<View
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								alignItems: "left",
								height: "50%",
								width: "80%",
							}}
						>
							<Text style={styles.Primary_text}>{Title}</Text>
							{Artist ? (
								<Text style={styles.Secondary_text}>{Artist}</Text>
							) : (
								<Text style={styles.Secondary_text}>Unknown</Text>
							)}
						</View>
						<Pressable
							onPress={() => {
								isLiked ? setIsLiked(false) : setIsLiked(true);
							}}
						>
							<Ionicons
								name={isLiked ? "heart" : "heart-outline"}
								size={button_size}
								color={Main_color.Secondary_color}
							/>
						</Pressable>
					</View>
					<Slider Duration={Status.durationMillis} />
				</View>
				<View style={styles.Player_control}>
					<View
						style={{
							justifyContent: "space-around",
							alignItems: "center",
							width: "80%",
							display: "flex",
							flexDirection: "row",
						}}
					>
						<Pressable onPress={() => console.log("Shuffle")}>
							<Ionicons
								name="shuffle-outline"
								size={button_size}
								color={Main_color.Button_color}
							/>
						</Pressable>
						<Pressable onPress={handlePreviousButton}>
							<Ionicons
								name="play-skip-back"
								size={button_size}
								color={Main_color.Button_color}
							/>
						</Pressable>
						<Pressable
							style={{
								backgroundColor: Main_color.Button_color,
								borderRadius: 80,
								padding: 20,
							}}
							onPress={handlePlayButton}
						>
							<Ionicons
								name={isPlaying ? "pause" : "play"}
								size={button_size}
								color={Main_color.Secondary_color}
							/>
						</Pressable>
						<Pressable onPress={() => handleSkipButton}>
							<Ionicons
								name="play-skip-forward"
								size={button_size}
								color={Main_color.Button_color}
							/>
						</Pressable>
						<Pressable onPress={() => console.log("repeat")}>
							<Ionicons
								name="repeat-outline"
								size={40}
								color={Main_color.Button_color}
							/>
						</Pressable>
					</View>
				</View>
			</View>
		</ImageBackground>
	);
}
