import React, { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";
import Loader from "../../animation/Loader";
import FetchDetailsModule from "../../components/module/FetchDetailsModule";
import FetchModule from "../../components/module/FetchModule";

const PortfolioSingle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { setFetchedPortfolioData } = useContext(DataContext);
  const [currentPortfolio, setCurrentPortfolio] = useState(null);

  const portfolioDetailsLink =
    "https://api.optionflow.tech/api/Main/PortfolioDetails/";
  const portfolioLink = "https://api.optionflow.tech/api/Main/Portfolio";

  const fetchDetailsCallback = useCallback(() => {
    FetchDetailsModule(setCurrentPortfolio, portfolioDetailsLink, id, navigate);
    FetchModule(undefined, setFetchedPortfolioData, portfolioLink);
  }, [id]);

  useEffect(() => {
    fetchDetailsCallback();
  }, [fetchDetailsCallback]);

  return (
    <div className="page-wrapper">
      {currentPortfolio ? (
        <>
          <div className="pbmit-title-bar-wrapper">
            <div className="container">
              <div className="pbmit-title-bar-content">
                <div className="pbmit-title-bar-content-inner">
                  <div className="pbmit-tbar">
                    <div className="pbmit-tbar-inner container">
                      <h1 className="pbmit-tbar-title">
                        {currentPortfolio.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="page-content">
            <section className="section-lgt portfolio-single portfolio-single-two">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="pbmit-short-description">
                      <h4>{currentPortfolio.title}</h4>
                      {currentPortfolio.shortTitle}
                    </div>
                    <div className="pbmit-single-project-details-list">
                      <div className="pbmit-portfolio-lines-wrapper">
                        <ul className="pbmit-portfolio-lines-ul">
                          <li className="pbmit-portfolio-line-li">
                            <span className="pbmit-portfolio-line-title">
                              Клієнт:
                            </span>
                            <span className="pbmit-portfolio-line-value">
                              {currentPortfolio.client}
                            </span>
                          </li>

                          <li className="pbmit-portfolio-line-li">
                            <span className="pbmit-portfolio-line-title">
                              Технології:
                            </span>
                            <span className="pbmit-portfolio-line-value">
                              HTML, JS, .NET, C#
                            </span>
                          </li>
                          <li className="pbmit-portfolio-line-li">
                            <span className="pbmit-portfolio-line-title">
                              Категорія:
                            </span>
                            <span className="pbmit-portfolio-line-value">
                              {currentPortfolio.category}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-details">
                    <div className="portfolio-challange">
                      <div className="row">
                        <div className="col-md-6">
                          <h4>Про проект</h4>
                          <div
                            className="subchallange"
                            dangerouslySetInnerHTML={{
                              __html: currentPortfolio.aboutProject,
                            }}
                          ></div>
                          <ul className="list-group list-group-borderless">
                            <li className="list-group-item">
                              <i className="pbmit-base-icon-ok"></i>
                              Автоматизація додавання нових єлементів
                            </li>
                            <li className="list-group-item">
                              <i className="pbmit-base-icon-ok"></i>
                              SEO-оптимізація
                            </li>
                            <li className="list-group-item">
                              <i className="pbmit-base-icon-ok"></i>Адаптивний
                              дизайн
                            </li>
                            <li className="list-group-item">
                              <i className="pbmit-base-icon-ok"></i>Анімації
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 laptop-container">
                          <div className="laptop">
                            <div className="laptop__screen">
                              <a
                                href={currentPortfolio.projectLink}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  src={`https://api.optionflow.tech/${currentPortfolio.portfolioImage}`}
                                  width="1600"
                                  height="1000"
                                  alt="Screen"
                                />
                              </a>
                            </div>
                            <div className="laptop__bottom">
                              <div className="laptop__under"></div>
                            </div>
                            <div className="laptop__shadow"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PortfolioSingle;
