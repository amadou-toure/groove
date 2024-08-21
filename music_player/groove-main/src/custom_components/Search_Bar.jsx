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
      containerStyle={{
        backgroundColor: "#000",
        width: "100%",
      }}
      inputContainerStyle={{
        backgroundColor: "#000",
      }}
      inputStyle={{ backgroundColor: "#000" }}
    />
  );
};
export default Search;
