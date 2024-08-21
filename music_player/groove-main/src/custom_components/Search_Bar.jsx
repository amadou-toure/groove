import React from "react";
import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { Main_color } from "../../global_style";

const Search = () => {
	const [searchQuery, setSearchQuery] = React.useState("");

	return (
		<Searchbar
			placeholder="Search"
			onChangeText={setSearchQuery}
			value={searchQuery}
			style={{ backgroundColor: Main_color.Third_color }}
		/>
	);
};
export default Search;
