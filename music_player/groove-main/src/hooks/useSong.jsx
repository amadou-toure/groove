import React, { useContext } from "react";
import Library from "../../assets/data/Library.json";
import { SongContext } from "../store";

//const useSong = () => {
const songList = Library;
const song = useContext(SongContext);

const test = () => {
  console.log("test passed");
};
const getTrackUrl = (item) => {
  return songList[songList.indexOf(item)].url;
};
const loadUrl = async (url) => {
  await song.loadAsync({ uri: url });
};
const unloadUrl = async () => {
  await song.unloadAsync();
};
const playNext = (uri) => {
  songList[songList.indexOf(uri) + 1];
};
const playPevious = (uri) => {
  songList[songList.indexOf(uri) - 1];
};
return { getTrackUrl, loadUrl, unloadUrl, playNext, playPevious, test };
//};

export { useSong };
