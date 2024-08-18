import React from "react";
import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      theme={{ colors: { primary: "green" } }}
    />
  );
};
export default Search;
