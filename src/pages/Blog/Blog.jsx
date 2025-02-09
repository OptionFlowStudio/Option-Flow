import React, { useEffect, useState, useContext, useCallback } from "react";
import BlogContetBox from "./BlogContetBox";
import { DataContext } from "../../Context/DataContext";
import Loader from "../../animation/Loader";
import { useParams } from "react-router-dom";
import FetchModule from "../../components/module/FetchModule";

const Blog = () => {
  const { category } = useParams();
  const [blogData, setBlogData] = useState(null);
  const { blogNewData, setFetchedBlogData } = useContext(DataContext);
  const [filteredData, setFilteredData] = useState(null);

  let blogLink = "https://api.optionflow.tech/api/Main/Blog";

  const notEmptyData = blogData || blogNewData;

  const fetchDataCallback = useCallback(() => {
    if (category !== undefined && notEmptyData !== null) {
      setFilteredData(
        notEmptyData.filter((item) => item.category === category)
      );
    }

    if (notEmptyData !== null) {
      setBlogData(notEmptyData);
    } else {
      FetchModule(setBlogData, setFetchedBlogData, blogLink);
    }
  }, [category, blogNewData]);

  useEffect(() => {
    fetchDataCallback();
  }, [fetchDataCallback]);

  let data = category ? filteredData : blogData;

  return (
    <div className="page-wrapper">
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">Блог</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content blog-grid">
        <section className="section-lg">
          <div className="container">
            <div className="row">
              {data ? (
                data.map((blogItem) => (
                  <BlogContetBox blogObject={blogItem} key={blogItem.id} />
                ))
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
