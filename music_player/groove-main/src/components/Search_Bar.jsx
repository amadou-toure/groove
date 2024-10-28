import React from "react";
import { View, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import { SettingContext } from "../store/Settings.jsx";
import { useContext } from "react";
import { SongContext } from "../store/index.jsx";

const Search = () => {
  const { Main_color } = useContext(SettingContext);
  const { Library, setSearchResults, searchResults } = useContext(SongContext);
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <SearchBar
      placeholder="Search"
      onChangeText={(value) =>
        setSearchResults(
          Library.filter((song) =>
            song.title.toLowerCase().includes(value.toLowerCase())
          ),
          setSearchQuery(value)
        )
      }
      round={true}
      containerStyle={{
        backgroundColor: Main_color.Third_color,
        width: "100%",
      }}
      value={searchQuery}
      inputContainerStyle={{
        backgroundColor: Main_color.bg_color,
      }}
      inputStyle={{ backgroundColor: Main_color.bg_color }}
    />
  );
};
export default Search;
