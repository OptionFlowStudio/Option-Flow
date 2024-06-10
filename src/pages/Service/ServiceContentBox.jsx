import React from "react";
import { Link } from "react-router-dom";

const ServiceContentBox = ({
  serviceTitle,
  serviceImg,
  serviceLink,
  serviceIcon,
  serviceCategory,
}) => {
  return (
    <div className="col-sm-12 col-md-4">
      <article className="pbmit-service-style-6">
        <div className="pbminfotech-post-item">
          <div className="pbmit-service-image-wrapper">
            <div className="pbmit-featured-img-wrapper">
              <div className="pbmit-featured-wrapper">
                <img
                  src={`https://api.optionflow.pro/${serviceImg}`}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="pbminfotech-box-content">
            <div className="pbminfotech-box-content-inner">
              <div className="pbmit-service-icon-wrapper">
                <i className={serviceIcon}></i>
              </div>
              <div className="pbmit-service-title-wrapper">
                <div className="pbmit-service-cat">
                  <Link to={serviceLink} rel="tag">
                    {serviceCategory}
                  </Link>
                </div>
                <h3 className="pbmit-service-title">
                  <Link to={serviceLink}>{serviceTitle}</Link>
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
