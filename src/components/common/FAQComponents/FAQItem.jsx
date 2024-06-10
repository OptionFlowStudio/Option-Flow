import React from "react";

const FAQItem = React.memo(({ index, question, answer, isOpen, onClick }) => {
  return (
    <div
      className={isOpen ? "accordion-item active" : "accordion-item"}
      onClick={() => onClick(index)}
    >
      <h2 className="accordion-header" id="headingOne">
        <button
          className={
            isOpen ? "accordion-button " : "accordion-button collapsed"
          }
          type="button"
        >
          {question}
        </button>
      </h2>
      <div
        className={
          isOpen ? "accordion-collapse" : "accordion-collapse collapse"
        }
      >
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
});

export default FAQItem;
