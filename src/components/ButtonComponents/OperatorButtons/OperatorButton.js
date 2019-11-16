import React from "react";

const OperatorButton = props => {
  return (
    <button
      className="operator-button"
      onClick={() => props.addOperator(props.operatorText.value)}
    >
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operatorText.value}
    </button>
  );
};

export default OperatorButton;
