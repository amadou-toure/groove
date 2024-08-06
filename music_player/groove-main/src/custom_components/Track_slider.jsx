import { View, Text } from "react-native";
import React from "react";
import Slider from "@react-native-community/slider";
import { Main_color } from "../../global_style";
// import Slider from "react-native-awesome-slider";

export default function Track_slider({ Duration }) {
	const format_minutes = (millis) => {
		const minutes = Math.floor(millis / 60000);
		const seconds = Math.floor((millis % 60000) / 1000);

		// Format seconds to be always two digits
		const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

		return `${minutes}:${formattedSeconds}`;
	};
	const [value, setValue] = React.useState(0);

	return (
		<View style={{ display: "flex", flexDirection: "column", width: "90%" }}>
			<Slider
				style={{ width: "100%", height: 10 }}
				minimumValue={0}
				maximumValue={Duration}
				step={1}
				value={value}
				minimumTrackTintColor={Main_color.Secondary_color}
				maximumTrackTintColor={Main_color.Secondary_color}
				thumbTintColor={Main_color.Secondary_color}
			/>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					width: "100%",
				}}
			>
				<Text style={{ color: Main_color.Secondary_color }}>
					{format_minutes(value)}
				</Text>
				<Text style={{ color: Main_color.Secondary_color }}>
					{format_minutes(Duration)}
				</Text>
			</View>
		</View>
	);
}
