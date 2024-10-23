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
    activeTrack,
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
  const shuffle = async (playlist) => {
    const nextSong = playlist[Math.floor(Math.random() * playlist.length)];
    return nextSong;
  };
  const handleNextButton = async () => {
    await unloadUrl();
    if (Shuffle === true) {
      const nextSong = await shuffle(Library);
      setActiveTrack(nextSong);
      await loadUrl(getTrackUrl(nextSong));
      await song.playAsync();
    } else {
      if (getCurrentIndex() + 1 < Library.length) {
        const nextSong = getTrackUrl(Library[getCurrentIndex() + 1]);
        setActiveTrack(Library[getCurrentIndex() + 1]);
        await loadUrl(nextSong);
        await song.playAsync();
      } else {
        const nextSong = getTrackUrl(Library[0]);
        setActiveTrack(Library[0]);
        await loadUrl(nextSong);
        await song.playAsync();
      }
    }
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
