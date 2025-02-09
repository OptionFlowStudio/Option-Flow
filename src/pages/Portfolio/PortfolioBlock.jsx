import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PortfolioBlock = ({ portfolioObject }) => {
  const navigate = useNavigate();

  const navigateToPage = (id) => {
    navigate(`/portfolio-single/${id}`);
  };

  return (
    <div className="col-sm-12 col-md-4">
      <article className="pbmit-portfolio-style-4">
        <div
          className="pbminfotech-post-content"
          onClick={() => navigateToPage(portfolioObject.id)}
        >
          <div className="pbmit-image-wrapper">
            <div className="pbmit-featured-img-wrapper">
              <div className="pbmit-featured-wrapper">
                <img
                  src={`https://api.optionflow.tech/${portfolioObject.portfolioImageLow}`}
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
