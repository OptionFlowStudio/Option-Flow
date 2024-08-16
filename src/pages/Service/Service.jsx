import React, { useEffect, useState, useContext, useCallback } from "react";
import ServiceContentBox from "./ServiceContentBox";
import { DataContext } from "../../Context/DataContext";
import Loader from "../../animation/Loader";
import FetchModule from "../../components/module/FetchModule";

const Service = () => {
  const [serviceData, setServiceData] = useState(null);
  const { serviceNewData, setFetchedServiceData } = useContext(DataContext);

  const serviceLink = "https://api.optionflow.pro/api/Main/Services";

  const fetchDataCallback = useCallback(() => {
    if (serviceNewData !== null && serviceData === null) {
      setServiceData(serviceNewData);
    } else if (serviceData === null) {
      FetchModule(setServiceData, setFetchedServiceData, serviceLink);
    }
  }, [serviceData, serviceNewData]);

  useEffect(() => {
    fetchDataCallback();
  }, [fetchDataCallback]);
  return (
    <div>
      <div className="page-wrapper">
        <div className="pbmit-title-bar-wrapper">
          <div className="container">
            <div className="pbmit-title-bar-content">
              <div className="pbmit-title-bar-content-inner">
                <div className="pbmit-tbar">
                  <div className="pbmit-tbar-inner container">
                    <h1 className="pbmit-tbar-title">Послуги</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content blog-grid">
          <section className="section-lg service-section">
            <div className="container">
              <div className="row">
                {serviceData ? (
                  serviceData.map((serviceItem) => (
                    <ServiceContentBox
                      serviceObject={serviceItem}
                      key={serviceItem.id}
                    />
                  ))
                ) : (
                  <Loader />
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Service;
