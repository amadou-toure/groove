import { createContext, useState } from "react";
import { Audio } from "expo-av";
import Library from "../../assets/data/Library.json";

// Créez le contexte
export const SongContext = createContext();

// Créez un composant Provider
export const SongProvider = ({ children }) => {
  const song = new Audio.Sound();
  const songList = Library;
  const [index, setIndex] = useState(null);

  // const loadUrl = async (url) => {
  //   await song.loadAsync({ uri: url });
  // };
  // const unloadUrl = async () => {
  //   await song.unloadAsync();
  // };
  // const playNext = async () => {
  //   await unloadUrl();
  //   console.log("next");
  //   await song.stopAsync();
  //   setIndex(index + 1);
  //   await loadUrl(songList[index].url);
  //   await song.playAsync();
  // };
  // const playPevious = async () => {
  //   console.log("prev");
  //   await song.stopAsync();
  //   await unloadUrl();
  //   setIndex(index - 1);
  //   await loadUrl(songList[index].url);
  //   await song.playAsync();
  // };

  return (
    <SongContext.Provider
      value={{
        song,
        songList,
        // index,
        // setIndex,
        // playNext,
        // playPevious,
        // unloadUrl,
        // loadUrl,
      }}
    >
      {children}
    </SongContext.Provider>
  );
};
