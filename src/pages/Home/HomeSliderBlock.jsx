import React from "react";
import { Link } from "react-router-dom";

const HomeSliderBlock = ({
  sliderTitle,
  sliderIcon,
  sliderContent,
  sliderLink,
}) => {
  return (
    <div className="swiper-slide">
      <article className="pbmit-service-style-3">
        <div className="pbminfotech-post-item">
          <div className="pbmit-service-icon-wrapper">
            <i className={`pbmit-xido-icon-${sliderIcon}`}></i>
          </div>
          <div className="pbminfotech-box-content">
            <h3 className="pbmit-service-title">
              <Link to={`/service-single/${sliderLink}`}>{sliderTitle}</Link>
            </h3>
            <div className="pbmit-service-content">
              <p>{sliderContent}</p>
            </div>
          </div>
          <div className="pbmit-service-btn">
            <Link className="btn-arrow" to={`/service-single/${sliderLink}`}>
              Read More
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default HomeSliderBlock;
