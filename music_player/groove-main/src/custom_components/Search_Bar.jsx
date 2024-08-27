import React from "react";
import { View, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import { Main_color } from "../../global_style";

const Search = () => {
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
