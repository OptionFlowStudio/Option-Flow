import axios from "axios";
import React, { useState } from "react";

const FooterEmailForm = () => {
  const [formEmail, setFormEmail] = useState("");

  const EmailSubscription = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.optionflow.pro/api/Main/SubscribeToNewsletter",
        {
          email: formEmail,
        }
      );
      setFormEmail("");
    } catch (error) {
      console.log("got error", error);
    }
  };
  return (
    <form className="pbmit-footer-newsletter" onSubmit={EmailSubscription}>
      <input
        type="email"
        name="EMAIL"
        placeholder="Додайте вашу пошту"
        onChange={(e) => setFormEmail(e.target.value)}
        value={formEmail}
      />
      {formEmail ? (
        <button id="sendButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 664 663"
          >
            <path
              fill="none"
              d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
            ></path>
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="33.67"
              stroke="#6c6c6c"
              d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
            ></path>
          </svg>
        </button>
      ) : (
        <i className="pbmit-base-icon-arroba email-icon"></i>
      )}
    </form>
  );
};

export default FooterEmailForm;
