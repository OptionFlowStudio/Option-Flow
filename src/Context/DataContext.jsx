import React, { createContext, useState } from "react";
import { log } from "three/examples/jsm/nodes/Nodes.js";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [openedHeader, setOpenedHeader] = useState(false);
  const [serviceNewData, setServiceNewData] = useState(null);
  const [portfolioNewData, setPortfolioNewData] = useState(null);
  const [blogNewData, setBlogNewData] = useState(null);
  const [careerNewData, setCareerNewData] = useState(null);
  const [historyNewData, setHistoryNewData] = useState(null);

  const setFetchedServiceData = (newData) => {
    setServiceNewData(newData);
  };

  const setFetchedPortfolioData = (newData) => {
    setPortfolioNewData(newData);
  };

  const setFetchedBlogData = (newData) => {
    setBlogNewData(newData);
  };

  const setFetchedCareerData = (newData) => {
    setCareerNewData(newData);
  };

  const setFetchedHistoryData = (newData) => {
    setHistoryNewData(newData);
  };

  const setHeaderOpened = () => {
    setOpenedHeader(!openedHeader);
  };

  return (
    <DataContext.Provider
      value={{
        serviceNewData,
        setFetchedServiceData,
        portfolioNewData,
        setFetchedPortfolioData,
        blogNewData,
        setFetchedBlogData,
        careerNewData,
        setFetchedCareerData,
        historyNewData,
        setFetchedHistoryData,
        setHeaderOpened,
        openedHeader,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
