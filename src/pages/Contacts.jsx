import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Contacts = () => {
  const initialState = {
    contact: {
      id: 0,
      name: "",
      email: "",
      mobile: "",
      description: "",
    },
  };

  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const newErrors = {};

    const FormSended = async () => {
      try {
        const response = await axios.post(
          "https://api.optionflow.pro/api/Main/Contact",
          data
        );
        localStorage.setItem(`formSended`, true);
      } catch (error) {
        console.log("We got Error", error);
      }
      setData(initialState);
    };

    if (!validateName(data.contact.name)) {
      newErrors.name = "Будь ласка, введіть коректне ім'я.";
    }

    if (!validatePhone(data.contact.mobile)) {
      newErrors.mobile = "Будь ласка, введіть коректний номер телефону.";
    }

    if (!validateEmail(data.contact.email)) {
      newErrors.email = "Будь ласка, введіть коректну електронну адресу.";
    }

    if (Object.keys(newErrors).length === 0) {
      FormSended();
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
    return nameRegex.test(name);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      contact: {
        ...prevData.contact,
        [name]: value,
      },
    }));
  };

  return (
    <div className="page-wrapper">
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">Контакти</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="contact-section-home1">
          <div className="container">
            <div className="section-lg">
              <div className="row">
                <div className="col-md-5">
                  <div className="pbmit-heading-subheading">
                    <h4 className="pbmit-subtitle-white">Зв'язатися З Нами</h4>
                    <h2 className="pbmit-title">
                      Просто зв'яжіться з нашими експертами
                    </h2>
                    <div className="mt-2 mt-2-subtitle">
                      Нам довіряють наші клієнти
                    </div>
                  </div>
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
                <div className="col-md-7">
                  <form
                    className="contact-left-section contact-form"
                    method="post"
                    id="contact-form"
                    onSubmit={handleSubmitForm}
                  >
                    <div className="row">
                      <div className="col-lg-12 col-ms-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Повне ім'я"
                          name="name"
                          required={true}
                          value={data.contact.name}
                          onChange={handleChange}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email адрес"
                          name="email"
                          required={true}
                          value={data.contact.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <p className="error">{errors.email}</p>
                        )}
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Мобільний"
                          name="mobile"
                          required={true}
                          value={data.contact.mobile}
                          onChange={handleChange}
                        />
                        {errors.mobile && (
                          <p className="error">{errors.mobile}</p>
                        )}
                      </div>
                      <div className="col-lg-12 col-sm-12">
                        <textarea
                          className="form-control"
                          name="description"
                          rows="4"
                          minLength={5}
                          placeholder="Напишіть повідомлення"
                          required={true}
                          value={data.contact.description}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="col-lg-12 col-sm-12">
                        <button
                          type="submit"
                          className="pbmit-btn pbmit-btn-hover-secondary"
                        >
                          <i className="form-btn-loader fa fa-circle-o-notch fa-spin fa-fw margin-bottom d-none"></i>
                          Відправити
                        </button>

                        {localStorage.getItem("formSended") ? (
                          <span className="message-status">
                            Заявку отримано!
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="contact-section-home1-bottom">
              <div className="row">
                <div className="col-md-4">
                  <div className="pbmit-ihbox-style-20">
                    <div className="pbmit-ihbox-box d-flex align-items-center">
                      <Link
                        to="mailto:info@optionflow.pro"
                        className="about-us-email-widget"
                      >
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                              <i className="pbmit-xido-icon-email"></i>
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-ihbox-contents">
                          <div className="pbmit-heading-desc">
                            Відправити пошту
                          </div>
                          <h2 className="pbmit-element-title">
                            info@optionflow.pro
                          </h2>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="pbmit-ihbox-style-20">
                    <div className="pbmit-ihbox-box d-flex align-items-center">
                      <Link
                        to="tel: +38(099)7607669"
                        className="about-us-email-widget"
                      >
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                              <i className="pbmit-xido-icon pbmit-xido-icon-call"></i>
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-ihbox-contents">
                          <div className="pbmit-heading-desc">
                            Телефонуйте у будь-який час
                          </div>
                          <h2 className="pbmit-element-title">
                            +38 (099) 760 76 69
                          </h2>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacts;
