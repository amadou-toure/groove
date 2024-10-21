import React, { useContext, useState, useEffect } from "react";
import Library from "../../assets/data/Library.json";
import { SongContext } from "../store";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const useSong = () => {
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

  const getCurrentIndex = () => {
    return songList.indexOf(activeTrack);
  };

  const updateActiveTrack = (item) => {
    setActiveTrack(item);
    return null;
  };

  const getTrackUrl = (item) => {
    updateActiveTrack(item);
    const newIndex = songList.indexOf(item);
    if (newIndex !== -1) {
      return songList[newIndex].url;
    }

    return null;
  };

  const loadUrl = async (url) => {
    try {
      console.log("loading " + url);
      await song.loadAsync({ uri: url });
    } catch (error) {
      console.error("Erreur lors du chargement de l'URL :", error);
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

  return {
    getTrackUrl,
    getStatus,
    loadUrl,
    unloadUrl,
    getDuration,
    getCurrentIndex,
  };
};

export { useSong };
