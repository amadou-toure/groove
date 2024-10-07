import React, { useContext, useState, useEffect } from "react";
import Library from "../../assets/data/Library.json";
import { SongContext } from "../store";
import { Alert } from "react-native";

const useSong = () => {
  const [index, setIndex] = useState(0); // State to hold the current index
  const [currentItem, setCurrentItem] = useState(null); // State to hold the current item
  const songList = Library;
  const { song } = useContext(SongContext);

 
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

  const getTrackUrl = (item) => {
    const newIndex = songList.indexOf(item);
    
    if (newIndex !== -1) {
      setIndex(newIndex);
      return songList[newIndex].url;
    }
    return null;
  };

  const loadUrl = async (url) => {
    try {
      await song.loadAsync({ uri: url });
     console.log("loading "+url);
    } catch (error) {
      console.error("Error", "Failed to load the sound");
     // console.error("Erreur lors du chargement de l'URL :", error);
    }
  };

  const unloadUrl = async () => {
    try {
      console.log("unloading");
      await song.unloadAsync();
    } catch (error) {
      console.error("Erreur lors du déchargement de l'URL :", error);
    }
  };

  const playNext = async () => {
    console.log(index)
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
