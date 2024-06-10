import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logoWhite from "../../Images/logo-white.svg";
import CustomLink from "./CustomLink";

const Header = () => {
  const location = useLocation();
  const [aboutSectionOpened, setAboutSerctionOpened] = useState(false);
  const [headerSticky, setHeaderSticky] = useState(false);
  const headerRef = useRef(null);

  const OnAboutOpened = () => {
    setAboutSerctionOpened(true);
  };

  const OffAboutOpened = () => {
    setAboutSerctionOpened(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderSticky(!entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    const currentHeader = headerRef.current;

    if (currentHeader) {
      observer.observe(currentHeader);
    }

    return () => {
      if (currentHeader) {
        observer.unobserve(currentHeader);
      }
    };
  }, []);

  return (
    <div
      className={headerSticky ? "header-wrapper-sticky" : "header-wrapper"}
      ref={headerRef}
    >
      <header className={headerSticky ? "sticky-site-header" : "site-header"}>
        {location.pathname === "/" ? (
          <div className={headerSticky ? "hidden-contact" : "contact-info"}>
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
          </div>
        ) : null}
        <div className="site-navbar">
          <div className="navbar-wrapper">
            <div className="site-branding">
              <Link to="/">
                <img className="logo-img" alt="coworking" src={logoWhite} />
              </Link>
            </div>
            <div className="navbar-header">
              <button className="navbar-toggler" type="button">
                <i className="pbmit-base-icon-menu-1"></i>
              </button>
            </div>
            <div className="navbar-menu">
              <ul className="navigation">
                <li>
                  <CustomLink propsHref={"/"} propsText={"Головна"} />
                </li>
                <li>
                  <CustomLink propsHref={"/service"} propsText={"Послуги"} />
                </li>
                <li>
                  <CustomLink
                    propsHref={"/portfolio"}
                    propsText={"Портфоліо"}
                  />
                </li>
                <li>
                  <CustomLink propsHref={"/blog"} propsText={"Блог"} />
                </li>
                <li className="">
                  <CustomLink propsHref={"/career"} propsText={"Карьера"} />
                </li>
                <li
                  className="dropdown"
                  onMouseEnter={OnAboutOpened}
                  onMouseLeave={OffAboutOpened}
                >
                  <CustomLink propsHref={"/about"} propsText={"Тощо"} />
                  {aboutSectionOpened ? (
                    <div className="about-section-wrapper">
                      <ul className="about-section">
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
                          <CustomLink propsHref={"/faq"} propsText={"Faq"} />
                        </li>
                      </ul>
                    </div>
                  ) : null}
                </li>
                <li>
                  <CustomLink propsHref={"/contacts"} propsText={"Контакти"} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
