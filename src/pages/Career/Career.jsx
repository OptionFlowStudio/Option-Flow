import React, { useEffect, useState, useContext, useCallback } from "react";
import { DataContext } from "../../Context/DataContext";
import CareerContentBox from "./CareerContentBox";
import Loader from "../../animation/Loader";
import FetchModule from "../../components/module/FetchModule";

const Career = () => {
  const [careerData, setCareerData] = useState(null);
  const { careerNewData, setFetchedCareerData } = useContext(DataContext);
  let careerLink = "https://api.optionflow.tech/api/Main/Career";

  const notEmptyData = careerData || careerNewData;

  const fetchDataCallback = useCallback(() => {
    if (notEmptyData !== null) {
      setCareerData(careerNewData);
    } else {
      FetchModule(setCareerData, setFetchedCareerData, careerLink);
    }
  });

  useEffect(() => {
    fetchDataCallback();
  }, [fetchDataCallback]);

  return (
    <div className="page-wrapper">
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">Кар’єра</h1>
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
              {careerData ? (
                careerData.length === 0 ? (
                  <h3
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "400px",
                      color: "white",
                    }}
                  >
                    {"Поки що немає вільних вакансій :("}
                  </h3>
                ) : (
                  careerData.map((item) => (
                    <CareerContentBox careerObject={item} key={item.id} />
                  ))
                )
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

export default Career;
