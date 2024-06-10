import React from "react";

const NotFoundPage = () => {
  return (
    <div className="page-wrapper">
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">404</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content ">
        <section className="section-lg">
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "400px",
                color: "white",
              }}
            >
              <h3>{"Такої стрінки не існує :("}</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NotFoundPage;
