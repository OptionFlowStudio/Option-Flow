import React from "react";
import { Link } from "react-router-dom";
import sliderStyle from "./Slider.module.css";

const SliderBlock = ({
  sliderTitle,
  sliderIcon,
  sliderContent,
  sliderLink,
}) => {
  return (
    <div className={sliderStyle.slide}>
      <article className="pbmit-service-style-3">
        <div className="pbminfotech-post-item">
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

export default SliderBlock;
