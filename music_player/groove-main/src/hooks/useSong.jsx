import React, { useContext, useState, useEffect } from "react";
import Library from "../../assets/data/Library.json";
import { SongContext } from "../store";

const useSong = () => {
  const [index, setIndex] = useState(0); // State to hold the current index
  const songList = Library;
  const { song, activeTrack, setActiveTrack } = useContext(SongContext);

  const getStatus = async () => {
    const status = await song.getStatusAsync();
    return status;
  };

  const getDuration = async () => {
    const duration = await song.getStatusAsync().then((status) => {
      return status.durationMillis;
    });
    return duration;
  };

  const updateActiveTrack = (item) => {
    setActiveTrack(item);
    return null;
  };

  const getTrackUrl = (item) => {
    updateActiveTrack(item);
    const newIndex = songList.indexOf(item);
    //setActiveTrack(item);
    if (newIndex !== -1) {
      // setActiveTrack(item);
      setIndex(newIndex);
      return songList[newIndex].url;
    }

    return null;
  };

  const loadUrl = async (url) => {
    try {
      if (getStatus().isLoaded) {
        console.log(" already loaded  " + url);
      } else {
        console.log("loading " + url);
        await song.loadAsync({ uri: url });
      }
    } catch (error) {
      console.error("Erreur lors du chargement de l'URL :", error);
    }
  };

  const unloadUrl = async () => {
    await song.unloadAsync();
    try {
      console.log("unloading");
      await song.unloadAsync();
    } catch (error) {
      console.error("Erreur lors du déchargement de l'URL :", error);
    }
  };

  const playNext = async () => {
    console.log(index);
    //  await song.pauseAsync();
    //  await unloadUrl();
    //  await loadUrl(getTrackUrl(songList[index + 1]));
    //  await song.playAsync();
  };

  const playPrevious = async () => {
    console.log(index);
    // if (currentIndex > 0) {
    //   await unloadUrl();
    //   await loadUrl(getTrackUrl(songList[currentIndex - 1]));
    //   setCurrentIndex(currentIndex - 1);
    //   await song.playAsync();
    // }
    //return null;
  };

  return {
    getTrackUrl,
    getStatus,
    loadUrl,
    unloadUrl,
    playNext,
    playPrevious,
    getDuration,
  };
};

export { useSong };
