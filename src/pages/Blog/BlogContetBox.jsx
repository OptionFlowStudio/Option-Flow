import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BlogContetBox = ({ blogObject }) => {
  const navigate = useNavigate();

  const navigateToPage = (id) => {
    navigate(`/blog-single/${id}`);
  };
  return (
    <div className="col-sm-12 col-md-4">
      <article className="pbmit-blog-style-6">
        <div
          className="post-item"
          onClick={() => navigateToPage(blogObject.id)}
        >
          <div className="pbmit-featured-container">
            <div className="pbmit-featured-img-wrapper">
              <div className="pbmit-featured-wrapper">
                <img
                  src={`https://api.optionflow.tech/${blogObject.blogImageLow}`}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="pbminfotech-box-content">
            <div className="pbmit-meta-container">
              <span className="pbmit-meta-category">
                <Link
                  to={`/blog-category/${blogObject.category}`}
                  rel="category tag"
                >
                  {blogObject.category}
                </Link>
              </span>
            </div>
            <div className="pbmit-box-content-wrapper">
              <h3 className="pbmit-post-title">
                <Link to={`/blog-single/${blogObject.id}`}>
                  {blogObject.title}
                </Link>
              </h3>
              <div className="pbmit-meta-container">
                <span className="pbmit-meta pbmit-date-wrapper">
                  <span className="pbmit-post-date">
                    <i className="pbmit-base-icon-calendar-1 pbmit-base-icon">
                      {blogObject.dateCreate}
                    </i>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogContetBox;
