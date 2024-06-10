import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logoWhite from "../../Images/logo-white.svg";
import CustomLink from "./CustomLink";
import { DataContext } from "../../Context/DataContext";

const Navbar = () => {
  const location = useLocation();
  const { openedHeader, setHeaderOpened } = useContext(DataContext);
  // const [scrollWindow, setScrollWindow] = useState(0);
  const [headerSticky, setHeaderSticky] = useState(false);
  const [aboutSectionOpened, setAboutSerctionOpened] = useState(false);
  const navbarRef = useRef(null);

  const toogleAboutOpened = () => {
    setAboutSerctionOpened(!aboutSectionOpened);
  };

  const toogleOpenNav = () => {
    setHeaderOpened(!openedHeader);
    setAboutSerctionOpened(false);
  };

  document.body.style.overflow = openedHeader ? "hidden" : "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderSticky(!entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const currentHeader = navbarRef.current;

    if (currentHeader) {
      observer.observe(currentHeader);
    }

    return () => {
      if (currentHeader) {
        observer.unobserve(currentHeader);
      }
    };
  }, [location.pathname]);

  return (
    <div>
      {location.pathname === "/" ? (
        <header
          className={
            openedHeader
              ? "site-header header-style-6 active"
              : "site-header header-style-6"
          }
        >
          <div ref={navbarRef} className="pbmit-header-overlay">
            <div className="pre-header-wrapper">
              <div className="container">
                <div className="d-flex justify-content-between">
                  <div className="pbmit-pre-header-left">
                    <ul className="pbmit-contact-info">
                      <li>
                        <i className="pbmit-base-icon-phone-volume-solid"></i>
                        <Link to="tel: +38(099)7607669">
                          Телефон: <span>+38 (099) 760 76 69</span>
                        </Link>
                      </li>
                      <li>
                        <i className="pbmit-base-icon-mail-alt"></i>
                        <Link to="mailto:info@optionflow.pro">
                          Пошта: <span>info@optionflow.pro</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="pbmit-pre-header-right">
                    <ul className="pbmit-contact-info">
                      <li>
                        <ul className="pbmit-social-links">
                          <li className="pbmit-social-li pbmit-social-linkedin">
                            <Link
                              to="https://www.linkedin.com/company/optionflow/"
                              target="_blank"
                            >
                              <span>
                                <i className="pbmit-base-icon-linkedin-squared"></i>
                              </span>
                            </Link>
                          </li>
                          <li className="pbmit-social-li pbmit-social-instagram">
                            <Link
                              to="https://www.instagram.com/optionflow.pro?igsh=N2djbzNja3BmN3Bt"
                              target="_blank"
                            >
                              <span>
                                <i className="pbmit-base-icon-instagram"></i>
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                headerSticky
                  ? "site-header-menu sticky-header"
                  : "site-header-menu"
              }
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex align-items-center">
                      <div className="site-branding">
                        <Link to="/">
                          <img
                            className={
                              headerSticky ? "sticky-logo" : "logo-img"
                            }
                            alt="coworking"
                            src={logoWhite}
                          />
                        </Link>
                      </div>
                      <div className="site-navigation ms-auto">
                        <nav className="main-menu navbar-expand-xl navbar-light">
                          <div
                            className="navbar-header"
                            onClick={toogleOpenNav}
                          >
                            <button className="navbar-toggler" type="button">
                              <i className="pbmit-base-icon-menu-1"></i>
                            </button>
                          </div>
                          <div
                            className="pbmit-mobile-menu-bg"
                            onClick={toogleOpenNav}
                          ></div>
                          <div
                            className="collapse navbar-collapse clearfix show"
                            id="pbmit-menu"
                          >
                            <div className="pbmit-menu-wrap">
                              <span
                                className="closepanel"
                                onClick={toogleOpenNav}
                              >
                                <i className="pbmit-base-icon-close-circular-button-symbol"></i>
                              </span>
                              <ul className="navigation clearfix">
                                <li className="active">
                                  <CustomLink
                                    propsHref={"/"}
                                    propsText={"Головна"}
                                  />
                                </li>
                                <li className="">
                                  <CustomLink
                                    propsHref={"/service"}
                                    propsText={"Послуги"}
                                  />
                                </li>
                                <li className="">
                                  <CustomLink
                                    propsHref={"/portfolio"}
                                    propsText={"Портфоліо"}
                                  />
                                </li>
                                <li className="">
                                  <CustomLink
                                    propsHref={"/blog"}
                                    propsText={"Блог"}
                                  />
                                </li>
                                <li className="">
                                  <CustomLink
                                    propsHref={"/career"}
                                    propsText={"Кар’єра"}
                                  />
                                </li>
                                <li className="dropdown">
                                  <CustomLink
                                    propsHref={"/about"}
                                    propsText={"Тощо"}
                                  />
                                  <ul
                                    className={aboutSectionOpened ? "open" : ""}
                                  >
                                    <li>
                                      <CustomLink
                                        propsHref={"/about"}
                                        propsText={"Про нас"}
                                      />
                                    </li>
                                    <li>
                                      <CustomLink
                                        propsHref={"/our-history"}
                                        propsText={"Наша історія"}
                                      />
                                    </li>
                                    <li>
                                      <CustomLink
                                        propsHref={"/faq"}
                                        propsText={"Faq"}
                                      />
                                    </li>
                                  </ul>
                                  <span
                                    className="righticon"
                                    onClick={toogleAboutOpened}
                                  >
                                    <i
                                      className={
                                        aboutSectionOpened
                                          ? "pbmit-base-icon-up-open-big"
                                          : "pbmit-base-icon-down-open-big"
                                      }
                                    ></i>
                                  </span>
                                </li>
                                <li>
                                  <CustomLink
                                    propsHref={"/contacts"}
                                    propsText={"Контакти"}
                                  />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <header
          ref={navbarRef}
          className={
            openedHeader
              ? "site-header header-style-1 active"
              : "site-header header-style-1"
          }
        >
          {headerSticky ? (
            <div style={{ widows: "100%", height: "100px" }}></div>
          ) : null}
          <div
            className={
              headerSticky
                ? "site-header-menu sticky-header"
                : "site-header-menu"
            }
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="site-branding">
                      <Link to="/">
                        <img
                          className="logo-img"
                          alt="coworking"
                          src={logoWhite}
                        />
                      </Link>
                    </div>
                    <div className="site-navigation ml-auto">
                      <nav className="main-menu navbar-expand-xl navbar-light">
                        <div className="navbar-header" onClick={toogleOpenNav}>
                          <button className="navbar-toggler" type="button">
                            <i className="pbmit-base-icon-menu-1"></i>
                          </button>
                        </div>
                        <div
                          className="pbmit-mobile-menu-bg"
                          onClick={toogleOpenNav}
                        ></div>
                        <div
                          className="collapse navbar-collapse clearfix show"
                          id="pbmit-menu"
                        >
                          <div className="pbmit-menu-wrap">
                            <span
                              className="closepanel"
                              onClick={toogleOpenNav}
                            >
                              <i className="pbmit-base-icon-close-circular-button-symbol"></i>
                            </span>
                            <ul className="navigation clearfix">
                              <li className="">
                                <CustomLink
                                  propsHref={"/"}
                                  propsText={"Головна"}
                                />
                              </li>
                              <li
                                className={
                                  location.pathname.includes("/service")
                                    ? "active"
                                    : null
                                }
                              >
                                <CustomLink
                                  propsHref={"/service"}
                                  propsText={"Послуги"}
                                />
                              </li>
                              <li
                                className={
                                  location.pathname.includes("/portfolio")
                                    ? "active"
                                    : null
                                }
                              >
                                <CustomLink
                                  propsHref={"/portfolio"}
                                  propsText={"Портфоліо"}
                                />
                              </li>
                              <li
                                className={
                                  location.pathname.includes("/blog")
                                    ? "active"
                                    : null
                                }
                              >
                                <CustomLink
                                  propsHref={"/blog"}
                                  propsText={"Блог"}
                                />
                              </li>
                              <li
                                className={
                                  location.pathname.includes("/career")
                                    ? "active"
                                    : null
                                }
                              >
                                <CustomLink
                                  propsHref={"/career"}
                                  propsText={"Кар’єра"}
                                />
                              </li>
                              <li
                                className={`dropdown ${
                                  location.pathname === "/about" ||
                                  location.pathname === "/our-history" ||
                                  location.pathname === "/faq"
                                    ? "active"
                                    : null
                                }`}
                              >
                                <CustomLink
                                  propsHref={"/about"}
                                  propsText={"Тощо"}
                                />
                                <ul
                                  className={aboutSectionOpened ? "open" : ""}
                                >
                                  <li
                                    className={
                                      location.pathname === "/about"
                                        ? "active"
                                        : null
                                    }
                                  >
                                    <CustomLink
                                      propsHref={"/about"}
                                      propsText={"Про нас"}
                                    />
                                  </li>
                                  <li
                                    className={
                                      location.pathname === "/our-history"
                                        ? "active"
                                        : null
                                    }
                                  >
                                    <CustomLink
                                      propsHref={"/our-history"}
                                      propsText={"Наша історія"}
                                    />
                                  </li>
                                  <li
                                    className={
                                      location.pathname === "/faq"
                                        ? "active"
                                        : null
                                    }
                                  >
                                    <CustomLink
                                      propsHref={"/faq"}
                                      propsText={"Faq"}
                                    />
                                  </li>
                                </ul>
                                <span
                                  className="righticon"
                                  onClick={toogleAboutOpened}
                                >
                                  <i
                                    className={
                                      aboutSectionOpened
                                        ? "pbmit-base-icon-up-open-big"
                                        : "pbmit-base-icon-down-open-big"
                                    }
                                  ></i>
                                </span>
                              </li>
                              <li
                                className={
                                  location.pathname === "/contacts"
                                    ? "active"
                                    : null
                                }
                              >
                                <CustomLink
                                  propsHref={"/contacts"}
                                  propsText={"Контакти"}
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </nav>
                      <div className="pbmit-right-main-box">
                        <div className="pbmit-button-box">
                          <div className="pbmit-header-button2">
                            <CustomLink propsHref="/contacts">
                              <span className="pbmit-btn">Консультація</span>
                            </CustomLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </div>
  );
};

export default Navbar;
