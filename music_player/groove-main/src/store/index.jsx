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

  return <SongContext.Provider value={song}>{children}</SongContext.Provider>;
};
