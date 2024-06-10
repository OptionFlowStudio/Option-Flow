import React, { useEffect, useState, useContext } from "react";
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

  let blogLink = "https://api.optionflow.pro/api/Main/Blog";

  useEffect(() => {
    if (category !== undefined) {
      setFilteredData(blogNewData.filter((item) => item.category === category));
    }
    if (blogNewData !== null && blogData === null) {
      setBlogData(blogNewData);
    } else if (blogData === null) {
      FetchModule(setBlogData, setFetchedBlogData, blogLink);
    }
  }, [category]);

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
