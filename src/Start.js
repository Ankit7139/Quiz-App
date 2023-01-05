import React from "react";

export const Start = (props) => {
  return (
    <div className="start">
      <h1>Quizzical</h1>
      <p>some description if needed</p>
      <button className="start--button" onClick={props.onClick}>
        Start Quiz
      </button>
    </div>
  );
};
