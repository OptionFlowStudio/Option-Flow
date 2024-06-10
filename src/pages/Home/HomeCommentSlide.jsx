import React from "react";

const HomeCommentSlide = () => {
  return (
    <div className="swiper-slide">
      <article className="pbmit-testimonial-style-4">
        <div className="pbminfotech-post-item">
          <div className="pbminfotech-star-ratging-box">
            <div className="pbminfotech-box-star-ratings">
              <i className="pbmit-base-icon-star pbmit-active"></i>
              <i className="pbmit-base-icon-star pbmit-active"></i>
              <i className="pbmit-base-icon-star pbmit-active"></i>
              <i className="pbmit-base-icon-star pbmit-active"></i>
              <i className="pbmit-base-icon-star pbmit-active"></i>
            </div>
          </div>
          <div className="pbminfotech-box-content">
            <div className="pbminfotech-box-desc">
              <blockquote className="pbminfotech-testimonial-text">
                <p>
                  We are so many grateful for your guidance and encouragement
                  have helped us get to where we are today. You have our immense
                  thanks for all of the support you’ve given us.
                </p>
              </blockquote>
            </div>
            <div className="pbminfotech-author-wrapper d-flex align-items-center">
              <div className="pbminfotech-box-img">
                <div className="pbmit-featured-img-wrapper">
                  <div className="pbmit-featured-wrapper">
                    <img
                      src="images/internet/testimonail/testimonial-01.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pbminfotech-box-author">
                <h3 className="pbminfotech-box-title">Amelia Daniel</h3>
                <div className="pbminfotech-testimonial-detail">
                  Market Analyst
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default HomeCommentSlide;
