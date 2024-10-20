import { SongContext } from "../store";
import React, { useContext, useState, useEffect } from "react";

const usePlayerControls = () => {
  const { song, isPlaying, setIsPlaying } = useContext(SongContext);
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
  const test = () => {
    console.log("test");
  };
  return { handlePlayButton, test };
};
export default usePlayerControls;
