import React from "react";
import neuron from "../Images/neuron.svg";

const BigAnimation = ({ propsClassName }) => {
  return (
    <div className={`custom-animation-block ${propsClassName}`}>
      <div className="animation-wrap">
        <div className="img-wrap">
          <img src={neuron} alt="" />
        </div>
        <div className="animation-text">
          <h3 className="first-text">option</h3>
          <h3 className="second-text">flow</h3>
        </div>
      </div>
    </div>
  );
};

export default BigAnimation;
