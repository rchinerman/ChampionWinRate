import React, { useState, useEffect, createContext } from "react";
import { championInfoAPI } from "../constants";

export const SelectedChampionContext = createContext();

export const SelectedChampionProvider = (props) => {
  const [championData, setChampionData] = useState(null);
  const [selectedChampionKey, setSelectedChampionKey] = useState(null);
  const [selectedChampionId, setSelectedChampionId] = useState(null);
  const [selectedChampionName, setSelectedChampionName] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // HACK: Work-around for useEffect, which can call an async function but can't be one itself
  const fetchChampions = async () => {
    const res = await fetch(championInfoAPI);
    const data = await res.json();
    setChampionData(data.data);
  }
  
  useEffect(() => {
    fetchChampions();
  }, []); // Passing in an empty array ensures the effect only happens on component mount, rather than render

  return (
    <SelectedChampionContext.Provider
      value={{
        championData: championData,
        selectedChampionKey: selectedChampionKey,
        selectedChampionId: selectedChampionId,
        selectedChampionName: selectedChampionName,
        selectedImage: selectedImage,
        setSelectedChampionKey: setSelectedChampionKey,
        setSelectedChampionId: setSelectedChampionId,
        setSelectedChampionName: setSelectedChampionName,
        setSelectedImage: setSelectedImage,
      }}
      {...props}
    >
    </SelectedChampionContext.Provider>
  );
}

export const SelectedChampionConsumer = SelectedChampionContext.Consumer;
