import { SongContext } from "../store";
import React, { useContext, useState, useEffect } from "react";
import { useSong } from "./useSong";

const usePlayerControls = () => {
  const { song, isPlaying, setIsPlaying, Library, setActiveTrack } =
    useContext(SongContext);
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
    const nextSong = getTrackUrl(Library[getCurrentIndex() + 1]);
    await unloadUrl();
    await loadUrl(nextSong);
    console.log(nextSong);
    setActiveTrack(Library[getCurrentIndex() + 1]);
    await song.playAsync();
  };
  const handlePrevButton = () => {
    console.log("prev");
  };
  const test = () => {
    console.log("test");
  };
  return { handlePlayButton, test, handleNextButton, handlePrevButton };
};
export default usePlayerControls;
