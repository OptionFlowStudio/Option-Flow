import React from "react";
import Loader from "../../animation/Loader";
import CustomLink from "../common/CustomLink";

const TabContent = ({ tabData }) => {
  return (
    <section className="section-lg pbmit-bg-color-secondary service-section-home3">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-md-12">
            <div className="pbmit-sticky">
              <div className="pbmit-heading-subheading-style-3 pe-5">
                <h4 className="pbmit-subtitle text-white">
                  Чому обирають саме нас
                </h4>
                <h2 className="pbmit-title text-white">
                  Високі стандарти нашої роботи
                </h2>
                <div className="pbmit-heading-desc pe-5">
                  З розробкою від OptionFlow ви можете бути впевнені, що ваш
                  вебсайт буде бездоганним. Легко налаштуйте вебсайт своєї мрії.
                </div>
              </div>
              <CustomLink
                propsHref="/contacts"
                className="pbmit-btn pbmit-btn-hover-secondary"
              >
                консультація
              </CustomLink>
            </div>
          </div>
          <div className="col-xl-7 col-md-12">
            <div className="row">
              {tabData ? (
                tabData.map((item, index) => (
                  <div className="col-md-6 " key={index.toString()}>
                    <article className="pbmit-service-style-6">
                      <div className="pbminfotech-post-item">
                        <div className="pbminfotech-box-content">
                          <div className="pbminfotech-box-content-inner">
                            <h3 className="pbmit-service-title">
                              {item.title}
                            </h3>
                            <div className="pbmit-service-cat">
                              <p>{item.text}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabContent;
