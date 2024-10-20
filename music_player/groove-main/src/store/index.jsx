import { createContext, useRef, useState } from "react";
import { Audio } from "expo-av";
import Library from "../../assets/data/Library.json";

// Créez le contexte
export const SongContext = createContext();

// Créez un composant Provider
export const SongProvider = ({ children }) => {
  const [isOpened, setIsOpened] = useState(true);
  const song = useRef(new Audio.Sound()).current; //.getStatusAsync().then((result) => {return result.isLoaded}) ;
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTrack, setActiveTrack] = useState(Library[0]);
  //song.getStatusAsync().then((result) => {return result.isLoaded}) ;
  return (
    <SongContext.Provider
      value={{
        song,
        Library,
        index,
        setIndex,
        isOpened,
        setIsOpened,
        activeTrack,
        setActiveTrack,
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </SongContext.Provider>
  );
};
