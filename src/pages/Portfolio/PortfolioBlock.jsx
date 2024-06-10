import React from "react";
import { Link } from "react-router-dom";

const PortfolioBlock = ({ portfolioObject }) => {
  return (
    <div className="col-sm-12 col-md-4">
      <article className="pbmit-portfolio-style-4">
        <div className="pbminfotech-post-content">
          <div className="pbmit-image-wrapper">
            <div className="pbmit-featured-img-wrapper">
              <div className="pbmit-featured-wrapper">
                <img
                  src={`https://api.optionflow.pro/${portfolioObject.portfolioImageLow}`}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="pbminfotech-box-content pbminfotech-overlay">
            <div className="pbminfotech-box-content-wrapper">
              <div className="pbminfotech-titlebox">
                <h3 className="pbmit-portfolio-title">
                  <Link to={`/portfolio-single/${portfolioObject.id}`}>
                    {portfolioObject.title}
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

export default PortfolioBlock;
