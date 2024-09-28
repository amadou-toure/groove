import { createContext, useState } from "react";
import { Audio } from "expo-av";
import Library from "../../assets/data/Library.json";

// Créez le contexte
export const SongContext = createContext();

// Créez un composant Provider
export const SongProvider = ({ children }) => {
  const song = new Audio.Sound();
  const [Next, setNext] = useState(song);
  const [Previous, setPrevious] = useState(song);

  return (
    <SongContext.Provider
      value={{ song, Next, setNext, setPrevious, Previous }}
    >
      {children}
    </SongContext.Provider>
  );
};
