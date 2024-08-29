import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { SettingContext } from "../store/Settings.jsx";
import { useContext } from "react";
import { styles } from "../../global_style.js";
import { Ionicons } from "@expo/vector-icons";

const SettingOption = ({ children, icon }) => {
	const { setTheme, setLanguage, setIconSize, setTextSize, Main_color } =
		useContext(SettingContext);
	return (
		<Pressable
			style={{
				marginTop: "10%",
				paddingBottom: "5%",
				flexDirection: "row",
				justifyContent: "flex-start",
				alignItems: "center",
				borderBottomColor: Main_color.Third_color,
				borderBottomWidth: 1,
				width: "90%",
			}}
		>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "center",
					width: "40%",
				}}
			>
				<Ionicons name={icon} size={25} color={Main_color.Button_color} />
				{children}
			</View>
		</Pressable>
	);
};

export default function Setting() {
	const { setTheme, setLanguage, setIconSize, setTextSize, Main_color } =
		useContext(SettingContext);
	return (
		<ScrollView
			style={{ backgroundColor: Main_color.bg_color }}
			contentContainerStyle={[styles.container]}
		>
			<SettingOption icon="person">
				<Text style={styles.Primary_text}>Profile</Text>
			</SettingOption>

			<SettingOption
				icon="brush-sharp"
				children={<Text style={styles.Primary_text}>Theme</Text>}
			/>

			<SettingOption
				icon="search-sharp"
				children={<Text style={styles.Primary_text}>Police Size</Text>}
			/>

			<SettingOption
				icon="language-sharp"
				children={<Text style={styles.Primary_text}>Language</Text>}
			/>
			<SettingOption>
				<Text style={styles.Primary_text}>Notification</Text>
			</SettingOption>

			<SettingOption>
				<Text style={styles.Primary_text}>Equalizer</Text>
			</SettingOption>
		</ScrollView>
	);
}
