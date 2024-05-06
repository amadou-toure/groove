import { View, Text, Image } from "react-native";
import React from "react";
import { styles, Main_color } from "../global_style";
import no_artwork from "../assets/images/no_artwork.png";

export default function Player({ Artwork, Artist, Title }) {
	return (
		<View
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
		</View>
	);
}
