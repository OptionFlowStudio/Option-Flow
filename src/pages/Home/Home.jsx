import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sphere from "../../animation/Sphere.jsx";
import TabContent from "../../components/HomeComponents/TabContent.jsx";
import SliderComponent from "../../components/HomeComponents/Slider.jsx";
import Loader from "../../animation/Loader.jsx";
import webImg from "../../Images/internet/web-service.png";
import smmImg from "../../Images/internet/smm-service.png";
import itImg from "../../Images/internet/it-service.png";
import video from "../../animation/ooo.mp4";

const Home = () => {
  const [cardData] = useState([
    {
      id: 1,
      name: "Web-сайти",
      imageUrl: webImg,
      link: "/service-single/13",
      category: {
        category1: "Інтерфейси та корпоративні сайти",
        category2: "Лендинги та портфоліо",
        category3: "Веб-додатки",
      },
    },
    {
      id: 2,
      name: "Мобільні додатки",
      imageUrl: smmImg,
      link: "/service-single/11",
      category: {
        category1: "Мобільні додатки для бізнесу",
        category2: "Інтерактивні додатки",
        category3: "Клієнт-серверні додатки",
      },
    },
    {
      id: 3,
      name: "ІТ-консалтинг",
      imageUrl: itImg,
      link: "/service-single/10",
      category: {
        category1: "Оптимізація ІТ-стратегії",
        category2: "Оптимізація бізнес-процесів",
        category3: "Управління ІТ-ризиками",
      },
    },
  ]);

  const serviceItemSection = useState([
    {
      icon: "pbmit-xido-icon-satellite",
      title: "Веб-сайти для бізнесу",
      description:
        " Розробляємо веб-сайти які не лише презентують вашу компанію, а й автоматизують бізнес-процеси",
    },
    {
      icon: "pbmit-xido-icon-ar-camera",
      title: "Мобільні додатки",
      description:
        "Наявність мобільного додатку підвищує технологічний статус вашого бренду, створюючи враження сучасності та інноваційності",
    },
    {
      icon: "pbmit-xido-icon-design",
      title: "UI/UX дизайн та прототипування",
      description:
        "Створення UX/UI дизайну для будь-якого проекту, який буде лаконічним та інтуїтивно зрозумілим",
    },
    {
      icon: "pbmit-xido-icon-local-area-network",
      title: "Корпоративні додатки",
      description:
        "Створюємо внутрішні додатки для компаній, що дозволяють краще керувати бізнес-процесами, спростити роботу з клієнтами чи партнерами, або підвищити продуктивність",
    },
  ]);
  const [servicesData, setServicesData] = useState({});
  const [blogData, setBlogData] = useState(null);
  const [tabData, setTabData] = useState(null);
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataResponse = await axios.get(
          "https://api.optionflow.pro/api/Main/Index"
        );
        setServicesData(dataResponse.data.allServices);
        setBlogData(dataResponse.data.blogs);
        setTabData(dataResponse.data.contentBlocks);
        setDataLoading(true);
      } catch (error) {
        console.log("We get the error", error);
      }
    };

    getData();

    return () => {};
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-content pbmit-bg-color-light">
        <section className="banner-section-bg">
          <div className="container">
            <div className="pbmit-text-style-6">
              <h2 className="pbmit-title">
                Цифрова ідентичність - як головна мета
              </h2>
              <p>Cпільно творимо майбутнє: об'єднуємо іновації та творчість.</p>
              <div>
                <Link to="/contacts" className="pbmit-btn">
                  Отримати консультацію
                </Link>
              </div>
            </div>
            {/* <div className="col-xl-6 col-md-12">{<Sphere />}</div> */}
          </div>
        </section>
        <div className="background-video">
          <video
            className="video"
            src={video}
            autoPlay
            muted
            loop
            type="video/mp4"
          ></video>
        </div>
        <section className="about-section-home6">
          <div className="container">
            <div className="row">
              {dataLoading ? (
                cardData.map((item) => (
                  <div className="col-xl-4 col-md-6" key={item.id}>
                    <div className="pbmit-ihbox-style-8">
                      <div className="pbmit-ihbox-box">
                        <div className="pbmit-ihbox-contents">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-image">
                              <img
                                src={item.imageUrl}
                                className="img-fluid-service"
                                alt="web-service"
                              />
                            </div>
                          </div>
                          <h2 className="pbmit-element-title">{item.name}</h2>
                          <div className="pbmit-heading-desc">
                            <span>{item.category.category1}</span>
                            <br />
                            <span>{item.category.category2}.</span>
                            <br />
                            <span>{item.category.category3}</span>
                          </div>
                          <div className="pbmit-ihbox-btn">
                            <Link to={item.link}>
                              <span>Читати більше</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </section>

        <section className="web-section">
          <div className="container">
            <div className="row align-items-center align-content-center">
              <div className="col-xl-6 col-md-12 agency-right-section-home6">
                <div className="pbmit-heading-subheading-style-6">
                  <h4 className="pbmit-subtitle">
                    Створюйте нове з OptionFlow
                  </h4>
                  <h2 className="pbmit-title">Розробка під ключ</h2>
                </div>
                <div className="mb-4">
                  Завдяки нашим спеціалістам - ваш проєкт буде реалізовано від
                  ідеї до готового продукту. Вам не потрібно шукати команди
                  окремо під кожну частину проєкту!
                </div>
              </div>
            </div>
            <div className="sub-section">
              {serviceItemSection[0].slice(0, 2).map((item) => (
                <div className="pbmit-ihbox-style-9">
                  <div className="pbmit-ihbox-box d-flex align-items-center">
                    <div className="pbmit-ihbox-icon">
                      <div className="pbmit-ihbox-icon-wrapper">
                        <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                          <i className={`pbmit-xido-icon ${item.icon}`}></i>
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-ihbox-contents">
                      <h2 className="pbmit-element-title">{item.title}</h2>
                      <div className="pbmit-heading-desc">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="sub-section">
              {serviceItemSection[0].slice(2, 4).map((item) => (
                <div className="pbmit-ihbox-style-9">
                  <div className="pbmit-ihbox-box d-flex align-items-center">
                    <div className="pbmit-ihbox-icon">
                      <div className="pbmit-ihbox-icon-wrapper">
                        <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                          <i className={`pbmit-xido-icon ${item.icon}`}></i>
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-ihbox-contents">
                      <h2 className="pbmit-element-title">{item.title}</h2>
                      <div className="pbmit-heading-desc">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-lg pbmit-bg-color-secondary service-section-home6">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="pbmit-heading-subheading text-white">
                  <h4 className="pbmit-subtitle">Що ми вміємо?</h4>
                  <h2 className="pbmit-title">Наші послуги</h2>
                </div>
              </div>
            </div>

            <div>
              {dataLoading ? (
                <SliderComponent sliderData={servicesData} />
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </section>
        <TabContent tabData={tabData} />
        <section className="section-lg">
          <div className="container">
            <div className="row g-0">
              <div className="col-xl-5 col-md-12 p-0">
                <div className="pbmit-heading-subheading-style-6">
                  <h4 className="pbmit-subtitle">ОСТАННІ ПУБЛІКАЦІЇ</h4>
                  <h2 className="pbmit-title">
                    Що нового?
                    <br />
                    Наш блог та новини
                  </h2>
                </div>
                <Link
                  to="/blog"
                  className="pbmit-btn pbmit-btn-hover-secondary"
                >
                  ДИВИТИСЬ ВСІ
                </Link>
              </div>
              <div className="col-xl-7 col-md-12 p-0">
                <article className="pbmit-blog-style-5 col-md-12">
                  {blogData ? (
                    blogData.map((blogItem) => (
                      <div className="post-item" key={blogItem.id.toString()}>
                        <div className="pbminfotech-box-content">
                          <div className="pbmit-meta-container">
                            <span className="pbmit-date-wrapper">
                              <span className="pbmit-post-date pbmit-meta-line">
                                {blogItem.dateCreate}
                              </span>
                            </span>
                          </div>
                          <div className="pbmit-content-wrapper">
                            <h3 className="pbmit-post-title">
                              <Link to={`/blog-single/${blogItem.id}`}>
                                {blogItem.title}
                              </Link>
                            </h3>
                          </div>
                          <div className="pbmit-read-more-link">
                            <Link to={`/blog-single/${blogItem.id}`}>
                              <span className="pbmit-arrow"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <Loader />
                  )}
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
