import { SongContext } from "../store";
import React, { useContext, useState, useEffect } from "react";
import { useSong } from "./useSong";

const usePlayerControls = () => {
  const {
    song,
    isPlaying,
    setIsPlaying,
    Library,
    setActiveTrack,
    Shuffle,
    repeat,
  } = useContext(SongContext);
  const { getCurrentIndex, getTrackUrl, unloadUrl, loadUrl } = useSong();
  const handlePlayButton = async () => {
    try {
      const status = await song.getStatusAsync();
      if (!status.isPlaying) {
        await song.playAsync();
        setIsPlaying(true);
      } else {
        await song.pauseAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleNextButton = async () => {
    //const salt = Math.floor(Math.random() * (Library.length - 1));
    // const nextSong = Shuffle
    //   ? getTrackUrl(Library[salt])
    //   : getTrackUrl(Library[getCurrentIndex() + 1]);
    const nextSong = getTrackUrl(Library[getCurrentIndex() + 1]);
    await unloadUrl();
    await loadUrl(nextSong);
    setActiveTrack(Library[getCurrentIndex() + 1]);
    await song.playAsync();
    //console.log(salt);
  };
  const handlePrevButton = async () => {
    const prevSong = getTrackUrl(Library[getCurrentIndex() - 1]);
    await unloadUrl();
    await loadUrl(prevSong);
    setActiveTrack(Library[getCurrentIndex() - 1]);
    await song.playAsync();
  };
  return { handlePlayButton, handleNextButton, handlePrevButton };
};
export default usePlayerControls;
