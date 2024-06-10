import React from "react";
import { Link } from "react-router-dom";
import logoWhite from "../../Images/logo-white.svg";
import FooterEmailForm from "./FooterEmailForm";

const Footer = () => {
  return (
    <footer className="pbmit-bg-color-secondary footer-style-1 footer site-footer">
      <div className="footer-wrap pbmit-footer-big-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-9 col-sm-12">
              <h3>
                Не соромтесь звертатися до нас
                <br />З нетерпінням чекаємо можливості спілкування з вами!
              </h3>
              <Link to="mailto:info@optionflow.pro">info@optionflow.pro</Link>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="pbmit-footer-logo">
                <img className="img-fluid" src={logoWhite} alt="optionflow" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pbmit-footer-widget-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="widget">
                <h3 className="widget-title">Наша компанія</h3>
                <div className="textwidget">
                  <ul>
                    <li>
                      <Link to="/contacts">Контаки</Link>
                    </li>
                    <li>
                      <Link to="/blog">Блог</Link>
                    </li>
                    <li>
                      <Link to="/career">Кар’єра</Link>
                    </li>
                    <li>
                      <Link to="/about">Про нас</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="widget">
                <h3 className="widget-title">Потрібна підтримка?</h3>
                <div className="pbmit-footer-contact">
                  <div className="pbmit-footer-contact-info">
                    <div className="pbmit-content-box">Центр кліентів</div>
                    <div className="pbmit-contact-box">
                      <Link to="mailto:info@optionflow.pro">
                        info@optionflow.pro
                      </Link>
                    </div>
                  </div>
                  <div className="pbmit-footer-contact-info">
                    <div className="pbmit-content-box">
                      Потрібна жива підтримка?
                    </div>
                    <div className="pbmit-contact-box">
                      <Link to="tel:+38 (099) 760 76 69">
                        +38 (099) 760 76 69
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="widget">
                <h3 className="widget-title">Розсилка Новин</h3>
                <div className="mc4wp-form-fields">
                  {/* <div className="pbmit-footer-newsletter">
                    <input
                      type="email"
                      name="EMAIL"
                      placeholder="Додайте вашу пошту"
                    />
                    <button type="submit" value="Sign up">
                      <i className="pbmit-base-icon-arroba"></i>
                    </button>
                  </div> */}
                  <FooterEmailForm />
                  Наші знання, досвід і пристрасть до веб-дизайну вирізняють нас
                  серед інших агентств.
                </div>
                <ul className="pbmit-social-links">
                  <li className="pbmit-social-li pbmit-social-linkedin">
                    <a
                      href="https://www.linkedin.com/company/optionflow/"
                      target="_blank"
                    >
                      <span>
                        <i className="pbmit-base-icon-linkedin-squared"></i>
                      </span>
                    </a>
                  </li>
                  <li className="pbmit-social-li pbmit-social-instagram">
                    <a
                      href="https://www.instagram.com/optionflow.pro?igsh=N2djbzNja3BmN3Bt"
                      target="_blank"
                      rel="noopener"
                    >
                      <span>
                        <i className="pbmit-base-icon-instagram"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pbmit-footer-bottom">
        <div className="container">
          <div className="pbmit-footer-text-inner">
            <div className="row">
              <div className="col-md-6">
                <div className="pbmit-footer-copyright-text-area">
                  Copyright © 2024 <Link to="/">OptionFlow</Link>, All Rights
                  Reserved.
                </div>
              </div>
              <div className="col-md-6">
                <div className="pbmit-footer-menu-area">
                  <div className="menu-copyright-menu-container">
                    <ul className="pbmit-footer-menu">
                      <li className="menu-item">
                        <Link to="#">Privacy Policy</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/contacts">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
