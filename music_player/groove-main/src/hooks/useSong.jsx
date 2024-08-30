// import React, { useContext } from "react";
// import Library from "../../assets/data/Library.json";
// import { SongContext } from "../store";

// //const useSong = () => {
// const songList = Library;
// const song = useContext(SongContext);

// const test = () => {
//   console.log("test passed");
// };
// const getTrackUrl = (item) => {
//   return songList[songList.indexOf(item)].url;
// };
// const loadUrl = async (url) => {
//   await song.loadAsync({ uri: url });
// };
// const unloadUrl = async () => {
//   await song.unloadAsync();
// };
// const playNext = (uri) => {
//   songList[songList.indexOf(uri) + 1];
// };
// const playPevious = (uri) => {
//   songList[songList.indexOf(uri) - 1];
// };
// return { getTrackUrl, loadUrl, unloadUrl, playNext, playPevious, test };

// export { useSong };
import React, { useContext } from "react";
import Library from "../../assets/data/Library.json";
import { SongContext } from "../store";

const useSong = () => {
  const songList = Library;
  const song = useContext(SongContext);

  const test = () => {
    console.log("test passed");
  };

  const getTrackUrl = (item) => {
    const index = songList.indexOf(item);
    if (index !== -1) {
      return songList[index].url;
    }
    return null;
  };

  const loadUrl = async (url) => {
    try {
      // console.log(url);
      await song.loadAsync({ uri: url });
    } catch (error) {
      console.error("Erreur lors du chargement de l'URL :", error);
    }
  };

  const unloadUrl = async () => {
    try {
      //console.log(song);
      await song.unloadAsync();
    } catch (error) {
      console.error("Erreur lors du déchargement de l'URL :", error);
    }
  };

  const playNext = (uri) => {
    const index = songList.findIndex((songItem) => songItem.url === uri);
    if (index !== -1 && index < songList.length - 1) {
      return songList[index + 1].url;
    }
    return null;
  };

  const playPrevious = (uri) => {
    const index = songList.findIndex((songItem) => songItem.url === uri);
    if (index > 0) {
      return songList[index - 1].url;
    }
    return null;
  };

  return { getTrackUrl, loadUrl, unloadUrl, playNext, playPrevious, test };
};

export { useSong };
