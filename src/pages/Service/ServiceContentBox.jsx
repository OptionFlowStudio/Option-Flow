import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ServiceContentBox = ({ serviceObject }) => {
  const navigate = useNavigate();

  const navigateToPage = (id) => {
    navigate(`/service-single/${id}`);
  };
  return (
    <div className="col-sm-12 col-md-4">
      <article className="pbmit-service-style-6">
        <div
          className="pbminfotech-post-item"
          onClick={() => navigateToPage(serviceObject.id)}
        >
          <div className="pbmit-service-image-wrapper">
            <div className="pbmit-featured-img-wrapper">
              <div className="pbmit-featured-wrapper">
                <img
                  src={`https://api.optionflow.pro/${serviceObject.serviceImageLow}`}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="pbminfotech-box-content">
            <div className="pbminfotech-box-content-inner">
              <div className="pbmit-service-icon-wrapper">
                <i className={serviceObject.iconType}></i>
              </div>
              <div className="pbmit-service-title-wrapper">
                <div className="pbmit-service-cat">
                  <Link to={`/service-single/${serviceObject.id}`} rel="tag">
                    {serviceObject.category}
                  </Link>
                </div>
                <h3 className="pbmit-service-title">
                  <Link to={`/service-single/${serviceObject.id}`}>
                    {serviceObject.title}
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ServiceContentBox;
