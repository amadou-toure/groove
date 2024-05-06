import { StyleSheet, Text, View } from "react-native";

const Main_color = {
	Primary_color: "#EBE6E4",
	Secondary_color: "#FF7878", //active bottom navigation tab color
	Third_color: "#7D7D7D", //grey bottom nav color
	bg_color: "#000",
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Main_color.bg_color,
		paddingTop: "20%",
		alignItems: "center",
		justifyContent: "center",
	},
	Title_text: {
		color: Main_color.Primary_color,
		fontSize: 30,
		fontWeight: "800",
		textAlign: "left",
	},
	Primary_text: {
		color: Main_color.Primary_color,
		fontSize: 18,
		fontWeight: "600",
		textAlign: "left",
	},
	Secondary_text: {
		color: Main_color.Secondary_color,
		fontSize: 14,
		fontWeight: "300",
		textAlign: "left",
	},
});

export { styles, Main_color };
