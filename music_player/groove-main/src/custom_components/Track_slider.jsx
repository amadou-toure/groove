import { View, Text } from "react-native";
import React from "react";
import Slider from "@react-native-community/slider";
import { Main_color } from "../../global_style";
// import Slider from "react-native-awesome-slider";

export default function Track_slider({ Duration }) {
	const format_minutes = (input_value) => {
		let minutes = Math.floor(input_value / 60);
		let seconds = Math.floor(input_value - minutes * 60);
		let result = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
		return result;
	};
	return (
		<View style={{ display: "flex", flexDirection: "column", width: "90%" }}>
			<Slider
				style={{ width: "100%", height: 10 }}
				minimumValue={0}
				maximumValue={1}
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
				<Text style={{ color: Main_color.Third_color }}>00:00</Text>
				<Text style={{ color: Main_color.Secondary_color }}>
					{format_minutes(Duration)}
				</Text>
			</View>
		</View>
	);
}
