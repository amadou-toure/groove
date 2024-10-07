import { createContext, useState } from "react";
import { Audio } from "expo-av";
import Library from "../../assets/data/Library.json";

// Créez le contexte
export const SongContext = createContext();

// Créez un composant Provider
export const SongProvider = ({ children }) => {
  const song = new Audio.Sound()//.getStatusAsync().then((result) => {return result.isLoaded}) ;
  const [index, setIndex]= useState(0);
  

  return (
    <SongContext.Provider
      value={{ song, Library,index, setIndex }}
    >
      {children}
    </SongContext.Provider>
  );
};
