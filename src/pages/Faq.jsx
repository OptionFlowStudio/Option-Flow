import React, { useCallback, useEffect, useState } from "react";
import FAQItem from "../components/common/FAQComponents/FAQItem";
import FetchModule from "../components/module/FetchModule";
import Loader from "../animation/Loader";

const Faq = () => {
  const [faqData, setFaqData] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const faqLink = "https://api.optionflow.pro/api/Main/FAQ";
  useEffect(() => {
    FetchModule(setFaqData, undefined, faqLink);
  }, []);

  const handleOpenQuestion = useCallback((index) => {
    setOpenIndex((prevOpenIndex) => (prevOpenIndex === index ? null : index));
  }, []);

  return (
    <div className="page-wrapper">
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">FAQ</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="section-lgt section-faq">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="pbmit-heading-subheading text-center">
                  <h2 className="pbmit-title">Часті запитання</h2>
                  <h4 className="pbmit-subtitle-white">ПОШИРЕНІ ЗАПИТАННЯ</h4>
                </div>
              </div>
            </div>
            {faqData ? (
              <div className="row">
                <div className="col-md-6">
                  <div className="accordion accordion-style-3">
                    {faqData.slice(0, 3).map((item, index) => (
                      <FAQItem
                        question={item.question}
                        answer={item.answer}
                        key={index + "first"}
                        index={index + "first"}
                        isOpen={index + "first" === openIndex}
                        onClick={handleOpenQuestion}
                      />
                    ))}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="accordion accordion-style-3">
                    {faqData.slice(3, 6).map((item, index) => (
                      <FAQItem
                        question={item.question}
                        answer={item.answer}
                        key={index + "second"}
                        index={index + "second"}
                        isOpen={index + "second" === openIndex}
                        onClick={handleOpenQuestion}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Loader />
            )}
          </div>
        </section>

        {faqData ? (
          <section className="section-lgx section-faq">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="pbmit-heading-subheading text-center">
                    <h4 className="pbmit-subtitle-white">ЗАГАЛЬНІ ПИТАННЯ</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="accordion accordion-style-3">
                    {faqData.slice(6).map((item, index) => (
                      <FAQItem
                        question={item.question}
                        answer={item.answer}
                        key={index + "third"}
                        index={index + "third"}
                        isOpen={index + "third" === openIndex}
                        onClick={handleOpenQuestion}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
};

export default Faq;
