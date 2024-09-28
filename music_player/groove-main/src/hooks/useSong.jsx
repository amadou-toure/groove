import React, { useContext, useState, useEffect } from "react";
import Library from "../../assets/data/Library.json";
import { SongContext } from "../store";
import { Alert } from "react-native";

const useSong = () => {
  const [Index, setIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(null); // State to hold the current item
  const songList = Library;
  const { song } = useContext(SongContext);

  const test = () => {
    console.log("test passed");
  };

  const getTrackUrl = (item) => {
    const newIndex = songList.indexOf(item);
    setIndex(newIndex); // Set new index
    setCurrentItem(item); // Update the current item

    // You can still retrieve the URL here if needed
    if (newIndex !== -1) {
      return songList[newIndex].url;
    }
    return null;
  };
  useEffect(() => {
    if (currentItem) {
      // Call getTrackUrl whenever currentItem changes
      const url = getTrackUrl(currentItem);
      console.log("Track URL:", url);
      // Additional logic based on the new URL can go here
    }
  }, [currentItem]);
  const getStatus = async () => {
    const status = await song
      .getStatusAsync()
      .then((result) => result.durationMillis);
    return status;
  };

  const loadUrl = async (url) => {
    try {
      await song.loadAsync({ uri: url });
    } catch (error) {
      Alert.alert("Error", "Failed to load the sound", "ok");
      console.error("Erreur lors du chargement de l'URL :", error);
    }
  };

  const unloadUrl = async () => {
    try {
      //console.log(song);
      await song.unloadAsync();
    } catch (error) {
      console.error("Erreur lors du déchargement de l'URL :", error);
    }
  };

  const playNext = async () => {
    console.log(currentIndex);

    // await unloadUrl();
    // await loadUrl(getTrackUrl(songList[currentIndex + 1]));
    // setCurrentIndex(currentIndex + 1);
    // await song.playAsync();
  };

  const playPrevious = async () => {
    console.log(currentIndex);
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
    test,
  };
};

export { useSong };
