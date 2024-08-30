import React from "react";
import { View, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import { SettingContext } from "../store/Settings.jsx";
import { useContext } from "react";

const Search = () => {
	const { Main_color } = useContext(SettingContext);
	const [searchQuery, setSearchQuery] = React.useState("");

	return (
		<SearchBar
			placeholder="Search"
			onChangeText={setSearchQuery}
			value={searchQuery}
			round={true}
			containerStyle={{
				backgroundColor: Main_color.bg_color,
				width: "100%",
			}}
			inputContainerStyle={{
				backgroundColor: Main_color.Third_color,
			}}
			inputStyle={{ backgroundColor: Main_color.Third_color }}
		/>
	);
};
export default Search;
