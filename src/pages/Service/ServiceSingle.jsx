import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import { useParams } from "react-router-dom";
import logoBlack from "./../../Images/logo.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../../animation/Loader";
import FetchDetailsModule from "../../components/module/FetchDetailsModule";
import FetchModule from "../../components/module/FetchModule";

const ServiceSingle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { serviceNewData, setFetchedServiceData } = useContext(DataContext);
  const [currentService, setCurrentService] = useState(null);

  const serviceDetailsLink =
    "https://api.optionflow.pro/api/Main/ServiceDetails/";
  const serviceLink = "https://api.optionflow.pro/api/Main/Services";

  useEffect(() => {
    FetchDetailsModule(setCurrentService, serviceDetailsLink, id, navigate);
    FetchModule(undefined, setFetchedServiceData, serviceLink);
  }, [id]);

  console.log(currentService);

  return (
    <div className="page-wrapper">
      {currentService ? (
        <>
          <div className="pbmit-title-bar-wrapper">
            <div className="container">
              <div className="pbmit-title-bar-content">
                <div className="pbmit-title-bar-content-inner">
                  <div className="pbmit-tbar">
                    <div className="pbmit-tbar-inner container">
                      <h1 className="pbmit-tbar-title">
                        {currentService.service.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="page-content">
            <section className="section-lgx service-details-two">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 service-left-col order-2 order-lg-1">
                    <aside className="service-sidebar">
                      <aside className="widget post-list">
                        <h2 className="widget-title">Всі послуги</h2>
                        <div className="all-post-list">
                          <ul>
                            {serviceNewData.map((serviceItem) => (
                              <li
                                className={
                                  serviceItem.id === currentService.id
                                    ? "post-active"
                                    : null
                                }
                                key={serviceItem.id.toString()}
                              >
                                <Link to={`/service-single/${serviceItem.id}`}>
                                  {serviceItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </aside>
                      <aside className="widget pbmit-htmlbgcolor">
                        <div className="widget_text widget-as-link">
                          <div className="textwidget custom-html-widget">
                            <div className="pbmit-download">
                              <div className="pbmit-item-download">
                                <Link
                                  to="https://api.optionflow.pro/docs/OptionFlow.pdf"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <i className="pbmit-xido-icon pbmit-xido-icon-pdf"></i>
                                  Завантажте нашу презентацію
                                  <i className="industrey-base-icons tstk-rightpostn tstk-base-icon-download"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </aside>
                      <aside className="widget single-service-contact">
                        <div className="widget-as-link">
                          <div className="pbmit-ads-inner">
                            <div className="pbmit-ads-logo">
                              <img
                                className="size-full"
                                src={logoBlack}
                                alt="single15img"
                              />
                            </div>

                            <div className="pbmit-ads-button">
                              <Link to={"/contacts"}>
                                <span>Консультація</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </aside>
                    </aside>
                  </div>
                  <div className="col-lg-8 service-right-col order-1">
                    <img
                      src={`https://api.optionflow.pro/${currentService.service.serviceImage}`}
                      className="w-100"
                      alt=""
                    />
                    <div className="service-details">
                      <h4 className="pbmit-title">
                        {currentService.service.title}
                      </h4>
                      <div className="mt-4">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: currentService.service.description,
                          }}
                        ></div>
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

export default ServiceSingle;
