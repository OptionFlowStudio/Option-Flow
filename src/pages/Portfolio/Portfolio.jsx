import React, { useState, useEffect, useContext } from "react";
import PortfolioBlock from "./PortfolioBlock";
import { DataContext } from "../../Context/DataContext";
import Loader from "../../animation/Loader";
import FetchModule from "../../components/module/FetchModule";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const { portfolioNewData, setFetchedPortfolioData } = useContext(DataContext);

  const portfolioLink = "https://api.optionflow.pro/api/Main/Portfolio";
  useEffect(() => {
    if (portfolioNewData !== null && portfolioData === null) {
      setPortfolioData(portfolioNewData);
    } else if (portfolioData === null) {
      FetchModule(setPortfolioData, setFetchedPortfolioData, portfolioLink);
    }
  }, [portfolioData, portfolioNewData]);

  return (
    <div className="page-wrapper">
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">Наше Порфтоліо</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content blog-grid">
        <section className="section-lg">
          <div className="container">
            <div className="row">
              {portfolioData ? (
                portfolioData.map((item) => (
                  <PortfolioBlock portfolioObject={item} key={item.id} />
                ))
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
