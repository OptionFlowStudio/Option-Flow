import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../../animation/Loader";
import FetchDetailsModule from "../../components/module/FetchDetailsModule";
import { Link } from "react-router-dom";
import FetchModule from "../../components/module/FetchModule";

const BlogSingle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { blogNewData, setFetchedBlogData } = useContext(DataContext);
  const [currentBlog, setCurrentBlog] = useState(null);

  let blogDetailsLink = "https://api.optionflow.pro/api/Main/BlogDetails/";

  let blogLink = "https://api.optionflow.pro/api/Main/Blog";

  useEffect(() => {
    const detailsFetch = async () => {
      await FetchDetailsModule(setCurrentBlog, blogDetailsLink, id, navigate);
      FetchModule(undefined, setFetchedBlogData, blogLink);
    };
    detailsFetch();
  }, [id]);

  return (
    <div className="page-wrapper">
      {currentBlog ? (
        <>
          <div className="pbmit-title-bar-wrapper">
            <div className="container">
              <div className="pbmit-title-bar-content">
                <div className="pbmit-title-bar-content-inner">
                  <div className="pbmit-tbar">
                    <div className="pbmit-tbar-inner container">
                      <h1 className="pbmit-tbar-title-one">
                        {currentBlog.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="page-content">
            <section className="section-lgt blog-classic-two">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9 blog-right-col">
                    <div className="row">
                      <div className="col-md-12">
                        <article className="post blog-details">
                          <div className="post-thumbnail">
                            <div className="pbmit-featured-container">
                              <div className="pbmit-featured-wrapper">
                                <img
                                  src={`https://api.optionflow.pro/${currentBlog.blogImage}`}
                                  className="img-fluid w-100"
                                  alt=""
                                />
                              </div>
                              <div
                                className="pbmit-short-description"
                                dangerouslySetInnerHTML={{
                                  __html: currentBlog.description,
                                }}
                              ></div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 blog-left-col">
                    <aside className="sidebar">
                      <aside className="widget widget-recent-post">
                        <h2 className="widget-title">Останні публікації</h2>
                        <ul className="recent-post-list">
                          {blogNewData
                            ? blogNewData.slice(0, 3).map((postItem) => (
                                <li
                                  className="recent-post-list-li"
                                  key={postItem.id.toString()}
                                >
                                  <Link
                                    className="recent-post-thum"
                                    to={`/blog-single/${postItem.id}`}
                                  >
                                    <img
                                      src={`https://api.optionflow.pro/${postItem.blogImageLow}`}
                                      className="img-fluid"
                                      alt=""
                                    />

                                    <div className="media-body">
                                      {postItem.title}
                                      <span className="post-date"></span>
                                    </div>
                                  </Link>
                                </li>
                              ))
                            : null}
                        </ul>
                      </aside>
                      <aside className="widget widget-categories">
                        <h3 className="widget-title">Категорії</h3>
                        <ul>
                          {blogNewData
                            ? Array.from(
                                new Set(
                                  blogNewData.map((item) => {
                                    return item.category;
                                  })
                                )
                              ).map((categoryItem) => (
                                <li key={categoryItem.toString()}>
                                  <Link to={`/blog-category/${categoryItem}`}>
                                    {categoryItem}
                                  </Link>
                                </li>
                              ))
                            : null}
                        </ul>
                      </aside>
                      <aside className="widget single-service-contact">
                        <div className="widget-as-link">
                          <div className="pbmit-ads-inner">
                            <div className="pbmit-ads-logo-white">
                              <img
                                className="size-full"
                                src="https://optionflow.pro/images/internet/logo.svg"
                                alt="single15img"
                              />
                            </div>
                            <div className="pbmit-ads-button">
                              <Link to={"/contacts"}>
                                <span>Консультація</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </aside>
                    </aside>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default BlogSingle;
