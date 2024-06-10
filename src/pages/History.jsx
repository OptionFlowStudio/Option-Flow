import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../Context/DataContext";
import axios from "axios";

const History = () => {
  const [historyData, setHistoryData] = useState(null);
  const { historyNewData, setFetchedHistoryData } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataResponse = await axios.get(
          "https://api.optionflow.pro/api/Main/OurHistory"
        );
        setHistoryData(dataResponse.data);
        setFetchedHistoryData(dataResponse.data);
      } catch (error) {
        console.log("we got some Error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">Наша Історія</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="section-lg about-us-section-home3 our-history">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-12">
                <div className="about-us-left-bg-home3">
                  <div className="about-us-home3"></div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12 about-us-right-home3">
                <div className="pbmit-heading-subheading">
                  <h4 className="pbmit-subtitle">Що ми пропонуємо</h4>
                  <h2 className="pbmit-title">
                    Ми пропонуємо новітні IT-рішення та підтримку на кожному
                    етапі проекту.
                  </h2>
                  <div className="pbmit-title-text">
                    Ми цінуємо унікальність кожного проекту та кожного клієнта.
                    Наша команда розробляє індивідуальні стратегії, враховуючи
                    особливості бізнесу кожного замовника. Регулярні оновлення,
                    звіти та спілкування на кожному етапі проекту забезпечують
                    повне залучення замовника в процес розробки.
                  </div>
                </div>
                <ul className="list-group list-group-borderless">
                  <li className="list-group-item">
                    <i className="pbmit-base-icon-ok"></i>
                    Ми Орієнтовані На Результати
                  </li>
                  <li className="list-group-item">
                    <i className="pbmit-base-icon-ok"></i> Ми Творимо Для
                    Виконання
                  </li>
                  <li className="list-group-item">
                    <i className="pbmit-base-icon-ok"></i> Наші Експерти
                    Працюють Наполегливо
                  </li>
                </ul>
                <img
                  src="images/finance/signature.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-lgx pbmit-bg-color-light">
          <div className="container">
            <div className="pbmit-heading-subheading text-center">
              <h4 className="pbmit-subtitle">Наша Історія</h4>
              <h2 className="pbmit-title">Як ми створили нашу студію</h2>
            </div>
            <div className="pbmit-timeline">
              <div className="pbmit-first-timeline"></div>
              <div className="pbmit-timeline-post-items">
                {historyData
                  ? historyData.history.map((historyItem) => (
                      <div
                        className="pbmit-timeline-inner"
                        key={historyItem.year}
                      >
                        <div className="col-sm-12 pbmit-ourhistory-type2">
                          <div className="row pbmit-ourhistory-row">
                            <div className="col-md-6 col-sm-12 col-xs-6 pbmit-ourhistory-right">
                              <span className="label">{historyItem.year}</span>
                              <div className="content">
                                <h4>{historyItem.title}</h4>
                                <div className="simple-text">
                                  <p>{historyItem.description}</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 pbmit-ourhistory-left">
                              <span className="pbmit-timeline-image">
                                <img
                                  src={historyItem.image}
                                  className="img-fluid w-100"
                                  alt="We started  business industry"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
              <div className="pbmit-last-timeline"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default History;
