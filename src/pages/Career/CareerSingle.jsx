import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";
import Loader from "../../animation/Loader";
import FetchDetailsModule from "../../components/module/FetchDetailsModule";
import FetchModule from "../../components/module/FetchModule";

const CareerSingle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { careerNewData, setFetchedCareerData } = useContext(DataContext);
  const [currentCareer, setCurrentCareer] = useState(null);
  const [fileUpload, setFileUpload] = useState(null);
  const [uploading, setUploading] = useState(false);

  const carrerDetailsLink =
    "https://api.optionflow.pro/api/Main/CareerDetails/";
  const careerLink = "https://api.optionflow.pro/api/Main/Career";

  useEffect(() => {
    FetchDetailsModule(setCurrentCareer, carrerDetailsLink, id, navigate);
    if (careerNewData === null) {
      FetchModule(undefined, setFetchedCareerData, careerLink);
    }
  }, [id]);

  console.log(currentCareer);

  const sendCV = async (event) => {
    event.preventDefault();
    setUploading(true);
    try {
      const dataResponse = await axios.post(
        "https://api.optionflow.pro/api/Main/CareerDetailPost",
        {
          "Career.id": currentCareer.id,
          files: fileUpload,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (dataResponse.status === 200) {
        setUploading(false);
        localStorage.setItem(`${id}`, true);
      }
    } catch (error) {
      console.log("We got some error", error);
    }
  };

  const CVUploaded = localStorage.getItem(`${id}`);

  return (
    <div className="page-wrapper">
      {currentCareer ? (
        <>
          <div className="pbmit-title-bar-wrapper">
            <div className="container">
              <div className="pbmit-title-bar-content">
                <div className="pbmit-title-bar-content-inner">
                  <div className="pbmit-tbar">
                    <div className="pbmit-tbar-inner container">
                      <h1 className="pbmit-tbar-title">
                        {currentCareer.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="page-content">
            <section className="section-lgt career-single portfolio-single-two">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="pbmit-short-description">
                      <div className="pbmit-short-head">
                        <h4>{currentCareer.title}</h4>
                        <span className="dropcap rounded">
                          {currentCareer.experiences.experienceTag}
                        </span>
                      </div>
                      {currentCareer.shortTitle}
                    </div>
                    <div className="pbmit-single-project-details-list">
                      <div className="pbmit-portfolio-lines-wrapper">
                        <ul className="pbmit-portfolio-lines-ul">
                          <li className="pbmit-portfolio-line-li">
                            <span className="pbmit-portfolio-line-title">
                              Досвід:
                            </span>
                            {currentCareer.experiences.experiences.map(
                              (experienceItem) => {
                                return experienceItem ? (
                                  <div key={experienceItem.toString()}>
                                    <span className="pbmit-portfolio-line-value">
                                      {experienceItem}
                                    </span>
                                    <br />
                                  </div>
                                ) : null;
                              }
                            )}
                          </li>
                          <li className="pbmit-portfolio-line-li">
                            <span className="pbmit-portfolio-line-title">
                              Технології:
                            </span>
                            {currentCareer.technologies.map(
                              (technologyItem) => {
                                return technologyItem ? (
                                  <div key={technologyItem.toString()}>
                                    <span className="pbmit-portfolio-line-value">
                                      {technologyItem}
                                    </span>
                                    <br />
                                  </div>
                                ) : null;
                              }
                            )}
                          </li>
                          <li className="pbmit-portfolio-line-li">
                            <span className="pbmit-portfolio-line-title">
                              Інструменти:
                            </span>
                            {currentCareer.tools.map((toolsItem) => {
                              return toolsItem ? (
                                <div key={toolsItem.toString()}>
                                  <span className="pbmit-portfolio-line-value">
                                    {toolsItem}
                                  </span>
                                  <br />
                                </div>
                              ) : null;
                            })}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-details">
                    <h4>Процес свіпбесіди</h4>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="pbmit-ihbox pbmit-ihbox-style-22">
                          <div className="pbmit-ihbox-box">
                            <div className="pbmit-ihbox-contents">
                              <div className="pbmit-ihbox-icon">
                                <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-text">
                                  1
                                </div>
                              </div>
                              <h2 className="pbmit-element-title">
                                Розмова з HR
                              </h2>
                              <div className="pbmit-heading-desc">
                                Після укладання угоди про дзвінок наш HR
                                зателефонує вам. Це буде короткий діалог, під
                                час якого ви дізнаєтеся більше про нас, а ми —
                                про вас.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="pbmit-ihbox pbmit-ihbox-style-22">
                          <div className="pbmit-ihbox-box">
                            <div className="pbmit-ihbox-contents">
                              <div className="pbmit-ihbox-icon">
                                <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-text">
                                  2
                                </div>
                              </div>
                              <h2 className="pbmit-element-title">
                                Тестове завдання
                              </h2>
                              <div className="pbmit-heading-desc">
                                Після успішної розмови з HR ми надамо вам
                                тестове завдання з визначеними термінами
                                виконання та умовами, яке відповідатиме вимогам
                                обраної вами посади.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="pbmit-ihbox pbmit-ihbox-style-22">
                          <div className="pbmit-ihbox-box">
                            <div className="pbmit-ihbox-contents">
                              <div className="pbmit-ihbox-icon">
                                <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-text">
                                  3
                                </div>
                              </div>
                              <h2 className="pbmit-element-title">
                                Технічна співбесіда
                              </h2>
                              <div className="pbmit-heading-desc">
                                Після успішного виконання тестового завдання ми
                                перейдемо до фінального етапу, де ми з вами
                                поговоримо на тему технічних знань обраної вами
                                посади.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-challange">
                      <div className="row">
                        <div className="col-md-6">
                          <h5>Основні функціональні обов'язки</h5>
                          <ul className="list-group list-group-borderless">
                            {currentCareer.functionalHarnesses.map(
                              (harnessesItem) => {
                                return harnessesItem ? (
                                  <li
                                    className="list-group-item"
                                    key={harnessesItem.toString()}
                                  >
                                    <i className="pbmit-base-icon-ok"></i>
                                    {harnessesItem}
                                  </li>
                                ) : null;
                              }
                            )}
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <h5>Наші обов'язки</h5>
                          <ul className="list-group list-group-borderless">
                            {currentCareer.ourHarnesses.map((harnessesItem) => {
                              return harnessesItem ? (
                                <li
                                  className="list-group-item"
                                  key={harnessesItem.toString()}
                                >
                                  <i className="pbmit-base-icon-ok"></i>
                                  {harnessesItem}
                                </li>
                              ) : null;
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="resume-send-block">
                  {!CVUploaded ? (
                    !uploading ? (
                      <form
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                        encType="multipart/form-data"
                        onSubmit={sendCV}
                      >
                        <label className="custum-file-upload">
                          <div className="icon">
                            <svg
                              viewBox="0 0 24 24"
                              fill=""
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier"></g>
                              <g id="SVGRepo_tracerCarrier"></g>
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                                  fill=""
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="text">
                            <span>
                              {fileUpload !== null
                                ? `${fileUpload.name}`
                                : "Додати Резюме (PDF)"}
                            </span>
                          </div>
                          <input
                            id="file"
                            type="file"
                            accept="application/pdf"
                            onChange={(e) => setFileUpload(e.target.files[0])}
                          ></input>
                        </label>
                        {fileUpload !== null ? (
                          <button
                            style={{ marginTop: "10px" }}
                            className="pbmit-btn pbmit-btn-hover-white mt-3"
                            type="submit"
                          >
                            Відправити
                          </button>
                        ) : null}
                      </form>
                    ) : (
                      <Loader />
                    )
                  ) : (
                    <div className="resume-result">
                      <h3>
                        Ми отримали ваше резюме, скоро ми з вами зв'яжемося!
                      </h3>
                      <ul className="career-social-links">
                        <li className="pbmit-social-li pbmit-social-linkedin">
                          <Link
                            to="https://www.linkedin.com/company/optionflow/"
                            target="_blank"
                          >
                            <span>
                              <i className="pbmit-base-icon-linkedin-squared"></i>
                            </span>
                          </Link>
                        </li>
                        <li className="pbmit-social-li pbmit-social-instagram">
                          <Link
                            to="https://www.instagram.com/optionflow.pro?igsh=N2djbzNja3BmN3Bt"
                            target="_blank"
                          >
                            <span>
                              <i className="pbmit-base-icon-instagram"></i>
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
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

export default CareerSingle;
