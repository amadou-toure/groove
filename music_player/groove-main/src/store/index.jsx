import { useState, createContext } from "react";
import { Audio } from "expo-av";

// Créez le contexte
export const SongContext = createContext();

// Créez un composant Provider
export const SongProvider = ({ children }) => {
  const song = new Audio.Sound();
  //song.getStatusAsync().then((result)=>result.isPlaying)
  //song.pauseAsync
  return <SongContext.Provider value={song}>{children}</SongContext.Provider>;
};
