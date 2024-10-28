import { createContext, useRef, useState } from "react";
import { Audio } from "expo-av";
import Library from "../../assets/data/Library.json";

// Créez le contexte
export const SongContext = createContext();

// Créez un composant Provider
export const SongProvider = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  const song = useRef(new Audio.Sound()).current; //.getStatusAsync().then((result) => {return result.isLoaded}) ;
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTrack, setActiveTrack] = useState(Library[0]);
  const [Shuffle, setShuffle] = useState(false);
  const [Repeat, setRepeat] = useState(false);
  const [searchResults, setSearchResults] = useState(Library);
  //song.getStatusAsync().then((result) => {return result.isLoaded}) ;
  return (
    <SongContext.Provider
      value={{
        searchResults,
        setSearchResults,
        song,
        Library,
        isOpened,
        setIsOpened,
        activeTrack,
        setActiveTrack,
        isPlaying,
        setIsPlaying,
        Shuffle,
        setShuffle,
        Repeat,
        setRepeat,
      }}
    >
      {children}
    </SongContext.Provider>
  );
};
